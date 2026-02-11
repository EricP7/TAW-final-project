<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderSection.vue";
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

    <title>TAW Final Project</title>

    <HeaderComponent></HeaderComponent>
    <RouterView />
  </div>
</template>

<style>
@import "tailwindcss";
/* @import "bootstrap-icons" */
</style>
