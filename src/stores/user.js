import { defineStore } from "pinia";
import { ref, computed } from "vue";


// the store itself is defined
// "user" is a unique ID that lets Pinia connect the store to the devtools
// and to allow multiple apps to use the same store
export const useUserStore = defineStore("user", () => {
    // State
    const user = ref(null);
    const isAuthenticated = ref(false);

    // GETTER 1: User's full name
    // Retrieves the full name of the user.
    // Returns an empty string if the user is not logged in.
    const fullName = computed(() => {
        if (!user.value) return "";
        return `${user.value.firstName} ${user.value.lastName}`;
    });

    // GETTER 2: User's email
    // Retrieves the email of the user.
    // Returns an empty string if the user is not logged in.
    const email = computed(() => user.value?.email || "");

    // ACTION 1: Login
    // Logs the user in with the provided email and password.
    // In a real application, this would make an API call to authenticate the user.
    const login = async (email, password) => {
        // API call would go here
        user.value = {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email,
        };
        isAuthenticated.value = true;
    }

    // ACTION 2: Logout
    // Logs the user out.
    const logout = () => {
        user.value = null;
        isAuthenticated.value = false;
    }

    // ACTION 3: Update profile
    // Updates the user's profile with the provided data.
    const updateProfile = async (data) => {
        user.value = { ...user.value, ...data };
    };

    return {
        user,
        isAuthenticated,
        fullName,
        email,
        login,
        logout,
        updateProfile,
    };
});