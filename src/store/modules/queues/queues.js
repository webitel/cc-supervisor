import { CallDirection } from 'webitel-sdk';
import { getQueuesList } from '../../../api/queues/queues';
import parseJoined from '../../../utils/joined';

const state = {
  dataList: [],
  isNext: true,
};

const getters = {};

const actions = {
  FETCH_LIST: async (context, argParams) => {
    const params = await context.dispatch('GET_REQUEST_PARAMS', argParams);
    const { items, next } = await getQueuesList(params);
    context.commit('SET_LIST', items);
    context.commit('SET_NEXT', next);
  },

  FETCH_DOWNLOAD_LIST: async (context, argParams) => {
    const params = await context.dispatch('GET_REQUEST_PARAMS', argParams);
    return getQueuesList(params);
  },

  GET_REQUEST_PARAMS: (context, argParams) => {
    const params = { ...argParams };
    if (!params.period) params.period = 'today';
    const joined = parseJoined(params.period);
    params.joinedAtFrom = joined.start;
    params.joinedAtTo = joined.end;
    if (params.queueType) {
      let queueType = [];
      if (params.queueType.includes(CallDirection.Inbound)) {
        queueType = queueType.concat([1, 6]);
      }
      if (params.queueType.includes(CallDirection.Outbound)) {
        queueType = queueType.concat([0, 2, 3, 4, 5]);
      }
      params.queueType = queueType;
    }
    return params;
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
