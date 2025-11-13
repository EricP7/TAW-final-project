<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToMyGroups = () => {
    router.push("/groups");
};
const navigateToCreateJoinGroup = () => {
    router.push("/create-group-info");
};
const navigateToWishlist = () => {
    router.push("/wishlist");
};
const navigateToGiftFinder = () => {
    router.push("/gift-finder");
};
const navigateToFriendsList = () => {
    router.push("/friends");
};
</script>

<template>
    <div>
        <h3 @click="navigateToMyGroups">My Groups</h3>
        <p>some content here</p>
    </div>
    <div>
        <h3 @click="navigateToCreateJoinGroup">Create/Join Group</h3>
        <p>some content here</p>
    </div>
    <div>
        <h3 @click="navigateToWishlist">My Wishlist</h3>
        <p>some content here</p>
    </div>
    <div>
        <h3 @click="navigateToGiftFinder">Gift Finder</h3>
        <p>some content here</p>
    </div>
    <div>
        <h3 @click="navigateToFriendsList">My Friends</h3>
        <p>some content here</p>
    </div>
</template>

<style></style>
