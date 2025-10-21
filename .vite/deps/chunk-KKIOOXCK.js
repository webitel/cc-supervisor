import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  upperCase_default
} from "./chunk-LXFDMCD7.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum.js
var import_dist4 = __toESM(require_dist());
var import_dist5 = __toESM(require_dist2());
var import_dist6 = __toESM(require_dist3());

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/WtApplication.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var WtApplication = {
  Admin: "admin",
  Agent: "agent",
  Supervisor: "supervisor",
  History: "history",
  Audit: "audit",
  Analytics: "grafana",
  Crm: "crm"
};

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/WebitelApplications.enum.js
var WebitelApplications_enum_default = Object.fromEntries(
  Object.entries(WtApplication).map(([key, value]) => [
    upperCase_default(key).replaceAll(" ", "_"),
    value
  ])
);

export {
  WtApplication,
  WebitelApplications_enum_default
};
//# sourceMappingURL=chunk-KKIOOXCK.js.map
