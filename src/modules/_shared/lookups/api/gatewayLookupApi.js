import { EndpointListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../app/api/old/instance';

const baseUrl = '/sip/gateways';

const listGetter = new EndpointListGetterApiConsumer({ baseUrl, instance });

const getList = (params) => listGetter.getLookup(params);

export default getList;
