<script setup>
import { ref, computed, watch } from 'vue';
import { useWishlistStore } from '@/stores/wishlist';

const wishlistStore = useWishlistStore();

if (wishlistStore.items.length === 0) {
  wishlistStore.addItem({ name: 'Smartwatch', price: 199.99, category: 'Electronics' });
  wishlistStore.addItem({ name: 'Running Shoes', price: 89.99, category: 'Footwear' });
  wishlistStore.addItem({ name: 'Bluetooth Speaker', price: 49.99, category: 'Electronics' });
  wishlistStore.addItem({ name: 'Cookbook', price: 29.99, category: 'Books' });
}

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
    return wishlistStore.items;
  }
  return wishlistStore.items.filter(item =>
    item.name.toLowerCase().includes(debouncedSearchQuery.value.toLowerCase())
  );
});

const formattedTotalValue = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(wishlistStore.totalValue);
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
      Wishlist
    </h1>

    <!-- Search Input Block -->
    <div class="bg-white rounded-xl shadow-md p-6 mb-8">
      <input
v-model="searchQuery" type="text" placeholder="Search wishlist..." class="w-full px-4 py-2 border border-gray-300 rounded-lg 
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
      transition-all" />
    </div>

    <!-- Items List Block -->
    <div class="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Items</h2>
      <ul v-if="filteredWishlistItems.length > 0" class="space-y-4">
        <li
v-for="item in filteredWishlistItems" :key="item.id" class="flex justify-between items-center p-3 bg-gray-50 
      rounded-lg">
          <div>
            <p class="font-semibold text-gray-800">{{ item.name }}</p>
            <p class="text-sm text-gray-600">{{ item.category }}</p>
          </div>
          <p class="font-bold text-lg text-blue-600">
            ${{ item.price.toFixed(2) }}
          </p>
        </li>
      </ul>
      <p v-else class="text-gray-500 text-center">No items match your search.</p>
    </div>

    <!-- Summary Block -->
    <div class="bg-white rounded-xl shadow-md p-6 text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Summary</h2>
      <p class="text-lg text-gray-600">
        Total Items: <span class="font-semibold">{{ wishlistStore.totalItems }}</span>
      </p>
      <p class="text-lg text-gray-600">
        Total Value: <span class="font-semibold">{{ formattedTotalValue }}</span>
      </p>
    </div>
  </div>

</template>

<style></style>