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
    <h1>Create/Join Group</h1>
    <a @click="navigateToHowItWorks">How it Works</a>
    <p>some info text here</p>

    <button @click="navigateToCreateGroup">Create Group</button>
    <button @click="navigateToJoinGroup">Join Group</button>
</template>

<style></style>
