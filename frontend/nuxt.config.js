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
  loading: {
    color: '#1890ff',
    height: '5px',
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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-leaflet',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    retry: { retries: 3 },
    baseUrl: 'http://localhost:5555',
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:5555',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: 'always',
        },
      },
    },
  },

  router: {
    middleware: 'stats',
    extendRoutes(routes, resolve) {
      routes.push({
        name: '404Page',
        path: '*',
        redirect: '/auth/404',
        component: resolve(__dirname, 'pages/auth/404.vue'),
      });
    },
  },
};
