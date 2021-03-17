<template>
  <div>
    <main-header/>
    <div class="page-main">
      <logo/>
      MapTest
    </div>
  <div>
    <div id="map-wrap" style="height: 90vh">
      <client-only>
        <l-map :zoom=18 :center="[37.5642135,127.0016985]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[37.413294,127.269311]"></l-marker>
        </l-map>
      </client-only>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MainHeader from '@/components/Main/header';
import Logo from '@/components/logo';

export default {
  components: { Logo, MainHeader },
  head() {
    return {
      title: 'DroneWeb',
      meta: [
        {
          hid: 'database',
          name: 'Descriptions',
          content: 'DroneWeb-Content',
        },
      ],
    };
  },
  data() {
    return {
      key: 123,
    };
  },
  computed: {
    ...mapGetters({
      getSettings: 'getSettings',
    }),
  },
  created() {
  },
  fetch() {
    this.setSettings({ test: '123' });
  },
  mounted() {
    this.setSettings({ test: '456' });
  },
  methods: {
    ...mapActions({
      setSettings: 'setSettings',
    }),
  },
};
</script>
