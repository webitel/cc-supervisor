import ApiFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/ApiFilterSchema';
import BaseFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/BaseFilterSchema';
import EnumFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/EnumFilterSchema';
import QueryFiltersStoreModule
  from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';

import QueueFilterAPI from '../../../../_shared/lookups/api/queueLookupApi';
import RegionFilterAPI from '../../../../_shared/lookups/api/regionLookupApi';
import SkillFilterAPI from '../../../../_shared/lookups/api/skillLookupApi';
import SupervisorFilterAPI from '../../../../_shared/lookups/api/supervisorLookupApi';
import TeamFilterAPI from '../../../../_shared/lookups/api/teamLookupApi';
import AuditorFilterAPI from '../../../../_shared/lookups/api/userLookupApi';
import AgentStatusOptions from '../../../../_shared/lookups/lookups/AgentStatusOptions.lookup';
import UtilizationOptions from '../../../../_shared/lookups/lookups/UtilizationOptions.lookup';

const state = {
  search: new BaseFilterSchema(),
  status: new EnumFilterSchema({
    options: AgentStatusOptions,
    locale: { label: 'filters.status' },
  }),
  queue: new ApiFilterSchema({
    API: (params) => QueueFilterAPI({ ...params, size: 50 }), // бо клієнт хоче щоб все вміщалось ))
    locale: { label: 'webitelUI.filters.queue' },
  }),
  skill: new ApiFilterSchema({
    API: (params) => SkillFilterAPI({ ...params, size: 50 }), // бо клієнт хоче щоб все вміщалось ))
    locale: { label: 'filters.skill' },
  }),
  team: new ApiFilterSchema({
    API: TeamFilterAPI,
    locale: { label: 'webitelUI.filters.team' },
  }),
  supervisor: new ApiFilterSchema({
    API: SupervisorFilterAPI,
    locale: { label: 'objects.supervisor' },
  }),
  auditor: new ApiFilterSchema({
    API: AuditorFilterAPI,
    locale: { label: 'filters.auditor' },
  }),
  region: new ApiFilterSchema({
    API: RegionFilterAPI,
    locale: { label: 'objects.region' },
  }),
  utilization: new EnumFilterSchema({
    locale: { label: 'filters.utilization' },
    options: UtilizationOptions,
    multiple: false,
    closeOnSelect: true,
  }),
};

export default new QueryFiltersStoreModule({ state }).getModule();
