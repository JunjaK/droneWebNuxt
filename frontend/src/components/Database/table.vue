<template>
  <a-table
    rowKey="id"
    bordered
    :columns="columns"
    :data-source="tableData"
    :scroll="{x: 1000}"
    :pagination="pagination"
    @change="changePage"
  >
    <a slot="droneName" slot-scope="data, row"
       @click="$router.push({
      path: `database/${row.id}`,
      query: row
      })"
    >
      {{ data }}
    </a>
    <div slot="droneCategory" slot-scope="data">
      {{ droneCategory(data) }}
    </div>
  </a-table>
</template>

<script>
import databaseColumn from '@/utils/ColumnData/databaseColumn';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'DatabaseTable',
  props: {
    pagination: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      columns: databaseColumn,
      tableData: null,
    };
  },
  computed: {
    ...mapGetters('Database/list', {
      getListData: 'getListData',
      getListParams: 'getListParams',
    }),
    droneCategory() {
      return (data) => {
        switch (data) {
        case 1:
          return '촬영용';
        case 2:
          return '레이싱용';
        case 3:
          return '완구용';
        default:
          return null;
        }
      };
    },
  },
  watch: {
    getListData: {
      deep: true,
      handler(val) {
        if (val) {
          this.tableData = val;
        }
      },
    },
  },
  methods: {
    ...mapActions('Database/list', {
      changeListParams: 'changeListParams',
    }),
    changePage(e) {
      this.pageParams = {
        ...this.getListParams,
        current: e.current,
      };
      this.changeListParams(this.pageParams);
      this.$emit('loadData');
    },
  },
};
</script>

<style scoped lang="scss">

</style>
