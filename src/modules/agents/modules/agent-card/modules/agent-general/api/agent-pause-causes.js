import { AgentsAPI } from '@webitel/api-services/api';

/**
 * Adapter for `TableStoreModule`, which expects an API module exposing
 * `getList`. The tests mock this module path.
 */
export const getAgentPauseCauses = (params) =>
	AgentsAPI.getPauseCausesForAgent(params);

export default {
	getList: getAgentPauseCauses,
};
