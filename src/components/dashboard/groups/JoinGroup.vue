<script setup>
import {useRouter} from 'vue-router'

const router = useRouter;

const navigateToMyGroups = () =>{
    router.push("/groups")
}
</script>

<template>
    <div class="max-w-md mx-auto px-4 py-16">
        <div class="bg-white rounded-xl shadow-lg p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">Join Group</h1>
            <h3 class="text-lg text-gray-600 mb-8 text-center">Enter your group code below</h3>

            <div class="space-y-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Group Code</label>
                    <input
                        type="text"
                        placeholder="Enter invite code"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    />
                </div>

                <button class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg">
                    Join Group
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>
