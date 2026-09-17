import {
	createFilterConfig,
	type FilterConfigDefinition,
	FilterOption,
} from '@webitel/ui-datalist/filters';

/**
 * Every active-calls filter, keyed by its name, so `headers.ts` can point a
 * column straight at the filter it opens instead of the configs being
 * exported one by one. Insertion order is the order the filters icon's menu
 * shows them in.
 */
export const filterConfigs = {
	[FilterOption.CallDirection]: createFilterConfig({
		name: FilterOption.CallDirection,
		showFilterName: true,
	}),
	[FilterOption.CallReportingResult]: createFilterConfig({
		name: FilterOption.CallReportingResult,
		showFilterName: true,
	}),
	[FilterOption.Gateway]: createFilterConfig({
		name: FilterOption.Gateway,
		showFilterName: true,
	}),
	[FilterOption.Queue]: createFilterConfig({
		name: FilterOption.Queue,
		showFilterName: true,
	}),
	[FilterOption.User]: createFilterConfig({
		name: FilterOption.User,
		showFilterName: true,
	}),
	[FilterOption.Agent]: createFilterConfig({
		name: FilterOption.Agent,
		showFilterName: true,
	}),
	[FilterOption.Supervisor]: createFilterConfig({
		name: FilterOption.Supervisor,
		showFilterName: true,
	}),
	[FilterOption.Team]: createFilterConfig({
		name: FilterOption.Team,
		showFilterName: true,
	}),
} satisfies Record<string, FilterConfigDefinition>;

export const buildFiltersOptions = ({
	hasUsersReadAccess,
	hasQueuesReadAccess,
	hasAgentsReadAccess,
	hasGatewaysReadAccess,
	hasTeamsReadAccess,
}: {
	hasUsersReadAccess: boolean;
	hasQueuesReadAccess: boolean;
	hasAgentsReadAccess: boolean;
	hasGatewaysReadAccess: boolean;
	hasTeamsReadAccess: boolean;
}): FilterConfigDefinition[] =>
	[
		filterConfigs[FilterOption.CallDirection],
		filterConfigs[FilterOption.CallReportingResult],
		hasGatewaysReadAccess && filterConfigs[FilterOption.Gateway],
		hasQueuesReadAccess && filterConfigs[FilterOption.Queue],
		hasUsersReadAccess && filterConfigs[FilterOption.User],
		hasAgentsReadAccess && filterConfigs[FilterOption.Agent],
		hasAgentsReadAccess && filterConfigs[FilterOption.Supervisor],
		hasTeamsReadAccess && filterConfigs[FilterOption.Team],
	].filter(Boolean) as FilterConfigDefinition[];
