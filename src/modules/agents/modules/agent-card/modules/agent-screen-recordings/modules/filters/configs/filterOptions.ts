import {
	createDateRangeFilterConfig,
	type FilterConfigDefinition,
} from '@webitel/ui-datalist/filters';
import { RelativeDatetimeValue } from '@webitel/ui-sdk/enums';

const UploadedAt = 'uploadedAt';

export const filterConfigs = {
	[UploadedAt]: createDateRangeFilterConfig({
		name: UploadedAt,
		showFilterName: true,
	}),
} satisfies Record<string, FilterConfigDefinition>;

export const filtersOptions: FilterConfigDefinition[] =
	Object.values(filterConfigs);

export const defaultUploadedAtFilter = () => ({
	name: UploadedAt,
	value: RelativeDatetimeValue.Today,
});
