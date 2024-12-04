<template>
  <div class="min-h-screen flex flex-col gap-16 items-center text-center justify-center bg-neutral-900">
    <h1 class="text-2xl font-bold text-neutral-100">CSR Page</h1>
    <div v-if="pending"><p class="text-xl font-semibold text-neutral-200">Loading...</p></div>
    <div v-if="error"><p class="text-xl font-semibold text-neutral-200">{{ error }}</p></div>
    <div v-else-if="users?.length" class="grid gap-4 grid-cols-2 mt-4">
      <ItemCard v-for="item in users" :key="item.id" :item="item" />
    </div>
    <div v-else class="text-neutral-200 text-xl font-semibold">No results found.</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ItemCard from '~/components/ItemCard.vue';
import type { User } from '~/types/user';

const users = ref<User[]>([]);
const pending = ref(false);
const error = ref<string | null>(null);

const fetchData = async () => {
  pending.value = true;
  error.value = null;

  try {
    const { data } = await useFetch<User[]>('https://jsonplaceholder.typicode.com/users', {
		immediate: true, // Auto fetch data when page load
		key: 'fetch-users',
		method: 'GET',
	});
    users.value = data.value ?? [];
  } catch {
    error.value = 'Failed to fetch users. Please try again.';
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
	fetchData()
})
</script>
