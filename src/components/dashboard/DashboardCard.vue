<script setup>

// prop for dynamic dashboard card, with name and description
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})


</script>

<template>

    <div class="flex items-center flex-col bg-blue-300 rounded-xl m-5 cursor-pointer">
        <h1 class="flex p-5 text-xl font-bold">{{ props.name }}</h1>
        <p class="flex text-center px-7 pb-5">{{ props.description }}</p>
    </div>
</template>