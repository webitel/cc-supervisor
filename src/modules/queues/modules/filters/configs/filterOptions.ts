import {
  FilterConfigDefinition,
  FilterOption,
  createFilterConfig,
} from '@webitel/ui-datalist/filters';

export const filtersOptions: FilterConfigDefinition[] = [
  createFilterConfig({
    name: FilterOption.QueuePeriod,
    showNameFilter: true,
  }),
  createFilterConfig({
    name: FilterOption.Team,
    showNameFilter: true,
  }),
  createFilterConfig({
    name: FilterOption.Queue,
    showNameFilter: true,
  }),
  createFilterConfig({
    name: FilterOption.QueueType,
    showNameFilter: true,
  }),
];
