// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon',
    'shadcn-nuxt',
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  css: ['@/assets/css/main.pcss', '@/assets/css/tailwind.css'],

  sourcemap: {
    server: true,
    client: true,
  },

  vite: {
    build: {
      sourcemap: true,
    },
    clearScreen: true,
    logLevel: 'info',
  },

  compatibilityDate: '2024-04-03',
})