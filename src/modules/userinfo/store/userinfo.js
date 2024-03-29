import WebitelApplications from '@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum';
import UserinfoStoreModule from '@webitel/ui-sdk/src/modules/Userinfo/store/UserinfoStoreModule';
import { getCliInstance } from '../../../app/api/callWSConnection';

const state = {
  thisApp: WebitelApplications.SUPERVISOR,
  agent: {},
};

const actions = {
  AFTER_OPEN_SESSION_HOOK: (context) => {
    context.dispatch('SUBSCRIBE_AGENT_STATUS');
  },
  SUBSCRIBE_AGENT_STATUS: async (context) => {
    const client = await getCliInstance();
    try {
      const agent = await client.agentSession();
      await client.subscribeAgentsStatus(async (state, agent) => {
        context.commit('SET_AGENT_INSTANCE', agent);
      }, { agent_id: agent.agentId });
      context.commit('SET_AGENT_INSTANCE', agent);
      window.agent = agent;
    } catch (err) {
      throw err;
    }
  },
};

const mutations = {
  SET_AGENT_INSTANCE: (state, agent) => {
    state.agent = agent;
  },
};

const userinfo = new UserinfoStoreModule().getModule({ state, actions, mutations });

export default userinfo;
