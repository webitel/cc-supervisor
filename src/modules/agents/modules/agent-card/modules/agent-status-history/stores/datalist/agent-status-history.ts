import { AgentsAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';
import { ref } from 'vue';

import { AgentStatusHistoryNamespace } from '../../namespace';
import { headers } from './_internals/headers';

// AgentsAPI.getAgentHistory needs the agent's `parentId` — it isn't a
// user-editable filter, so it's injected here rather than exposed through
// filtersManager.
export const agentStatusHistoryAgentId = ref<string | undefined>();

const wrappedApiModule = {
	...AgentsAPI,
	getList: (params: Record<string, unknown>) =>
		AgentsAPI.getAgentHistory({
			...params,
			parentId: agentStatusHistoryAgentId.value,
		}),
};

export const useAgentStatusHistoryTableStore = createTableStore(
	AgentStatusHistoryNamespace,
	{
		apiModule: wrappedApiModule,
		headers,
	},
);
