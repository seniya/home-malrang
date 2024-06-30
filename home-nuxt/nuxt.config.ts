// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
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
  }
})
