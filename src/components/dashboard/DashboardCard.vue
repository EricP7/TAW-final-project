<script setup>

// prop for dynamic dashboard card, with name and description
const props = defineProps({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
})


</script>

<template>

    <div>
        <h1>{{ props.name }}</h1>
        <p>{{ props.description }}</p>
    </div>
</template>