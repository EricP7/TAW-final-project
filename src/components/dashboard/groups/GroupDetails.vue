<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

const group = ref(null);
const loading = ref(false);

const route = useRoute();
const router = useRouter();

const loadGroupDetails = async (groupId) => {
  loading.value = true;
  group.value = null; // Clear previous group data

  // Simulate an API call latency to fetch group details
  // In a real application, this would be an axios.get(`/api/groups/${groupId}`) call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock group data based on groupId
  if (groupId === '1') {
    group.value = {
      id: '1',
      name: 'Family Christmas',
      dueDate: '2026-12-25',
      budget: '$100',
      rules: 'Gift must be handmade'
    };
  } else if (groupId === '2') {
    group.value = {
      id: '2',
      name: 'Office Secret Santa',
      dueDate: '2026-12-20',
      budget: '$50',
      rules: 'No gift cards'
    };
  } else {
    group.value = {
      id: groupId,
      name: `Group ${groupId}`,
      dueDate: 'N/A',
      budget: 'N/A',
      rules: 'N/A'
    };
  };
  loading.value = false;
}

watch(
  () => route.params.groupId, // Watch this specific property of the route params
  async (newGroupId) => {
    if (newGroupId) {
      await loadGroupDetails(newGroupId);
    } else {
      group.value = null; // Clear group data if no groupId
    }
  },
  { immediate: true } // Run the watcher immediately on component mount
)


const navigateToInviteToGroup = () => {
  router.push("/invite-to-group");
};

const navigateToDrawnName = () => {
  router.push("/drawn-name");
};
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <div class="bg-white rounded-xl shadow-lg p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6 text-center">
        Group Name
      </h1>

      <div class="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">
          Group Details
        </h2>
        <div v-if="loading" class="text-center text-blue-600 text-lg">
          Loading group details...
        </div>

        <div v-else-if="group" class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ group.name }}</h2>
          <p class="text-gray-700 mb-2"><strong>ID:</strong> {{ group.id }}</p>
          <p class="text-gray-700 mb-2"><strong>Due Date:</strong> {{ group.dueDate }}</p>
          <p class="text-gray-700 mb-2"><strong>Budget:</strong> {{ group.budget }}</p>
          <p class="text-gray-700 mb-4"><strong>Rules:</strong> {{ group.rules }}</p>
          <!-- Add more group details here as needed -->
        </div>

        <div v-else class="text-center text-gray-600 text-lg">
          No group selected or found.
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <button
          class="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          @click="navigateToDrawnName">
          Draw Name
        </button>
        <button
          class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          @click="navigateToInviteToGroup">
          Invite To Group
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
