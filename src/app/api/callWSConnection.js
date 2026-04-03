import { reactive, shallowReactive } from 'vue';
import { Client } from 'webitel-sdk';

import eventBus from '@webitel/ui-sdk/src/scripts/eventBus';

import i18n from '../locale/i18n';

const { hostname, protocol } = window.location;
const origin = `${protocol}//${hostname}`.replace(/^http/, 'ws');
const BASE_URL = import.meta.env.PROD
	? `${origin}/ws`
	: import.meta.env.VITE_WEB_SOCKET_URL;

let cliInstance = null;
// Prevents duplicate toasts when SDK emits disconnect more than once
// during reconnect/teardown cycles.
let isDisconnectNotificationShown = false;
let isSocketConnected = false;

const notifyDisconnected = () => {
	isSocketConnected = false;
	if (isDisconnectNotificationShown) return;
	isDisconnectNotificationShown = true;
	eventBus.$emit('notification', {
		type: 'error',
		text: i18n.global.t('errorNotifications.websocketDisconnect'),
	});
};

const createCliInstance = async () => {
	const token = localStorage.getItem('access-token');
	// Reset guard for each new client lifecycle.
	isDisconnectNotificationShown = false;

	const config = {
		endpoint: BASE_URL,
		registerWebDevice: true,
		token,
	};

	// why reactive? https://github.com/vuejs/core/discussions/7811#discussioncomment-5181921
	const cli = shallowReactive(new Client(config));

	// why reactive? https://github.com/vuejs/core/discussions/7811#discussioncomment-5181921
	// cli.conversationStore = reactive(cli.conversationStore);
	cli.callStore = reactive(cli.callStore);
	cli.spyScreenSessions = reactive(cli.spyScreenSessions);
	// cli.jobStore = reactive(cli.jobStore);

	cli.on('disconnected', notifyDisconnected);
	cli.on('connected', () => {
		isSocketConnected = true;
	});

	await cli.connect();
	await cli.auth();
	isSocketConnected = true;
	window.cli = cli;
	return cli;
};

export const getIsSocketConnected = () => isSocketConnected;

export const destroyCliInstance = async () => {
	if (cliInstance) {
		cliInstance.then((cli) => cli.destroy());
	}
	cliInstance = null;
};

export const getCliInstance = async () => {
	if (!cliInstance) {
		cliInstance = createCliInstance().catch((err) => {
			cliInstance = null;
			throw err;
		});
	}
	return cliInstance;
};
