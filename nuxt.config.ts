// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxt/eslint",
  ],
  compatibilityDate: "2024-11-01",
  pinia: {
    storesDirs: ["./stores/**"],
  },
});