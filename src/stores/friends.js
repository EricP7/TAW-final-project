import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useFriendsStore = defineStore("friends", () => {
    const friends = ref([]);

    // GETTER 8: Friends count
    // Returns the total number of friends.
    const friendsCount = computed(() => friends.value.length);

    // ACTION 9: Add friend
    // Adds a new friend.
    // In a real application, this would make an API call to add the friend.
    const addFriend = async (friendId) => {
        friends.value.push({ id: friendId, name: "Friend" });
    };

    return { friends, friendsCount, addFriend };
})