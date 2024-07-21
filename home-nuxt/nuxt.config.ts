// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  devtools: { enabled: true },
  css: ['@/assets/custom.scss'],
  modules: ['@nuxt/eslint', "@nuxtjs/tailwindcss"],

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false
      }
    }
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    }
  },

  compatibilityDate: '2024-07-07'
})