import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['@/assets/sass/app.scss' , '@/assets/css/tailwind.css' , '@/assets/fonts/fonts.css'],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

})
