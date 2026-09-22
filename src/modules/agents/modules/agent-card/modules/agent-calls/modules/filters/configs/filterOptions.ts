import {
	createFilterConfig,
	type FilterConfigDefinition,
	FilterOption,
} from '@webitel/ui-datalist/filters';

/**
 * Every agent-calls filter, keyed by its name, so `headers.ts` can point a
 * column straight at the filter it opens instead of the configs being
 * exported one by one. Insertion order is the order the filters icon's menu
 * shows them in.
 */
export const filterConfigs = {
	[FilterOption.CreatedAtFrom]: createFilterConfig({
		name: FilterOption.CreatedAtFrom,
		showFilterName: true,
	}),
	[FilterOption.CreatedAtTo]: createFilterConfig({
		name: FilterOption.CreatedAtTo,
		showFilterName: true,
	}),
	[FilterOption.Rated]: createFilterConfig({
		name: FilterOption.Rated,
		showFilterName: true,
	}),
	[FilterOption.RatedBy]: createFilterConfig({
		name: FilterOption.RatedBy,
		showFilterName: true,
	}),
} satisfies Record<string, FilterConfigDefinition>;

export const buildFiltersOptions = (): FilterConfigDefinition[] => [
	filterConfigs[FilterOption.CreatedAtFrom],
	filterConfigs[FilterOption.CreatedAtTo],
	filterConfigs[FilterOption.Rated],
	filterConfigs[FilterOption.RatedBy],
];
