import webSocketClientController from '@webitel/ui-sdk/src/api/websocket/WebSocketClientController';
import { createStore } from 'vuex';
import agents from '../../modules/agents/store/agents';
import instance from '../api/instance';
import OpenAPIConfig from '../api/utils/openAPIConfig';

export default createStore({
	state: {
		api: {
			instance,
			OpenAPIConfig,
		},
		client: webSocketClientController,
	},
	modules: {
		agents,
	},
});
