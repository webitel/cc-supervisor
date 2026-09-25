import type { FilterName, IFiltersManager } from '@webitel/ui-datalist/filters';
import { getEndOfDay, getStartOfDay } from '@webitel/ui-sdk/scripts';

/**
 * Seeds a date-range filter with today's 00:00-23:59 if it isn't already set.
 * static-filter-field.vue always passes disable-default-value, so the field
 * never self-seeds — used both on a table's initial mount and after "reset
 * all", so a reset restores today's range instead of leaving the filter
 * empty. Shared by every agent-card table that needs this (agent-calls'
 * createdAt, agent-status-history's joinedAt, ...).
 */
export const initializeDefaultDateRangeFilter = (
	tableStore: Pick<IFiltersManager, 'hasFilter' | 'addFilter'>,
	filterOption: FilterName,
) => {
	if (!tableStore.hasFilter(filterOption)) {
		tableStore.addFilter({
			name: filterOption,
			value: {
				from: getStartOfDay(),
				to: getEndOfDay(),
			},
		});
	}
};
