<script setup>
import Header from "./components/landing_page/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <Header />
    <title>TAW Final Project</title>
    <RouterView />
  </div>
</template>

<style>
@import "tailwindcss";
</style>
