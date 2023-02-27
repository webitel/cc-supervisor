import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './app/the-app.vue';
import router from './app/router';
import store from './app/store';
import i18n from './app/locale/i18n';
import './app/assets/icons/sprite';

import './app/plugins/webitel-ui';

import './app/css/main.scss';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

const fetchConfig = async () => {
  const response = await fetch(`${process.env.BASE_URL}config.json`);
  return response.json();
};

const createVueInstance = () => {
  new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
  }).$mount('#app');
};

// init IIFE
(async () => {
  try {
    const config = await fetchConfig();
    await store.dispatch('OPEN_SESSION');
    Vue.prototype.$config = config;
  } catch (err) {
    console.error('before app mount error:', err);
  } finally {
    createVueInstance();
  }
})();
