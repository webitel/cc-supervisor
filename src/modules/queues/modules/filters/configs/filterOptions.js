import QueueFilterAPI from '../../../../_shared/lookups/api/queueLookupApi.js';
import TeamFilterAPI from '../../../../_shared/lookups/api/teamLookupApi.js';
import PeriodOptions from '../api/PeriodOptions.enum.js';
import QueueTypeOptions from '../api/QueueTypeOptions.js';

const SIZE_PARAM = 50;

export const filterOptions = {
  period: {
    locale: { label: 'filters.time' },
    options: PeriodOptions,
  },
  queue: {
    search: (params) => QueueFilterAPI({ ...params, size: SIZE_PARAM }),
    locale: { label: 'webitelUI.filters.queue' },
  },
  team: {
    search: TeamFilterAPI,
    locale: { label: 'webitelUI.filters.team' },
  },
  queueType: {
    locale: { label: 'filters.queueType' },
    options: QueueTypeOptions,
  },
};

