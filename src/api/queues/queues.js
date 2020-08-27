import { CallDirection, QueueServiceApiFactory } from 'webitel-sdk';
import parseJoined from '../../utils/joined';
import configuration from '../utils/openAPIConfig';
import instance from '../instance';

const queueService = new QueueServiceApiFactory(configuration, '', instance);

const parseQueueList = (items) => items.map((item) => ({
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
  agents: {
    active: item.online || 0,
    waiting: item.pause || 0,
  },
  members: {
    processing: item.processed || 0,
    waiting: item.waiting || 0,
  },
}));

const prepareRequestParams = (argParams) => {
  const params = { ...argParams };
  if (!params.period) params.period = 'today';
  const joined = parseJoined(params.period);
  params.joinedAtFrom = joined.start;
  params.joinedAtTo = joined.end;
  if (params.queueType) {
    let queueType = [];
    if (params.queueType.includes(CallDirection.Inbound)) {
      queueType = queueType.concat([1, 6]);
    }
    if (params.queueType.includes(CallDirection.Outbound)) {
      queueType = queueType.concat([0, 2, 3, 4, 5]);
    }
    params.queueType = queueType;
  }
  if (params.search && params.search.slice(-1) !== '*') params.search += '*';
  return params;
};

const getQueuesList = async (params) => {
  try {
    const {
      page = 1,
      size = 10,
      joinedAtFrom,
      joinedAtTo,
      search = '',
      ids,
      sort = '+priority',
      fields,
      team,
      queueType,
    } = prepareRequestParams(params);

    console.info(params);
    const res = await queueService.searchQueueReportGeneral(
      page,
      size,
      joinedAtFrom,
      joinedAtTo,
      undefined,
      fields,
      sort,
      search,
      ids,
      team,
      queueType,
    );
    return {
      items: res.items ? parseQueueList(res.items) : [],
      next: !!res.next,
    };
  } catch (err) {
    throw err;
  }
};

export default getQueuesList;
