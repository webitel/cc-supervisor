import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const listResponseHandler = (response) => {
  const items = response.items.map((item) => ({
    ...item,
    from: new Date(+item.joinedAt).toLocaleString(),
    to: item.duration ? new Date(item.joinedAt - item.duration * 1000).toLocaleString() : null,
    duration: convertDuration(item.duration),
  }));
  return {
    ...response,
    items,
  };
};

const _getAgentHistoryList = (getList) => function ({
                                                      page = 1,
                                                      size = 10,
                                                      sort = '-joined_at',
                                                      from = new Date().setHours(0, 0, 0, 0),
                                                      to = new Date().setHours(23, 59, 59, 999),
                                                      agentId,
                                                    }) {
  const params = [page, size, from, to, agentId, sort];
  return getList(params);
};

const listGetter = new SdkListGetterApiConsumer(agentService.searchAgentStateHistory,
  { listResponseHandler })
.setGetListMethod(_getAgentHistoryList);

export const getAgentHistoryList = (params) => listGetter.getList(params);

export default {
  getList: getAgentHistoryList,
};
