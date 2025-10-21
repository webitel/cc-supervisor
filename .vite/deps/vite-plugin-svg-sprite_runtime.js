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

// node_modules/vite-plugin-svg-sprite/esm/runtime.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
function createAddSymbol() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {
    };
  }
  const idSet = window._SVG_SPRITE_IDS_ = window._SVG_SPRITE_IDS_ || [];
  const root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  root.style.position = "absolute";
  root.style.width = "0";
  root.style.height = "0";
  function insertRoot() {
    document.body.insertBefore(root, document.body.firstChild);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertRoot);
  } else {
    insertRoot();
  }
  return function addSymbol(symbol, id) {
    if (idSet.indexOf(id) > -1 || document.getElementById(id)) {
      console.warn(`Icon #${id} was duplicately registered. It must be globally unique.`);
    }
    idSet.push(id);
    root.insertAdjacentHTML("beforeend", symbol);
  };
}
var runtime_default = createAddSymbol();
export {
  runtime_default as default
};
//# sourceMappingURL=vite-plugin-svg-sprite_runtime.js.map
