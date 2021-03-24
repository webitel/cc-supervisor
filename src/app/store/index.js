import Vue from 'vue';
import Vuex from 'vuex';
import userinfo from '../../modules/userinfo/store/userinfo';
import queues from '../../modules/queues/store/queues';
import agents from '../../modules/agents/store/agents';
import agentChats from '../../modules/agents/modules/agent-page/store/agent-chats';
import agentCalls from '../../modules/agents/modules/agent-page/store/agent-calls';
import activeCalls from '../../modules/active-calls/store/activeCalls';
import agentAttentions from '../../modules/agents/modules/agent-page/store/agent-attentions';
import call from '../../modules/call-window/store/call';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userinfo,
    queues,
    agents,
    agentChats,
    agentCalls,
    agentAttentions,
    call,
    activeCalls,
  },
});
