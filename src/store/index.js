import Vue from 'vue';
import Vuex from 'vuex';
import userinfo from './modules/userinfo/userinfo';
import queues from './modules/queues/queues';
import agents from './modules/agents/agents';
import agentChats from './modules/agents/agent-chats';
import agentCalls from './modules/agents/agent-calls';
import activeCalls from './modules/activeCalls/activeCalls';
import agentAttentions from './modules/agents/agent-attentions';
import call from './modules/call/call';

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
