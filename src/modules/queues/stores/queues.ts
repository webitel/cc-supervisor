import { createTableStore } from '@webitel/ui-datalist';

import QueuesAPI from '../api/queues';
import {QueuesNamespace } from '../namespace';
import headers from '../store/_internals/headers';

export const useQueuesTableStore = createTableStore(QueuesNamespace, {
  apiModule: QueuesAPI,
  headers,
  storeType: 'pinia'
});
