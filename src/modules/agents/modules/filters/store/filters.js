import QueryFiltersStoreModule
  from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';
import ApiFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/ApiFilterSchema';
import BaseFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/BaseFilterSchema';
import EnumFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/EnumFilterSchema';
import AgentStatusOptions from '../api/AgentStatusOptions.enum';
import QueueFilterAPI from '../../../../_shared/filters/api/queueFilter';
import RegionFilterAPI from '../api/regionFilter';
import SkillFilterAPI from '../api/skillFilter';
import SupervisorFilterAPI from '../api/supervisorFilter';
import TeamFilterAPI from '../../../../_shared/filters/api/teamFilter';
import AuditorFilterAPI from '../../../../active-calls/modules/filters/api/userFilter';
import UtilizationOptions from '../api/UtilizationOptions.enum';

const state = {
  search: new BaseFilterSchema(),
  status: new EnumFilterSchema({
    options: AgentStatusOptions,
    locale: { label: 'filters.status' },
  }),
  queue: new ApiFilterSchema({
    API: QueueFilterAPI,
    locale: { label: 'filters.queue' },
  }),
  skill: new ApiFilterSchema({
    API: SkillFilterAPI,
    locale: { label: 'filters.skill' },
  }),
  team: new ApiFilterSchema({
    API: TeamFilterAPI,
    locale: { label: 'filters.team' },
  }),
  supervisor: new ApiFilterSchema({
    API: SupervisorFilterAPI,
    locale: { label: 'filters.supervisor' },
  }),
  auditor: new ApiFilterSchema({
    API: AuditorFilterAPI,
    locale: { label: 'filters.auditor' },
  }),
  region: new ApiFilterSchema({
    API: RegionFilterAPI,
    locale: { label: 'filters.region' },
  }),
  utilization: new EnumFilterSchema({
    locale: { label: 'filters.utilization' },
    options: UtilizationOptions,
  }),
};

export default new QueryFiltersStoreModule({ state }).getModule();
