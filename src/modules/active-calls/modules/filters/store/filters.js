import QueryFiltersStoreModule from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';
import ApiFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/ApiFilterSchema';
import EnumFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/EnumFilterSchema';
import DirectionOptions from '../api/DirectionOptions.enum';
import UserFilterAPI from '../api/userFilter';
import GatewayFilterAPI from '../api/gatewayFilter';
import QueueFilterAPI from '../../../../_shared/filters/api/queueFilter';
import AgentFilterAPI from '../../../../_shared/filters/api/agentFilter';

const state = {
  direction: new EnumFilterSchema({
    options: DirectionOptions,
    locale: { label: 'filters.direction' },
  }),
  user: new ApiFilterSchema({
    API: UserFilterAPI,
    locale: { label: 'filters.user' },
  }),
  gateway: new ApiFilterSchema({
    API: GatewayFilterAPI,
    locale: { label: 'filters.gateway' },
  }),
  queue: new ApiFilterSchema({
    API: QueueFilterAPI,
    locale: { label: 'filters.queue' },
  }),
  agent: new ApiFilterSchema({
    API: AgentFilterAPI,
    locale: { label: 'filters.agent' },
  }),
};

export default new QueryFiltersStoreModule({ state }).getModule();
