import { Configuration } from 'webitel-sdk';

const configuration = new Configuration({
  basePath: process.env.VUE_APP_API_URL,
  apiKey: localStorage.getItem('access-key') || '',
  accessToken: localStorage.getItem('access-token') || '',
});

export default configuration;
