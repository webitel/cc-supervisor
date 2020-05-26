import { QueueServiceApiFactory } from 'webitel-sdk';
import configuration from '../openAPIConfig';
import instance from '../instance';

const queueService = new QueueServiceApiFactory(configuration, '', instance);
export const queueFields = ['id', 'name', 'type', 'team'];

const parseQueueList = (items) => {
    items.forEach((element) => {
        Object.assign(element, {
            // inbound_calls: Math.floor(Math.random() * 16),
            // answer: Math.random().toFixed(2),
            // abandone: Math.random().toFixed(2),
            // talk: `00:${(`0${Math.floor(Math.random() * 10)}`).slice(-2)}:${(`0${Math.floor(Math.random() * 60)}`).slice(-2)}`,
            // hold: Math.floor(Math.random() * 16),
            // transfer: Math.floor(Math.random() * 16),
            // wrap_up_time: Math.random().toFixed(2),
            // asa: Math.random().toFixed(2),
            // ldq: Math.random().toFixed(2),
            // awt: Math.random().toFixed(2),
            // acwt: Math.random().toFixed(2),
            // aht: Math.random().toFixed(2),
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
