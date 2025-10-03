import { FileServicesAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { headers } from './_internals/headers';


export const useScreenshotsDataListStore = createTableStore/*<WebitelCasesSource>*/(
  'agents/card/screenshots/datalist',
  {
    apiModule: {
      getList: FileServicesAPI.getScreenRecordingsByAgent,
    },
    headers,
  },
);
