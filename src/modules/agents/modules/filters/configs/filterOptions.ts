import {
  FilterConfigDefinition,
  FilterOption,
  createFilterConfig,
} from '@webitel/ui-datalist/filters';

export const filtersOptions: FilterConfigDefinition[] = [
  createFilterConfig({
    name: FilterOption.AgentStatus,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.Queue,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.Skill,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.Team,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.Supervisor,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.Auditor,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.Region,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.UtilizationProgress,
    showFilterName: true,
  })
];
