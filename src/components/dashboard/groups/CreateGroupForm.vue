<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useGroupsStore } from '@/stores/groups';

const router = useRouter();
const groupsStore = useGroupsStore();

const formState = ref({
  groupName: '',
  budget: 50,
  dueDate: '',
  rules: '',
});

// load saved data from localStorage when the component is first created
const savedDraft = localStorage.getItem('groupFormDraft');
if (savedDraft) {
  // directly assign to .value since formState is a ref
  formState.value = JSON.parse(savedDraft);
}

// ui specific watcher for auto-saving draft to localStorage
watch(formState, (newFormState) => {
  console.log('Form data changed, saving draft to localStorage');
  localStorage.setItem('groupFormDraft', JSON.stringify(newFormState));
},
  { deep: true }); // 'deep: true' to watch nested properties

const handleSubmit = async () => {
  await groupsStore.createGroup(formState.value);

  localStorage.removeItem('groupFormDraft');
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
