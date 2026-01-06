<script setup>
// Define props
const props = defineProps({
    text: {
        type: String,
        default: 'Click me'
    }
});

// Define emits
const emit = defineEmits(['buttonClick']);

const handleClick = () => {
    emit('buttonClick');
};
</script>

<template>
    <button
        @click="handleClick"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
    >
        {{ text }}
    </button>
</template>

<style></style>
