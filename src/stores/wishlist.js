import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useWishlistStore = defineStore("wishlist", () => {
    const items = ref([]);

    // GETTER 6: Total items
    const totalItems = computed(() => items.value.length);

    // GETTER 7: Total value
    const totalValue = computed(() => {
        return items.value.reduce((sum, item) => sum + item.price, 0);
    });

    // ACTION 8: Add item
    const addItem = (item) => {
        items.value.push({ id: Date.now(), ...item });
    };

    // ACTION 9: Remove item
    const removeItem = ((itemId) => {
        items.value = items.value.filter((i) => i.id !== itemId);
    })

    return { items, totalItems, totalValue, addItem, removeItem };
})