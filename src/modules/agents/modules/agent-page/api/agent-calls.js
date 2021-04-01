import { CallServiceApiFactory } from 'webitel-sdk';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import configuration from '../../../../../app/api/utils/openAPIConfig';
import instance from '../../../../../app/api/instance';

const callService = new CallServiceApiFactory(configuration, '', instance);
export const agentCallFields = ['id', 'from', 'to', 'direction', 'bill_sec', 'hold_sec',
  'answered_at', 'created_at', 'destination', 'files'];

const parseAgentCallsList = (items) => items.map((item) => ({
  ...item,
  date: new Date(+item.createdAt).toLocaleDateString(),
  time: new Date(+item.createdAt).toLocaleTimeString(),
  holdSec: convertDuration(item.holdSec),
  billSec: convertDuration(item.billSec),
}));

export const getAgentCallsList = async ({
                                          page = 1,
                                          size = 10,
                                          search = '',
                                          agentId,
                                          sort = '-created_at',
                                        }) => {
  try {
    // eslint-disable-next-line no-param-reassign
    if (search && search.slice(-1) !== '*') search += '*';
    const start = new Date().setHours(0, 0, 0, 0);
    const end = new Date().setHours(23, 59, 59, 999);
    const res = await callService.searchHistoryCall(
      page, // page
      size, // size
      search,
      sort,
      agentCallFields,
      start, // created_at_from
      end, // created_at_to
      undefined,
      agentId, // agent_id
      undefined, // queue_id
      undefined, // team_id
      undefined, // member_id
      undefined, // gateway_id
      undefined, // duration_from
      undefined, // duration_to
      undefined, // skip_parent
      undefined, // parent_id
      undefined, // cause
      undefined, // exists_file
      undefined, // domain_id
      undefined, // number
      undefined, // direction
      undefined, // answered_at_from
      undefined, // answered_at_to
      undefined, // missed
      undefined, // stored_at_from
      undefined, // stored_at_to
      undefined, // id
      undefined, // transfer_from
      undefined, // transfer_to
      undefined, // dependency_id
      undefined, // options
    );
    return {
      items: res.items ? parseAgentCallsList(res.items) : [],
      next: !!res.next,
    };
  } catch (err) {
    throw err;
  }
};
