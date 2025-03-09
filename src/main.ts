import { createApp } from 'vue';
import App from './app/the-app.vue';
import router from './app/router';
import store from './app/store';
import i18n from './app/locale/i18n';
import './app/assets/icons/sprite';

import { webitelUiOptions, webitelUiPlugin } from './app/plugins/webitel-ui';

// import './app/css/main.scss';

const setTokenFromUrl = (): void => {
  try {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('accessToken');
    if (accessToken) {
      localStorage.setItem('access-token', accessToken);
    }
  } catch (err) {
    console.error('Error restoring token from URL', err);
  }
};


const fetchConfig = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}/config.json`);
  return response.json();
};

const createVueInstance = () => {
  const app = createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .use(webitelUiPlugin, webitelUiOptions)
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
