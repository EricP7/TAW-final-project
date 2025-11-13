<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToSignUp = () => {
    router.push("/sign-up");
}

const navigateToResetPassword = () => {
    router.push("/reset-password");
}

</script>

<template>
    <div class="max-w-md mx-auto px-4 py-16">
        <div class="bg-white rounded-xl shadow-lg p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2 text-center">Sign In</h1>
            <p class="text-gray-600 mb-8 text-center">Welcome back!</p>

            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>

                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg mt-6">
                    Sign In
                </button>

                <div class="flex flex-col space-y-3 mt-6 pt-6 border-t border-gray-200">
                    <button
                        @click="navigateToSignUp"
                        class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-2 rounded-lg transition-colors"
                    >
                        Create Account
                    </button>
                    <button
                        @click="navigateToResetPassword"
                        class="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
