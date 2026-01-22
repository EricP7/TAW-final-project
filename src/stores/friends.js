import { defineStore } from "pinia";

export const useFriendsStore = defineStore("friends", {
    // State
    state: () => ({
        friends: [],
    }),

    // Getters
    getters: {
        // GETTER 8: Friends count
        // Returns the total number of friends.
        friendsCount(state) {
            return state.friends.length;
        },
    },

    // Actions
    actions: {
        // ACTION 9: Add friend
        // Adds a new friend.
        // In a real application, this would make an API call to add the friend.
        async addFriend(friendId) {
            this.friends.push({ id: friendId, name: "Friend" });
        },
    },
});