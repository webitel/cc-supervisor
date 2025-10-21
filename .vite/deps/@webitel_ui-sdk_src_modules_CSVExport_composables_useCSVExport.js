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
import {
  useRoute
} from "./chunk-RV34Z7WP.js";
import {
  notify_transformer_default,
  transformers_default
} from "./chunk-SIGGZAOU.js";
import "./chunk-6LY73PXU.js";
import "./chunk-TBMZGSYP.js";
import "./chunk-ALYEIJI5.js";
import "./chunk-SZR5SZ7W.js";
import "./chunk-6FPSQGJR.js";
import "./chunk-4QMDQNJR.js";
import "./chunk-5SXUFGYU.js";
import "./chunk-VVVSXXDF.js";
import "./chunk-AU3PIKNZ.js";
import "./chunk-DVN4RKS3.js";
import "./chunk-HRTMU5W5.js";
import "./chunk-SJL6G23E.js";
import "./chunk-YX35SWNW.js";
import "./chunk-RGTN4WD6.js";
import "./chunk-UGIS5QVQ.js";
import "./chunk-JBUOYAAV.js";
import "./chunk-GIUIDLUB.js";
import "./chunk-ZIQ6ZSOK.js";
import "./chunk-ZJPGTC72.js";
import {
  computed,
  ref
} from "./chunk-QI253I2C.js";
import "./chunk-YZMCRNG2.js";
import "./chunk-CIP22KGZ.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/modules/CSVExport/composables/useCSVExport.ts
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var CSV_EXPORT_BATCH_SIZE = 5e3;
function useCSVExport({ selected }) {
  const CSVExportInstance = ref(null);
  const route = useRoute();
  const CSVDownloadProgress = computed(
    () => CSVExportInstance.value ? CSVExportInstance.value.downloadProgress.count : 0
  );
  const isCSVLoading = computed(() => !!CSVDownloadProgress.value);
  const isAnySelected = computed(() => !!selected.value.length);
  function initCSVExport(fetchMethod, options = {}) {
    CSVExportInstance.value = new CSVExport(fetchMethod, options);
  }
  async function exportCSV(exportParams) {
    var _a;
    const routeQuery = route.query;
    const params = {
      ...exportParams || routeQuery,
      size: CSV_EXPORT_BATCH_SIZE
    };
    if (isAnySelected.value) {
      params.id = selected.value;
    }
    try {
      await ((_a = CSVExportInstance.value) == null ? void 0 : _a.export(params));
    } catch (err) {
      throw transformers_default(err, [notify_transformer_default]);
    }
  }
  return {
    CSVExportInstance,
    CSVDownloadProgress,
    isCSVLoading,
    isAnySelected,
    initCSVExport,
    exportCSV
  };
}
export {
  useCSVExport
};
//# sourceMappingURL=@webitel_ui-sdk_src_modules_CSVExport_composables_useCSVExport.js.map
