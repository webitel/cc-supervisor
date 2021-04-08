import { RegionServiceApiFactory } from 'webitel-sdk';
import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';
import { formatOptions, defaultParams } from './defaults/defaults';

const regionService = new RegionServiceApiFactory(configuration, '', instance);

export const fetchRegions = async ({
                                   page,
                                   size,
                                   search,
                                   fields,
                                   id,
                                 }) => {
  // eslint-disable-next-line no-param-reassign
  if (search && search.slice(-1) !== '*') search += '*';
  try {
    const response = await regionService.searchRegion(
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

export const getRegions = (argParams) => {
  const params = {
    ...defaultParams,
    ...argParams,
  };
  return fetchRegions(params);
};

export const getRegionsByIds = (idList) => {
  const params = {
    ...defaultParams,
    size: idList.length,
    id: idList,
  };
  return fetchRegions(params);
};
