import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { CallServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const callService = new CallServiceApiFactory(configuration, '', instance);

const calcTime = (time) => (time ? new Date(+time).toLocaleTimeString() : null);
const calcDuration = (duration) => (duration ? convertDuration(duration) : null);

const listResponseHandler = (response) => {
  const items = response.items.map((item) => ({
    ...item,
    createdAt: item.createdAt ? new Date(+item.createdAt).toLocaleString() : null,
    answeredAt: calcTime(item.answeredAt),
    bridgedAt: calcTime(item.bridgedAt),
    queueBridgedAt: calcTime(item.queueBridgedAt),
    joinedAt: calcTime(item.joinedAt),
    leavingAt: calcTime(item.leavingAt),
    hangupAt: calcTime(item.hangupAt),
    reportingAt: calcTime(item.reportingAt),
    duration: calcDuration(item.duration),
    holdSec: calcDuration(item.holdSec),
    waitSec: calcDuration(item.waitSec),
    billSec: calcDuration(item.billSec),
    reportingSec: calcDuration(item.reportingSec),
    queueWaitSec: calcDuration(item.queueWaitSec),
    queueDurationSec: calcDuration(item.queueDurationSec),
    scoreRequired: item.scoreRequired ? (+item.scoreRequired).toFixed(2) : null,
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
                                                    rated,
                                                    ratedBy,
                                                    sort = '-created_at',
                                                    fields = [],
                                                    from = new Date().setHours(0, 0, 0, 0),
                                                    to = new Date().setHours(23, 59, 59, 999),
                                                  }) {
  const params = [page, size, search, sort, fields.concat(['id', 'files']), from, to, undefined, agentId,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, rated, ratedBy];
  return getList(params);
};

const listGetter = new SdkListGetterApiConsumer(
  callService.searchHistoryCall,
  { listResponseHandler },
)
  .setGetListMethod(_getAgentCallsList);

export const getAgentCallsList = (params) => listGetter.getList(params);

export default {
  getList: getAgentCallsList,
};
