<template>
  <div>
    {{ getSettings }}
    <logo></logo>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
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
    console.log(this.getSettings);
  },
  fetch() {
    this.setSettings({ test: '123' });
    console.log('thisisFetchLifeCycle');
    console.log(this.getSettings);
  },
  mounted() {
    this.setSettings({ test: '456' });
    console.log('mounted LifeCycle');
    console.log(this.getSettings);
  },
  methods: {
    ...mapActions({
      setSettings: 'setSettings',
    }),
  },
};
</script>
