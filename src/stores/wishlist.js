import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
    // State
    state: () => ({
        items: [],
    }),

    // Getters
    getters: {
        // GETTER 6: Total items
        // Returns the total number of items in the wishlist.
        totalItems(state) {
            return state.items.length;
        },
        // GETTER 7: Total value
        // Calculates the total monetary value of all items in the wishlist.
        totalValue(state) {
            return state.items.reduce((sum, item) => sum + item.price, 0);
        },
    },

    // Actions
    actions: {
        // ACTION 8: Add item
        // Adds a new item to the wishlist.
        addItem(item) {
            this.items.push({ id: Date.now(), ...item });
        },
        // ACTION 9: Remove item
        // Removes an item from the wishlist by its ID.
        removeItem(itemId) {
            this.items = this.items.filter((i) => i.id !== itemId);
        },
    },
});