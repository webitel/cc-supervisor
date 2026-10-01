import { QueuesAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { QueuesNamespace } from '../../namespace';
import { headers } from './_internals/headers';

export const useQueuesTableStore = createTableStore(QueuesNamespace, {
	apiModule: {
		...QueuesAPI,
		getList: QueuesAPI.getReportGeneral,
	},
	headers,
});
