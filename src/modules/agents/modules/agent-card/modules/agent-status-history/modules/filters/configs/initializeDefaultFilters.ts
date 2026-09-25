import { FilterOption } from '@webitel/ui-datalist/filters';

import { initializeDefaultDateRangeFilter } from '../../../../_shared/scripts/initializeDefaultDateRangeFilter';
import { useAgentStatusHistoryTableStore } from '../../../stores/datalist/agent-status-history';

// getAgentHistory has no server-side default for joinedAt, so this seeds it
// client-side instead.
export const initializeDefaultFilters = () => {
	const tableStore = useAgentStatusHistoryTableStore();
	initializeDefaultDateRangeFilter(tableStore, FilterOption.JoinedAt);
};
