// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NuxtJS Example Website",
      meta: [
        { name: "description", content: "Made with NuxtJS" },
      ],
    },
  },
  components: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],

  // Configure Client-Side Rendering (CSR)
  routeRules: {
      "/csr": {
        ssr: false
    }
  },

  // Configure Static-Site Generation (SSG)
  nitro: {
    prerender: {
        routes: ['/ssg']
    }
  },
})