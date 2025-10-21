import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  SupervisorSections
} from "./chunk-D3J766ED.js";
import {
  upperCase_default
} from "./chunk-LXFDMCD7.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var SupervisorSections_enum_default = Object.fromEntries(
  Object.entries(SupervisorSections).map(([key, value]) => [
    upperCase_default(key).replaceAll(" ", "_"),
    value
  ])
);

export {
  SupervisorSections_enum_default
};
//# sourceMappingURL=chunk-OQ2VA3QI.js.map
