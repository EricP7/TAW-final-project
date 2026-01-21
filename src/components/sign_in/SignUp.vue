<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ActionButton from '../ActionButton.vue';

const emit = defineEmits(['signUpSuccess', 'signUpError']);

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const router = useRouter();

const handleSignUp = () => {
  // Validation
  if (!firstName.value.trim() || !lastName.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
    emit('signUpError', 'Please fill in all fields.');
    return;
  }

  // Check if passwords match
  if (password.value !== confirmPassword.value) {
    emit('signUpError', 'Passwords do not match.');
    return;
  }

  // Simulate signup (in real app, call API here)
  try {
    const userData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };

    emit('signUpSuccess', userData);

    // Clear form and navigate
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    router.push('/dashboard');
  } catch (error) {
    emit('signUpError', error.message);
  }
}
</script>

<template>
  <div class="max-w-md mx-auto px-4 py-16">
    <div class="bg-white rounded-xl shadow-lg p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">
        Create Account
      </h1>
      <p class="text-gray-600 mb-8 text-center">
        Join us today!
      </p>

      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
v-model="firstName" type="text" placeholder="First Name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
v-model="lastName" type="text" placeholder="Last Name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
v-model="email" type="email" placeholder="Email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
v-model="password" type="password" placeholder="Password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input
v-model="confirmPassword" type="password" placeholder="Confirm Password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
        </div>

        <div class="mt-6">
          <ActionButton text="Sign Up" @button-click="handleSignUp" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
