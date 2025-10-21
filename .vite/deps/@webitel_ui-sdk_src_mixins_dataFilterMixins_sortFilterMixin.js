import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  baseFilterMixin_default
} from "./chunk-Q267VGOO.js";
import "./chunk-CSCVDDAJ.js";
import "./chunk-ECRK6EO5.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var SortSymbols = Object.freeze({
  ASC: "asc",
  DESC: "desc",
  NONE: null
});
var getNextSortOrder = (sort) => {
  switch (sort) {
    case SortSymbols.NONE:
      return SortSymbols.ASC;
    case SortSymbols.ASC:
      return SortSymbols.DESC;
    case SortSymbols.DESC:
      return SortSymbols.NONE;
    default:
      return SortSymbols.ASC;
  }
};
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
var encodeSortQuery = ({ column, order }) => `${sortToQueryAdapter(order)}${column.field}`;
var decodeSortQuery = ({ value }) => {
  const sort = queryToSortAdapter(value.slice(0, 1));
  const sortedColumn = sort ? value.slice(1) : value;
  return {
    [sortedColumn]: sort
  };
};
var sortFilterMixin_default = {
  mixins: [baseFilterMixin_default],
  data: () => ({
    filterQuery: "sort"
  }),
  methods: {
    sort(column) {
      const order = getNextSortOrder(column.sort);
      return this.setValue({ column, order });
    },
    setValue({ column, order }) {
      const headers = this.headers.map((col) => {
        const sortFieldValue = col == null ? void 0 : col.sort;
        return {
          ...col,
          sort: col === column ? order : sortFieldValue
        };
      });
      const value = encodeSortQuery({ column, order });
      this.setHeaders(headers);
      return this.setValueToQuery({
        value,
        filterQuery: this.filterQuery
      });
    },
    restoreValue(value) {
      const sortedColumns = decodeSortQuery({ value });
      const headers = this.headers.map((header) => ({
        ...header,
        sort: sortedColumns[header.field] || null
      }));
      this.setHeaders(headers);
    }
  }
};
export {
  sortFilterMixin_default as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_mixins_dataFilterMixins_sortFilterMixin.js.map
