<template>
  <a-page-header
    class="page-header"
    title="드론 정보"
    sub-title="subtitle section"
    @back="$router.go(-1)"
  >
    <template slot="extra">
      <a-button key="1" type="primary">
        action
      </a-button>
    </template>
    <a-divider/>
    <div>
      <a-descriptions :column="{xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }">
        <a-descriptions-item label="드론 이름">
          {{ info.droneName }}
        </a-descriptions-item>
        <a-descriptions-item label="드론제조사">
          {{ info.droneMaker }}
        </a-descriptions-item>
        <a-descriptions-item label="드론 종류">
          {{ droneCategory(info.droneMaker) }}

        </a-descriptions-item>
        <a-descriptions-item label="시리얼넘버">
          {{ info.droneSerial }}
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </a-page-header>
</template>

<script>

export default {
  name: 'DatabaseDetailHeader',
  components: {},
  data() {
    return {
      info: {},
    };
  },
  computed: {
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
  created() {
    this.info = { ...this.$route.query };
  },
};
</script>

<style scoped lang="scss">

</style>
