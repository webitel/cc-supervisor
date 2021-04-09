import ApiListGetterApiConsumer
  from 'webitel-sdk/esm2015/api-consumers/ListGetter/api-list-getter-api-consumer/api-list-getter-api-consumer';
import { listResponseHandler, defaultParams } from '@webitel/ui-sdk/src/modules/QueryFilters/api/defaults';
import instance from '../../../../../app/api/instance';

const baseUrl = '/users';

const listGetter = new ApiListGetterApiConsumer({ baseUrl, instance }, {
  listResponseHandler,
});

const getList = (params) => listGetter.getList({ ...defaultParams, ...params });

export default {
  getList,
};
