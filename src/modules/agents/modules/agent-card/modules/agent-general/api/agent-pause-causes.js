import {
  getDefaultGetListResponse,
} from '@webitel/ui-sdk/src/api/defaults';
import applyTransform, {
  merge, mergeEach, notify, snakeToCamel,
} from '@webitel/ui-sdk/src/api/transformers';
import { AgentServiceApiFactory } from 'webitel-sdk';
import instance from '../../../../../../../app/api/instance';
import configuration from '../../../../../../../app/api/utils/openAPIConfig';

const agentPauseCauseService = new AgentServiceApiFactory(configuration, '', instance);

export const getAgentPauseCauses = async (params) => {
  const defaultObject = {
    name: '',
    durationMin: 0,
    limitMin: 0,
  };
  try {
    const response = await agentPauseCauseService.searchPauseCauseForAgent(params.agentId);
    const { items, next } = applyTransform(response.data, [
      snakeToCamel(),
      merge(getDefaultGetListResponse()),
    ]);
    return {
      items: applyTransform(items, [
        mergeEach(defaultObject),
      ]),
      next,
    };
  } catch (err) {
    throw applyTransform(err, [
      notify,
    ]);
  }
};

export default {
  getList: getAgentPauseCauses,
};
