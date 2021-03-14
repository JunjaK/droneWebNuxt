<template>
  <a-config-provider>
    <a-layout :style="{height: '100%'}">
      <a-layout-header class="header-style">
        <a-row type="flex" justify="space-between">
          <a-menu
            theme="dark"
            mode="horizontal"
            v-model="tabKey"
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
            <a-menu-item :key="1" class="router-menu-item">
              <nuxt-link to="/">
                <a-icon type="environment"/>
                RT-Map
              </nuxt-link>
            </a-menu-item>
            <a-menu-item :key="2" class="router-menu-item router-menu-margin">
              <nuxt-link to="/database">
                <a-icon type="database"/>
                DataBase
              </nuxt-link>
            </a-menu-item>
            <a-menu-item :key="3" class="router-menu-item">
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
        <div :style="{ minHeight: 'calc(100vh - 84px - 89px)',  height: '100%'}">
          <nuxt keep-alive :keep-alive-props="{max: 5}"/>
        </div>
      </a-layout-content>
      <a-layout-footer class="footer-style">
        <layout-footer/>
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>

<script>
import LayoutFooter from '@/components/Layout/footer';

export default {
  components: { LayoutFooter },
  /* vue-meta -> 각 페이지의 meta */
  head() {
    return {
      titleTemplate: 'Drone Web - %s',
      meta: [
        {
          hid: 'defaultLayout',
          name: 'Descriptions',
          content: 'Content',
        },
      ],
    };
  },
  data() {
    return {
      tabKey: [1],
    };
  },
  created() {
    const pageRoute = this.$route.fullPath.split('/')[1];
    switch (pageRoute) {
    case '':
      this.tabKey = [1];
      break;
    case 'database':
      this.tabKey = [2];
      break;
    case 'analytics':
      this.tabKey = [3];
      break;
    default:
      this.tabKey = [999];
      break;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins.scss';

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
.footer-style {
  background-color: #001529;
  text-align: center;
  margin: 20px 10px 0px 10px;
  border-radius: 6px 6px 0px 0px;
  padding: 12px 0px 6px 0px;
}
</style>
