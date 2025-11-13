<script setup></script>

<template>
    <div class="max-w-6xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Gift Finder</h1>

        <div class="bg-white rounded-xl shadow-md p-6 mb-8">
            <div class="flex flex-wrap gap-4 items-center justify-between">
                <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors">
                    Filters
                </button>

                <input
                    type="text"
                    placeholder="Search"
                    class="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />

                <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors">
                    Sort By
                </button>

                <button class="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                    Recommendations
                </button>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-md p-12">
            <p class="text-gray-500 text-center">Products will be displayed here</p>
        </div>
    </div>
</template>

<style></style>