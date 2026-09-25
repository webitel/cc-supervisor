import {
	createDateRangeFilterConfig,
	type FilterConfigDefinition,
	FilterOption,
} from '@webitel/ui-datalist/filters';

/**
 * Every agent-status-history filter, keyed by its name, so `headers.ts` can
 * point a column straight at the filter it opens instead of the configs
 * being exported one by one.
 */
export const filterConfigs = {
	// createDateRangeFilterConfig always sets hidePresets: true on the config
	// itself, and static-filter-field.vue always passes static-view — the
	// value field's own hidePresets = staticView && filterConfig.hidePresets
	// gate evaluates true either way, always showing the two datepickers
	// with no preset radios.
	[FilterOption.JoinedAt]: createDateRangeFilterConfig({
		name: FilterOption.JoinedAt,
		showFilterName: true,
	}),
} satisfies Record<string, FilterConfigDefinition>;

export const filtersOptions: FilterConfigDefinition[] =
	Object.values(filterConfigs);
