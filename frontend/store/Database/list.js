export const state = () => ({
  listData: {},
  listParams: {
    droneMaker: null,
    droneName: null,
    droneCategory: 0,
    droneSerial: null,
    current: 1,
    pageSize: 10,
    total: 1000,
  },
});

export const getters = {
  getListData: (state) => state.listData,
  getListParams: (state) => state.listParams,
};

export const actions = {
  fetchListData(context) {
    return new Promise((resolve, reject) => {
      context.commit('DEL_LIST_DATA');
      this.$axios.get('http://localhost:5555/database')
        .then((r) => {
          const applySearchFilter = r.data.filter((e) => e.droneMaker.includes(context.getters.getListParams.droneMaker || '')
              && e.droneName.includes(context.getters.getListParams.droneName || '')
              && e.droneSerial.includes(context.getters.getListParams.droneSerial || '')
              && (context.getters.getListParams.droneCategory === 0 ? true : e.droneCategory === context.getters.getListParams.droneCategory));
          context.commit('SET_LIST_PARAMS', { ...context.getters.getListParams, total: applySearchFilter.length });
          context.commit('SET_LIST_DATA', applySearchFilter);
          resolve(applySearchFilter);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  changeListParams(context, data) {
    context.commit('SET_LIST_PARAMS', data);
  },
  clearListParams(context) {
    context.commit('SET_LIST_PARAMS');
  },
};

export const mutations = {
  SET_LIST_DATA(state, payload) {
    state.listData = payload;
  },
  DEL_LIST_DATA(state) {
    state.listData = null;
  },
  SET_LIST_PARAMS(state, payload) {
    state.listParams = payload;
  },
  DEL_LIST_PARAMS(state) {
    state.listParams = {
      droneMaker: null,
      droneName: null,
      droneCategory: 0,
      droneSerial: null,
      current: 1,
      pageSize: 10,
      total: 1000,
    };
  },
};
