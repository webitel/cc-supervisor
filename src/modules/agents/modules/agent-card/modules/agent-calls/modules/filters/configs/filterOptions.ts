import {
	createDateRangeFilterConfig,
	createFilterConfig,
	type FilterConfigDefinition,
	FilterOption,
} from '@webitel/ui-datalist/filters';
import { RelativeDatetimeValue } from '@webitel/ui-sdk/enums';

/**
 * Every agent-calls filter, keyed by its name, so `headers.ts` can point a
 * column straight at the filter it opens instead of the configs being
 * exported one by one. Insertion order is the order the filters icon's menu
 * shows them in.
 */
export const filterConfigs = {
	[FilterOption.CreatedAt]: createDateRangeFilterConfig({
		name: FilterOption.CreatedAt,
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

export const filtersOptions: FilterConfigDefinition[] =
	Object.values(filterConfigs);

// The list endpoint 400s unless created_at (or q) is present, so this is
// seeded client-side — same convention as queues/modules/logs'
// defaultJoinedAtFilter.
export const defaultCreatedAtFilter = () => ({
	name: FilterOption.CreatedAt,
	value: RelativeDatetimeValue.Today,
});
