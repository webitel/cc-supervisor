import { QueueServiceApiFactory } from 'webitel-sdk';
import configuration from '../openAPIConfig';
import instance from '../instance';

const queueService = new QueueServiceApiFactory(configuration, '', instance);
export const queueFields = ['id', 'name', 'type', 'team'];

const parseQueueList = (items) => {
    items.forEach((element) => {
        Object.assign(element, {
            bridged: element.bridged ? `${+element.bridged.toFixed(2)}%` : null,
            abandoned: element.abandoned ? `${+element.abandoned.toFixed(2)}%` : null,
            sumBillSec: element.sumBillSec ? +element.sumBillSec.toFixed(2) : null,
            avgWrapSec: element.avgWrapSec ? +element.avgWrapSec.toFixed(2) : null,
            avgAsaSec: element.avgAsaSec ? +element.avgAsaSec.toFixed(2) : null,
            avgAwtSec: element.avgAwtSec ? +element.avgAwtSec.toFixed(2) : null,
            avgAhtSec: element.avgAhtSec ? +element.avgAhtSec.toFixed(2) : null,
            team_name: element.team && element.team.name,
            agents: {
                active: element.online || 0,
                waiting: element.pause || 0,
            },
            members: {
                processing: element.processed || 0,
                waiting: element.waiting || 0,
            },

        });
    });
    return items;
};

export const getQueuesList = async ({
    // eslint-disable-next-line no-unused-vars
    page = 0, size = 10, joinedAtFrom, joinedAtTo, search = '', queueIds, sort = '+priority', fields, teamIds, typeIds,
}) => {
    try {
        // eslint-disable-next-line no-param-reassign
        if (search && search.slice(-1) !== '*') search += '*';
        const res = await queueService.searchQueueReportGeneral(page, size, joinedAtFrom, joinedAtTo, undefined, undefined, sort, search, queueIds, teamIds, typeIds);
        return { items: res.items ? parseQueueList(res.items) : [], next: res.next };
    } catch (err) {
        throw err;
    }
};
