import './app/assets/icons/sprite';

import { createApp } from 'vue';

import i18n from './app/locale/i18n';
import WebitelUi from './app/plugins/webitel-ui';
import router from './app/router';
import store from './app/store';
import { createPinia } from 'pinia';
import App from './app/the-app.vue';

// import './app/css/main.scss';

const setTokenFromUrl = () => {
  try {
    const queryMap = window.location.search.slice(1)
    .split('&')
    .reduce((obj, query) => {
      const [key, value] = query.split('=');
      obj[key] = value;
      return obj;
    }, {});

    if (queryMap.accessToken) {
      localStorage.setItem('access-token', queryMap.accessToken);
    }
  } catch (err) {
    console.error('Error restoring token from url', err);
  }
};

const fetchConfig = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}/config.json`);
  return response.json();
};

const pinia = createPinia()

const createVueInstance = () => {
  const app = createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .use(...WebitelUi)
    .use(pinia)
  return app;
};


// init IIFE
(async () => {
  let config;
  try {
    setTokenFromUrl();
    config = await fetchConfig();
    await store.dispatch('OPEN_SESSION');
  } catch (err) {
    console.error('before app mount error:', err);
  } finally {
    const app = createVueInstance();
    app.provide('$config', config);
    app.mount('#app');
  }
})();
