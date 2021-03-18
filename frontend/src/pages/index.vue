<template>
  <div>
    <main-header/>
    <div class="page-main">
      <div id="map-wrap" style="height: 90vh">
        <client-only>
          <l-map class="map" :zoom=18 :center="[currentLatitude ? currentLatitude : 0, currentLongitude ? currentLongitude : 0]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[37.2429025,127.0800954]"></l-marker>
            <drone
              :latitude="currentLatitude ? currentLatitude + 5 : 37.2429025"
              :longitude="currentLongitude ? currentLongitude + 5 : 127.0800954"
            />
            <drone
              :latitude="currentLatitude ? currentLatitude + 10 : 37.2429025"
              :longitude="currentLongitude ? currentLongitude + 10 : 127.0800954"
            />
            <drone
              :latitude="currentLatitude"
              :longitude="currentLongitude"
            />
          </l-map>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MainHeader from '@/components/Main/header';
import Drone from '@/components/Main/drone';

export default {
  components: { MainHeader, Drone },
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
      currentLatitude: 37.2430125,
      currentLongitude: 127.0811054,
      socket: null,
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

    this.socket = this.$nuxtSocket({
      channel: '/socket',
    });

    this.socket.on('connection', (msg, cb) => {
      console.log('connection', msg);
      this.socket.emit('response', {
        hello: 'world',
      }, (resp) => {
        console.log('123');
      });
    });
  },
  methods: {
    ...mapActions({
      setSettings: 'setSettings',
    }),
    method1() {
      this.socket.on('connect', () => {
        console.log('서버와 연결');
      });
      this.socket.emit('connect', {
        hello: 'world',
      }, (resp) => {
        console.log('123');
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .map {
    z-index: 0;
  }
</style>
