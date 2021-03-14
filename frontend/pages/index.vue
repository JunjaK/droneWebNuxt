<template>
  <div class="page-main-without-header">
    <logo/>
    <div class="test-class"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Logo from '@/components/logo';

export default {
  components: { Logo },
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
