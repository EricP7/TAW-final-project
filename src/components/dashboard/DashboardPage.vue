<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useGroupsStore } from "@/stores/groups";
import { useUserStore } from "@/stores/user";


// from pinia stores
const groupsStore = useGroupsStore();
const userStore = useUserStore();

// Fetch initial data for the dashboard
groupsStore.fetchGroups();
// For demonstration, log in a guest user. In a real app, this would be handled by a login page.
userStore.login("guest", "guestpassword");

// Computed property to generate a dynamic welcome message.
const welcomeMessage = computed(() => {
  if (userStore.isAuthenticated) {
    // If the user is authenticated, personalize the message.
    return `Welcome back, ${userStore.username}!`;
  }
  // Generic welcome message for unauthenticated users.
  return "Welcome!";
});

const router = useRouter();

// Navigation functions to move between different parts of the dashboard.
const navigateToMyGroups = () => {
  router.push("/groups");
};
const navigateToCreateJoinGroup = () => {
  router.push("/create-group-info");
};
const navigateToWishlist = () => {
  router.push("/wishlist");
};
const navigateToGiftFinder = () => {
  router.push("/gift-finder");
};
const navigateToFriendsList = () => {
  router.push("/friends");
};
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-12 text-center">
      Dashboard
    </h1>
    <h2 class="text-2xl text-gray-800 mb-4 text-center">
      {{ welcomeMessage }}
    </h2>
    <h3 class="text-lg text-gray-700 mb-8 text-center">
      <p>You are in {{ groupsStore.activeGroups.length }} active groups</p>
      <p>There are {{ groupsStore.hasPendingDraws ? 'pending draws' : 'no pending draws' }}</p>
    </h3>


    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border border-gray-100 hover:border-blue-300"
        @click="navigateToMyGroups">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          My Groups
        </h3>
        <p class="text-gray-600">
          View and manage your Secret Santa groups
        </p>
      </div>

      <div
        class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border border-gray-100 hover:border-blue-300"
        @click="navigateToCreateJoinGroup">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Create/Join Group
        </h3>
        <p class="text-gray-600">
          Start a new group or join an existing one
        </p>
      </div>

      <div
        class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border border-gray-100 hover:border-blue-300"
        @click="navigateToWishlist">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          My Wishlist
        </h3>
        <p class="text-gray-600">
          Manage your gift wishlist
        </p>
      </div>

      <div
        class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border border-gray-100 hover:border-blue-300"
        @click="navigateToGiftFinder">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Gift Finder
        </h3>
        <p class="text-gray-600">
          Find the perfect gift ideas
        </p>
      </div>

      <div
        class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border border-gray-100 hover:border-blue-300"
        @click="navigateToFriendsList">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          My Friends
        </h3>
        <p class="text-gray-600">
          Manage your friends list
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
