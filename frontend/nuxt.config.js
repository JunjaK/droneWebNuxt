/* eslint-disable no-unused-vars */
import api from './nuxtConfig/api';
import build from './nuxtConfig/build';
import theme from './nuxtConfig/theme';
import nuxtConfigModule from './nuxtConfig/module';
import extendRouter from './nuxtConfig/extendRouter';

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

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,
  // source Directory
  srcDir: 'src/',

  /* middleware */
  router: {
    // router middleware
    middleware: 'router',
    // router extend
    // extendRoutes: extendRouter,
  },

  // axios, proxy, auth
  ...api,
  // module, plugin, alias
  ...nuxtConfigModule,
  // env, runtimeConfig, build
  ...build,
  // loading, transition, css
  ...theme,
};
