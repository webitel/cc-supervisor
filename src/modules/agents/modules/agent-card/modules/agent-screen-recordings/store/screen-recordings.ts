import { FileServicesAPI } from '@webitel/api-services/api';
import { createTableStore } from '@webitel/ui-datalist';
  
import { headers } from './_internals/headers';

export const useScreenRecordingsDatalistStore = createTableStore/*<WebitelCasesSource>*/(
  'supervisor/agents/agent-screen-recordings/datalist',
  {
    apiModule: {
      getList: FileServicesAPI.getScreenRecordingsList,
      delete: FileServicesAPI.deleteScreenRecordings,
    },
    headers,
  },
);
