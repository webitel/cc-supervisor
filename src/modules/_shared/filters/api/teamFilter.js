import { AgentTeamServiceApiFactory } from 'webitel-sdk';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';
import { formatOptions, defaultParams } from './defaults/defaults';

const teamService = new AgentTeamServiceApiFactory(configuration, '', instance);

export const fetchTeams = async ({
                                   page,
                                   size,
                                   search,
                                   fields,
                                   id,
                                 }) => {
  // eslint-disable-next-line no-param-reassign
  if (search && search.slice(-1) !== '*') search += '*';
  try {
    const response = await teamService.searchAgentTeam(
      page,
      size,
      search,
      undefined,
      fields,
      id,
    );
    return formatOptions(response);
  } catch (err) {
    throw err;
  }
};

export const getTeams = (argParams) => {
  const params = {
    ...defaultParams,
    ...argParams,
  };
  return fetchTeams(params);
};

export const getTeamsByIds = (idList) => {
  const params = {
    ...defaultParams,
    size: idList.length,
    id: idList,
  };
  return fetchTeams(params);
};
