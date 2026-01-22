import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useWishlistStore = defineStore("wishlist", () => {
    const items = ref([]);

    // GETTER 6: Total items
    // Returns the total number of items in the wishlist.
    const totalItems = computed(() => items.value.length);

    // GETTER 7: Total value
    // Calculates the total monetary value of all items in the wishlist.
    const totalValue = computed(() => {
        return items.value.reduce((sum, item) => sum + item.price, 0);
    });

    // ACTION 8: Add item
    // Adds a new item to the wishlist.
    const addItem = (item) => {
        items.value.push({ id: Date.now(), ...item });
    };

    // ACTION 9: Remove item
    // Removes an item from the wishlist by its ID.
    const removeItem = ((itemId) => {
        items.value = items.value.filter((i) => i.id !== itemId);
    })

    return { items, totalItems, totalValue, addItem, removeItem };
})