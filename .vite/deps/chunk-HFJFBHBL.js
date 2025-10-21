import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  La,
  na
} from "./chunk-VQLFV2GX.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/dist/vidstack-DqAw8m9J-CCk5vkMc.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var l = (i) => {
  throw TypeError(i);
};
var c = (i, t, s) => t.has(i) || l("Cannot " + s);
var r = (i, t, s) => (c(i, t, "read from private field"), s ? s.call(i) : t.get(i));
var e = (i, t, s) => t.has(i) ? l("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, s);
var h = (i, t, s, f) => (c(i, t, "write to private field"), f ? f.call(i, s) : t.set(i, s), s);
var m = (i, t, s) => (c(i, t, "access private method"), s);
var o;
var a;
var n;
var d;
var F = class {
  constructor(t) {
    e(this, n);
    e(this, o);
    e(this, a);
    h(this, a, t);
  }
  start() {
    La(r(this, o)) && m(this, n, d).call(this);
  }
  stop() {
    na(r(this, o)) && window.cancelAnimationFrame(r(this, o)), h(this, o, void 0);
  }
};
o = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakSet(), d = function() {
  h(this, o, window.requestAnimationFrame(() => {
    La(r(this, o)) || (r(this, a).call(this), m(this, n, d).call(this));
  }));
};

export {
  F
};
//# sourceMappingURL=chunk-HFJFBHBL.js.map
