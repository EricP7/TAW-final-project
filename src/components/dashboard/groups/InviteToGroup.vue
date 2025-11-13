<script setup></script>

<template>
    <div class="max-w-2xl mx-auto px-4 py-12">
        <div class="bg-white rounded-xl shadow-lg p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">Invite To Group</h1>

            <div class="space-y-6">
                <div class="bg-blue-50 rounded-lg p-5">
                    <p class="text-sm font-medium text-gray-700 mb-3">Invite via URL</p>
                    <a
                        href="google.com"
                        class="text-blue-600 hover:text-blue-700 underline break-all"
                    >
                        example.com
                    </a>
                </div>

                <div class="bg-green-50 rounded-lg p-5">
                    <label class="block text-sm font-medium text-gray-700 mb-3">Invite via Email</label>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    />
                </div>

                <div class="bg-purple-50 rounded-lg p-5">
                    <label class="block text-sm font-medium text-gray-700 mb-3">Invite Friend</label>
                    <input
                        type="text"
                        placeholder="Search for a friend"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                    />
                </div>

                <div class="bg-orange-50 rounded-lg p-5">
                    <label class="block text-sm font-medium text-gray-700 mb-3">Invite via Code</label>
                    <input
                        type="text"
                        placeholder="Enter invite code"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
