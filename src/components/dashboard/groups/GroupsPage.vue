<script setup>
import GroupCard from "./GroupCard.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const navigateToCreateJoinGroup = () => {
    router.push("/create-group-info");
};
const navigateToJoinGroup = () => {
    router.push("/join-group");
};
</script>

<template>
    <h1>My Groups</h1>
    <GroupCard></GroupCard>

    <button @click="navigateToCreateJoinGroup">Create Group</button>
    <button @click="navigateToJoinGroup">Join Group</button>
</template>

<style></style>
