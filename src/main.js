import Vue from 'vue';
import App from './the-app.vue';
import router from './router';
import store from './store';
import i18n from './locale/i18n';

import './assets/lib/normalize.scss';
import './assets/lib/bootstrap-grid.min.css';
import './assets/css/objects/lib-custom-styling/vuetable.scss';
import './assets/css/fonts.scss';
import './assets/css/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
