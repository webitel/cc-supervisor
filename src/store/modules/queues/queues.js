import { CallDirection } from 'webitel-sdk';
import { getQueuesList } from '../../../api/queues/queues';
import parseJoined from '../../../utils/joined';

const state = {
  dataList: [],
};

const getters = {};

const actions = {
  FETCH_LIST: async (context, argParams) => {
    const params = { ...argParams };
    if (!params.period) params.period = 'today';
    const joined = parseJoined(params.period);
    params.joinedAtFrom = joined.start;
    params.joinedAtTo = joined.end;
    if (params.type === CallDirection.Inbound) {
      params.typeIds = [1, 6];
    } else if (params.type === CallDirection.Outbound) params.typeIds = [0, 2, 3, 4, 5];
    const { items, next } = await getQueuesList(params);
    context.commit('SET_LIST', items);
    return next;
  },
};

const mutations = {
  SET_LIST: (state, queues) => {
    state.dataList = queues;
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
