import { QueueServiceApiFactory } from 'webitel-sdk';
import configuration from '../openAPIConfig';
import instance from '../instance';

// eslint-disable-next-line import/prefer-default-export
const queueService = new QueueServiceApiFactory(configuration, '', instance);
export const queueFields = ['id', 'name', 'type', 'team'];

const parseQueueList = (items) => {
    items.forEach((element) => {
        Object.assign(element, {
            inbound_calls: Math.floor(Math.random() * 16),
            answer: Math.random().toFixed(2),
            abandone: Math.random().toFixed(2),
            talk: `00:${(`0${Math.floor(Math.random() * 10)}`).slice(-2)}:${(`0${Math.floor(Math.random() * 60)}`).slice(-2)}`,
            hold: Math.floor(Math.random() * 16),
            transfer: Math.floor(Math.random() * 16),
            wrap_up_time: Math.random().toFixed(2),
            asa: Math.random().toFixed(2),
            ldq: Math.random().toFixed(2),
            awt: Math.random().toFixed(2),
            acwt: Math.random().toFixed(2),
            aht: Math.random().toFixed(2),
            team_name: element.team && element.team.name,
        });
    });
    return items;
};

// eslint-disable-next-line import/prefer-default-export
export const getQueuesList = async ({
    page = 0, size = 20, search = '', ids, sort = '+priority',
}) => {
    try {
        // eslint-disable-next-line max-len
        const queuesRes = await queueService.searchQueue(page, size, search, undefined, queueFields, sort, ids);
        console.table(queuesRes.items);
        return parseQueueList(queuesRes.items);
        // eslint-disable-next-line no-unreachable
    } catch (err) {
        throw err;
    }
};
