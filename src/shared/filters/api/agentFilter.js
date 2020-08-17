import { AgentServiceApiFactory } from 'webitel-sdk';
import instance from '../../../api/instance';
import configuration from '../../../api/utils/openAPIConfig';
import { formatOptions, defaultParams } from './defaults/defaults';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

export const fetchAgents = async ({
                                    page,
                                    size,
                                    search,
                                    fields,
                                    id,
                                  }) => {
  // eslint-disable-next-line no-param-reassign
  if (search && search.slice(-1) !== '*') search += '*';
  try {
    const response = await agentService.searchAgent(
      page,
      size,
      search,
      undefined,
      fields,
      null,
      id,
    );
    return formatOptions(response);
  } catch (err) {
    throw err;
  }
};

  export const getAgents = (argParams) => {
    const params = {
      ...defaultParams,
      ...argParams,
    };
    return fetchAgents(params);
  };
  export const getAgentsByIds = (idList) => {
    const params = {
      ...defaultParams,
      size: idList.length,
      id: idList,
    };
    return fetchAgents(params);
  };
