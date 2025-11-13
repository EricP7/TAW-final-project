<script setup>
import {useRouter} from 'vue-router'

const router = useRouter;

const navigateToMyGroups = () =>{
    router.push("/groups")
}
</script>

<template>
    <h1>Join Group</h1>
    <h3>Enter Code</h3>
    <input></input>

    <button>Join Group</button>
</template>

<style></style>
