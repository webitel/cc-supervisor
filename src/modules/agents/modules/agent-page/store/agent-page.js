import { getAgent } from '../api/agent-page';
import statusSelect from '../modules/agent-status-select/store/agent-status-select';
import agentCalls from '../modules/agent-calls/store/agent-calls';
import agentStatusHistory from '../modules/agent-status-history/store/agent-status-history';
import agentSkills from '../modules/agent-skills/store/agent-skills';

const state = {
  agent: {},
};

const getters = {};

const actions = {
  LOAD_AGENT: async (context, id) => {
    const agent = await getAgent(id);
    context.commit('SET_AGENT', agent);
  },
  SET_AGENT_STATUS: (context, { status }) => {
    // const agentStatus = { status, payload: pauseCause };
    const duration = '00:00:00';
    context.commit('SET_AGENT_STATUS', { status, duration });
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
  modules: {
    statusSelect,
    agentCalls,
    agentStatusHistory,
    agentSkills,
  },
};
