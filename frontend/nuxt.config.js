import { resolve } from 'path';
import api from './nuxtConfig/api';
import build from './nuxtConfig/build';
import theme from './nuxtConfig/theme';

// 경로가 포함된 세팅은 import-export 모듈 구조로 파일 구성 시 경로 설정이 애매하므로, 별도 파일로 관리하지 않음
// 설정 내용이 짧은 것도 별도 파일로 관리하지 않음.
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
    'nuxt-leaflet',
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,
  // alias
  alias: {
    '@': resolve(__dirname, './src/'),
    images: resolve(__dirname, './src/assets/images'),
    styles: resolve(__dirname, './src/assets/styles'),
  },
  // source Directory
  srcDir: 'src/',

  // router option or extend
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

  // axios, proxy, auth
  ...api,
  // env, runtimeConfig, build
  ...build,
  // loading, transition
  ...theme,
};
