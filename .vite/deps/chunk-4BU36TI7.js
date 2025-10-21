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

// node_modules/@webitel/ui-sdk/src/scripts/sortQueryAdapters.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var SortSymbols = Object.freeze({
  ASC: "asc",
  DESC: "desc",
  NONE: null
});
var sortToQueryAdapter = (order) => {
  switch (order) {
    case SortSymbols.ASC:
      return "+";
    case SortSymbols.DESC:
      return "-";
    default:
      return "";
  }
};
var queryToSortAdapter = (order) => {
  switch (order) {
    case "+":
      return SortSymbols.ASC;
    case "-":
      return SortSymbols.DESC;
    default:
      return SortSymbols.NONE;
  }
};
var getNextSortOrder = (sort) => {
  switch (sort) {
    case SortSymbols.ASC:
      return SortSymbols.DESC;
    case SortSymbols.DESC:
      return SortSymbols.NONE;
    default:
      return SortSymbols.ASC;
  }
};

export {
  SortSymbols,
  sortToQueryAdapter,
  queryToSortAdapter,
  getNextSortOrder
};
//# sourceMappingURL=chunk-4BU36TI7.js.map
