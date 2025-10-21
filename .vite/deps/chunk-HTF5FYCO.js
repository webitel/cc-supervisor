import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/api/interceptors/request/updateToken.interceptor.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var updateTokenInterceptor = [
  (config) => {
    config.headers["X-Webitel-Access"] = localStorage.getItem("access-token") || "";
    return config;
  },
  (error) => Promise.reject(error)
];
var updateToken_interceptor_default = updateTokenInterceptor;

export {
  updateToken_interceptor_default
};
//# sourceMappingURL=chunk-HTF5FYCO.js.map
