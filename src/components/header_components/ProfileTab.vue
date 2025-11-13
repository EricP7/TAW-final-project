<script setup>
defineProps(["type"]);
import { RouterLink } from "vue-router";

const target = ["/sign-in", "/profile"];
</script>

<template>
    <RouterLink
        :to="target[0]"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
    >
        {{ type }}
    </RouterLink>
</template>

<style></style>
