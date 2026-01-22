<script setup>
import { useRoute } from "vue-router";
import { watch } from "vue";
import { useGroupsStore } from "@/stores/groups";

const route = useRoute();
// Access the groups store to manage group-related state.
const groupsStore = useGroupsStore();

// Fetch all groups when the component is mounted to ensure the data is available.
groupsStore.fetchGroups();

// Watcher: Reacts to changes in the route's 'groupId' parameter.
// This is used to dynamically load and display details for the currently selected group.
watch(
  () => route.params.groupId, // The source to watch: the 'groupId' parameter from the current route.
  (newId) => { // Callback function executed when 'groupId' changes.
    if (newId) {
      // Find the group in the store's 'groups' array using the new ID.
      // The ID from route params is a string, so ensure type consistency with String(g.id).
      const foundGroup = groupsStore.groups.find(g => String(g.id) === newId);

      if (foundGroup) {
        // If a group is found, set it as the current group in the store.
        groupsStore.currentGroup = foundGroup;
      } else {
        // If no group is found, log a warning and clear the current group.
        console.warn(`Group with ID ${newId} not found.`);
        groupsStore.currentGroup = null;
      }
    } else {
      // If 'groupId' is not present in the route (e.g., navigating away), clear the current group.
      groupsStore.currentGroup = null;
    }
  },
  { immediate: true } // 'immediate: true' ensures the watcher runs immediately on component mount.
);
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
      Group Details
    </h1>

    <div
v-if="groupsStore.currentGroup" class="bg-white rounded-xl 
      shadow-md p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">{{
        groupsStore.currentGroup.name }}</h2>
      <p class="text-gray-600 mb-2"><strong>ID:</strong> {{
        groupsStore.currentGroup.id }}</p>
      <p class="text-gray-600 mb-2"><strong>Due Date:</strong> {{
        groupsStore.currentGroup.dueDate }}</p>
      <p class="text-gray-600 mb-2"><strong>Budget:</strong> ${{ groupsStore.currentGroup.budget }}</p>
      <p class="text-gray-600 mb-2"><strong>Status:</strong> {{
        groupsStore.currentGroup.drawn ? 'Drawn' : 'Pending Draw' }}</p>
      <p class="text-gray-600"><strong>Rules:</strong> {{
        groupsStore.currentGroup.rules }}</p>
    </div>
    <div v-else class="text-center text-gray-500">
      <p>Loading group details or group not found...</p>
    </div>
  </div>
</template>

<style></style>
