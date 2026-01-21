import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGroupsStore = defineStore("groups", () => {
    // State
    const groups = ref([]);
    const currentGroup = ref(null);

    // GETTER 3: All groups count
    const groupsCount = computed(() => groups.value.length);

    // GETTER 4: Active groups (not expired)
    const activeGroups = computed(() => {
        const now = new Date();
        return groups.value.filter((g) => new Date(g.dueDate) > now);
    });

    // GETTER 5: Groups by status
    const groupsByStatus = computed(() => {
        return groups.value.reduce((acc, group) => {
            const status = group.drawn ? "active" : "pending";
            acc[status] = acc[status] || [];
            acc[status].push(group);
            return acc;
        });
    });

    // ACTION 4: Fetch all groups
    const fetchGroups = async () => {
        // API call
        groups.value = [
            {
                id: 1,
                name: "Family Christmas",
                dueDate: "2026-12-25",
                budget: 50,
            }
        ]
    }

    return { groups, currentGroup, groupsCount, activeGroups, groupsByStatus, fetchGroups };
})