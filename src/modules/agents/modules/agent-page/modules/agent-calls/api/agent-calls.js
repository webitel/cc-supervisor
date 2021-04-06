import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { CallServiceApiFactory } from 'webitel-sdk';
import SdkListGetterApiConsumer
  from 'webitel-sdk/esm2015/api-consumers/ListGetter/sdk-list-getter-api-consumer/sdk-list-getter-api-consumer';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const callService = new CallServiceApiFactory(configuration, '', instance);

const listResponseHandler = (response) => {
  const items = response.items.map((item) => ({
    ...item,
    date: new Date(+item.createdAt).toLocaleDateString(),
    time: new Date(+item.createdAt).toLocaleTimeString(),
    holdSec: convertDuration(item.holdSec),
    billSec: convertDuration(item.billSec),
  }));
  return {
    ...response,
    items,
  };
};

const _getAgentCallsList = (getList) => function ({
                                                    page = 1,
                                                    size = 10,
                                                    search = '',
                                                    agentId,
                                                    sort = '-created_at',
                                                    fields,
                                                    // from = new Date().setHours(0, 0, 0, 0),
                                                    from = 100,
                                                    to = new Date().setHours(23, 59, 59, 999),
                                                  }) {
  const params = [page, size, search, sort, fields.concat(['id', 'files']), from, to, undefined, agentId];
  return getList(params);
};

const listGetter = new SdkListGetterApiConsumer(callService.searchHistoryCall,
  { listResponseHandler })
  .setGetListMethod(_getAgentCallsList);

export const getAgentCallsList = (params) => listGetter.getList(params);

export default {
  getList: getAgentCallsList,
};
