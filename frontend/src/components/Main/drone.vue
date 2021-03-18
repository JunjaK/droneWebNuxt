<template>
  <div>
    <l-marker :lat-lng="[drone.latitude, drone.longitude]">
      <l-icon
        :icon-size="[50, 50]"
        :icon-anchor="[25, 25]"
        :icon-url="require('@/../static/img/drone.png')"
      ></l-icon>
    </l-marker>
    <l-polyline :lat-lngs="drone.polyline.latlngs" :color="drone.polyline.color"></l-polyline>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  head() {
    return {
      title: 'Drone',
      meta: [
        {
          hid: 'database',
          name: 'Descriptions',
          content: 'DroneWeb-Content',
        },
      ],
    };
  },
  props: {
    latitude: {
      type: Number,
      default: 0,
    },
    longitude: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      drone: {
        latitude: 37.2430125,
        longitude: 127.0811054,
        polyline: {
          latlngs: [],
          color: 'red',
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      getSettings: 'getSettings',
    }),
  },
  created() {
    this.drone.latitude = this.latitude;
    this.drone.longitude = this.longitude;
    this.makeDronePath();
  },
  methods: {
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
