import { AgentSkillsAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { AgentSkillsNamespace } from '../../namespace';
import { headers } from './_internals/headers';

export const useAgentSkillsTableStore = createTableStore(AgentSkillsNamespace, {
	apiModule: AgentSkillsAPI,
	headers,
});
