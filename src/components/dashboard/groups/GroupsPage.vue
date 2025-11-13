<script setup>
import GroupCard from "./GroupCard.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const navigateToCreateJoinGroup = () => {
    router.push("/create-group-info");
};
const navigateToJoinGroup = () => {
    router.push("/join-group");
};
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">My Groups</h1>

        <div class="mb-8">
            <GroupCard></GroupCard>
        </div>

        <div class="flex justify-center gap-4">
            <button
                @click="navigateToCreateJoinGroup"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
                Create Group
            </button>
            <button
                @click="navigateToJoinGroup"
                class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
                Join Group
            </button>
        </div>
    </div>
</template>

<style></style>
