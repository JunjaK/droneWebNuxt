<template>
  <a-page-header
    class="page-header"
    title="Database"
    sub-title="Table - Drone list"
  >
    <template slot="extra">
      <a-button v-if="searchOpenFlag"
                icon="up"
                key="2"
                @click="searchOpenFlag = !searchOpenFlag"
      />
      <a-button v-else
                icon="down"
                key="2"
                @click="searchOpenFlag = !searchOpenFlag"
      />
      <a-button key="1" type="primary"
                form="form"
                html-type="submit"
      >
        검색
      </a-button>
    </template>

    <transition name="default-page" mode="out-in">
      <a-form v-if="searchOpenFlag"
              id="form"
              @submit.prevent="searchData"
      >
        <a-descriptions :column="{xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }">
          <a-descriptions-item label="드론 이름">
            <a-input
              v-model="searchParams.droneName"
              class="search-input"
            />
          </a-descriptions-item>
          <a-descriptions-item label="드론제조사">
            <a-input
              v-model="searchParams.droneMaker"
              class="search-input"
            />
          </a-descriptions-item>
          <a-descriptions-item label="드론 종류">
            <a-select
              v-model="searchParams.droneCategory"
              class="search-input"
            >
              <a-select-option
                v-for="(opt, index) in categoryOptions"
                :key="index"
                :value="opt.value"
              >
                {{ opt.label }}
              </a-select-option>
            </a-select>
          </a-descriptions-item>
          <a-descriptions-item label="시리얼넘버">
            <a-input
              v-model="searchParams.droneSerial"
              class="search-input"
            />
          </a-descriptions-item>
        </a-descriptions>
      </a-form>

      <div v-else
           style="text-align: center"
      >
        <a-icon type="dash"
                style="font-size: 30px"
                @click="searchOpenFlag = !searchOpenFlag"
        />
      </div>
    </transition>

  </a-page-header>
</template>

<script>
import { droneCategory } from '@/utils/CommonData/selectOptions';

export default {
  name: 'DatabaseSearchFilter',
  components: {},
  data() {
    return {
      searchOpenFlag: false,
      categoryOptions: droneCategory,
      searchParams: {},
    };
  },
  computed: {},
  created() {
    this.searchParams = { ...this.$store.getters['Database/list/getListParams'] };
  },
  beforeDestroy() {
    if (this.$route.fullPath.split('/')[1] !== 'database') {
      this.$store.dispatch('Database/list/clearListParams');
    }
  },
  methods: {
    searchData() {
      this.$store.dispatch('Database/list/changeListParams', this.searchParams);
      this.$emit('loadData');
    },
  },
};
</script>

<style scoped lang="scss">

</style>
