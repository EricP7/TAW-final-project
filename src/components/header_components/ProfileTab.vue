<script setup>
defineProps(["type"]);
import { RouterLink } from "vue-router";

const target = ["/sign-in", "/profile"];
</script>

<template>
    <RouterLink :to="target[0]">{{ type }}</RouterLink>
</template>

<style></style>
