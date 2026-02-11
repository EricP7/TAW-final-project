<script setup>
import { useAuth } from '@/stores/auth';
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const authStore = useAuth();

// checks from auath.js store if the user is authenticated
// and uses computed to update whenever the value is changed
const isAuthenticated = computed(() => authStore.isAuthenticated)


// NOT FINISHED
// need to somehow extract the username (maybe from localStorage or pinia store)
const userName = computed(() => authStore.VALID_USERNAME)


// sets the label and route of the button 
const authButtonContent = ref(
    {
        label: isAuthenticated.value ? 'UserName' : 'Login',
        route: isAuthenticated.value ? 'UserName' : 'sign-in'
    }
)

</script>

<template>
    <!-- checks if the user is authenticated and changes the button dynamicly-->
    <div>
        <RouterLink :to="authButtonContent.route">{{ isAuthenticated ? 'UserName' : 'Login' }}</RouterLink>
    </div>
</template>