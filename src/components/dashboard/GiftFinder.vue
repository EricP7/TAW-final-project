<script setup>
import { computed } from 'vue';
import { useGiftsStore } from '@/stores/gifts';

// Access the gifts store to manage gift-related state.
const giftsStore = useGiftsStore();

// Fetch the list of gifts when the component is set up.
giftsStore.fetchGifts();

// Computed property to create a summary text based on the number of filtered gifts.
const summaryText = computed(() => {
  const count = giftsStore.filteredGifts.length;
  if (count === 0) {
    return 'No gifts found matching your criteria.';
  }
  // Provides a grammatically correct summary.
  return `Found ${count} ${count === 1 ? 'gift' : 'gifts'} matching your criteria.`;
});
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
      Gift Finder
    </h1>

    <div class="bg-white rounded-xl shadow-md p-6">
      <p class="text-lg text-gray-700 text-center italic">
        {{ summaryText }}
      </p>

      <ul class="space-y-4">
        <li
v-for="gift in giftsStore.filteredGifts" :key="gift.id"
          class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <p class="font-semibold text-gray-800">{{ gift.name }}</p>
          <p class="font-bold text-lg text-blue-600">${{ gift.price }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>