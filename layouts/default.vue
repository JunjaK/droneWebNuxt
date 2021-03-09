<template>
  <a-config-provider>

  <a-layout :style="{height: '100vh'}"
  >
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <nuxt-link to="/">
            RT-Map
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="2">
          <nuxt-link to="/database">
            DataBase
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="3">
          <nuxt-link to="/analytics">
            Analytics
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 20px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', height: '100%'}">
        <Nuxt/>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <layout-footer/>
    </a-layout-footer>
  </a-layout>
  </a-config-provider>
</template>

<style scoped>

</style>
