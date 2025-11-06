import {
  FilterConfigDefinition,
  FilterOption,
  createFilterConfig,
} from '@webitel/ui-datalist/filters';

export const filtersOptions: FilterConfigDefinition[] = [
  createFilterConfig({
    name: FilterOption.QueuePeriod,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.Team,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.Queue,
    showFilterName: true,
  }),
  createFilterConfig({
    name: FilterOption.QueueType,
    showFilterName: true,
  }),
];
