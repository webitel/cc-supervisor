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

// node_modules/@webitel/ui-sdk/src/mixins/dataFilterMixins/paginationFilterMixin.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var paginationFilterMixin_default = {
  mixins: [baseFilterMixin_default],
  props: {
    isNext: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    page: "1",
    size: "10"
  }),
  watch: {
    "$route.query": {
      handler(newValue, oldValue) {
        if (newValue.page !== oldValue.page || newValue.size !== oldValue.size) {
          this.restore();
        }
      }
    }
  },
  computed: {
    isPrev() {
      return +this.page > 1;
    }
  },
  methods: {
    restore() {
      this.restorePage();
      this.restoreSize();
    },
    restorePage() {
      const page = "1";
      this.page = this.getValueFromQuery({ filterQuery: "page" }) || page;
    },
    restoreSize() {
      const size = "10";
      this.size = this.getValueFromQuery({ filterQuery: "size" }) || size;
    },
    next() {
      this.$emit("input");
      const value = `${+this.page + 1}`;
      this.page = value;
      return this.setValueToQuery({
        filterQuery: "page",
        value
      });
    },
    prev() {
      this.$emit("input");
      const value = `${+this.page - 1}`;
      this.page = value;
      return this.setValueToQuery({
        filterQuery: "page",
        value
      });
    },
    sizeChange(value) {
      this.$emit("input");
      return this.setValueToQuery({
        filterQuery: "size",
        value
      });
    }
  }
};
export {
  paginationFilterMixin_default as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_mixins_dataFilterMixins_paginationFilterMixin.js.map
