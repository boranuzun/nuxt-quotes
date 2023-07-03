// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt Quotes",
      meta: [
        {
          name: "description",
          content: "Simple application using Quotable API to diplay quotes",
        },
      ],
    },
  },
});
