import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  createI18n
} from "./chunk-6JRCTP2G.js";
import {
  messages
} from "./chunk-QVMLP2C6.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/locale/i18n.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var i18n_default = createI18n({
  // legacy: false,
  locale: "en",
  allowComposition: true,
  fallbackLocale: "en",
  messages
});

export {
  i18n_default
};
//# sourceMappingURL=chunk-QLPG6TDQ.js.map
