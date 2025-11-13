<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToHowItWorks = () => {
    router.push("/how-it-works");
};

const navigateToCreateGroup = () => {
    router.push("/create-group");
};

const navigateToJoinGroup = () => {
    router.push("/join-group");
};
</script>

<template>
    <div class="max-w-3xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-6 text-center">
            Create/Join Group
        </h1>

        <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <p class="text-gray-700 text-center mb-6">
                Start organizing your Secret Santa by creating a new group or
                joining an existing one.
            </p>
            <a
                @click="navigateToHowItWorks"
                class="text-blue-600 hover:text-blue-700 font-medium cursor-pointer underline"
            >
                How it Works
            </a>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button
                @click="navigateToCreateGroup"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
                Create Group
            </button>
            <button
                @click="navigateToJoinGroup"
                class="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
                Join Group
            </button>
        </div>
    </div>
</template>

<style></style>
