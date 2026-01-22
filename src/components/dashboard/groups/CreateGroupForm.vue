<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useGroupsStore } from '@/stores/groups';

const router = useRouter();
// Access the groups store to create new groups.
const groupsStore = useGroupsStore();

// Reactive form state to hold the input values for creating a new group.
const formState = ref({
  groupName: '',
  budget: 50, // Default budget.
  dueDate: '',
  rules: '',
});

// Load saved draft data from localStorage when the component is initialized.
const savedDraft = localStorage.getItem('groupFormDraft');
if (savedDraft) {
  // If a draft exists, parse it and assign it to the formState.
  formState.value = JSON.parse(savedDraft);
}

// Watcher: Automatically saves the form's current state to localStorage whenever `formState` changes.
// This provides a basic auto-save draft functionality.
watch(formState, (newFormState) => {
  console.log('Form data changed, saving draft to localStorage');
  // Stringify the reactive object to store it in localStorage.
  localStorage.setItem('groupFormDraft', JSON.stringify(newFormState));
},
  { deep: true }); // `deep: true` is crucial for watching changes within nested properties of `formState`.

// Handles the form submission for creating a new group.
const handleSubmit = async () => {
  // Call the `createGroup` action from the Pinia store with the current form data.
  await groupsStore.createGroup(formState.value);

  // After successful group creation, remove the saved draft from localStorage.
  localStorage.removeItem('groupFormDraft');
  // Navigate the user to the groups listing page.
  router.push('/groups')
}
</script>

<template>
  <div class="max-w-2xl mx-auto px-4 py-12">
    <form
class="bg-white rounded-xl 
      shadow-lg p-8" @submit.prevent="handleSubmit">
      <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">
        Create Group
      </h1>
      <h3 class="text-lg text-gray-600 mb-8 text-center">
        Fill in the details below
      </h3>

      <div class="space-y-5">
        <div>
          <label
for="groupName" class="block text-sm font-medium 
      text-gray-700 mb-2">Group Name</label>
          <input
id="groupName" v-model="formState.groupName" type="text" placeholder="Group Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
      transition-all" required>
          <!-- Removed v-if="nameError" as nameError is not defined -->
        </div>

        <div>
          <label
for="dueDate" class="block text-sm font-medium 
      text-gray-700 mb-2">Due Date</label>
          <input
id="dueDate" v-model="formState.dueDate" type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
      transition-all" required>
        </div>

        <div>
          <label
for="budget" class="block text-sm font-medium text-gray-7
      mb-2">Budget</label>
          <input
id="budget" v-model="formState.budget" type="number" placeholder="Budget (e.g., 50)" class="w-full px-4 py-2 border border-gray-300 rounded-lg
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
          transition-all" required>
        </div>

        <div>
          <label
for="rules" class="block text-sm font-medium text-gray-70
      mb-2">Rules</label>
          <textarea
id="rules" v-model="formState.rules" placeholder="Group rules and guidelines..." rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
      transition-all resize-none"></textarea>
        </div>
        <button
type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white
      font-semibold px-6 py-3 rounded-lg transition-colors shadow-md
      hover:shadow-lg mt-4">
          Create Group
        </button>
      </div>
    </form>
  </div>

</template>

<style></style>
