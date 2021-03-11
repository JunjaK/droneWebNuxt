<template>
  <div>
    this is DataBase
    <div v-for="(data, index) in listData"
         :key="index"
    >
      <div>
        {{ data.latitude }}
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  head() {
    return {
      title: 'Database',
      meta: [
        {
          hid: 'database',
          name: 'Descriptions',
          content: 'db-Content',
        },
      ],
    };
  },
  async asyncData({ params, store }) {
    const listData = await store.dispatch('Database/list/fetchListData');
    // console.log(params, store);
    return { listData };
  },
  components: {

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
    ...mapActions({
      fetchListData: 'Database/list/fetchListData',
    }),
  },
};
</script>

<style scoped lang="scss">

</style>
