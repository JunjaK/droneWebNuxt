<template>
  <div>
    <database-detail-header/>

  </div>
</template>

<script>
import DatabaseDetailHeader from '@/components/Database/Detail/header';

export default {
  components: {
    DatabaseDetailHeader,
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
