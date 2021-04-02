import { AgentPauseCauseServiceApiFactory } from 'webitel-sdk';
import SdkListGetterApiConsumer
  from 'webitel-sdk/esm2015/api-consumers/ListGetter/sdk-list-getter-api-consumer/sdk-list-getter-api-consumer';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const pauseCauseService = new AgentPauseCauseServiceApiFactory(configuration, '', instance);

const _getAllPauseCauses = (getList) => function ({
                                                    page = 1,
                                                    size = 1000,
                                                    search,
                                                    sort,
                                                    fields = ['name'],
                                                  } = {}) {
  const params = [page, size, search, sort, fields];
  return getList(params);
};

const listGetter = new SdkListGetterApiConsumer(pauseCauseService.searchAgentPauseCause)
  .setGetListMethod(_getAllPauseCauses);

export const getPauseCauseList = (params) => listGetter.getList(params);

export default {
  getList: getPauseCauseList,
};
