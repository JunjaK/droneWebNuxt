<template>
  <a-config-provider>
    <a-layout :style="{height: '100vh'}">
      <a-layout-header class="header-style">
        <a-row type="flex" justify="space-between">
          <a-menu
            theme="dark"
            mode="horizontal"
            :default-selected-keys="['2']"
            :style="{ lineHeight: '40px', marginTop: '10px' }"
          >
            <a-menu-item key="null" disabled
                         :style="{marginLeft: '10px', marginRight: '20px'}"
            >
              <div>
                <a-icon class="logo-title"
                        type="compass"
                />
                <span class="logo-title">Drone Web</span>
              </div>
            </a-menu-item>
            <a-menu-item key="1" class="router-menu-item">
              <nuxt-link to="/">
                <a-icon type="environment"/>
                RT-Map
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="2" class="router-menu-item router-menu-margin">
              <nuxt-link to="/database">
                <a-icon type="database"/>
                DataBase
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="3" class="router-menu-item">
              <nuxt-link to="/analytics">
                <a-icon type="dashboard"/>
                Analytics
              </nuxt-link>
            </a-menu-item>
          </a-menu>
          <div class="nav-etc">
            <a-button type="primary" icon="user" />
          </div>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 20px', marginTop: '84px' }">
        <div :style="{ background: '#fff', padding: '20px', height: '100%'}">
          <Nuxt/>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        <layout-footer/>
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>

<style lang="scss" scoped>
.logo-title {
  color: white;
  font-size: 20px;
}
.router-menu-item {
 border-radius: 8px;
}
.router-menu-margin {
  margin: 0 10px;
}
.header-style {
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 0px;
}
.nav-etc {
  margin-right: 20px;
  margin-top: 16px;
  line-height: 30px;
}
</style>
