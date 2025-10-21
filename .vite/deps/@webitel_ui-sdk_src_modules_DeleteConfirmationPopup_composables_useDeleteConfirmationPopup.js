import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  ref
} from "./chunk-QI253I2C.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/composables/useDeleteConfirmationPopup.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var useDeleteConfirmationPopup = () => {
  const isVisible = ref(false);
  const deleteCount = ref(null);
  const deleteCallback = ref(null);
  function askDeleteConfirmation({ deleted, callback }) {
    if (Array.isArray(deleted)) deleteCount.value = deleted.length;
    else deleteCount.value = 1;
    isVisible.value = true;
    deleteCallback.value = callback;
  }
  function closeDelete() {
    isVisible.value = false;
  }
  return {
    isVisible,
    deleteCount,
    deleteCallback,
    askDeleteConfirmation,
    closeDelete
  };
};
export {
  useDeleteConfirmationPopup
};
//# sourceMappingURL=@webitel_ui-sdk_src_modules_DeleteConfirmationPopup_composables_useDeleteConfirmationPopup.js.map
