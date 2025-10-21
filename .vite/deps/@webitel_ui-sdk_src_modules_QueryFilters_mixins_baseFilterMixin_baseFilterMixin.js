import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  getNamespacedState_default
} from "./chunk-UAO7Y25Y.js";
import {
  require_deep_equal
} from "./chunk-CSCVDDAJ.js";
import "./chunk-ECRK6EO5.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/modules/QueryFilters/mixins/baseFilterMixin/baseFilterMixin.js
var import_dist4 = __toESM(require_dist());
var import_dist5 = __toESM(require_dist2());
var import_dist6 = __toESM(require_dist3());

// node_modules/@webitel/ui-sdk/src/modules/QueryFilters/mixins/_urlControllerMixin/_urlControllerMixin.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var import_deep_equal = __toESM(require_deep_equal(), 1);
var urlControllerMixin_default = {
  methods: {
    changeRouteQuery({ filterQuery, value }) {
      const query = { ...this.$route.query };
      query[filterQuery] = value;
      return this.$router.replace({
        name: this.$router.currentRoute.name,
        query
      });
    },
    async setValueToQuery({ filterQuery, value, storedProp = "id" }) {
      let newValue = "";
      if (Array.isArray(value)) {
        if (value.length && typeof value[0] !== "object") {
          newValue = value;
        } else {
          newValue = value.map((item) => item[storedProp]);
        }
      } else if (typeof value === "object" && value !== null) {
        newValue = value[storedProp];
      } else {
        newValue = value;
      }
      if (!(0, import_deep_equal.default)(this.$route.query[filterQuery], newValue)) {
        await this.changeRouteQuery({
          value: newValue,
          filterQuery
        });
      }
    },
    getValueFromQuery({ filterQuery }) {
      return this.$route.query[filterQuery];
    }
  }
};

// node_modules/@webitel/ui-sdk/src/modules/QueryFilters/mixins/baseFilterMixin/baseFilterMixin.js
var baseFilterMixin_default = {
  mixins: [urlControllerMixin_default],
  props: {
    namespace: {
      type: String,
      description: "Store module namespace for state and actions mapping."
    }
  },
  created() {
    this.restore({ filterQuery: this.filterQuery });
  },
  computed: {
    filterSchema() {
      if (!this.$store)
        throw new Error(
          "Vuex is required for default filterSchema baseFilterMixin property"
        );
      return getNamespacedState_default(this.$store.state, this.namespace)[this.filterQuery];
    },
    value() {
      return this.filterSchema.value;
    }
  },
  methods: {
    restore({ filterQuery }) {
      const value = this.getValueFromQuery({ filterQuery });
      if (value) this.restoreValue(value);
    },
    setValue(payload) {
      if (!this.$store)
        throw new Error(
          "Vuex is required for default setValue() baseFilterMixin method"
        );
      return this.$store.dispatch(`${this.namespace}/SET_FILTER`, payload);
    }
  }
};
export {
  baseFilterMixin_default as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_modules_QueryFilters_mixins_baseFilterMixin_baseFilterMixin.js.map
