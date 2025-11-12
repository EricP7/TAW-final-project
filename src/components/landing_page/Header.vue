<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/pricing">Pricing</RouterLink>
            <RouterLink to="/faq">FAQ</RouterLink>
            <RouterLink to="/aboutus">About Us</RouterLink>
        </nav>
    </header>
    <!-- <RouterView></RouterView> -->
</template>

<style></style>
