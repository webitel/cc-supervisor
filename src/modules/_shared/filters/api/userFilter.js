import ApiListGetterApiConsumer
  from 'webitel-sdk/esm2015/api-consumers/ListGetter/api-list-getter-api-consumer/api-list-getter-api-consumer';
import instance from '../../../../app/api/instance';
import { formatOptions, defaultParams } from './defaults/defaults';

const baseUrl = '/users';

const listGetter = new ApiListGetterApiConsumer({ baseUrl, instance }, {
  listResponseHandler: formatOptions,
});

const getList = (params) => listGetter.getList({ ...defaultParams, ...params });

export default {
  getList,
};
