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
  stringify
} from "./chunk-YZMCRNG2.js";
import {
  Configuration
} from "./chunk-555CXXDB.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/api/defaults/index.js
var import_dist13 = __toESM(require_dist());
var import_dist14 = __toESM(require_dist2());
var import_dist15 = __toESM(require_dist3());

// node_modules/@webitel/ui-sdk/src/api/defaults/getDefaultGetListResponse/getDefaultGetListResponse.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var getDefaultGetListResponse = ({} = {}) => ({
  items: [],
  next: false
});
var getDefaultGetListResponse_default = getDefaultGetListResponse;

// node_modules/@webitel/ui-sdk/src/api/defaults/getDefaultGetParams/getDefaultGetParams.js
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
var getDefaultGetParams = ({ page = 1, size = 10 } = {}) => ({
  page,
  size
});
var getDefaultGetParams_default = getDefaultGetParams;

// node_modules/@webitel/ui-sdk/src/api/defaults/getDefaultInstance/getDefaultInstance.js
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);
var getDefaultInstance = () => {
  const stringifyOptions = {
    arrayFormat: "repeat"
  };
  return generateInstance_default({
    interceptors: {
      request: [updateToken_interceptor_default],
      response: [handleUnauthorized_interceptor_default]
    },
    baseURL: import.meta.env.VITE_API_URL,
    paramsSerializer: (params) => {
      return stringify(params, stringifyOptions);
    }
  });
};
var getDefaultInstance_default = getDefaultInstance;

// node_modules/@webitel/ui-sdk/src/api/defaults/getDefaultOpenAPIConfig/getDefaultOpenAPIConfig.js
var import_dist10 = __toESM(require_dist(), 1);
var import_dist11 = __toESM(require_dist2(), 1);
var import_dist12 = __toESM(require_dist3(), 1);
var getDefaultOpenAPIConfig = () => new Configuration({
  basePath: import.meta.env.VITE_API_URL,
  apiKey: localStorage.getItem("access-key") || "",
  accessToken: localStorage.getItem("access-key") || ""
});
var getDefaultOpenAPIConfig_default = getDefaultOpenAPIConfig;

export {
  getDefaultGetListResponse_default,
  getDefaultGetParams_default,
  getDefaultInstance_default,
  getDefaultOpenAPIConfig_default
};
//# sourceMappingURL=chunk-5H3W5IDD.js.map
