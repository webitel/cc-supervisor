import { FilterOption } from '@webitel/ui-datalist/filters';

import { initializeDefaultDateRangeFilter } from '../../../../_shared/scripts/initializeDefaultDateRangeFilter';
import { useAgentCallsTableStore } from '../../../stores/datalist/agent-calls';

// The list endpoint 400s unless created_at (or q) is present, so createdAt
// needs a default the first time the table loads.
export const initializeDefaultFilters = () => {
	const tableStore = useAgentCallsTableStore();
	initializeDefaultDateRangeFilter(tableStore, FilterOption.CreatedAt);
};
