import { RegionServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import { listResponseHandler, defaultParams } from '@webitel/ui-sdk/src/modules/QueryFilters/api/defaults';
import instance from '../../../../../app/api/instance';
import configuration from '../../../../../app/api/utils/openAPIConfig';

const regionService = new RegionServiceApiFactory(configuration, '', instance);

const listGetter = new SdkListGetterApiConsumer(regionService.searchRegion, {
  listResponseHandler,
});

const getList = (params) => listGetter.getList({ ...defaultParams, ...params });

export default {
  getList,
};
