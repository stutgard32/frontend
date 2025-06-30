// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
css: ['~/assets/scss/main.scss'],
modules: ['vue-yandex-maps/nuxt', '@primevue/nuxt-module', ['nuxt-mail', {
  message: {
    to: 'support@primedev.pro',
  },
  smtp: {
    service: 'timeweb',
    auth: {
      user: 'support@primedev.pro',
      pass: 'Kireenkov22',
    },
    host: "smtp.timeweb.ru",
    port: 465,
    secure: true,
    requireTLS: true,
  },
}]],
 primevue: {
    components: {
        prefix: 'Prime',
        include: ['Paginator ', 'InputText', 'Button']
    },
    options: {
      theme: {
          preset: Aura
      }
    }
  },
yandexMaps: {
  apikey: '2da24333-90ed-419f-8951-9f073a1c063e',
},
runtimeConfig: {
  apiKey: process.env.NUXT_PRIVATE_KEY_FOR_STRAPI,
  public: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL,
  },
}
})
