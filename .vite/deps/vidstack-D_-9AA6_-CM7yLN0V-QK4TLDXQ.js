import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  AE,
  TE,
  xPe,
  ye
} from "./chunk-VQLFV2GX.js";
import "./chunk-5BXUT56C.js";
import "./chunk-4OSCJW2H.js";
import "./chunk-HTF5FYCO.js";
import "./chunk-2OJGSHGR.js";
import "./chunk-QI253I2C.js";
import "./chunk-W24ITOCJ.js";
import "./chunk-ESEZ4R5I.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/dist/vidstack-D_-9AA6_-CM7yLN0V.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var p = AE(
  '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"></svg>'
);
function v(a, s) {
  const o = TE(p);
  o.innerHTML = xPe, a.append(o);
  const e = document.createElement("span");
  e.classList.add("vds-google-cast-info"), a.append(e);
  const n = document.createElement("span");
  n.classList.add("vds-google-cast-device-name"), ye(() => {
    const { remotePlaybackInfo: c } = s, t = c();
    return t != null && t.deviceName && (n.textContent = t.deviceName, e.append("Google Cast on ", n)), () => {
      e.textContent = "";
    };
  });
}
export {
  v as insertContent
};
//# sourceMappingURL=vidstack-D_-9AA6_-CM7yLN0V-QK4TLDXQ.js.map
