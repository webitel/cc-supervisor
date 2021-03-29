import router from '../../../app/router';
import { getCliInstance } from '../../../app/api/callWSConnection';
import { getSession } from '../../_reusable/auth/api/auth';

const defaultState = () => ({
  agent: {},
  domainId: 0,
  name: '',
  username: '',
  account: '',
  userId: 0,
  scope: [],
  roles: [],
  license: [],
  language: localStorage.getItem('lang'),
});

const state = {
  ...defaultState(),
};

const getters = {};

const actions = {
  RESTORE_SESSION: async (context) => {
    try {
      const userinfo = await getSession();
      context.dispatch('SUBSCRIBE_AGENT_STATUS');
      await context.dispatch('SET_SESSION', userinfo);
    } catch (err) {
      await router.replace('/auth');
      throw err;
    }
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
  SET_SESSION: (context, session) => {
    context.commit('SET_SESSION', session);
  },
  SET_DOMAIN_ID: (context, domainId) => {
    context.commit('SET_DOMAIN_ID', domainId);
  },
  RESET_STATE: (context) => {
    context.commit('RESET_STATE');
  },
};

const mutations = {
  SET_SESSION: (state, session) => {
    state.domainId = session.dc;
    state.account = session.preferredUsername;
    state.roles = session.roles;
    state.scope = session.scope;
    state.userId = session.userId;
    state.license = session.license;
    state.username = session.username;
    state.name = session.name;
  },
  SET_AGENT_INSTANCE: (state, agent) => {
    state.agent = agent;
  },
  SET_DOMAIN_ID: (state, domainId) => {
    state.domainId = domainId;
  },
  RESET_STATE: (state) => {
    Object.assign(state, defaultState());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
