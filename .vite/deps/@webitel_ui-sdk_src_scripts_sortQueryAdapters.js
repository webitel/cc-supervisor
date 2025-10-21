import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  SortSymbols,
  getNextSortOrder,
  queryToSortAdapter,
  sortToQueryAdapter
} from "./chunk-4BU36TI7.js";
import "./chunk-V3F6WX4O.js";
export {
  SortSymbols,
  getNextSortOrder,
  queryToSortAdapter,
  sortToQueryAdapter
};
//# sourceMappingURL=@webitel_ui-sdk_src_scripts_sortQueryAdapters.js.map
