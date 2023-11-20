import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';
import applyTransform, {
  merge, mergeEach, notify,
  snakeToCamel,
  starToSearch
} from "@webitel/ui-sdk/src/api/transformers";
import {getDefaultGetListResponse, getDefaultGetParams} from "@webitel/ui-sdk/src/api/defaults";

const agentService = new AgentServiceApiFactory(configuration, '', instance);

// const listResponseHandler = (response) => {
//   const items = response.items.map((item) => ({
//     ...item,
//     from: new Date(+item.joinedAt).toLocaleString(),
//     to: item.duration ? new Date(+item.joinedAt + item.duration * 1000).toLocaleString() : null,
//     duration: convertDuration(item.duration),
//   }));
//   return {
//     ...response,
//     items,
//   };
// };

// const _getAgentHistoryList = (getList) => function ({
//                                                       page = 1,
//                                                       size = 10,
//                                                       sort = '-joined_at',
//                                                       from = new Date().setHours(0, 0, 0, 0),
//                                                       to = new Date().setHours(23, 59, 59, 999),
//                                                       agentId,
//                                                     }) {
//   const params = [page, size, from, to, agentId, sort];
//   return getList(params);
// };

// const listGetter = new SdkListGetterApiConsumer(agentService.searchAgentStateHistory,
//   { listResponseHandler })
// .setGetListMethod(_getAgentHistoryList);

export const getAgentHistoryList = async (params) => {
  const responseHandler = (response) => {
    const items = response.items.map((item) => ({
      ...item,
      from: new Date(+item.joinedAt).toLocaleString(),
      to: item.duration ? new Date(+item.joinedAt + item.duration * 1000).toLocaleString() : null,
      duration: convertDuration(item.duration),
    }));
    return {
      ...response,
      items,
    };
  };

  const {
    page = 1,
    size = 10,
    sort = '-joined_at',
    from = new Date().setHours(0, 0, 0, 0),
    to = new Date().setHours(23, 59, 59, 999),
    agentId,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
    starToSearch('search'),
  ]);

  try {
    const response = await agentService.searchAgentStateHistory(
      page,
      size,
      from,
      to,
      agentId,
      sort,
    );
    const { items, next } = applyTransform(response.data, [
      snakeToCamel(),
      merge(getDefaultGetListResponse()),
      responseHandler,
    ]);
    return {
      items,
      next,
    };
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

export default {
  getList: getAgentHistoryList,
};
