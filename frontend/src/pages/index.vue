<template>
  <div>
    <main-header/>
    <div class="page-main">
      <div id="map-wrap" style="height: 90vh">
        <client-only>
          <l-map class="map" :zoom=18 :center="[currentLatitude ? currentLatitude : 0, currentLongitude ? currentLongitude : 0]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[37.2429025,127.0800954]"></l-marker>

            <l-marker :lat-lng="[drone.latitude,drone.longitude]">
              <l-icon
                :icon-size="[50, 50]"
                :icon-anchor="[25, 25]"
                :icon-url="require('@/../static/img/drone.jpeg')"
              ></l-icon>
            </l-marker>
            <l-polyline :lat-lngs="drone.polyline.latlngs" :color="drone.polyline.color"></l-polyline>
          </l-map>
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
      drone: {
        latitude: 37.2430125,
        longitude: 127.0811054,
        polyline: {
          latlngs: [],
          color: 'green',
        },
      },
      droneLon: 37.2430125,
      droneLat: 127.0811054,
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
    this.makeDronePath();
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
    makeDronePath() {
      setTimeout(() => {
        this.drone.latitude += 0.00005;
        this.drone.longitude += 0.00005;
        this.drone.polyline.latlngs.push([this.drone.latitude, this.drone.longitude]);
        this.makeDronePath();
      }, 500);
    },
  },
};
</script>
<style lang="scss" scoped>
  .map {
    z-index: 0;
  }
</style>
