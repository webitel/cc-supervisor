import { AgentsAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { AgentPauseCauseNamespace } from '../../namespace';
import { headers } from './_internals/headers';

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
