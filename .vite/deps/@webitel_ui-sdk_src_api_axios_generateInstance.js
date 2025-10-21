import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  generateInstance_default
} from "./chunk-4OSCJW2H.js";
import "./chunk-W24ITOCJ.js";
import "./chunk-ESEZ4R5I.js";
import "./chunk-V3F6WX4O.js";
export {
  generateInstance_default as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_api_axios_generateInstance.js.map
