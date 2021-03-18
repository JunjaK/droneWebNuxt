<template>
  <div>
    <main-header/>
    <div class="page-main">
      <div id="map-wrap" style="height: 90vh">
        <client-only>
          <l-map class="map" :zoom=18 :center="[currentLatitude ? currentLatitude : 0, currentLongitude ? currentLongitude : 0]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[37.2429025,127.0800954]"></l-marker>

            <l-marker :lat-lng="[droneLon,droneLat]">
              <l-icon
                :icon-size="[50, 50]"
                :icon-anchor="[10, 10]"
                :icon-url="require('@/../static/img/drone.jpeg')"
              ></l-icon>
            </l-marker>
            <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"></l-polyline>
          </l-map>
          <button @click="moveDrone">
            드론 위쪽 이동
          </button>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MainHeader from '@/components/Main/header';

export default {
  components: { MainHeader },
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
      droneLon: 37.2430125,
      droneLat: 127.0811054,
      polyline: {
        latlngs: [[37.249298, 127.078012], [37.248658, 127.078055], [37.248658, 127.079181], [37.247744, 127.079342]],
        color: 'green',
      },
      currentLatitude: 0,
      currentLongitude: 0,
    };
  },
  computed: {
    ...mapGetters({
      getSettings: 'getSettings',
    }),
  },
  created() {
    if (process.browser) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLatitude = position.coords.latitude;
        this.currentLongitude = position.coords.longitude;
      }, () => {
      }, { enableHighAccuracy: true, maximumAge: 0 });
    }
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
    moveDrone() {
      this.droneLon += 0.00001;
    },
  },
};
</script>
<style lang="scss" scoped>
  .map {
    z-index: 0;
  }
</style>
