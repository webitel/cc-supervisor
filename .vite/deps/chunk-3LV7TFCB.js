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

// node_modules/@webitel/ui-sdk/src/enums/IconAction/IconAction.enum.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var IconAction = Object.freeze({
  REFRESH: "refresh",
  ADD: "add",
  DELETE: "delete",
  FILTERS: "filters",
  UPLOAD: "upload",
  DOWNLOAD: "download",
  EXPORT: "export",
  COPY: "copy",
  COLUMNS: "columns",
  HISTORY: "history",
  EDIT: "edit",
  COLLAPSE: "collapse",
  EXPAND: "expand",
  CLOSE: "close",
  CANCEL: "cancel",
  VARIABLES: "variables",
  CLEAR: "clear",
  ADD_FILTER: "add-filter",
  SAVE: "save",
  SAVE_PRESET: "save-preset",
  APPLY_PRESET: "apply-preset",
  ADD_CONTACT: "add-contact",
  DOWNLOAD_PDF: "download-pdf"
});
var IconAction_enum_default = IconAction;

export {
  IconAction_enum_default
};
//# sourceMappingURL=chunk-3LV7TFCB.js.map
