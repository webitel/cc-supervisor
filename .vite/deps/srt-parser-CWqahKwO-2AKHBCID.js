import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  D,
  V,
  W
} from "./chunk-SJBVCNRV.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/dist/srt-parser-CWqahKwO.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var n = /,/g;
var u = "-->";
var o = class extends W {
  parse(s, e) {
    var h, r;
    if (s === "")
      this.c && (this.l.push(this.c), (r = (h = this.h).onCue) == null || r.call(h, this.c), this.c = null), this.e = D.None;
    else if (this.e === D.Cue)
      this.c.text += (this.c.text ? `
` : "") + s;
    else if (s.includes(u)) {
      const t = this.q(s, e);
      t && (this.c = new V(t[0], t[1], t[2].join(" ")), this.c.id = this.n, this.e = D.Cue);
    }
    this.n = s;
  }
  q(s, e) {
    return super.q(s.replace(n, "."), e);
  }
};
function l() {
  return new o();
}
export {
  o as SRTParser,
  l as default
};
//# sourceMappingURL=srt-parser-CWqahKwO-2AKHBCID.js.map
