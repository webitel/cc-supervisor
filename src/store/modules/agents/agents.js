import { getAgentsList, getAgent, patchAgentStatus } from '../../../api/agents/agents';

const state = {
  dataList: [],
  isNext: false,
  agent: {},
};

const getters = {};

const actions = {
  FETCH_LIST: async (context, params = {}) => {
    const { items, next } = await getAgentsList(params);
    context.commit('SET_LIST', items);
    context.commit('SET_IS_NEXT', { isNext: next });
  },
  FETCH_ITEM: async (context, id) => {
    const item = await getAgent(id);
    context.commit('SET_ITEM', item);
  },
  UPDATE_AGENT_STATUS: async (context, { agentId, status }) => {
    const { success } = await patchAgentStatus({
      agentId,
      status,
    });
    if (success) {
      context.commit('SET_STATUS', {
        agentId,
        status,
      });
    }
  },
};

const mutations = {
  SET_LIST: (state, agents) => {
    state.dataList = agents;
  },
  SET_IS_NEXT: (state, { isNext }) => {
    state.isNext = isNext;
  },
  SET_ITEM: (state, agent) => {
    state.agent = agent;
  },
  SET_STATUS: (state, { agentId, status }) => {
    if (!agentId || !status) return;
    if (state.agent.agentId === agentId) {
      state.agent.status = status;
      state.agent.statusDuration = '00:00:00';
    }
    const foundIndex = state.dataList.findIndex((agent) => agent.agentId === agentId);
    if (foundIndex !== -1) {
      state.dataList[foundIndex].status = status;
      state.dataList[foundIndex].statusDuration = '00:00:00';
    }
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
