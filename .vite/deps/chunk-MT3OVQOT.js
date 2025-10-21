import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  stringify
} from "./chunk-YZMCRNG2.js";
import {
  generateInstance
} from "./chunk-W24ITOCJ.js";
import {
  Configuration
} from "./chunk-555CXXDB.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/api-services/src/api/defaults/index.ts
var import_dist19 = __toESM(require_dist());
var import_dist20 = __toESM(require_dist2());
var import_dist21 = __toESM(require_dist3());

// node_modules/@webitel/api-services/src/api/defaults/getDefaultGetListResponse/getDefaultGetListResponse.ts
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var getDefaultGetListResponse = ({} = {}) => ({
  items: [],
  next: false
});

// node_modules/@webitel/api-services/src/api/defaults/getDefaultGetParams/getDefaultGetParams.ts
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
var getDefaultGetParams = ({ page = 1, size = 10 } = {}) => ({
  page,
  size
});

// node_modules/@webitel/api-services/src/api/defaults/getDefaultInstance/getDefaultInstance.ts
var import_dist13 = __toESM(require_dist(), 1);
var import_dist14 = __toESM(require_dist2(), 1);
var import_dist15 = __toESM(require_dist3(), 1);

// node_modules/@webitel/api-services/src/api/interceptors/request/updateToken.interceptor.ts
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);
var updateTokenInterceptor = [
  (config) => {
    config.headers["X-Webitel-Access"] = localStorage.getItem("access-token") || "";
    return config;
  },
  (error) => Promise.reject(error)
];

// node_modules/@webitel/api-services/src/api/interceptors/response/handleUnauthorized.interceptor.ts
var import_dist10 = __toESM(require_dist(), 1);
var import_dist11 = __toESM(require_dist2(), 1);
var import_dist12 = __toESM(require_dist3(), 1);
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

// node_modules/@webitel/api-services/src/api/defaults/getDefaultInstance/getDefaultInstance.ts
var getDefaultInstance = () => {
  const stringifyOptions = {
    arrayFormat: "repeat"
  };
  return generateInstance({
    interceptors: {
      request: [updateTokenInterceptor],
      response: [handleUnauthorizedInterceptor]
    },
    baseURL: import.meta.env.VITE_API_URL,
    paramsSerializer: (params) => {
      return stringify(params, stringifyOptions);
    }
  });
};

// node_modules/@webitel/api-services/src/api/defaults/getDefaultOpenAPIConfig/getDefaultOpenAPIConfig.ts
var import_dist16 = __toESM(require_dist(), 1);
var import_dist17 = __toESM(require_dist2(), 1);
var import_dist18 = __toESM(require_dist3(), 1);
var getDefaultOpenAPIConfig = () => new Configuration({
  basePath: import.meta.env.VITE_API_URL,
  apiKey: localStorage.getItem("access-key") || "",
  accessToken: localStorage.getItem("access-key") || ""
});

export {
  getDefaultGetListResponse,
  getDefaultGetParams,
  getDefaultInstance,
  getDefaultOpenAPIConfig
};
//# sourceMappingURL=chunk-MT3OVQOT.js.map
