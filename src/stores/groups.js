import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGroupsStore = defineStore("groups", () => {
    // State
    const groups = ref([]);
    const currentGroup = ref(null);

    // GETTER 3: All groups count
    // Returns the total number of groups.
    const groupsCount = computed(() => groups.value.length);

    // GETTER 4: Active groups (not expired)
    // Returns groups that have not yet reached their due date.
    const activeGroups = computed(() => {
        const now = new Date();
        return groups.value.filter((g) => new Date(g.dueDate) > now);
    });

    // GETTER 5: Groups by status
    // Categorizes groups into 'active' (drawn) and 'pending' (not drawn).
    const groupsByStatus = computed(() => {
        return groups.value.reduce((acc, group) => {
            const status = group.drawn ? "active" : "pending";
            acc[status] = acc[status] || [];
            acc[status].push(group);
            return acc;
        });
    });

    // new getter: check for pending draws
    // Checks if there are any groups where the names have not been drawn yet.
    const hasPendingDraws = computed(() => {
        return groups.value.some(group => !group.drawn);
    })

    // ACTION 4: Fetch all groups
    // Fetches all groups from the server.
    // In a real application, this would make an API call.
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
    // Creates a new group.
    // In a real application, this would make an API call to create the group on the server.
    const createGroup = async (groupData) => {
        const newGroup = {id: Date.now(), ...groupData, drawn: false};
        groups.value.push(newGroup);
        return newGroup;
    };

    // ACTION: Join group
    // Joins a group using an invite code.
    // In a real application, this would make an API call to join the group.
    const joinGroup = async (inviteCode) =>{
        // API call
        const group = {id: Date.now(), name: "New Group by Invite", inviteCode, drawn:false};
        groups.value.push(group);
    };

    // ACTION: Delete group
    // Deletes a group by its ID.
    // In a real application, this would make an API call to delete the group from the server.
    const deleteGroup = async (groupId) => {
        groups.value = groups.value.filter((g) => g.id !== groupId);
    };

    return { groups, currentGroup, groupsCount, activeGroups, groupsByStatus, hasPendingDraws, fetchGroups, createGroup, joinGroup, deleteGroup };
})