<script setup></script>

<template>
    <div class="max-w-md mx-auto px-4 py-16">
        <div class="bg-white rounded-xl shadow-lg p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">Reset Password</h1>
            <p class="text-gray-600 mb-8 text-center">Enter your email to reset your password</p>

            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>

                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg mt-6">
                    Send Reset Link
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>
