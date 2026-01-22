import { defineStore } from "pinia";


// the store itself is defined
// "user" is a unique ID that lets Pinia connect the store to the devtools
// and to allow multiple apps to use the same store
export const useUserStore = defineStore("user", {
    // State
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),

    // Getters
    getters: {
        // GETTER 1: User's full name
        // Retrieves the full name of the user.
        // Returns an empty string if the user is not logged in.
        fullName(state) {
            if (!state.user) return "";
            return `${state.user.firstName} ${state.user.lastName}`;
        },
        // GETTER 2: User's email
        // Retrieves the email of the user.
        // Returns an empty string if the user is not logged in.
        email(state) {
            return state.user?.email || "";
        },
    },

    // Actions
    actions: {
        // ACTION 1: Login
        // Logs the user in with the provided email and password.
        // In a real application, this would make an API call to authenticate the user.
        async login(email, password) {
            // API call would go here
            this.user = {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                email,
            };
            this.isAuthenticated = true;
        },
        // ACTION 2: Logout
        // Logs the user out.
        logout() {
            this.user = null;
            this.isAuthenticated = false;
        },
        // ACTION 3: Update profile
        // Updates the user's profile with the provided data.
        async updateProfile(data) {
            this.user = { ...this.user, ...data };
        },
    },
});