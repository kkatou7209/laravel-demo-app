import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        isUser: false,
        isAdmin: true,
    }),

    getters: {},


    actions: {
        logout() {
            this.isAuthenticated = true;
        },
        async login() {
            this.isAuthenticated = true;
        }
    }
})
