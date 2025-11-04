import TableStoreModule from '../../../app/store/BaseStoreModules/TableStoreModule';
import QueuesAPI from '../api/queues';
import headers from './_internals/headers';

const state = {
  headers,
};

const queues = new TableStoreModule({ state })
  .attachAPIModule(QueuesAPI)
  .generateAPIActions()
export default queues;
