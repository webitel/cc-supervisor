import { AgentsAPI } from '@webitel/api-services/api';

/**
 * `progressiveCount` is validated with `minValue(1)`, so an unset value has to
 * stay `null` — the shared client's default of `0` would fail validation on
 * load.
 */
const defaultObject = {
	_dirty: false,
	progressiveCount: null,
	chatCount: 0,
};

const getAgent = ({ itemId }) =>
	AgentsAPI.get({
		itemId,
		defaultObject,
	});

export default {
	get: getAgent,
	patch: (payload) => AgentsAPI.patch(payload),
};
