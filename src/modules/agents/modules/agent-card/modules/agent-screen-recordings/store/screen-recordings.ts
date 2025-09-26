import { FileServicesAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';

import { headers } from './_internals/headers';


export const useScreenRecordingsDataListStore = createTableStore/*<WebitelCasesSource>*/(
  'agents/card/screenRecordings/datalist',
  {
    apiModule: {
      getList: FileServicesAPI.getScreenRecordingsList,
    },
    headers,
  },
);
