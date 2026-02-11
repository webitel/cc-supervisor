import { PdfServicesAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { headers } from './_internals/headers';

export const usePdfsDataListStore = createTableStore(
	'agents/card/pdfs/datalist',
	{
		apiModule: PdfServicesAPI,
		headers,
	},
);
