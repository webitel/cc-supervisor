import { FileServicesAPI } from '@webitel/api-services/api';
import { normalizeDatetimeRange } from '@webitel/api-services/scripts';
import { createTableStore } from '@webitel/ui-datalist';

import { AgentScreenshotsNamespace } from '../../namespace';
import { headers } from './_internals/headers';

// getScreenRecordingsByAgent expects flat uploadedAtFrom/uploadedAtTo, but
// the uploadedAt date-range filter sends a combined { from, to } value.
const wrappedApiModule = {
	getList: (params: Record<string, unknown>) => {
		const { uploadedAt, agentId, ...rest } = params;
		const normalized = normalizeDatetimeRange(
			uploadedAt as Parameters<typeof normalizeDatetimeRange>[0],
		);

		return FileServicesAPI.getScreenRecordingsByAgent({
			...rest,
			agentId: agentId as string,
			uploadedAtFrom:
				normalized?.from == null ? undefined : String(normalized.from),
			uploadedAtTo: normalized?.to == null ? undefined : String(normalized.to),
		});
	},
};

export const useAgentScreenshotsTableStore = createTableStore(
	AgentScreenshotsNamespace,
	{
		apiModule: wrappedApiModule,
		headers,
	},
);
