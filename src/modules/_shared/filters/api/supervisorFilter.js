import { AgentServiceApiFactory } from 'webitel-sdk';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';
import { formatOptions, defaultParams } from './defaults/defaults';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

export const fetchSupervisors = async ({
                                    page,
                                    size,
                                    search,
                                    fields,
                                    id,
                                  }) => {
  // eslint-disable-next-line no-param-reassign
  if (search && search.slice(-1) !== '*') search += '*';
  const isSupervisor = true;
  try {
    const response = await agentService.searchAgent(
      page,
      size,
      search,
      undefined,
      fields,
      id,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      isSupervisor,
    );
    return formatOptions(response);
  } catch (err) {
    throw err;
  }
};

  export const getSupervisors = (argParams) => {
    const params = {
      ...defaultParams,
      ...argParams,
    };
    return fetchSupervisors(params);
  };
  export const getSupervisorsByIds = (idList) => {
    const params = {
      ...defaultParams,
      size: idList.length,
      id: idList,
    };
    return fetchSupervisors(params);
  };
