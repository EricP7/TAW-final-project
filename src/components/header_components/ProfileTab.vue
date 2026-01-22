<script setup>
// Define the properties (props) that this component accepts.
// 'type' is used to display text within the button, likely "Sign In" or "Profile".
defineProps(["type"]);
import { RouterLink } from "vue-router";

// Defines the navigation targets.
// The first element is for signing in, the second for the user profile.
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
