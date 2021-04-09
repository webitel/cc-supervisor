import { QueueServiceApiFactory } from 'webitel-sdk';
import SdkListGetterApiConsumer
  from 'webitel-sdk/esm2015/api-consumers/ListGetter/sdk-list-getter-api-consumer/sdk-list-getter-api-consumer';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';
import { formatOptions, defaultParams } from './defaults/defaults';

const queueService = new QueueServiceApiFactory(configuration, '', instance);

const listGetter = new SdkListGetterApiConsumer(queueService.searchQueue, {
  listResponseHandler: formatOptions,
});

const getList = (params) => listGetter.getList({ ...defaultParams, ...params });

export default {
  getList,
};
