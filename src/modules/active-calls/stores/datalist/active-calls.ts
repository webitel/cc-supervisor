import { createTableStore } from '@webitel/ui-datalist';

import ActiveCallsAPI from '../../api/active-calls';
import { ActiveCallsNamespace } from '../../namespace';
import headers from './_internals/headers';

export const useActiveCallsTableStore = createTableStore(ActiveCallsNamespace, {
	apiModule: ActiveCallsAPI,
	headers,
});
