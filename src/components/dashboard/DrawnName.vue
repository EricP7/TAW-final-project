<script setup>

const props = defineProps({
  recipientName: { type: String, required: true },
  wishlistItems: { type: Array, default: () => [] },
  /*
  Each item in the wishlistItems array should be an object like:
  {
    id: 1,
    name: "Product Name",
    price: "$25",
    imageUrl: "https://...",
    link: "https://..."  // optional
  } 
  */
});
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <div class="bg-white rounded-xl shadow-lg p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4 text-center">
        Drawn Name
      </h1>
      <h3 class="text-xl text-blue-600 font-semibold mb-8 text-center">
        {{ props.recipientName }}
      </h3>

      <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
        <p class="text-lg font-semibold text-gray-900 mb-4">
          {{ props.recipientName }}'s Wishlist
        </p>
        <div class="bg-white rounded-lg p-8">
          <div v-if="wishlistItems.length > 0" class="grid grid-cols-2 gap-4">
            <div v-for="item in wishlistItems" :key="item.id" class="border border-gray-200 rounded-lg p-4">
              <p class="font-medium">{{ item.name }}</p>
              <p class="text-sm text-gray-500">{{ item.price }}</p>
            </div>
          </div>
          <div v-else class="text-gray-500 text-center">
            No wishlist items available.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
