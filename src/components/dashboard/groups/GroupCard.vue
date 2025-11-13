<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const groupName = ref("name");
const dueDate = ref("10.12.2025");
const budget = ref("30$");
const rules = ref("some rules here");

const router = useRouter();

const navigateToGroupDetails = () => {
    router.push("/group-details");
};
</script>

<template>
    <h3>{{ groupName }}</h3>
    <h4>{{ dueDate }}</h4>
    <h4>{{ budget }}</h4>
    <h4>{{ rules }}</h4>
    <p>data from the database here</p>
    <button @click="navigateToGroupDetails">Group Details</button>
</template>

<style></style>
