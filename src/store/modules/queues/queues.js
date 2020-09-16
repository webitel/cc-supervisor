import getQueuesList from '../../../api/queues/queues';

const state = {
  dataList: [],
  isNext: true,
};

const getters = {};

const actions = {
  FETCH_LIST: async (context, params) => {
    const { items, next } = await getQueuesList(params);
    context.commit('SET_LIST', items);
    context.commit('SET_NEXT', next);
    return { items, next };
  },
};

const mutations = {
  SET_LIST: (state, queues) => {
    state.dataList = queues;
  },
  SET_NEXT: (state, isNext) => {
    state.isNext = isNext;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {},
};
