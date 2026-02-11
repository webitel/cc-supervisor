import QueuesAPI from '../api/queues';
import { QueuesNamespace } from '../namespace';
import headers from '../store/_internals/headers';
import { createQueueTableStoreWrapper } from './createQueueTableStoreWrapper';

export const useQueuesTableStore = createQueueTableStoreWrapper(
	QueuesNamespace,
	{
		apiModule: QueuesAPI,
		headers,
		storeType: 'pinia',
	},
);
