<script setup>
import { ref } from 'vue'
import DashboardCard from '@/components/dashboard/DashboardCard.vue';


// hardcoded dashboard card components
const dashboardCards = ref([{
    name: "My Groups",
    description: "View and manage your Secret Santa groups"
},
{
    name: "Create/Join Group",
    description: "Start a new group or join an existing one",
},
{
    name: "My Wishlist",
    description: "Manage your gift wishlist"
},
])

</script>

<template>

    <div>
        <div>
            <h1>Dashboard</h1>
        </div>
        <div>
            <DashboardCard v-for="(card, index) of dashboardCards" :key="index" :name="card.name"
                :description="card.description"></DashboardCard>
        </div>

    </div>
</template>