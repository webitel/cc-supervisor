import { reactive, shallowReactive } from 'vue';
import { Client } from 'webitel-sdk';
import webSocketClientController from '@webitel/ui-sdk/src/api/websocket/WebSocketClientController'

const { hostname, protocol } = window.location;
const origin = (`${protocol}//${hostname}`).replace(/^http/, 'ws');
const BASE_URL = import.meta.env.PROD ? `${origin}/ws` : 'wss://dev.webitel.com/ws';
// const BASE_URL = 'ws://10.10.10.25:10025';

let cliInstance = null;

const createCliInstance = async () => {
  const token = localStorage.getItem('access-token');

  const constraints = {
    video: {
      width: { ideal: 1920 },    // Бажана ширина 1920px (Full HD)
      height: { ideal: 1080 },   // Бажана висота 1080px
      frameRate: { ideal: 10 },  // Бажана частота кадрів 30fps
      cursor: "always",          // Завжди показувати курсор
      displaySurface: "monitor", // Можна додати для попереднього вибору всього екрану, але це лише підказка
      selfBrowserSurface: "exclude", // Виключити поточну вкладку, щоб уникнути "ефекту дзеркала"
      surfaceSwitching: "exclude" // Дозволити перемикання між вкладками/вікнами
    },
    audio: false
  };


  const screenResolver = () => {
    return navigator.mediaDevices.getDisplayMedia(constraints)
  }

  const config = {
    endpoint: BASE_URL,
    registerWebDevice: true,
    token,
    screenResolver: screenResolver,
    applicationName: "desc_track",
    // debug: true,
  };

  // why reactive? https://github.com/vuejs/core/discussions/7811#discussioncomment-5181921
  const cli = shallowReactive(new Client(config));

  // why reactive? https://github.com/vuejs/core/discussions/7811#discussioncomment-5181921
  // cli.conversationStore = reactive(cli.conversationStore);
  cli.callStore = reactive(cli.callStore);
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
