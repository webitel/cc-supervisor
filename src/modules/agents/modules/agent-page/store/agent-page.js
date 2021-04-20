import editProxy from '@webitel/ui-sdk/src/scripts/editProxy';
import AgentAPI from '../api/agent-page';
import statusSelect from '../modules/agent-status-select/store/agent-status-select';
import agentGeneral from '../modules/agent-general/store/agent-general';
import agentCalls from '../modules/agent-calls/store/agent-calls';
import agentStatusHistory from '../modules/agent-status-history/store/agent-status-history';
import agentSkills from '../modules/agent-skills/store/agent-skills';

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
  SET_AGENT_STATUS: (context, { status }) => {
    // const agentStatus = { status, payload: pauseCause };
    const duration = '00:00:00';
    context.commit('SET_AGENT_STATUS', { status, duration });
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
  SET_AGENT_STATUS: (state, { status, duration }) => {
    state.agent.status = status;
    state.agent.statusDuration = duration;
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
    agentGeneral,
    agentCalls,
    agentStatusHistory,
    agentSkills,
  },
};
