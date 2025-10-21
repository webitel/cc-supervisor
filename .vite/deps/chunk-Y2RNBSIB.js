import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  isEmpty_default
} from "./chunk-6Q3UUCCZ.js";
import {
  __publicField,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-datalist/src/modules/filters/classes/Filter.ts
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var Filter = class {
  constructor({ name, value, label }, payload, config) {
    this.payload = payload;
    this.config = config;
    __publicField(this, "name");
    __publicField(this, "label");
    __publicField(this, "value");
    this.name = name;
    this.value = value;
    this.label = label;
  }
  set({ value, label }) {
    this.value = value;
    this.label = label;
    return this;
  }
};

// node_modules/@webitel/ui-datalist/src/modules/filters/classes/FiltersManager.ts
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/filters/scripts/utils.ts
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
var filterLabelToSnapshotKey = (name) => `${name}_lbl`;
var filterValueToSnapshotKey = (name) => `${name}_val`;
var filterLabelFromSnapshotKey = (snapshotKey) => snapshotKey.replace("_lbl", "");
var filterValueFromSnapshotKey = (snapshotKey) => snapshotKey.replace("_val", "");
var isLabelSnapshotKey = (snapshotKey) => snapshotKey.includes("_lbl");
var isValueSnapshotKey = (snapshotKey) => snapshotKey.includes("_val");
var filterNameFromSnapshotKey = (snapshotKey) => {
  if (isLabelSnapshotKey(snapshotKey))
    return filterLabelFromSnapshotKey(snapshotKey);
  if (isValueSnapshotKey(snapshotKey))
    return filterValueFromSnapshotKey(snapshotKey);
};
var filterValuePropFromSnapshotKey = (snapshotKey) => {
  if (isLabelSnapshotKey(snapshotKey)) return "label";
  if (isValueSnapshotKey(snapshotKey)) return "value";
};

// node_modules/@webitel/ui-datalist/src/modules/filters/classes/FiltersManager.ts
var FiltersManager = class {
  constructor(config) {
    this.config = config;
    __publicField(this, "filters", /* @__PURE__ */ new Map());
  }
  hasFilter(name) {
    return this.filters.has(name);
  }
  getFilter(name) {
    return this.filters.get(name);
  }
  addFilter(filterInitParams, payload, config) {
    const filter = new Filter(filterInitParams, payload, config || this.config);
    this.filters.set(filterInitParams.name, filter);
    return filter;
  }
  updateFilter({
    name,
    value,
    label
  }) {
    const filter = this.filters.get(name);
    filter.set({ value, label });
    return filter;
  }
  deleteFilter({ name }) {
    const filter = this.filters.get(name);
    this.filters.delete(name);
    return filter;
  }
  getAllValues() {
    const filters = [...this.filters.values()].reduce((acc, filter) => {
      acc[filter.name] = filter.value;
      return acc;
    }, {});
    return filters;
  }
  toString({
    include,
    exclude
  } = {}) {
    const filtersData = this.getFiltersList({ include, exclude }).reduce(
      (acc, { name, label, value }) => {
        if (isEmpty_default(value) && value == null) return acc;
        acc[filterValueToSnapshotKey(name)] = value;
        if (label) {
          acc[filterLabelToSnapshotKey(name)] = label;
        }
        return acc;
      },
      {}
    );
    return JSON.stringify(filtersData);
  }
  fromString(snapshotStr) {
    const snapshot = JSON.parse(snapshotStr);
    const filtersData = Object.entries(
      snapshot
    ).reduce(
      (filtersAcc, [snapshotKey, snapshotValue]) => {
        const name = filterNameFromSnapshotKey(snapshotKey);
        const valueProp = filterValuePropFromSnapshotKey(snapshotKey);
        if (filtersAcc[name]) {
          filtersAcc[name][valueProp] = snapshotValue;
        } else {
          filtersAcc[name] = {
            [valueProp]: snapshotValue
          };
        }
        return filtersAcc;
      },
      {}
    );
    Object.entries(filtersData).forEach(([name, filterData]) => {
      if (this.hasFilter(name)) {
        this.updateFilter({ name, ...filterData });
      } else {
        this.addFilter({ ...filterData, name });
      }
    });
  }
  getAllKeys() {
    return [...this.filters.keys()];
  }
  getFiltersList({
    include,
    exclude
  } = {}) {
    const useInclude = !isEmpty_default(include);
    const useExclude = !isEmpty_default(exclude) && !useInclude;
    if (!useInclude && !useExclude) {
      return [...this.filters.values()];
    }
    return [...this.filters.values()].filter(({ name }) => {
      if (useInclude) {
        return include.includes(name);
      } else if (useExclude) {
        return !exclude.includes(name);
      }
      return true;
    });
  }
  reset({
    include,
    exclude
  } = {}) {
    const useInclude = !isEmpty_default(include);
    const useExclude = !isEmpty_default(exclude) && !useInclude;
    if (!useInclude && !useExclude) {
      this.filters.clear();
      return;
    }
    if (useInclude) {
      include.forEach((name) => {
        this.filters.delete(name);
      });
      return;
    }
    if (useExclude) {
      this.filters.forEach((_, filterName) => {
        if (!exclude.includes(filterName)) {
          this.filters.delete(filterName);
        }
      });
      return;
    }
  }
};
var createFiltersManager = (config) => {
  return new FiltersManager(config);
};

export {
  Filter,
  createFiltersManager
};
//# sourceMappingURL=chunk-Y2RNBSIB.js.map
