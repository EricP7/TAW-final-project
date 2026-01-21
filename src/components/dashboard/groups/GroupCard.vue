<script setup>

import { useRouter } from "vue-router";

// const groupName = ref("name");
// const dueDate = ref("10.12.2025");
// const budget = ref("30$");
// const rules = ref("some rules here");

const props = defineProps({
  groupId: { type: String, required: true },
  groupName: { type: String, required: true },
  dueDate: { type: String, required: true },
  budget: { type: String, required: true },
  rules: { type: String, required: false, default: "" },
});

const router = useRouter();

const navigateToGroupDetails = () => {
  router.push(`/group-details/${props.groupId}`);
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
    <h3 class="text-2xl font-bold text-gray-900 mb-4">
      {{ props.groupName }}
    </h3>

    <div class="space-y-2 mb-6">
      <div class="flex items-center text-gray-700">
        <span class="font-medium mr-2">Due Date:</span>
        <span>{{ props.dueDate }}</span>
      </div>
      <div class="flex items-center text-gray-700">
        <span class="font-medium mr-2">Budget:</span>
        <span>{{ props.budget }}</span>
      </div>
      <div class="flex items-start text-gray-700">
        <span class="font-medium mr-2">Rules:</span>
        <span>{{ props.rules }}</span>
      </div>
    </div>

    <p class="text-sm text-gray-500 mb-4 italic">
      data from the database here
    </p>

    <button
class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
      @click="navigateToGroupDetails">
      Group Details
    </button>
  </div>
</template>

<style></style>
