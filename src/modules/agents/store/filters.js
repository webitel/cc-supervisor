import QueryFiltersStoreModule
  from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';
import AgentStatusOptions from '../../_shared/filters/api/AgentStatusOptions.enum';
import QueueFilterAPI from '../../_shared/filters/api/queueFilter';
import RegionFilterAPI from '../../_shared/filters/api/regionFilter';
import SkillFilterAPI from '../../_shared/filters/api/skillFilter';
import SupervisorFilterAPI from '../../_shared/filters/api/supervisorFilter';
import TeamFilterAPI from '../../_shared/filters/api/teamFilter';
import AuditorFilterAPI from '../../_shared/filters/api/userFilter';
import UtilizationOptions from '../../_shared/filters/api/UtilizationOptions.enum';
import ApiFilterSchema from '../../_shared/filters/classes/ApiFilterSchema';
import BaseFilterSchema from '../../_shared/filters/classes/BaseFilterSchema';
import EnumFilterSchema from '../../_shared/filters/classes/EnumFilterSchema';

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
