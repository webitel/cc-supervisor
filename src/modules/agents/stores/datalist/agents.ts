import { AgentsAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { AgentsNamespace } from '../../namespace';
import { headers } from './_internals/headers';

export const useAgentsTableStore = createTableStore(AgentsNamespace, {
	apiModule: {
		getList: AgentsAPI.getStatusStatistics,
	},
	headers,
});
