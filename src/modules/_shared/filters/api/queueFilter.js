import { QueueServiceApiFactory } from 'webitel-sdk';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';
import { formatOptions, defaultParams } from './defaults/defaults';

const queueService = new QueueServiceApiFactory(configuration, '', instance);

export const fetchQueues = async ({
                                    page,
                                    size,
                                    search,
                                    fields,
                                    id,
                                  }) => {
  // eslint-disable-next-line no-param-reassign
  if (search && search.slice(-1) !== '*') search += '*';
  try {
    const response = await queueService.searchQueue(
      page,
      size,
      search,
      undefined,
      fields,
      null,
      id,
    );
    return formatOptions(response);
  } catch (err) {
    throw err;
  }
};

export const getQueues = (argParams) => {
  const params = {
    ...defaultParams,
    ...argParams,
  };
  return fetchQueues(params);
};

export const getQueuesByIds = (idList) => {
  const params = {
    ...defaultParams,
    size: idList.length,
    id: idList,
  };
  return fetchQueues(params);
};
