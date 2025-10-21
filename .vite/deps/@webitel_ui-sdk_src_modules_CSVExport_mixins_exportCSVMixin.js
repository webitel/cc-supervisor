import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  CSVExport
} from "./chunk-ZS2VGEAJ.js";
import "./chunk-GZSFRPB5.js";
import "./chunk-6LY73PXU.js";
import "./chunk-SZR5SZ7W.js";
import "./chunk-5SXUFGYU.js";
import "./chunk-RGTN4WD6.js";
import "./chunk-CIP22KGZ.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/modules/CSVExport/mixins/exportCSVMixin.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var exportCSVMixin_default = {
  data: () => ({
    CSVExport: null
  }),
  computed: {
    isCSVLoading() {
      return !!this.CSVDownloadProgress;
    },
    CSVDownloadProgress() {
      return this.CSVExport ? this.CSVExport.downloadProgress.count : 0;
    },
    selectedIds() {
      return this.dataList.filter((item) => item._isSelected).map((item) => item.id);
    },
    isAnySelected() {
      return !!this.selectedIds.length;
    }
  },
  methods: {
    initCSVExport(fetchMethod, options) {
      this.CSVExport = new CSVExport(fetchMethod, options);
    },
    async exportCSV(exportParams) {
      var _a;
      const routeQuery = (_a = this.$route) == null ? void 0 : _a.query;
      const params = {
        ...exportParams || routeQuery,
        size: 5e3
      };
      if (this.isAnySelected) params.id = this.selectedIds;
      try {
        await this.CSVExport.export(params);
      } catch (err) {
        throw err;
      }
    }
  }
};
export {
  exportCSVMixin_default as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_modules_CSVExport_mixins_exportCSVMixin.js.map
