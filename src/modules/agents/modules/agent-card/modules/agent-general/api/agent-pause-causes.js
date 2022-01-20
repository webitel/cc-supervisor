import { AgentServiceApiFactory } from 'webitel-sdk';
import { SdkListGetterApiConsumer } from 'webitel-sdk/esm2015/api-consumers';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const agentPauseCauseService = new AgentServiceApiFactory(configuration, '', instance);

const _getAgentPauseCauses = (getList) => function ({
                                                      agentId,
                                                    } = {}) {
  const params = [agentId];
  return getList(params);
};

const defaultListObject = {
  name: '',
  durationMin: 0,
  limitMin: 0,
};

const listGetter = new SdkListGetterApiConsumer(agentPauseCauseService.searchPauseCauseForAgent,
  { defaultListObject })
.setGetListMethod(_getAgentPauseCauses);

export const getAgentPauseCauses = (params) => listGetter.getList(params);

export default {
  getList: getAgentPauseCauses,
};
