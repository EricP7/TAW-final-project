<script setup>
import { RouterLink, RouterView } from "vue-router";
import ProfileTab from "../header_components/ProfileTab.vue";
</script>

<template>
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <nav
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        >
            <div class="flex items-center space-x-8">
                <RouterLink
                    to="/"
                    class="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    Secret Santa
                </RouterLink>
            </div>
            <div class="flex items-center space-x-6">
                <RouterLink
                    to="/dashboard"
                    class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                    Dashboard
                </RouterLink>
                <RouterLink
                    to="/pricing"
                    class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                    Pricing
                </RouterLink>
                <RouterLink
                    to="/faq"
                    class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                    FAQ
                </RouterLink>
                <RouterLink
                    to="/about-us"
                    class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                    About Us
                </RouterLink>
                <ProfileTab type="Sign In"></ProfileTab>
            </div>
        </nav>
    </header>
</template>

<style></style>
