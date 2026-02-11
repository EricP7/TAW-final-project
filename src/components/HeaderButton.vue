<script setup>
// prop for dynamic header buttons with routes
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: true,
    }
})

// defineEmits('redirect')
</script>

<template>
    <div>{{ props.label }}</div>
</template>