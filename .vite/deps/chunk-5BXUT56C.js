import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  generateInstance_default
} from "./chunk-4OSCJW2H.js";
import {
  updateToken_interceptor_default
} from "./chunk-HTF5FYCO.js";
import {
  handleUnauthorized_interceptor_default
} from "./chunk-2OJGSHGR.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// src/app/api/instance.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var instance_default = generateInstance_default({
  interceptors: {
    request: [updateToken_interceptor_default],
    response: [handleUnauthorized_interceptor_default]
  },
  baseURL: import.meta.env.VITE_API_URL
});

export {
  instance_default
};
//# sourceMappingURL=chunk-5BXUT56C.js.map
