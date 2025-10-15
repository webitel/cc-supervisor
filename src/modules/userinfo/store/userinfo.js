import WebitelApplications from '@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum';
import UserinfoStoreModule from '@webitel/ui-sdk/src/modules/Userinfo/store/UserinfoStoreModule';

import { getCliInstance } from '../../../app/api/callWSConnection';

const state = {
  thisApp: WebitelApplications.SUPERVISOR,
  agent: {},
};

const getters = {
  ALLOW_USERS_ACCESS: (state) => state.scope?.some(({ class: scopeClass }) => scopeClass === 'users'),
  ALLOW_AGENTS_ACCESS: (state) => state.scope?.some(({ class: scopeClass }) => scopeClass === 'cc_agent'),
  ALLOW_QUEUES_ACCESS: (state) => state.scope?.some(({ class: scopeClass }) => scopeClass === 'cc_queue'),
  ALLOW_TEAMS_ACCESS: (state) => state.scope?.some(({ class: scopeClass }) => scopeClass === 'cc_team'),
  ALLOW_GATEWAYS_ACCESS: (state) => state.scope?.some(({ class: scopeClass }) => scopeClass === 'gateways'),
  ALLOW_SKILLS_ACCESS: (state) => state.scope?.some(({ class: scopeClass }) => scopeClass === 'dictionaries'),
  ALLOW_REGIONS_ACCESS: (state) => state.scope?.some(({ class: scopeClass }) => scopeClass === 'dictionaries'),
  ALLOW_CALLS_ACCESS: (state) => state.scope?.some(({ class: scopeClass }) => scopeClass === 'calls'),
  GET_OBJECT_SCOPE_BY_CLASS: (state) => (scopeClass) => {
    return Object.values(state.scope).find((object) => object.class === scopeClass)
  },
  ALLOW_SECTION_ACCESS: (state, getters) => ({ scopeClass, name, route }) => {
    return getters.GET_OBJECT_SCOPE_BY_CLASS(scopeClass) && getters.CHECK_OBJECT_ACCESS({ name, route });
  },
  IS_CONTROL_AGENT_SCREEN_ALLOW: (state) => !!state.permissions.control_agent_screen,
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

const userinfo = new UserinfoStoreModule().getModule({
  state,
  getters,
  actions,
  mutations,
});

export default userinfo;
