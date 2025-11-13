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
    <h1>Sign In page here</h1>
    <input>Enter Email</input>
    <br></br>
    <input>Enter Password</input>

    <br></br>

    <button>Sign In</button>

    <br></br>
    <br></br>

    <button @click="navigateToSignUp">Create Account</button>
    <br></br>
    <button @click="navigateToResetPassword">Forgot Password</button>
</template>

<style></style>
