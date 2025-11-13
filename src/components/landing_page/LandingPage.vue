<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToHowItWorks = () => {
    router.push("/how-it-works");
};
</script>

<template>
    <div class="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Secret Santa
        </h1>
        <h4 class="text-xl text-gray-600 mb-8">
            Organize your gift exchange with ease
        </h4>

        <p class="text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
        </p>

        <button
            @click="navigateToHowItWorks"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
            How it Works
        </button>
    </div>
</template>

<style></style>
