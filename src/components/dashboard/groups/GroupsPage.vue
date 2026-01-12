<script setup>
import GroupCard from "./GroupCard.vue";

import { useRouter } from "vue-router";

import { ref, computed } from "vue";

const groups = ref([
  { groupId: '1', groupName: 'Family Christmas', dueDate: '2026-12-25', budget: '50$', rules: 'Gifts must be handmade.' },
  { groupId: '2', groupName: 'Office Party', dueDate: '2025-12-20', budget: '25$', rules: 'gag gifts.' },
  { groupId: '3', groupName: 'Friends Gift Exchange', dueDate: '2026-11-15', budget: '30$', rules: 'Bring something fun!' }
]);
const searchQuery = ref('');

const filteredGroups = computed(() => {
  if (!searchQuery.value) {
    return groups.value;
  }
  return groups.value.filter(group =>
    group.groupName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const activeGroups = computed(() => {
  const now = new Date();
  return groups.value.filter(group => new Date(group.dueDate) >= now);
})

const groupCount = computed(() => {
  return activeGroups.value.length;
});

const router = useRouter();

const navigateToCreateJoinGroup = () => {
  router.push("/create-group-info");
};
const navigateToJoinGroup = () => {
  router.push("/join-group");
};
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
      My Groups ({{ groupCount + 1 }} active)
    </h1>
    <input v-model="searchQuery" type="text" placeholder="Search Groups..."
      class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

    <div class="mb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <GroupCard v-for="group in filteredGroups" :key="group.groupId" :group-id="group.groupId"
          :group-name="group.groupName" :due-date="group.dueDate" :budget="group.budget" :rules="group.rules" />
      </div>
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
