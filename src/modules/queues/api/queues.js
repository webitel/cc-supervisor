import { QueueServiceApiFactory } from 'webitel-sdk';
import SdkListGetterApiConsumer
  from 'webitel-sdk/esm2015/api-consumers/ListGetter/sdk-list-getter-api-consumer/sdk-list-getter-api-consumer';
import instance from '../../../app/api/instance';
import configuration from '../../../app/api/utils/openAPIConfig';
import parseJoined from './_internals/joined';

const queueService = new QueueServiceApiFactory(configuration, '', instance);

const listResponseHandler = (response) => {
  const items = response.items.map((item) => ({
    ...item,
    _isSelected: false,
    count: item.count || 0,
    bridged: item.bridged ? `${+item.bridged.toFixed(2)}%` : 0,
    abandoned: item.abandoned ? `${+item.abandoned.toFixed(2)}%` : 0,
    sumBillSec: item.sumBillSec ? +item.sumBillSec.toFixed(2) : 0,
    avgWrapSec: item.avgWrapSec ? +item.avgWrapSec.toFixed(2) : 0,
    avgAsaSec: item.avgAsaSec ? +item.avgAsaSec.toFixed(2) : 0,
    avgAwtSec: item.avgAwtSec ? +item.avgAwtSec.toFixed(2) : 0,
    avgAhtSec: item.avgAhtSec ? +item.avgAhtSec.toFixed(2) : 0,
    agentStatus: {
      online: item.online || 0,
      pause: item.pause || 0,
      offline: item.offline || 0,
    },
    members: {
      processing: item.processed || 0,
      waiting: item.waiting || 0,
    },
  }));
  return {
    ...response,
    items,
  };
};

const prepareRequestParams = (argParams) => {
  const params = { ...argParams };
  params.queueId = argParams.queue;
  Object.assign(params, parseJoined(params.period));
  return params;
};

const _getQueuesList = (getList) => function (params) {
  const {
    page = 1,
    size = 10,
    joinedAtFrom,
    joinedAtTo,
    search = '',
    sort = '+priority',
    fields,
    queueId,
    team,
    queueType,
  } = prepareRequestParams(params);
  const reqParams = [page, size, joinedAtFrom, joinedAtTo, undefined, fields, sort,
    search, queueId, team, queueType];
  return getList(reqParams);
};

const listGetter = new SdkListGetterApiConsumer(queueService.searchQueueReportGeneral,
  { listResponseHandler })
  .setGetListMethod(_getQueuesList);

const getQueuesList = (params) => listGetter.getList(params);

export default getQueuesList;
