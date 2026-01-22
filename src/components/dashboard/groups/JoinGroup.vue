<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

// Define custom events that this component can emit.
const emit = defineEmits(['groupJoined', 'joinError']);
// Reactive reference for the invite code input field.
const inviteCode = ref('');
const router = useRouter();

// Handles the action of joining a group.
const handleJoinGroup = () => {
  // 1. Validation: Check if the invite code field is empty.
  if (!inviteCode.value.trim()) {
    emit('joinError', 'Please enter an invite code.');
    return;
  }

  // Emit an event indicating that a group has been joined with the provided invite code.
  emit('groupJoined', inviteCode.value);

  // Clear the input field after attempting to join the group.
  inviteCode.value = '';
  // Navigate to the groups page after the action.
  router.push("/groups");
};

</script>

<template>
  <div class="max-w-md mx-auto px-4 py-16">
    <div class="bg-white rounded-xl shadow-lg p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">
        Join Group
      </h1>
      <h3 class="text-lg text-gray-600 mb-8 text-center">
        Enter your group code below
      </h3>

      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Group Code</label>
          <input
v-model="inviteCode" type="text" placeholder="Enter invite code"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all">
        </div>

        <button
          class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          @click="handleJoinGroup">
          Join Group
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
