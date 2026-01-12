<script setup>
import { useRouter } from "vue-router";

import { ref, computed } from 'vue';

const userStore = ref({
  activeGroups: [
    { id: '1', name: 'Family Christmas' },
    { id: '3', name: 'Friends Gift Exchange' }
  ],
  groups: [
    { id: '1', name: 'Family Christmas', drawnName: 'Alice' }, // Drawn
    { id: '2', name: 'Office Party', drawnName: null },      // Pending draw
    { id: '3', name: 'Friends Gift Exchange', drawnName: 'Bob' }    // Drawn
  ]
});

const activeGroupsCount = computed(() => { return userStore.value.activeGroups.length; });

const hasPendingDraws = computed(() => {
  return userStore.value.groups.some(group => group.drawnName === null);
})

const router = useRouter();

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
    <h3 class="text-lg text-gray-700 mb-8 text-center">
      <p>You are in {{ activeGroupsCount }} active groups</p>
      <p>There are {{ hasPendingDraws ? 'pending draws' : 'no pending draws' }}</p>
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
