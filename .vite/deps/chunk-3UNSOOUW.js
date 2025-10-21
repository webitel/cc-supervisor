import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  Dt,
  He,
  OPe,
  Rt,
  _i,
  ye
} from "./chunk-VQLFV2GX.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/dist/vidstack-DDXt6fpN-4gTC4hYW.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var y = Object.defineProperty;
var g = (s) => {
  throw TypeError(s);
};
var w = (s, t, i) => t in s ? y(s, t, { enumerable: true, configurable: true, writable: true, value: i }) : s[t] = i;
var c = (s, t, i) => w(s, typeof t != "symbol" ? t + "" : t, i);
var h = (s, t, i) => t.has(s) || g("Cannot " + i);
var e = (s, t, i) => (h(s, t, "read from private field"), i ? i.call(s) : t.get(s));
var l = (s, t, i) => t.has(s) ? g("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, i);
var p = (s, t, i, a) => (h(s, t, "write to private field"), a ? a.call(s, i) : t.set(s, i), i);
var u = (s, t, i) => (h(s, t, "access private method"), i);
var r;
var o;
var b;
var m;
var W = class {
  constructor(t) {
    l(this, o);
    l(this, r);
    c(this, "src", Dt(""));
    c(this, "referrerPolicy", null);
    p(this, r, t), t.setAttribute("frameBorder", "0"), t.setAttribute("aria-hidden", "true"), t.setAttribute(
      "allow",
      "autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"
    ), this.referrerPolicy !== null && t.setAttribute("referrerpolicy", this.referrerPolicy);
  }
  get iframe() {
    return e(this, r);
  }
  setup() {
    _i(window, "message", u(this, o, m).bind(this)), _i(e(this, r), "load", this.onLoad.bind(this)), ye(u(this, o, b).bind(this));
  }
  postMessage(t, i) {
    var a;
    (a = e(this, r).contentWindow) == null || a.postMessage(JSON.stringify(t), i ?? "*");
  }
};
r = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakSet(), b = function() {
  const t = this.src();
  if (!t.length) {
    e(this, r).setAttribute("src", "");
    return;
  }
  const i = He(() => this.buildParams());
  e(this, r).setAttribute("src", OPe(t, i));
}, m = function(t) {
  var d;
  const i = this.getOrigin();
  if ((t.source === null || t.source === ((d = e(this, r)) == null ? void 0 : d.contentWindow)) && (!Rt(i) || i === t.origin)) {
    try {
      const n = JSON.parse(t.data);
      n && this.onMessage(n, t);
      return;
    } catch {
    }
    t.data && this.onMessage(t.data, t);
  }
};

export {
  W
};
//# sourceMappingURL=chunk-3UNSOOUW.js.map
