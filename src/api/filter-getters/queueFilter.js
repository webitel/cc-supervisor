import { QueueServiceApiFactory } from 'webitel-sdk';
import instance from '../instance';
import configuration from '../openAPIConfig';
import {
  formatOptions,
  PAGE,
  SIZE,
  FIELDS,
} from './defaults/defaults';
import getDomainId from '../utils/getDomainId';

const queueService = new QueueServiceApiFactory(configuration, '', instance);

export const fetchQueues = async (search = '') => {
  const domainId = getDomainId();
  try {
    const response = await queueService.searchQueue(
      PAGE,
      SIZE,
      search,
      domainId,
      FIELDS,
    );
    return formatOptions(response);
  } catch (err) {
    throw err;
  }
};

export const getSelectedQueues = async (idList) => {
  const domainId = getDomainId();
  const size = idList.length;
  try {
    const response = await queueService.searchQueue(
      PAGE,
      size,
      null,
      domainId,
      FIELDS,
      null,
      idList,
    );
    return formatOptions(response);
  } catch (err) {
    throw err;
  }
};
