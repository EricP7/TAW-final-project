<script setup>
defineProps(["content"]);
</script>

<template>
    <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg">
        {{ content }}
    </button>
</template>

<style></style>
