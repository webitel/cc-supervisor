import { AgentsAPI } from '@webitel/api-services/api';

/** Agents that supervise at least one team. */
const getList = (params) =>
	AgentsAPI.getList({
		...params,
		isSupervisor: true,
	});

export default getList;
