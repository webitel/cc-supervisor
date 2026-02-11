import { createTableStore } from '@webitel/ui-datalist';

import AgentsAPI from '../api/agents';
import { AgentsNamespace } from '../namespace';
import headers from '../store/_internals/headers';

export const useAgentsTableStore = createTableStore(AgentsNamespace, {
	apiModule: AgentsAPI,
	headers,
	storeType: 'pinia',
});
