import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@/components/landing_page/LandingPage.vue";
import Pricing from "@/components/header_components/Pricing.vue";
import FAQ from "@/components/header_components/FAQ.vue";
import AboutUs from "@/components/header_components/AboutUs.vue";

const routes = [
    { path: "/", component: LandingPage },
    { path: "/pricing", component: Pricing },
    { path: "/faq", component: FAQ },
    { path: "/aboutus", component: AboutUs },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
