import { createTableStore } from '@webitel/ui-datalist';

import ActiveCallsAPI from '../api/active-calls';
import { ActiveCallsNamespace } from '../namespace';
import headers from '../store/_internals/headers';

export const useActiveCallsTableStore = createTableStore(ActiveCallsNamespace, {
	apiModule: ActiveCallsAPI,
	headers,
	storeType: 'pinia',
});
