import Vue from 'vue';
import Vuex from 'vuex';
import userinfo from '../../modules/userinfo/store/userinfo';
import queues from '../../modules/queues/store/queues';
import agents from '../../modules/agents/store/agents';
import agentChats from '../../modules/agents/modules/agent-page/store/_unused/agent-chats';
import activeCalls from '../../modules/active-calls/store/active-calls';
import agentAttentions from '../../modules/agents/modules/agent-page/store/_unused/agent-attentions';
import call from '../../modules/call-window/store/call';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    OPEN_SESSION: (context) => {
      context.dispatch('userinfo/RESTORE_SESSION');
    },
    CLOSE_SESSION: () => {},
  },
  modules: {
    userinfo,
    queues,
    agents,
    agentChats,
    agentAttentions,
    call,
    activeCalls,
  },
});
