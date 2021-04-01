import { getAgent, patchAgentStatus } from '../api/agent-page';

const state = {
  agent: {},
};

const getters = {};

const actions = {
  LOAD_AGENT: async (context, id) => {
    const agent = await getAgent(id);
    context.commit('SET_AGENT', agent);
  },
  UPDATE_AGENT_STATUS: async (context, { agentId, status }) => {
    try {
      await patchAgentStatus({ agentId, status });
      context.commit('SET_STATUS', { agentId, status });
    } catch (err) {
      throw err;
    }
  },
};

const mutations = {
  SET_AGENT: (state, agent) => {
    state.agent = agent;
  },
  SET_STATUS: (state, { status }) => {
    state.agent.status = status;
    state.agent.statusDuration = '00:00:00';
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
