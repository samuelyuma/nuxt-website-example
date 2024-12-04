<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-16 bg-neutral-900 text-neutral-100">
    <h1 class="text-3xl font-bold">Welcome!</h1>
    <div class="flex gap-4">
      <button
        class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition"
        @click="navigate('/ssr')"
      >
        Go to SSR Page
      </button>
      <button
        class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-md transition"
        @click="navigate('/ssg')"
      >
        Go to SSG Page
      </button>
      <button
        class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md shadow-md transition"
        @click="navigate('/csr')"
      >
        Go to CSR Page
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from '#app';

useHead({
  title: "Home",
  meta: [{ name: "description", content: "Home Page" }],
});

const router = useRouter();

const navigate = (path: string) => {
  router.push(path);
};
</script>
