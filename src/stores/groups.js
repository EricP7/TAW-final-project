import { defineStore } from "pinia";

export const useGroupsStore = defineStore("groups", {
    // State
    state: () => ({
        groups: [],
        currentGroup: null,
    }),

    // Getters
    getters: {
        // GETTER 3: All groups count
        // Returns the total number of groups.
        groupsCount(state) {
            return state.groups.length;
        },
        // GETTER 4: Active groups (not expired)
        // Returns groups that have not yet reached their due date.
        activeGroups(state) {
            const now = new Date();
            return state.groups.filter((g) => new Date(g.dueDate) > now);
        },
        // GETTER 5: Groups by status
        // Categorizes groups into 'active' (drawn) and 'pending' (not drawn).
        groupsByStatus(state) {
            return state.groups.reduce((acc, group) => {
                const status = group.drawn ? "active" : "pending";
                acc[status] = acc[status] || [];
                acc[status].push(group);
                return acc;
            }, {});
        },
        // new getter: check for pending draws
        // Checks if there are any groups where the names have not been drawn yet.
        hasPendingDraws(state) {
            return state.groups.some(group => !group.drawn);
        },
    },

    // Actions
    actions: {
        // ACTION 4: Fetch all groups
        // Fetches all groups from the server.
        // In a real application, this would make an API call.
        async fetchGroups() {
            // API call
            this.groups = [
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
            ];
        },
        // ACTION: Create group
        // Creates a new group.
        // In a real application, this would make an API call to create the group on the server.
        async createGroup(groupData) {
            const newGroup = {id: Date.now(), ...groupData, drawn: false};
            this.groups.push(newGroup);
            return newGroup;
        },
        // ACTION: Join group
        // Joins a group using an invite code.
        // In a real application, this would make an API call to join the group.
        async joinGroup(inviteCode) {
            // API call
            const group = {id: Date.now(), name: "New Group by Invite", inviteCode, drawn:false};
            this.groups.push(group);
        },
        // ACTION: Delete group
        // Deletes a group by its ID.
        // In a real application, this would make an API call to delete the group from the server.
        async deleteGroup(groupId) {
            this.groups = this.groups.filter((g) => g.id !== groupId);
        },
    },
});