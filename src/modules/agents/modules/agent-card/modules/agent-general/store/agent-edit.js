import editProxy from '@webitel/ui-sdk/src/scripts/editProxy';
import AgentAPI from '../api/agent-edit';

const state = {
  agent: {},
};

const getters = {
  AGENT_ID: (state, getters, rootState) => rootState.agents.card.agentId,
};

const actions = {
  LOAD_AGENT: async (context) => {
    const agent = await AgentAPI.get({ itemId: context.getters.AGENT_ID });
    context.commit('SET_AGENT', editProxy(agent));
  },
  SET_AGENT_PROPERTY: (context, { prop, value }) => {
    context.commit('SET_AGENT_PROPERTY', { prop, value });
  },
  UPDATE_AGENT: async (context) => {
    const payload = { id: context.getters.AGENT_ID, changes: context.state.agent };
    try {
      await AgentAPI.patch(payload);
    } catch {
    } finally {
      context.dispatch('LOAD_AGENT');
    }
  },
};

const mutations = {
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
};
