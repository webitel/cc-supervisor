import QueryFiltersStoreModule
  from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';
import ApiFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/ApiFilterSchema';
import BaseFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/BaseFilterSchema';
import EnumFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/EnumFilterSchema';
import PeriodOptions from '../api/PeriodOptions.enum';
import QueueFilterAPI from '../../../../_shared/filters/api/queueFilter';
import TeamFilterAPI from '../../../../_shared/filters/api/teamFilter';
import QueueTypeOptions from '../api/QueueTypeOptions';

const state = {
  search: new BaseFilterSchema(),
  period: new EnumFilterSchema({
    options: PeriodOptions,
    locale: { label: 'filters.time' },
  }),
  queue: new ApiFilterSchema({
    API: QueueFilterAPI,
    locale: { label: 'filters.queue' },
  }),
  team: new ApiFilterSchema({
    API: TeamFilterAPI,
    locale: { label: 'filters.team' },
  }),
  queueType: new EnumFilterSchema({
    options: QueueTypeOptions,
    locale: { label: 'filters.queueType' },
  }),
};

export default new QueryFiltersStoreModule({ state }).getModule();
