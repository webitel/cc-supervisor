import {
	createDateRangeFilterConfig,
	type FilterConfigDefinition,
	FilterOption,
} from '@webitel/ui-datalist/filters';
import { RelativeDatetimeValue } from '@webitel/ui-sdk/enums';

export const filterConfigs = {
	[FilterOption.UploadedAt]: createDateRangeFilterConfig({
		name: FilterOption.UploadedAt,
		showFilterName: true,
	}),
} satisfies Record<string, FilterConfigDefinition>;

export const filtersOptions: FilterConfigDefinition[] =
	Object.values(filterConfigs);

export const defaultUploadedAtFilter = () => ({
	name: FilterOption.UploadedAt,
	value: RelativeDatetimeValue.Today,
});
