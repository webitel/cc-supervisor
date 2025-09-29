import QueueFilterAPI from '../../../../_shared/lookups/api/queueLookupApi.js';
import RegionFilterAPI
  from '../../../../_shared/lookups/api/regionLookupApi.js';
import SkillFilterAPI from '../../../../_shared/lookups/api/skillLookupApi.js';
import SupervisorFilterAPI
  from '../../../../_shared/lookups/api/supervisorLookupApi.js';
import TeamFilterAPI from '../../../../_shared/lookups/api/teamLookupApi.js';
import AuditorFilterAPI from '../../../../_shared/lookups/api/userLookupApi.js';
import AgentStatusOptions
  from '../../../../_shared/lookups/lookups/AgentStatusOptions.lookup.js';
import UtilizationOptions
  from '../../../../_shared/lookups/lookups/UtilizationOptions.lookup.js';

const LIST_SIZE = 50

export const filterOptions = {
  status: {
    options: AgentStatusOptions,
    locale: { label: 'filters.status' },
    storedProp: 'value',
  },
  queue: {
    search: (params) => QueueFilterAPI({ ...params, size: LIST_SIZE }), // because the client wants everything to fit ))
    locale: { label: 'webitelUI.filters.queue' },
  },
  skill: {
    search: (params) => SkillFilterAPI({ ...params, size: LIST_SIZE }), // because the client wants everything to fit ))
    locale: { label: 'filters.skill' },
  },
  team: {
    search: TeamFilterAPI,
    locale: { label: 'webitelUI.filters.team' },
  },
  supervisor: {
    search: SupervisorFilterAPI,
    locale: { label: 'objects.supervisor' },
  },
  auditor: {
    search: AuditorFilterAPI,
    locale: { label: 'filters.auditor' },
  },
  region: {
    search: RegionFilterAPI,
    locale: { label: 'objects.region' },
  },
  utilization: {
    locale: { label: 'filters.utilization' },
    options: UtilizationOptions,
    multiple: false,
    closeOnSelect: true,
  },
}
