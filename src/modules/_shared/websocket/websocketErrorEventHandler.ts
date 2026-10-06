import { eventBus } from '@webitel/ui-sdk/scripts';

import i18n from '../../../app/locale/i18n';

type WebSocketError = {
	id?: string;
	message?: string;
	detail?: string;
};

const websocketErrorEventHandler = (error: WebSocketError) => {
	const errorKey = error?.id?.replaceAll('.', '_');
	const localeKey = errorKey ? `error.websocket.${errorKey}` : null;

	eventBus.$emit('notification', {
		type: 'error',
		text:
			localeKey && i18n.global.te(localeKey)
				? i18n.global.t(localeKey)
				: error?.message || error?.detail || error,
	});

	return error;
};

export default websocketErrorEventHandler;
