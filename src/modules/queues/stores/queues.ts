import { createEnhancedTableStore } from '../../../app/store/EnhancedTableStore/createEnhancedTableStore';
import QueuesAPI from '../api/queues';
import { QueuesNamespace } from '../namespace';
import headers from '../store/_internals/headers';

export const useQueuesTableStore = createEnhancedTableStore(QueuesNamespace, {
  apiModule: QueuesAPI,
  // Extract 'aggs' property from API response to store aggregation data
  extractFromResponse: ['aggs'],
  headers,
  storeType: 'pinia'
});
