import editProxy from '@webitel/ui-sdk/src/scripts/editProxy';
import AgentAPI from '../api/agent-card';
import statusSelect from '../modules/agent-status-select/store/agent-status-select';
import pauseCause from '../modules/agent-general/store/agent-pause-causes';
import calls from '../modules/agent-calls/store/agent-calls';
import statusHistory from '../modules/agent-status-history/store/agent-status-history';
import skills from '../modules/agent-skills/store/agent-skills';

const state = {
  agentId: null,
  agent: {},
};

const getters = {};

const actions = {
  SET_AGENT_ID: (context, id) => {
    context.commit('SET_AGENT_ID', id);
  },
  LOAD_AGENT: async (context) => {
    const agent = await AgentAPI.get({ itemId: context.state.agentId });
    context.commit('SET_AGENT', editProxy(agent));
  },
  SET_AGENT_PROPERTY: (context, { prop, value }) => {
    context.commit('SET_AGENT_PROPERTY', { prop, value });
  },
  UPDATE_AGENT: async (context) => {
    const { agent } = context.state;
    const payload = { id: agent.agentId, changes: agent };
    try {
      await AgentAPI.patch(payload);
    } catch {
    } finally {
      context.dispatch('LOAD_AGENT');
    }
  },
};

const mutations = {
  SET_AGENT_ID: (state, id) => {
    state.agentId = id;
  },
  SET_AGENT: (state, agent) => {
    state.agent = agent;
  },
  SET_AGENT_PROPERTY: (state, { prop, value }) => {
    state.agent[prop] = value;
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
    pauseCause,
    calls,
    statusHistory,
    skills,
  },
};
