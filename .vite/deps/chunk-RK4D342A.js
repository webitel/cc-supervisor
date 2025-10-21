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

// node_modules/@webitel/ui-sdk/src/scripts/preventHiddenPageCallsDecorator.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var isPageHidden = () => document.hidden || document.msHidden || document.webkitHidden || document.mozHidden;
var preventHiddenPageCallsDecorator = (method) => (args) => isPageHidden() || method(args);
var preventHiddenPageCallsDecorator_default = preventHiddenPageCallsDecorator;

export {
  preventHiddenPageCallsDecorator_default
};
//# sourceMappingURL=chunk-RK4D342A.js.map
