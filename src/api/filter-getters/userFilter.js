
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

const fetchUsers = async () => {
  const url = `${URL}?size=${SIZE}&page=${PAGE}`;

  try {
      const response = await instance.get(url);
      return formatOptions(response);
  } catch (err) {
      throw err;
  }
};

export default fetchUsers;
