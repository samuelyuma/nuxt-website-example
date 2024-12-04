<template>
  <div class="p-4 border rounded shadow-md">
    <h3 class="text-lg font-bold text-neutral-200">{{ item.username }}</h3>
    <p class="text-neutral-200">{{ item.email }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { User } from '~/types/user';

defineProps({
  item: {
    type: Object as PropType<User>,
    required: true,
  },
});
</script>
