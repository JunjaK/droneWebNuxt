export const state = () => ({
  listData: {},
});

export const getters = {
  getListData: (state) => state.listData,
  getListSpeedOver50: (state) => state.map((e) => e.speed > 50),
  getListLatOver800: (state) => state.map((e) => e.latitude > 800),

};

export const actions = {
  fetchListData(context) {
    return new Promise((resolve, reject) => {
      context.commit('CLEAR_LIST_DATA');
      this.$axios.get('/database')
        .then((r) => {
          context.commit('SET_LIST_DATA', r.data);
          resolve(r.data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};

export const mutations = {
  SET_LIST_DATA(state, payload) {
    state.listData = payload;
  },
  CLEAR_LIST_DATA(state) {
    state.listData = null;
  },
};
