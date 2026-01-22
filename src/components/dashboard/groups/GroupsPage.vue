<script setup>
import GroupCard from "./GroupCard.vue";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useGroupsStore } from "@/stores/groups";

const router = useRouter();
// Access the groups store to manage group-related state.
const groupsStore = useGroupsStore();

// Fetch groups when the component is mounted.
groupsStore.fetchGroups();

// Reactive reference for the search input field.
const searchQuery = ref('');

// Computed property: Filters the list of groups based on the search query.
const filteredGroups = computed(() => {
  if (!searchQuery.value) {
    // If no search query, return all groups.
    return groupsStore.groups;
  }
  // Filter groups whose names include the search query (case-insensitive).
  return groupsStore.groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Navigation function to the create/join group information page.
const navigateToCreateJoinGroup = () => {
  router.push("/create-group-info");
};
// Navigation function to the join group page.
const navigateToJoinGroup = () => {
  router.push("/join-group");
};
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
      My Groups ({{ groupsStore.activeGroups.length }} active)
    </h1>
    <input
v-model="searchQuery" type="text" placeholder="Search Groups..."
      class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <GroupCard
v-for="group in filteredGroups" :key="group.id" :group-id="group.id" :group-name="group.name"
        :due-date="group.dueDate" :budget="group.budget" :rules="group.rules" />
    </div>

    <div class="flex justify-center gap-4">
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
        @click="navigateToCreateJoinGroup">
        Create Group
      </button>
      <button
        class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
        @click="navigateToJoinGroup">
        Join Group
      </button>
    </div>
  </div>
</template>

<style></style>
