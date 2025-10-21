import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  BaseStoreModule
} from "./chunk-UATH6WJF.js";
import {
  isEmpty_default
} from "./chunk-6Q3UUCCZ.js";
import "./chunk-AU3PIKNZ.js";
import "./chunk-DVN4RKS3.js";
import "./chunk-HRTMU5W5.js";
import "./chunk-SJL6G23E.js";
import "./chunk-YX35SWNW.js";
import "./chunk-UGIS5QVQ.js";
import "./chunk-JBUOYAAV.js";
import "./chunk-GIUIDLUB.js";
import "./chunk-ZIQ6ZSOK.js";
import {
  __publicField,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var QueryFiltersStoreModule = class extends BaseStoreModule {
  /* FIXME REMOVE COMPLETELY AND USE GET_MODULE() INSERTION*/
  constructor({ state = {}, getters = {}, actions = {}, mutations = {} } = {}) {
    super();
    __publicField(this, "getters", {
      GET_FILTERS: (state, getters) => Object.keys(state).reduce((filters, filterKey) => {
        const filterValue = getters.GET_FILTER(filterKey);
        return isEmpty_default(filterValue) ? filters : {
          ...filters,
          [filterKey]: filterValue
        };
      }, {}),
      GET_FILTER: (state) => (filter) => {
        const { value, storedProp, multiple } = state[filter];
        if (multiple) return value.map((item) => item[storedProp]);
        if (storedProp) return value[storedProp];
        return value;
      }
    });
    __publicField(this, "actions", {
      SET_FILTER: (context, { filter, value }) => {
        const { multiple, defaultValue } = context.state[filter];
        let newValue = value;
        if (newValue) {
          if (multiple && !Array.isArray(newValue)) newValue = [newValue];
        } else if (newValue === null || newValue === void 0)
          newValue = defaultValue;
        context.commit("SET_FILTER", { filter, value: newValue });
      },
      RESET_FILTERS: (context, payload) => {
        context.commit("RESET_FILTERS", payload);
      }
    });
    __publicField(this, "mutations", {
      SET_FILTER: (state, { filter, value }) => {
        state[filter].value = value;
      },
      RESET_FILTERS: (state, payload = {}) => {
        const { excludeKeys = [] } = payload;
        Object.keys(state).forEach((filter) => {
          if (!excludeKeys.includes(filter)) {
            state[filter].value = state[filter].defaultValue;
          }
        });
      }
    });
    this.state = { ...this.state, ...state };
    this.getters = { ...this.getters, ...getters };
    this.actions = { ...this.actions, ...actions };
    this.mutations = { ...this.mutations, ...mutations };
  }
};
export {
  QueryFiltersStoreModule as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_modules_QueryFilters_store_QueryFiltersStoreModule.js.map
