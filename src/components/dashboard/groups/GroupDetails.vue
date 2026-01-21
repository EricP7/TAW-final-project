<script setup>
import { useRoute } from "vue-router";
import { watch } from "vue";
import { useGroupsStore } from "@/stores/groups";

const route = useRoute();
const groupsStore = useGroupsStore();

groupsStore.fetchGroups();
// ui specific watcher
// it reacts to changes in the route's 'groupId' parameter
watch(
  () => route.params.groupId,
  (newId) => {
    if (newId) {
      // find the group in the store using the correct ID
      const foundGroup = groupsStore.groups.find(g => String(g.id) === newId);

      if (foundGroup) {
        groupsStore.currentGroup = foundGroup;
      } else {
        console.warn(`Group with ID ${newId} not found.`);
        groupsStore.currentGroup = null;
      }
    } else {
      groupsStore.currentGroup = null;
    }
  },
  { immediate: true }
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
