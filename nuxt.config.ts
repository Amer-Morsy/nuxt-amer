import type { NuxtPage } from "nuxt/schema";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  hooks: {
    'pages:extend'(pages) {
      function addNamedMiddlewareToAboutPage(pages: NuxtPage[]) {
        const aboutPage = pages.find((page) => page.path === '/about');
        if (aboutPage) {
          aboutPage.meta ||= {};
          aboutPage.meta.middleware ||= [];
          aboutPage.meta.middleware.push('named');
        }
      }
      addNamedMiddlewareToAboutPage(pages);
    },
  },
  imports: {
    dirs: [
      'composables',
      'composables/**'
    ]
  },
  plugins: [
    '~/plugins/foo/my-plugin',
  ],
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt',],

  pinia: {
    storesDirs: ['./stores/**/*.ts'],
  },


})  
