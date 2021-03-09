<template>
  <div>
    this is database {{ this.id }}
  </div>
</template>

<script>
export default {
  components: {

  },
  async asyncData({ params }) {
    const { id } = params;
    return { id };
  },
  data() {
    return {

    };
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  method: {

  },
};
</script>

<style scoped lang="scss">

</style>
