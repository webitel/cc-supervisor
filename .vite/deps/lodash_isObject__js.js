import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  isObject_default
} from "./chunk-YX35SWNW.js";
import "./chunk-V3F6WX4O.js";
export {
  isObject_default as default
};
//# sourceMappingURL=lodash_isObject__js.js.map
