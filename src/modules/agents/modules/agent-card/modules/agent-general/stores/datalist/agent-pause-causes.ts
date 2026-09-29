import { AgentsAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { AgentPauseCauseNamespace } from '../../namespace';
import { headers } from './_internals/headers';

// AgentsAPI.getPauseCausesForAgent expects `agentId`, not the generic
// `parentId` createTableStore sends — remapped here.
const wrappedApiModule = {
	...AgentsAPI,
	getList: (params: Record<string, unknown>) =>
		AgentsAPI.getPauseCausesForAgent({
			agentId: params.parentId as string,
		}),
};

export const useAgentPauseCauseTableStore = createTableStore(
	AgentPauseCauseNamespace,
	{
		apiModule: wrappedApiModule,
		headers,
	},
);
