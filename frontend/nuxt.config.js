import { resolve } from 'path';
import { version } from './package.json';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'drone-web-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  // Theme Animation
  loading: {
    color: '#1890ff',
    height: '4px',
  },
  layoutTransition: {
    name: 'default-layout',
    mode: 'out-in',
  },
  pageTransition: {
    name: 'default-page',
    mode: 'out-in',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/less/index',
    '~/assets/styles/scss/index',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/ApiClient/index',
    '@/plugins/antd-ui',
  ],

  alias: {
    '@': resolve(__dirname, './src/'),
    images: resolve(__dirname, './src/assets/images'),
    styles: resolve(__dirname, './src/assets/styles'),
  },
  srcDir: 'src/',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
  ],

  /* env Setting */
  env: {
    baseUrl: process.env.BASE_API_URL,
    baseAppUrl: process.env.BASE_APP_URL,
    i18nLocale: process.env.BASE_I18N_LOCALE,
    i18nFallBackLocale: process.env.BASE_I18N_FALLBACK_LOCALE,
  },
  // public nuxt.context config variables
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_API_URL,
    baseAppUrl: process.env.BASE_APP_URL,
    i18nLocale: process.env.BASE_I18N_LOCALE,
    i18nFallBackLocale: process.env.BASE_I18N_FALLBACK_LOCALE,
  },
  // private nuxt.context config variables
  privateRuntimeConfig: {

  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    retry: { retries: 3 },
    // baseUrl: 'http://localhost:5555',
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
        AppVersion: version,
      },
      delete: {},
      get: {},
      head: {},
      post: {},
      put: {},
      patch: {},
    },
  },
  proxy: {
    '/api': {
      target: process.env.BASE_API_URL || 'http://localhost:5555',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      // for Antdv CustomTheme Setting
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always',
        },
      },
    },
    devtool: true,
    // analyze: true,
  },

  router: {
    middleware: 'router',
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: '404Page',
    //     path: '*',
    //     redirect: '/auth/404',
    //     component: resolve(__dirname, 'pages/auth/404.vue'),
    //   });
    // },
  },
  auth: {
    // Options
  },
};
