<template>
  <div>
    <database-search-filter @loadData="loadData"/>

    <div class="page-main">
      {{ a }}
      <a-alert message="등록된 드론 정보" type="info" show-icon
               style="margin-bottom: 10px"
      />
      <database-table :pagination="pagination"
                      @loadData="loadData"
      />
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DatabaseSearchFilter from '@/components/Database/searchFilter';
import DatabaseTable from '@/components/Database/table';

function timeoutFunc() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('timeOut async');
      const test = 'test1234';
      resolve(test);
    }, 5000);
  });
}

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
  components: {
    DatabaseTable,
    DatabaseSearchFilter,
  },
  data() {
    return {
      pagination: {},
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadData();
  },
  methods: {
    ...mapActions({
      fetchListData: 'Database/list/fetchListData',
    }),
    loadData() {
      this.fetchListData()
        .then((r) => {
          this.pagination = {
            current: this.$store.getters['Database/list/getListParams'].current,
            pageSize: 10,
            total: r.length,
          };
        });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
