<script setup>
import { RouterLink } from "vue-router";
import ProfileTab from "../header_components/ProfileTab.vue";

const props = defineProps({
  brandName: {
    type: String,
    default: "Secret Santa",
  },
  brandPath: {
    type: String,
    default: "/",
  },
  navigationLinks: {
    type: Array,
    default: () => [
      { label: "Dashboard", path: "/dashboard" },
      { label: "Pricing", path: "/pricing" },
      { label: "FAQ", path: "/faq" },
      { label: "About Us", path: "/about-us" },
    ],
  },
  showProfile: {
    type: Boolean,
    default: true,
  },
  profileType: {
    type: String,
    default: "Sign In",
  },
})
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-8">
        <RouterLink :to="props.brandPath" class="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          {{ props.brandName }}
        </RouterLink>
      </div>
      <div class="flex items-center space-x-6">
        <RouterLink
v-for="link in props.navigationLinks" :key="link.path" :to="link.path"
          class="text-gray-700 hover:text-blue-600 transition-colors font-medium">
          {{ link.label }}
        </RouterLink>
        <ProfileTab v-if="props.showProfile" :type="props.profileType" />
      </div>
    </nav>
  </header>
</template>

<style></style>
