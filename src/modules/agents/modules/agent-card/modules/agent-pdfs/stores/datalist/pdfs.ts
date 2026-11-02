import { PdfServicesAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { AgentPdfsNamespace } from '../../namespace';
import { headers } from './_internals/headers';

export const useAgentPdfsTableStore = createTableStore(AgentPdfsNamespace, {
	apiModule: {
		...PdfServicesAPI,
		delete: ({ id }) => PdfServicesAPI.delete(id),
	},
	headers,
});
