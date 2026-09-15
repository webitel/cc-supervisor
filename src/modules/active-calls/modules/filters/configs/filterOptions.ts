import {
	createFilterConfig,
	type FilterConfigDefinition,
	FilterOption,
} from '@webitel/ui-datalist/filters';

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
		createFilterConfig({
			name: FilterOption.CallDirection,
			showFilterName: true,
		}),
		createFilterConfig({
			name: FilterOption.CallReportingResult,
			showFilterName: true,
		}),
		hasGatewaysReadAccess &&
			createFilterConfig({
				name: FilterOption.Gateway,
				showFilterName: true,
			}),
		hasQueuesReadAccess &&
			createFilterConfig({
				name: FilterOption.Queue,
				showFilterName: true,
			}),
		hasUsersReadAccess &&
			createFilterConfig({
				name: FilterOption.User,
				showFilterName: true,
			}),
		hasAgentsReadAccess &&
			createFilterConfig({
				name: FilterOption.Agent,
				showFilterName: true,
			}),
		hasAgentsReadAccess &&
			createFilterConfig({
				name: FilterOption.Supervisor,
				showFilterName: true,
			}),
		hasTeamsReadAccess &&
			createFilterConfig({
				name: FilterOption.Team,
				showFilterName: true,
			}),
	].filter(Boolean) as FilterConfigDefinition[];
