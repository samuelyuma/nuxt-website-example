<template>
  <div class="min-h-screen flex flex-col gap-16 items-center text-center justify-center bg-neutral-900">
    <h1 class="text-2xl font-bold text-neutral-100">SSR Page</h1>
    <div v-if="status === 'pending'"><p class="text-xl font-semibold text-neutral-200">Loading...</p></div>
    <div v-if="status === 'error' || error"><p class="text-xl font-semibold text-neutral-200">Error: {{ error?.message }}</p></div>
    <div v-else-if="data?.length" class="grid gap-4 grid-cols-2 mt-4">
      <ItemCard v-for="item in data" :key="item.id" :item="item" />
    </div>
    <div v-else class="text-neutral-200">No results found.</div>
  </div>
</template>

<script setup lang="ts">
import ItemCard from '~/components/ItemCard.vue';
import type { User } from '~/types/user';

const { data, error, status } = await useAsyncData<User[]>('users', async () => {
  return await $fetch('https://jsonplaceholder.typicode.com/users');
});
</script>
