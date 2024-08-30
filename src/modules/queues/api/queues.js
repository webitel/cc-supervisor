import { QueueServiceApiFactory } from 'webitel-sdk';
import {
  getDefaultGetListResponse,
  getDefaultGetParams,
} from '@webitel/ui-sdk/src/api/defaults/index.js';
import applyTransform, {
  merge,
  notify,
  snakeToCamel,
  starToSearch,
} from '@webitel/ui-sdk/src/api/transformers/index.js';
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

const getQueuesList = async (params) => {
  const defaultParams = {
    search: '',
    sort: '+priority',
  };

  const {
    page,
    size,
    period,
    search,
    sort,
    fields,
    queue,
    team,
    queueType,
  } = applyTransform(params, [
    merge(getDefaultGetParams()),
    merge(defaultParams),
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
    const { items, next, aggs } = applyTransform(response.data, [
      snakeToCamel(),
      merge(getDefaultGetListResponse()),
      listResponseHandler,
    ]);
    return {
      items,
      aggs,
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
