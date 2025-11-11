import { createApp } from "vue";
import App from "./App.vue";
import Pricing from "./components/header_components/Pricing.vue";
import FAQ from "./components/header_components/FAQ.vue";
import AboutUs from "./components/header_components/AboutUs.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: App },
    { path: "/pricing", component: Pricing },
    { path: "/faq", component: FAQ },
    { path: "/aboutus", component: AboutUs },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
