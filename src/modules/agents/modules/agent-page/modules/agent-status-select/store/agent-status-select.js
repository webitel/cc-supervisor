import AgentStatusAPI from '../api/agent-status';

const actions = {
  UPDATE_AGENT_STATUS: async (context, { agentId, status }) => {
    try {
      await AgentStatusAPI.patch({ agentId, status });
    } catch (err) {
      throw err;
    }
  },
};

export default {
  namespaced: true,
  actions,
};
