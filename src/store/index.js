import Vue from 'vue';
import Vuex from 'vuex';
import userinfo from './modules/userinfo/userinfo';
import queues from './modules/queues/queues';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userinfo,
    queues,
  },
});
