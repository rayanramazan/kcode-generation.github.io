// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        }
      },
      modules: [
          'nuxt-windicss',
          'nuxt-headlessui',
          'nuxt-icon',
          '@vueuse/nuxt',
      ],
      
})
