import { FileServicesAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { AgentScreenRecordingsNamespace } from '../../namespace';
import { headers } from './_internals/headers';

export const useAgentScreenRecordingsTableStore = createTableStore(
	AgentScreenRecordingsNamespace,
	{
		apiModule: {
			getList: FileServicesAPI.getScreenRecordingsByAgent,
		},
		headers,
	},
);
