import { SkillServiceApiFactory } from 'webitel-sdk';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';
import { formatOptions, defaultParams } from './defaults/defaults';

const skillService = new SkillServiceApiFactory(configuration, '', instance);

export const fetchSkills = async ({
                                   page,
                                   size,
                                   search,
                                   fields,
                                   id,
                                 }) => {
  // eslint-disable-next-line no-param-reassign
  if (search && search.slice(-1) !== '*') search += '*';
  try {
    const response = await skillService.searchSkill(
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

export const getSkills = (argParams) => {
  const params = {
    ...defaultParams,
    ...argParams,
  };
  return fetchSkills(params);
};

export const getSkillsByIds = (idList) => {
  const params = {
    ...defaultParams,
    size: idList.length,
    id: idList,
  };
  return fetchSkills(params);
};
