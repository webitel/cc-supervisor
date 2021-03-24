import getOptionsFromAPI from './defaults/APIdefaults';
import { defaultParams } from './defaults/defaults';

const BASE_URL = '/users';

export const fetchUsers = async (params) => getOptionsFromAPI(BASE_URL, params);

export const getUsers = (argParams) => {
  const params = {
    ...defaultParams,
    ...argParams,
  };
  return fetchUsers(params);
};

export const getUsersByIds = (idList) => {
  const params = {
    ...defaultParams,
    size: idList.length,
    id: idList,
  };
  return fetchUsers(params);
};
