import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../app/api/old/instance';
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

const listGetter = new SdkListGetterApiConsumer(agentService.searchAgent)
.setGetListMethod(_getSupervisorsList);

const getList = (params) => listGetter.getLookup(params);

export default getList;
