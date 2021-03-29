import filters from './filters';
import getQueuesList from '../api/queues';

const state = {
  dataList: [],
  aggs: {},
  isNext: true,
};

const getters = {};

const actions = {
  FETCH_LIST: async (context, params) => {
    const { items, next, aggs } = await getQueuesList(params);
    context.commit('SET_LIST', items);
    context.commit('SET_NEXT', next);
    context.commit('SET_AGGS', aggs);
    return { items, aggs, next };
  },
};

const mutations = {
  SET_LIST: (state, queues) => {
    state.dataList = queues;
  },
  SET_AGGS: (state, aggs) => {
    state.aggs = aggs;
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
  modules: { filters },
};
