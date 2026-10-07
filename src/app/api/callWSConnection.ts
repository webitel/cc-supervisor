import { eventBus } from '@webitel/ui-sdk/scripts';
import { reactive, shallowReactive } from 'vue';
import { Client } from 'webitel-sdk';

import i18n from '../locale/i18n';

const { hostname, protocol } = window.location;
const origin = `${protocol}//${hostname}`.replace(/^http/, 'ws');
const BASE_URL = import.meta.env.PROD
	? `${origin}/ws`
	: import.meta.env.VITE_WEB_SOCKET_URL;

// [Claude] the members of the SDK's `SpyScreen` the app uses; the class isn't exported from `webitel-sdk`
export interface SpyScreenSession {
	id: string;
	toUserId: number;
	recordings: boolean;
	close: () => void;
	screenshot: () => Promise<object>;
	startRecord: () => Promise<object>;
	stopRecord: () => Promise<object>;
}

// [Claude] the SDK declares `spyScreenSessions` private, but screen sharing reads it directly
export type SupervisorClient = Omit<Client, 'spyScreenSessions'> & {
	spyScreenSessions: SpyScreenSession[];
};

declare global {
	interface Window {
		// [Claude] exposed for debugging from the browser console
		cli?: SupervisorClient;
	}
}

let cliInstance: Promise<SupervisorClient> | null = null;
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
	// [Claude] the SDK declares these stores private, but the UI reads them directly
	const cliStores = cli as unknown as {
		callStore: object;
		spyScreenSessions: object[];
	};
	cliStores.callStore = reactive(cliStores.callStore);
	cliStores.spyScreenSessions = reactive(cliStores.spyScreenSessions);
	// cli.jobStore = reactive(cli.jobStore);

	cli.on('disconnected', notifyDisconnected);
	cli.on('connected', () => {
		isSocketConnected = true;
	});

	await cli.connect();
	await cli.auth();
	isSocketConnected = true;
	const supervisorCli = cli as unknown as SupervisorClient;
	window.cli = supervisorCli;
	return supervisorCli;
};

export const getIsSocketConnected = () => isSocketConnected;

export const getCliInstance = async () => {
	if (!cliInstance) {
		cliInstance = createCliInstance().catch((err) => {
			cliInstance = null;
			throw err;
		});
	}
	return cliInstance;
};
