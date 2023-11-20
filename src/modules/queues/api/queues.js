import { QueueServiceApiFactory } from 'webitel-sdk';
import {
  getDefaultGetListResponse,
  getDefaultGetParams,
} from '@webitel/ui-sdk/src/api/defaults';
import applyTransform, {
  camelToSnake,
  merge,
  mergeEach,
  notify,
  sanitize,
  snakeToCamel,
  starToSearch,
} from '@webitel/ui-sdk/src/api/transformers';
import instance from '../../../app/api/instance';
import configuration from '../../../app/api/utils/openAPIConfig';
import parseJoined from './_internals/joined';

const queueService = new QueueServiceApiFactory(configuration, '', instance);

const defaultAgentStatusObject = {
  total: 0,
  online: 0,
  pause: 0,
  offline: 0,
  free: 0,
};

const listResponseHandler = (response) => {
  const items = response.items.map((item) => ({
    ...item,
    _isSelected: false,
    count: item.count || 0,
    transferred: item.transferred || 0,
    bridged: item.bridged ? `${+item.bridged.toFixed(2)}%` : 0,
    abandoned: item.abandoned ? `${+item.abandoned.toFixed(2)}%` : 0,
    sumBillSec: item.sumBillSec ? +item.sumBillSec.toFixed(2) : 0,
    avgWrapSec: item.avgWrapSec ? +item.avgWrapSec.toFixed(2) : 0,
    avgAsaSec: item.avgAsaSec ? +item.avgAsaSec.toFixed(2) : 0,
    avgAwtSec: item.avgAwtSec ? +item.avgAwtSec.toFixed(2) : 0,
    avgAhtSec: item.avgAhtSec ? +item.avgAhtSec.toFixed(2) : 0,
    sl20: item.sl20 ? `${+item.sl20.toFixed(2)}%` : 0,
    sl30: item.sl30 ? `${+item.sl30.toFixed(2)}%` : 0,
    agentStatus: { ...defaultAgentStatusObject, ...item.agentStatus },
    members: {
      processing: item.processed || 0,
      waiting: item.waiting || 0,
    },
  }));
  const aggs = { ...defaultAgentStatusObject, ...response.aggs };
  return {
    ...response,
    items,
    aggs,
  };
};

// const _getQueuesList = (getList) => function ({
//                                                 page = 1,
//                                                 size = 10,
//                                                 period,
//                                                 search = '',
//                                                 sort = '+priority',
//                                                 fields,
//                                                 queue,
//                                                 team,
//                                                 queueType,
//                                               } = {}) {
//   const {
//     joinedAtFrom,
//     joinedAtTo
//   } = parseJoined(period);
//   const reqParams = [page, size, joinedAtFrom, joinedAtTo, undefined, fields, sort,
//     search, queue, team, queueType];
//   return getList(reqParams);
// };

// const listGetter = new SdkListGetterApiConsumer(queueService.searchQueueReportGeneral,
//   { listResponseHandler })
//   .setGetListMethod(_getQueuesList);

const getQueuesList = async (params) => {

  const {
    page = 1,
    size = 10,
    period,
    search = '',
    sort = '+priority',
    fields,
    queue,
    team,
    queueType,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
    starToSearch('search'),
  ]);

  const {
    joinedAtFrom,
    joinedAtTo
  } = parseJoined(period);

  try {
    const response = await queueService.searchQueueReportGeneral(
      page,
      size,
      joinedAtFrom,
      joinedAtTo,
      undefined,
      fields,
      sort,
      search,
      queue,
      team,
      queueType,
    );
    const { items, next } = applyTransform(response.data, [
      snakeToCamel(),
      merge(getDefaultGetListResponse()),
      listResponseHandler,
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
  getList: getQueuesList,
};
