import { FileServicesAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { AgentScreenshotsNamespace } from '../../namespace';
import { headers } from './_internals/headers';

export const useAgentScreenshotsTableStore = createTableStore(
	AgentScreenshotsNamespace,
	{
		apiModule: {
			getList: FileServicesAPI.getScreenRecordingsByAgent,
		},
		headers,
	},
);
