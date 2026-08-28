import { AgentsAPI, QueuesAPI, TeamsAPI } from '@webitel/api-services/api';
import ApiFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/ApiFilterSchema';
import BaseFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/BaseFilterSchema';
import EnumFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/EnumFilterSchema';
import QueryFiltersStoreModule from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';

import GatewayFilterAPI from '../../../../_shared/lookups/api/gatewayLookupApi';
import SupervisorFilterAPI from '../../../../_shared/lookups/api/supervisorLookupApi';
import UserFilterAPI from '../../../../_shared/lookups/api/userLookupApi';
import DirectionOptions from '../../../../_shared/lookups/lookups/DirectionOptions.lookup';
import ResultFilterOptions from '../resultFilter/ResultFilter.lookup';

const state = {
	direction: new EnumFilterSchema({
		options: DirectionOptions,
		locale: {
			label: 'filters.direction',
		},
	}),
	result: new EnumFilterSchema({
		options: ResultFilterOptions,
		locale: {
			label: 'filters.result',
		},
	}),
	user: new ApiFilterSchema({
		API: UserFilterAPI,
		locale: {
			label: 'objects.user',
		},
	}),
	gateway: new ApiFilterSchema({
		API: GatewayFilterAPI,
		locale: {
			label: 'objects.gateway',
		},
	}),
	queue: new ApiFilterSchema({
		API: QueuesAPI.getList,
		locale: {
			label: 'objects.queue.queue',
		},
	}),
	agent: new ApiFilterSchema({
		API: AgentsAPI.getList,
		locale: {
			label: 'objects.agent.agent',
		},
	}),
	team: new ApiFilterSchema({
		API: TeamsAPI.getList,
		locale: {
			label: 'objects.team',
		},
	}),
	supervisor: new ApiFilterSchema({
		API: SupervisorFilterAPI,
		locale: {
			label: 'objects.supervisor',
		},
	}),
	skipParent: new BaseFilterSchema({
		defaultValue: true,
	}),
};

export default new QueryFiltersStoreModule({
	state,
}).getModule();
