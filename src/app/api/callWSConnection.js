import { reactive, shallowReactive } from 'vue';
import { Client } from 'webitel-sdk';

const { hostname, protocol } = window.location;
const origin = (`${protocol}//${hostname}`).replace(/^http/, 'ws');
const BASE_URL = import.meta.env.PROD ? `${origin}/ws` : 'wss://dev.webitel.com/ws';
// const BASE_URL = 'ws://10.10.10.25:10025';

let cliInstance = null;

const createCliInstance = async () => {
  const token = localStorage.getItem('access-token');

  const config = {
    endpoint: BASE_URL,
    registerWebDevice: true,
    token,
  };

  // why reactive? https://github.com/vuejs/core/discussions/7811#discussioncomment-5181921
  const cli = shallowReactive(new Client(config));

  // why reactive? https://github.com/vuejs/core/discussions/7811#discussioncomment-5181921
  // cli.conversationStore = reactive(cli.conversationStore);
  cli.callStore = reactive(cli.callStore);
  cli.spyScreenSessions = reactive(cli.spyScreenSessions);
  // cli.jobStore = reactive(cli.jobStore);

  await cli.connect();
  await cli.auth();
  window.cli = cli;
  return cli;
};

export const destroyCliInstance = async () => {
  if (cliInstance) {
    cliInstance.then((cli) => cli.destroy());
  }
  cliInstance = null;
};

export const getCliInstance = async () => {
  if (!cliInstance) cliInstance = createCliInstance();
  return cliInstance;
};
