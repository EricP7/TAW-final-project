<script setup></script>

<template>
    <div class="max-w-2xl mx-auto px-4 py-12">
        <div class="bg-white rounded-xl shadow-lg p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">Create Group</h1>
            <h3 class="text-lg text-gray-600 mb-8 text-center">Fill in the details below</h3>

            <div class="space-y-5">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Group Name</label>
                    <input
                        type="text"
                        placeholder="Group Name"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                    <input
                        type="date"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                    <input
                        type="text"
                        placeholder="Budget (e.g., $30)"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Rules</label>
                    <textarea
                        placeholder="Group rules and guidelines..."
                        rows="4"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    ></textarea>
                </div>

                <button class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md">
                    Invite Participants
                </button>

                <p class="text-sm text-gray-500 text-center italic">etc...</p>

                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg mt-4">
                    Create Group
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>
