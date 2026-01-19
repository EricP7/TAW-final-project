<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['groupCreated', 'inviteParticipants']);

const groupName = ref('');
const dueDate = ref('');
const budget = ref(0);
const rules = ref('');

const nameError = ref('');

// Watch for group name changes to perform real-time validation
watch(groupName, (newValue) => {
  if (newValue.length > 0 && newValue.length < 3) {
    nameError.value = 'Group name must be at least 3 characters long.';
  } else if (newValue.length > 50) {
    nameError.value = 'Group name cannot exceed 50 characters.';
  } else {
    nameError.value = '';
  }
})

// Watch all form fields to auto-save the draft to localStorage
watch([groupName, dueDate, budget, rules],
  (value) => {
    const [name, date, budgetVal, rulesVal] = value;
    localStorage.setItem('draftGroup', JSON.stringify({
      name: name,
      dueDate: date,
      budget: budgetVal,
      rules: rulesVal,
    }));
    console.log('Draft group saved to localStorage'); // For testing
  }
)

// Handle create group
const handleCreateGroup = () => {
  const groupData = {
    name: groupName.value,
    dueDate: dueDate.value,
    budget: budget.value,
    rules: rules.value,
  };
  emit('groupCreated', groupData);

  // Clear form fields
  groupName.value = '';
  dueDate.value = '';
  budget.value = '';
  rules.value = '';

};

// Handle invite
const handleInvite = () => {
  emit('inviteParticipants');
}
</script>

<template>
  <div class="max-w-2xl mx-auto px-4 py-12">
    <div class="bg-white rounded-xl shadow-lg p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">
        Create Group
      </h1>
      <h3 class="text-lg text-gray-600 mb-8 text-center">
        Fill in the details below
      </h3>

      <div class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Group Name</label>
          <input v-model="groupName" type="text" placeholder="Group Name"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
          <p v-if="nameError" class="text-red-500 text-sm mt-1">{{ nameError }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
          <input v-model="dueDate" type="date"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Budget</label>
          <input v-model="budget" type="text" placeholder="Budget (e.g., $30)"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Rules</label>
          <textarea v-model="rules" placeholder="Group rules and guidelines..." rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" />
        </div>

        <button
          class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
          @click="handleInvite">
          Invite Participants
        </button>

        <button
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg mt-4"
          @click="handleCreateGroup">
          Create Group
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
