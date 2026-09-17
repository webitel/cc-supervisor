import { ActiveCallsAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { ActiveCallsNamespace } from '../../namespace';
import headers from './_internals/headers';

export const useActiveCallsTableStore = createTableStore(ActiveCallsNamespace, {
	apiModule: ActiveCallsAPI,
	headers,
});
