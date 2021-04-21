import { RegionServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';

const regionService = new RegionServiceApiFactory(configuration, '', instance);

const listGetter = new SdkListGetterApiConsumer(regionService.searchRegion);

const getList = (params) => listGetter.getLookup(params);

export default getList;
