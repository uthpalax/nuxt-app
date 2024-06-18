// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    ["github:uthpalax/nuxt-base-layer#main", { install: true }],
    ["github:uthpalax/nuxt-base-portfolios#main"],
    ["github:uthpalax/nuxt-base-search#main"],
  ],
});
