<script setup>
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router'
import HeaderButton from '@/components/HeaderButton.vue';

const router = useRouter();

// object with navigation item alias and route to redirect to
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
    {
        label: 'Sign Up',
        route: 'sign-up',
    },
    {
        label: 'Sign In',
        route: 'sign-in',
    }
])


</script>

<template>
    <div>
        <!-- <HeaderButton :alias="navigationItem[1].alias" @click="router.push({ path: navigationItem[1].route })">
        </HeaderButton>
        <HeaderButton :alias="navigationItem[0].alias" @click="router.push({ path: navigationItem[0].route })">
        </HeaderButton> -->
        <RouterLink v-for="link in navigationItem" :to="link.route">{{ link.label }}</RouterLink>
        <p>.</p>

    </div>
</template>