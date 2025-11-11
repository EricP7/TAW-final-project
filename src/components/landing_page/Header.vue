<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pricing">Pricing</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
        <RouterLink to="/aboutus">About Us</RouterLink>
    </nav>
</template>

<style></style>
