import { CallServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';

const callService = new CallServiceApiFactory(configuration, '', instance);

const listGetter = new SdkListGetterApiConsumer(callService.searchHistoryCall).setGetListMethod(_getAgentCallsList);

const getList = (params) => listGetter.getLookup(params);

export default getList;
