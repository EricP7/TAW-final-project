import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGiftsStore = defineStore("gifts", () => {
    const gifts = ref([]);
    const filters = ref({ minPrice: 0, maxPrice: 1000 });

    // GETTER 10: Filtered gifts
    // Filters gifts based on the minimum and maximum price filters.
    const filteredGifts = computed(() => {
        return gifts.value.filter(
            (g) =>
                g.price >= filters.value.minPrice &&
                g.price <= filters.value.maxPrice
        );
    });

    // ACTION 11: Fetch gifts
    // Fetches gifts from the server.
    // In a real application, this would make an API call.
    const fetchGifts = async () => {
        // API call
        gifts.value = [
            { id: 1, name: "Gift 1", price: 25 },
            { id: 2, name: "Gift 2", price: 50 },
        ];
    };

    // ACTION 12: Update filters
    // Updates the price filters for gifts.
    const updateFilters = (newFilters) => {
        filters.value = { ...filters.value, ...newFilters };
    };

    return { gifts, filters, filteredGifts, fetchGifts, updateFilters };
});