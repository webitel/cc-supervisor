import agentPage from '../modules/agent-page/store/agent-page';
import filters from './filters';
import { getAgentsList } from '../api/agents';

const state = {
  dataList: [],
  isNext: false,
};

const getters = {};

const actions = {
  FETCH_LIST: async (context, params) => {
    const { items, next } = await getAgentsList(params);
    context.commit('SET_LIST', items);
    context.commit('SET_IS_NEXT', { isNext: next });
    return { items, next };
  },
};

const mutations = {
  SET_LIST: (state, agents) => {
    state.dataList = agents;
  },
  SET_IS_NEXT: (state, { isNext }) => {
    state.isNext = isNext;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: { agentPage, filters },
};
