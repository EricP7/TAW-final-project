<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToInviteToGroup = () => {
    router.push("/invite-to-group");
};

const navigateToDrawnName = () => {
    router.push("/drawn-name");
};
</script>

<template>
    <div class="max-w-3xl mx-auto px-4 py-12">
        <div class="bg-white rounded-xl shadow-lg p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-6 text-center">Group Name</h1>

            <div class="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">Group Details</h2>
                <p class="text-gray-700 mb-2">Group Details here</p>
                <p class="text-sm text-gray-500 italic">data from the database</p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
                <button
                    @click="navigateToDrawnName"
                    class="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                    Draw Name
                </button>
                <button
                    @click="navigateToInviteToGroup"
                    class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                    Invite To Group
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>
