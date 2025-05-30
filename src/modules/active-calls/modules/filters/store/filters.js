import ApiFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/ApiFilterSchema';
import BaseFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/BaseFilterSchema';
import EnumFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/EnumFilterSchema';
import QueryFiltersStoreModule from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';

import AgentFilterAPI from '../../../../_shared/lookups/api/agentLookupApi';
import GatewayFilterAPI from '../../../../_shared/lookups/api/gatewayLookupApi';
import QueueFilterAPI from '../../../../_shared/lookups/api/queueLookupApi';
import SupervisorFilterAPI from '../../../../_shared/lookups/api/supervisorLookupApi';
import TeamFilterAPI from '../../../../_shared/lookups/api/teamLookupApi';
import UserFilterAPI from '../../../../_shared/lookups/api/userLookupApi';
import DirectionOptions from '../../../../_shared/lookups/lookups/DirectionOptions.lookup';
import ResultFilterOptions from '../resultFilter/ResultFilter.lookup';

const state = {
  direction: new EnumFilterSchema({
    options: DirectionOptions,
    locale: { label: 'filters.direction' },
  }),
  result: new EnumFilterSchema({
    options: ResultFilterOptions,
    locale: { label: 'filters.result' },
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
  team: new ApiFilterSchema({
    API: TeamFilterAPI,
    locale: { label: 'filters.team' },
  }),
  supervisor: new ApiFilterSchema({
    API: SupervisorFilterAPI,
    locale: { label: 'filters.supervisor' },
  }),
  skipParent: new BaseFilterSchema({
    defaultValue: true,
  }),
};

export default new QueryFiltersStoreModule({ state }).getModule();
