import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  axios_default
} from "./chunk-ESEZ4R5I.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/api-services/src/api/axios/generateInstance.ts
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var generateInstance = ({ interceptors, baseURL, ...rest } = {}) => {
  const instance = axios_default.create({
    baseURL,
    headers: {
      "X-Webitel-Access": localStorage.getItem("access-token") || ""
    },
    ...rest
  });
  if (interceptors) {
    const { request, response } = interceptors;
    if (request) {
      for (const interceptor of request) {
        instance.interceptors.request.use(...interceptor);
      }
    }
    if (response) {
      for (const interceptor of response) {
        instance.interceptors.response.use(...interceptor);
      }
    }
  }
  return instance;
};

export {
  generateInstance
};
//# sourceMappingURL=chunk-W24ITOCJ.js.map
