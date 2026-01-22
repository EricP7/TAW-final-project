<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import ActionButton from '../ActionButton.vue';

// Define custom events that this component can emit.
const emit = defineEmits(['loginSuccess', 'loginError']);

// Reactive references for the email and password input fields.
const email = ref('');
const password = ref('');

const router = useRouter();

// Navigates to the sign-up page.
const navigateToSignUp = () => {
  router.push("/sign-up");
}

// Navigates to the reset password page.
const navigateToResetPassword = () => {
  router.push("/reset-password");
}

// Handles the sign-in process when the form is submitted.
const handleSignIn = () => {
  // 1. Basic Validation: Ensure both email and password fields are not empty.
  if (!email.value.trim() || !password.value.trim()) {
    emit('loginError', 'Please enter both email and password.');
    return;
  }

  // 2. Simulate Login (in a real application, this would involve an API call to authenticate the user).
  try {
    const userData = {
      email: email.value,
    };

    // Emit a success event with the user data.
    emit('loginSuccess', userData);

    // Clear the form fields and navigate to the dashboard upon successful simulated login.
    email.value = '';
    password.value = '';
    router.push("/dashboard");

  } catch (error) {
    // If an error occurs during the simulated login, emit an error event.
    emit('loginError', error.message);
  }
}

</script>

<template>
  <div class="max-w-md mx-auto px-4 py-16">
    <div class="bg-white rounded-xl shadow-lg p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">
        Sign In
      </h1>
      <p class="text-gray-600 mb-8 text-center">
        Welcome back!
      </p>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
v-model="email" type="email" placeholder="Enter Email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
v-model="password" type="password" placeholder="Enter Password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
        </div>

        <div class="mt-6">
          <ActionButton text="Sign In" @button-click="handleSignIn" />
        </div>

        <div class="flex flex-col space-y-3 mt-6 pt-6 border-t border-gray-200">
          <button
            class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-2 rounded-lg transition-colors"
            @click="navigateToSignUp">
            Create Account
          </button>
          <button
class="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            @click="navigateToResetPassword">
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
