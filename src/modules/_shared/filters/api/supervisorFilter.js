import { AgentServiceApiFactory } from 'webitel-sdk';
import SdkListGetterApiConsumer
  from 'webitel-sdk/esm2015/api-consumers/ListGetter/sdk-list-getter-api-consumer/sdk-list-getter-api-consumer';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';
import { formatOptions, defaultParams } from './defaults/defaults';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const _getSupervisorsList = (getList) => function ({
                                    page,
                                    size,
                                    search,
                                    fields,
                                    id,
                                  }) {
  const isSupervisor = true;
  const params = [page, size, search, undefined, fields, id, undefined, undefined,
    undefined, undefined, undefined, isSupervisor];
  return getList(params);
};

const listGetter = new SdkListGetterApiConsumer(agentService.searchAgent, {
  listResponseHandler: formatOptions,
})
.setGetListMethod(_getSupervisorsList);

const getList = (params) => listGetter.getList({ ...defaultParams, ...params });

export default {
  getList,
};
