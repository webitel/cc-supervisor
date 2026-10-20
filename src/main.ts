import './app/assets/icons/sprite';
import './app/css/main.scss';

import { setDefaultAxiosInstance } from '@webitel/api-services/api/axios';
import { configureZod } from '@webitel/ui-sdk/validations';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import instance from './app/api/instance';
import { createUserAccessControl } from './app/composables/useUserAccessControl';
import i18n from './app/locale/i18n';
import {
	plugin as WebitelUi,
	options as WebitelUiOptions,
} from './app/plugins/webitel/ui-sdk';
import { initRouter, router } from './app/router';
import { setTokenFromUrl } from './app/scripts/setTokenFromUrl';
import store from './app/store';
import App from './app/the-app.vue';
import { useUserinfoStore } from './modules/userinfo/store/userInfoStore';

const fetchConfig = async () => {
	const response = await fetch(`${import.meta.env.BASE_URL}/config.json`);
	return response.json();
};

// generated api-services clients call through this app's instance
setDefaultAxiosInstance(instance);

configureZod({
	t: i18n.global.t,
});

const pinia = createPinia();

const initApp = async () => {
	const app = createApp(App).use(store).use(pinia).use(i18n);

	const { initialize, routeAccessGuard, clearStorageNotifications } =
		useUserinfoStore();
	try {
		await initialize();
		createUserAccessControl(useUserinfoStore);
		await initRouter({
			beforeEach: [
				routeAccessGuard,
			],
			onUnauthorized: clearStorageNotifications,
		});
	} catch (err) {
		console.error('Error initializing app', err);
	}

	app.use(router);
	app.use(WebitelUi, {
		...WebitelUiOptions,
		router,
	}); // setup webitel ui after router init

	return app;
};

(async () => {
	let config: unknown;
	try {
		setTokenFromUrl();
		config = await fetchConfig();
	} catch (err) {
		console.error('before app mount error:', err);
	} finally {
		const app = await initApp();
		app.provide('$config', config);
		app.mount('#app');
	}
})();
