import { ActiveCallsAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { ActiveCallsNamespace } from '../../namespace';
import { headers } from './_internals/headers';

// Active calls are always scoped to this domain's own calls, never children's —
// skipParent defaults to true here so every caller gets it without repeating it.
export const wrappedApiModule = {
	...ActiveCallsAPI,
	getList: (params: Record<string, unknown>) =>
		ActiveCallsAPI.getList({
			skipParent: true,
			...params,
		}),
};

export const useActiveCallsTableStore = createTableStore(ActiveCallsNamespace, {
	apiModule: wrappedApiModule,
	headers,
});
