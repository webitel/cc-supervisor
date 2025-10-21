import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  updateToken_interceptor_default
} from "./chunk-HTF5FYCO.js";
import "./chunk-V3F6WX4O.js";
export {
  updateToken_interceptor_default as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_api_interceptors_request_updateToken__interceptor.js.map
