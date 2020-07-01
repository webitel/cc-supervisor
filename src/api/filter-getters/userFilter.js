import instance from '../instance';
import {
  PAGE,
  SIZE,
  formatOptions,
} from './defaults/defaults';

const { hostname, protocol } = window.location;
const origin = `${protocol}//${hostname}`;
const URL = process.env.NODE_ENV === 'production'
  ? `${origin}/api/users` : 'https://dev.webitel.com/api/users';

const fetchUsers = async (search = '') => {
  let url = `${URL}?size=${SIZE}&page=${PAGE}`;
  if (search) {
    // eslint-disable-next-line no-param-reassign
    if (search.slice(-1) !== '*') search += '*';
    url += `&name=${search}`;
  }
  try {
      const response = await instance.get(url);
      return formatOptions(response);
  } catch (err) {
      throw err;
  }
};

export default fetchUsers;
