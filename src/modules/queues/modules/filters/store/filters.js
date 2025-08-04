import ApiFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/ApiFilterSchema';
import BaseFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/BaseFilterSchema';
import EnumFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/EnumFilterSchema';
import QueryFiltersStoreModule
  from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';

import QueueFilterAPI from '../../../../_shared/lookups/api/queueLookupApi';
import TeamFilterAPI from '../../../../_shared/lookups/api/teamLookupApi';
import PeriodOptions from '../api/PeriodOptions.enum';
import QueueTypeOptions from '../api/QueueTypeOptions';

const state = {
  search: new BaseFilterSchema(),
  period: new EnumFilterSchema({
    options: PeriodOptions,
    locale: { label: 'filters.time' },
  }),
  queue: new ApiFilterSchema({
    API: (params) => QueueFilterAPI({ ...params, size: 50 }), // бо клієнт хоче щоб все вміщалось ))
    locale: { label: 'webitelUI.filters.queue' },
  }),
  team: new ApiFilterSchema({
    API: TeamFilterAPI,
    locale: { label: 'webitelUI.filters.team' },
  }),
  queueType: new EnumFilterSchema({
    options: QueueTypeOptions,
    locale: { label: 'filters.queueType' },
  }),
};

export default new QueryFiltersStoreModule({ state }).getModule();
