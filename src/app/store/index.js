import Vue from 'vue';
import Vuex from 'vuex';
import now from '@webitel/cc-ui-sdk/src/store/modules/now/reactive-now';
import userinfo from '../../modules/userinfo/store/userinfo';
import queues from '../../modules/queues/store/queues';
import agents from '../../modules/agents/store/agents';
import agentChats from '../../modules/agents/modules/agent-card/store/_unused/agent-chats';
import activeCalls from '../../modules/active-calls/store/active-calls';
import agentAttentions from '../../modules/agents/modules/agent-card/store/_unused/agent-attentions';
import call from '../../modules/call-window/store/call';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    OPEN_SESSION: async (context) => Promise.all([
        context.dispatch('userinfo/OPEN_SESSION'),
        context.dispatch('now/SET_NOW_WATCHER', null, { root: true }),
      ]),
    CLOSE_SESSION: (context) => Promise.all([
        context.dispatch('ui/now/CLEAR_NOW_WATCHER', null, { root: true }),
      ]),
  },
  modules: {
    userinfo,
    queues,
    agents,
    agentChats,
    agentAttentions,
    call,
    now,
    activeCalls,
  },
});
