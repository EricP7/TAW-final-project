import { defineStore } from "pinia"

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "password"

export const useAuth = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
    }),
    actions: {
        checkCredentials(username, password) {
            if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                this.isAuthenticated = true;
            } else {
                this.isAuthenticated = false;
            }
        },
        logout() {
            this.isAuthenticated = false;

        }
    }
})