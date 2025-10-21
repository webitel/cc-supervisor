import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  BaseFilterSchema
} from "./chunk-PC2ISYV2.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/modules/QueryFilters/classes/ApiFilterSchema.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var ApiFilterSchema = class extends BaseFilterSchema {
  constructor(params = {}) {
    const { value = [], defaultValue = [] } = params;
    super({ value, defaultValue });
    const {
      locale = { label: "filter" },
      storedProp = "id",
      multiple = true,
      closeOnSelect = false,
      API
    } = params;
    this.locale = locale;
    this.storedProp = storedProp;
    this.multiple = multiple;
    this.closeOnSelect = closeOnSelect;
    this.API = API;
  }
  search(params) {
    return this.API(params);
  }
  fetchSelected(idsList) {
    const params = { size: idsList.length, id: idsList };
    return this.API(params);
  }
};
export {
  ApiFilterSchema as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_modules_QueryFilters_classes_ApiFilterSchema.js.map
