import { PdfServicesAPI } from '@webitel/api-services/api';
import { normalizeDatetimeRange } from '@webitel/api-services/scripts';
import { createTableStore } from '@webitel/ui-datalist';

import { AgentPdfsNamespace } from '../../namespace';
import { headers } from './_internals/headers';

// listScreenrecordingExports expects flat uploadedAtFrom/uploadedAtTo, but
// the uploadedAt date-range filter sends a combined { from, to } value.
const wrappedApiModule = {
	...PdfServicesAPI,
	delete: (params) => PdfServicesAPI.delete(params.id!),
	getList: (params: Record<string, unknown>) => {
		const { uploadedAt, agentId, ...rest } = params;
		const normalized = normalizeDatetimeRange(
			uploadedAt as Parameters<typeof normalizeDatetimeRange>[0],
		);

		return PdfServicesAPI.getList({
			...rest,
			agentId: agentId as string,
			uploadedAtFrom:
				normalized?.from == null ? undefined : String(normalized.from),
			uploadedAtTo: normalized?.to == null ? undefined : String(normalized.to),
		});
	},
};

export const useAgentPdfsTableStore = createTableStore(AgentPdfsNamespace, {
	apiModule: wrappedApiModule,
	headers,
});
