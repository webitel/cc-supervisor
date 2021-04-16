import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import { listResponseHandler, defaultParams } from '@webitel/ui-sdk/src/modules/QueryFilters/api/defaults';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';

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
  listResponseHandler,
})
.setGetListMethod(_getSupervisorsList);

const getList = (params) => listGetter.getList({ ...defaultParams, ...params });

export default {
  getList,
};
