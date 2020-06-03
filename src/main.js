import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueNativeSock from 'vue-native-websocket';
import App from './the-app.vue';
import router from './router';
import store from './store';
import i18n from './locale/i18n';
import Icon from './components/utils/icon-wrap.vue';

import './assets/lib/normalize.scss';
import './assets/lib/bootstrap-grid.min.css';
import './assets/css/objects/lib-custom-styling/vuetable.scss';
import './assets/css/fonts.scss';
import './assets/css/main.scss';

Vue.use(VueNativeSock, 'ws://localhost:8081', {
  store,
  // format: 'json',
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
 });
Vue.config.productionTip = false;
Vue.component('icon', Icon);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
