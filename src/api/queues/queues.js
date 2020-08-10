import { QueueServiceApiFactory } from 'webitel-sdk';
import configuration from '../openAPIConfig';
import instance from '../instance';

const queueService = new QueueServiceApiFactory(configuration, '', instance);
export const queueFields = ['id', 'name', 'type', 'team'];

const parseQueueList = (items) => items.map((item) => ({
  ...item,
  _isSelected: false,
  count: item.count || 0,
  bridged: item.bridged ? `${+item.bridged.toFixed(2)}%` : null,
  abandoned: item.abandoned ? `${+item.abandoned.toFixed(2)}%` : null,
  sumBillSec: item.sumBillSec ? +item.sumBillSec.toFixed(2) : null,
  avgWrapSec: item.avgWrapSec ? +item.avgWrapSec.toFixed(2) : null,
  avgAsaSec: item.avgAsaSec ? +item.avgAsaSec.toFixed(2) : null,
  avgAwtSec: item.avgAwtSec ? +item.avgAwtSec.toFixed(2) : null,
  avgAhtSec: item.avgAhtSec ? +item.avgAhtSec.toFixed(2) : null,
  team_name: item.team && item.team.name,
  agents: {
    active: item.online || 0,
    waiting: item.pause || 0,
  },
  members: {
    processing: item.processed || 0,
    waiting: item.waiting || 0,
  },
}));

export const getQueuesList = async ({
                                      page = 0,
                                      size = 10,
                                      joinedAtFrom,
                                      joinedAtTo,
                                      search = '',
                                      queueIds,
                                      sort = '+priority',
                                      fields,
                                      teamIds,
                                      typeIds,
                                    }) => {
  try {
    // eslint-disable-next-line no-param-reassign
    if (search && search.slice(-1) !== '*') search += '*';
    const res = await queueService.searchQueueReportGeneral(
      page,
      size,
      joinedAtFrom,
      joinedAtTo,
      undefined,
      fields,
      sort,
      search,
      queueIds,
      teamIds,
      typeIds,
    );
    return {
      items: res.items ? parseQueueList(res.items) : [],
      next: !!res.next,
    };
  } catch (err) {
    throw err;
  }
};
