import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '@/components/pages/LandingPage.vue';
import DashboardPage from '@/components/pages/DashboardPage.vue';

const routes = [
    { path: "/", component: LandingPage },
    { path: "/dashboard", component: DashboardPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;