import { AgentCallsAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';
import { ref } from 'vue';

import { AgentCallsNamespace } from '../../namespace';
import { headers } from './_internals/headers';

// AgentCallsAPI.getList needs the agent's `userId`, resolved asynchronously
// from the parent agent-card store — it isn't a user-editable filter, so it's
// injected here rather than exposed through filtersManager.
export const agentCallsUserId = ref<string | undefined>();

const wrappedApiModule = {
	...AgentCallsAPI,
	getList: (params: Record<string, unknown>) =>
		AgentCallsAPI.getList({
			...params,
			userId: agentCallsUserId.value,
		}),
};

export const useAgentCallsTableStore = createTableStore(AgentCallsNamespace, {
	apiModule: wrappedApiModule,
	headers,
});
