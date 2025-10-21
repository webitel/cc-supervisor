import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  require_deep_equal
} from "./chunk-CSCVDDAJ.js";
import "./chunk-ECRK6EO5.js";
import "./chunk-V3F6WX4O.js";
export default require_deep_equal();
//# sourceMappingURL=deep-equal.js.map
