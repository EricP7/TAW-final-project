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

    // new getter: check for pending draws
    const hasPendingDraws = computed(() => {
        return groups.value.some(group => !group.drawn);
    })

    // ACTION 4: Fetch all groups
    const fetchGroups = async () => {
        // API call
        groups.value = [
            {
                id: 1,
                name: "Family Christmas",
                dueDate: "2026-12-25",
                budget: 50,
                drawn: true,
            },
            {
                id: 2,
                name: "Office Party",
                dueDate: "2026-12-20",
                budget: 30,
                drawn: false,
            }
        ]
    };

    // ACTION: Create group
    const createGroup = async (groupData) => {
        const newGroup = {id: Date.now(), ...groupData, drawn: false};
        groups.value.push(newGroup);
        return newGroup;
    };

    // ACTION: Join group
    const joinGroup = async (inviteCode) =>{
        // API call
        const group = {id: Date.now(), name: "New Group by Invite", inviteCode, drawn:false};
        groups.value.push(group);
    };

    // ACTION: Delete group
    const deleteGroup = async (groupId) => {
        groups.value = groups.value.filter((g) => g.id !== groupId);
    };

    return { groups, currentGroup, groupsCount, activeGroups, groupsByStatus, hasPendingDraws, fetchGroups, createGroup, joinGroup, deleteGroup };
})