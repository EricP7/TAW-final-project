import { defineStore } from "pinia";

export const useGiftsStore = defineStore("gifts", {
    // State
    state: () => ({
        gifts: [],
        filters: { minPrice: 0, maxPrice: 1000 },
    }),

    // Getters
    getters: {
        // GETTER 10: Filtered gifts
        // Filters gifts based on the minimum and maximum price filters.
        filteredGifts(state) {
            return state.gifts.filter(
                (g) =>
                    g.price >= state.filters.minPrice &&
                    g.price <= state.filters.maxPrice
            );
        },
    },

    // Actions
    actions: {
        // ACTION 11: Fetch gifts
        // Fetches gifts from the server.
        // In a real application, this would make an API call.
        async fetchGifts() {
            // API call
            this.gifts = [
                { id: 1, name: "Gift 1", price: 25 },
                { id: 2, name: "Gift 2", price: 50 },
            ];
        },
        // ACTION 12: Update filters
        // Updates the price filters for gifts.
        updateFilters(newFilters) {
            this.filters = { ...this.filters, ...newFilters };
        },
    },
});