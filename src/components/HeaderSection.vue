<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import AuthButton from '@/components/AuthButton.vue';

// object with navigation item label and route to redirect to
const navigationItem = ref([
    {
        label: 'Dashboard',
        route: 'dashboard',
    },
    {
        label: 'Pricing',
        route: 'pricing',
    },
    {
        label: 'FAQ',
        route: 'faq',
    },
    {
        label: 'About Us',
        route: 'about-us',
    },
])



</script>

<template>
    <div class="flex justify-center">
        <!-- <HeaderButton :alias="navigationItem[1].alias" @click="router.push({ path: navigationItem[1].route })">
        </HeaderButton>
        <HeaderButton :alias="navigationItem[0].alias" @click="router.push({ path: navigationItem[0].route })">
        </HeaderButton> -->
        <RouterLink v-for="link in navigationItem" :to="link.route" class="m-5 cursor-pointer">
            {{ link.label }}
        </RouterLink>
        <AuthButton class="m-5"></AuthButton>


    </div>
</template>