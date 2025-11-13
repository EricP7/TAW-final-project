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
    <h1>Group Name</h1>
    <p>Group Details here</p>
    <p>data from the database</p>
    <button @click="navigateToDrawnName">Draw Name</button>
    <button @click="navigateToInviteToGroup">Invite To Group</button>
</template>

<style></style>
