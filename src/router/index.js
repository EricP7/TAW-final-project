import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@/components/landing_page/LandingPage.vue";
import Pricing from "@/components/header_components/Pricing.vue";
import FAQ from "@/components/header_components/FAQ.vue";
import AboutUs from "@/components/header_components/AboutUs.vue";
import HowItWorks from "@/components/landing_page/HowItWorks.vue";
import SignIn from "@/components/sign_in/SignIn.vue";
import SignUp from "@/components/sign_in/SignUp.vue";
import ResetPassword from "@/components/sign_in/ResetPassword.vue";
import Dashboard from "@/components/dashboard/Dashboard.vue";
import GroupsPage from "@/components/dashboard/groups/GroupsPage.vue";
import CreateJoinGroup from "@/components/dashboard/groups/CreateJoinGroup.vue";
import CreateGroupForm from "@/components/dashboard/groups/CreateGroupForm.vue";
import JoinGroup from "@/components/dashboard/groups/JoinGroup.vue";
import GroupDetails from "@/components/dashboard/groups/GroupDetails.vue";
import InviteToGroup from "@/components/dashboard/groups/InviteToGroup.vue";
import DrawnName from "@/components/dashboard/DrawnName.vue";
import Wishlist from "@/components/dashboard/Wishlist.vue";
import GiftFinder from "@/components/dashboard/GiftFinder.vue";
import FriendsList from "@/components/dashboard/FriendsList.vue";

const routes = [
    { path: "/", component: LandingPage },
    { path: "/pricing", component: Pricing },
    { path: "/faq", component: FAQ },
    { path: "/about-us", component: AboutUs },
    { path: "/how-it-works", component: HowItWorks },
    { path: "/sign-in", component: SignIn },
    { path: "/sign-up", component: SignUp },
    { path: "/reset-password", component: ResetPassword },
    { path: "/dashboard", component: Dashboard },
    { path: "/groups", component: GroupsPage },
    { path: "/create-group-info", component: CreateJoinGroup },
    { path: "/create-group", component: CreateGroupForm },
    { path: "/join-group", component: JoinGroup },
    { path: "/group-details", component: GroupDetails },
    { path: "/invite-to-group", component: InviteToGroup },
    { path: "/drawn-name", component: DrawnName },
    { path: "/wishlist", component: Wishlist },
    { path: "/gift-finder", component: GiftFinder },
    { path: "/friends", component: FriendsList },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
