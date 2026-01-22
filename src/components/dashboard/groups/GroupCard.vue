<script setup>

import { useRouter } from "vue-router";

// Define the properties (props) that this component accepts.
const props = defineProps({
  // Unique identifier for the group. Required.
  groupId: { type: String, required: true },
  // Name of the group. Required.
  groupName: { type: String, required: true },
  // Due date for the Secret Santa exchange. Required.
  dueDate: { type: String, required: true },
  // Budget for gifts in the group. Required.
  budget: { type: String, required: true },
  // Optional rules or guidelines for the group. Defaults to an empty string.
  rules: { type: String, required: false, default: "" },
});

const router = useRouter();

// Function to navigate to the detailed view of the current group.
const navigateToGroupDetails = () => {
  // Uses the `groupId` prop to construct the dynamic route.
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
