<script setup>
import { RouterLink, RouterView } from "vue-router";
import ProfileTab from "../header_components/ProfileTab.vue";
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/pricing">Pricing</RouterLink>
            <RouterLink to="/faq">FAQ</RouterLink>
            <RouterLink to="/about-us">About Us</RouterLink>
            <!-- <RouterLink to="/signin">Sign In</RouterLink> -->
            <ProfileTab type="Sign In"></ProfileTab>
        </nav>
    </header>
    <!-- <RouterView></RouterView> -->
</template>

<style></style>
