import {
	createFilterConfig,
	type FilterConfigDefinition,
	FilterOption,
} from '@webitel/ui-datalist/filters';

/**
 * Every queues filter, keyed by its name, so `headers.ts` can point a column
 * straight at the filter it opens instead of the configs being exported one
 * by one.
 */
export const filterConfigs = {
	[FilterOption.QueuePeriod]: createFilterConfig({
		name: FilterOption.QueuePeriod,
		showFilterName: true,
	}),
	[FilterOption.Team]: createFilterConfig({
		name: FilterOption.Team,
		showFilterName: true,
	}),
	[FilterOption.Queue]: createFilterConfig({
		name: FilterOption.Queue,
		showFilterName: true,
	}),
	[FilterOption.QueueType]: createFilterConfig({
		name: FilterOption.QueueType,
		showFilterName: true,
	}),
} satisfies Record<string, FilterConfigDefinition>;

export const filtersOptions: FilterConfigDefinition[] =
	Object.values(filterConfigs);
