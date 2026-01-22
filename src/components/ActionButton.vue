<script setup>
// Define the properties (props) that this component accepts.
const props = defineProps({
    // The text to display inside the button. Defaults to 'Click me'.
    text: {
        type: String,
        default: 'Click me'
    }
});

// Define the custom events that this component can emit.
const emit = defineEmits(['buttonClick']);

// Handles the click event of the button.
const handleClick = () => {
    // Emits a custom 'buttonClick' event when the button is clicked.
    emit('buttonClick');
};
</script>

<template>
  <button
    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<style></style>
