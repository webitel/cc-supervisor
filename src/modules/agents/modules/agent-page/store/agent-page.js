import { getAgent } from '../api/agent-page';
import statusSelect from '../modules/agent-status-select/store/agent-status-select';

const state = {
  agent: {},
};

const getters = {};

const actions = {
  LOAD_AGENT: async (context, id) => {
    const agent = await getAgent(id);
    context.commit('SET_AGENT', agent);
  },
  SET_AGENT_STATUS: (context, { status, pauseCause }) => {
    const agentStatus = { status, payload: pauseCause };
    const duration = 0;
    context.commit('SET_AGENT_STATUS', { status: agentStatus, duration });
  },
};

const mutations = {
  SET_AGENT: (state, agent) => {
    state.agent = agent;
  },
  SET_AGENT_STATUS: (state, { status, duration }) => {
    state.agent.status = status;
    state.agent.statusDuration = duration;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: { statusSelect },
};
