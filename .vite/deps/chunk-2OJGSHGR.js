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

// node_modules/@webitel/ui-sdk/src/api/interceptors/response/handleUnauthorized.interceptor.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var handleUnauthorizedInterceptor = [
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("intercepted 401");
      localStorage.removeItem("access-token");
    }
    return Promise.reject(error);
  }
];
var handleUnauthorized_interceptor_default = handleUnauthorizedInterceptor;

export {
  handleUnauthorized_interceptor_default
};
//# sourceMappingURL=chunk-2OJGSHGR.js.map
