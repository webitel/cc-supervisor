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

// node_modules/@webitel/ui-sdk/dist/vidstack-Dm1xEU9Q-qSXq3AI-.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var i = /(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)(?:\/shorts)?\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/;
var u = /* @__PURE__ */ new Map();
var n = /* @__PURE__ */ new Map();
function l(e) {
  var t;
  return (t = e.match(i)) == null ? void 0 : t[1];
}
async function b(e, t) {
  if (u.has(e)) return u.get(e);
  if (n.has(e)) return n.get(e);
  const s = new Promise(async (r) => {
    const c = ["maxresdefault", "sddefault", "hqdefault"];
    for (const a of c)
      for (const f of [true, false]) {
        const o = p(e, a, f);
        if ((await fetch(o, {
          mode: "no-cors",
          signal: t.signal
        })).status < 400) {
          u.set(e, o), r(o);
          return;
        }
      }
  }).catch(() => "").finally(() => n.delete(e));
  return n.set(e, s), s;
}
function p(e, t, s) {
  return `https://i.ytimg.com/${s ? "vi_webp" : "vi"}/${e}/${t}.${s ? "webp" : "jpg"}`;
}

export {
  l,
  b
};
//# sourceMappingURL=chunk-LAQXM4Q3.js.map
