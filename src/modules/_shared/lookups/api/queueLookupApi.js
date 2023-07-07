import { QueueServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../app/api/old/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';

const queueService = new QueueServiceApiFactory(configuration, '', instance);

const listGetter = new SdkListGetterApiConsumer(queueService.searchQueue);

const getList = (params) => listGetter.getLookup(params);

export default getList;
