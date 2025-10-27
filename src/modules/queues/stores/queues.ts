import { createQueueTableStoreWrapper } from './createQueueTableStoreWrapper';
import QueuesAPI from '../api/queues';
import { QueuesNamespace } from '../namespace';
import headers from '../store/_internals/headers';

export const useQueuesTableStore = createQueueTableStoreWrapper(QueuesNamespace, {
  apiModule: QueuesAPI,
  headers,
  storeType: 'pinia'
});
