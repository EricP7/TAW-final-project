<script setup>
import { ref, computed, watch } from 'vue';

const wishlistItems = ref([
  { id: 1, name: 'Smartwatch', price: 199.99, category: 'Electronics' },
  { id: 2, name: 'E-Reader', price: 129.00, category: 'Electronics' },
  { id: 3, name: 'Coffee Mug', price: 15.50, category: 'Home Goods' },
  { id: 4, name: 'Gaming Headset', price: 75.00, category: 'Electronics' },
  { id: 5, name: 'Scented Candle', price: 22.00, category: 'Home Goods' },
]);

const searchQuery = ref('');
const debouncedSearchQuery = ref('');

let debounceTimer = null;

// Debounce the search query to improve performance by waiting 300ms 
// after the user stops typing before updating the filter
watch(searchQuery, (newQuery) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debouncedSearchQuery.value = newQuery;
  }, 300);
});

const filteredWishlistItems = computed(() => {
  if (!debouncedSearchQuery.value) {
    return wishlistItems.value;
  }
  return wishlistItems.value.filter(item =>
    item.name.toLowerCase().includes(debouncedSearchQuery.value.toLowerCase())
  );
});

const totalItems = computed(() => { return wishlistItems.value.length; });

const totalValue = computed(() => {
  return wishlistItems.value.reduce((sum, item) => sum + item.price, 0);
});

const itemsByCategory = computed(() => {
  return wishlistItems.value.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
});
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
      Wishlist
    </h1>

    <div class="bg-white rounded-xl shadow-md p-6 mb-8">
      <div class="flex flex-wrap gap-4 items-center justify-between">
        <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors">
          Filters
        </button>

        <input v-model="searchQuery" type="text" placeholder="Search"
          class="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">

        <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors">
          Sort By
        </button>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-md p-12">
      <div class="bg-white rounded-xl shadow-md p-6 mt-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Items</h2>
        <ul v-if="filteredWishlistItems.length > 0" class="space-y-4">
          <li v-for="item in filteredWishlistItems" :key="item.id"
            class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p class="font-semibold text-gray-800">{{ item.name }}</p>
              <p class="text-sm text-gray-600">{{ item.category }}</p>
            </div>
            <p class="font-bold text-lg text-blue-600">${{ item.price.toFixed(2) }}</p>
          </li>
        </ul>
        <p v-else class="text-gray-500 text-center">No items match your search.</p>
      </div>

      <p>Total Items: {{ totalItems }}</p>
      <p>Total Value: ${{ totalValue.toFixed(2) }}</p>
      <p>Items by Category: {{ itemsByCategory }}</p>
    </div>
  </div>
</template>

<style></style>