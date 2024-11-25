import editProxy from '@webitel/ui-sdk/src/scripts/editProxy';
import AgentAPI from '../api/agent-card';
import agentEdit from '../modules/agent-general/store/agent-edit';
import pauseCause from '../modules/agent-general/store/agent-pause-causes';
import calls from '../modules/agent-calls/store/agent-calls';
import statusHistory from '../modules/agent-status-history/store/agent-status-history';
import skills from '../modules/agent-skills/store/agent-skills';

const state = {
  agentId: null,
  agent: {},
  score: {
    scoreCount: 0,
    scoreRequiredAvg: 0,
  },
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
  LOAD_SCORE_DATA: async (context) => {
    const score = await AgentAPI.getScore({ agentId: context.state.agentId });
    context.commit('SET_SCORE', score);
  },
};

const mutations = {
  SET_AGENT_ID: (state, id) => {
    state.agentId = id;
  },
  SET_AGENT: (state, agent) => {
    state.agent = agent;
  },
  SET_SCORE: (state, score) => {
    state.score = score;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    agentEdit,
    pauseCause,
    calls,
    statusHistory,
    skills,
  },
};
