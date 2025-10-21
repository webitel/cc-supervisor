import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  Si,
  ki
} from "./chunk-WAMQFCE2.js";
import {
  APe,
  An,
  Ht,
  Oo,
  SPe,
  Wt,
  _i,
  _o,
  mh,
  ube
} from "./chunk-VQLFV2GX.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/dist/vidstack-video-BIG7CBfM.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var $ = Object.defineProperty;
var b = (i) => {
  throw TypeError(i);
};
var N = (i, t, e) => t in i ? $(i, t, { enumerable: true, configurable: true, writable: true, value: e }) : i[t] = e;
var m = (i, t, e) => N(i, typeof t != "symbol" ? t + "" : t, e);
var E = (i, t, e) => t.has(i) || b("Cannot " + e);
var s = (i, t, e) => (E(i, t, "read from private field"), e ? e.call(i) : t.get(i));
var r = (i, t, e) => t.has(i) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e);
var c = (i, t, e, n) => (E(i, t, "write to private field"), n ? n.call(i, e) : t.set(i, e), e);
var p = (i, t, e) => (E(i, t, "access private method"), e);
var P;
var f;
var k;
var D;
var H;
var G = class {
  constructor(t, e) {
    r(this, k);
    r(this, P);
    r(this, f);
    c(this, P, t), c(this, f, e), t.textTracks.onaddtrack = p(this, k, D).bind(this), Ht(p(this, k, H).bind(this));
  }
};
P = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakSet(), D = function(t) {
  const e = t.track;
  if (!e || J(s(this, P), e)) return;
  const n = new mh({
    id: e.id,
    kind: e.kind,
    label: e.label ?? "",
    language: e.language,
    type: "vtt"
  });
  n[Wt.native] = { track: e }, n[Wt.readyState] = 2, n[Wt.nativeHLS] = true;
  let a = 0;
  const I = (O) => {
    if (e.cues)
      for (let w = a; w < e.cues.length; w++)
        n.addCue(e.cues[w], O), a++;
  };
  I(t), e.oncuechange = I, s(this, f).textTracks.add(n, t), n.setMode(e.mode, t);
}, H = function() {
  var t;
  s(this, P).textTracks.onaddtrack = null;
  for (const e of s(this, f).textTracks) {
    const n = (t = e[Wt.native]) == null ? void 0 : t.track;
    n != null && n.oncuechange && (n.oncuechange = null);
  }
};
function J(i, t) {
  return Array.from(i.children).find((e) => e.track === t);
}
var d;
var y;
var x;
var S;
var L;
var T;
var K = class {
  constructor(t, e) {
    r(this, x);
    r(this, d);
    r(this, y);
    r(this, T, (t2, e2) => {
      s(this, y).notify("picture-in-picture-change", t2, e2);
    });
    c(this, d, t), c(this, y, e), new _o(t).add("enterpictureinpicture", p(this, x, S).bind(this)).add("leavepictureinpicture", p(this, x, L).bind(this));
  }
  get active() {
    return document.pictureInPictureElement === s(this, d);
  }
  get supported() {
    return SPe(s(this, d));
  }
  async enter() {
    return s(this, d).requestPictureInPicture();
  }
  exit() {
    return document.exitPictureInPicture();
  }
};
d = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakSet(), S = function(t) {
  s(this, T).call(this, true, t);
}, L = function(t) {
  s(this, T).call(this, false, t);
}, T = /* @__PURE__ */ new WeakMap();
var l;
var g;
var o;
var M;
var R;
var Q = class {
  constructor(t, e) {
    r(this, M);
    r(this, l);
    r(this, g);
    r(this, o, "inline");
    c(this, l, t), c(this, g, e), _i(t, "webkitpresentationmodechanged", p(this, M, R).bind(this));
  }
  get mode() {
    return s(this, o);
  }
  get supported() {
    return APe(s(this, l));
  }
  async setPresentationMode(t) {
    s(this, o) !== t && s(this, l).webkitSetPresentationMode(t);
  }
};
l = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakSet(), R = function(t) {
  var n;
  const e = s(this, o);
  c(this, o, s(this, l).webkitPresentationMode), (n = s(this, g).player) == null || n.dispatch(
    new Oo("video-presentation-change", {
      detail: s(this, o),
      trigger: t
    })
  ), ["fullscreen", "picture-in-picture"].forEach((a) => {
    (s(this, o) === a || e === a) && s(this, g).notify(`${a}-change`, s(this, o) === a, t);
  });
};
var u;
var W = class {
  constructor(t) {
    r(this, u);
    c(this, u, t);
  }
  get active() {
    return s(this, u).mode === "fullscreen";
  }
  get supported() {
    return s(this, u).supported;
  }
  async enter() {
    s(this, u).setPresentationMode("fullscreen");
  }
  async exit() {
    s(this, u).setPresentationMode("inline");
  }
};
u = /* @__PURE__ */ new WeakMap();
var h;
var X = class {
  constructor(t) {
    r(this, h);
    c(this, h, t);
  }
  get active() {
    return s(this, h).mode === "picture-in-picture";
  }
  get supported() {
    return s(this, h).supported;
  }
  async enter() {
    s(this, h).setPresentationMode("picture-in-picture");
  }
  async exit() {
    s(this, h).setPresentationMode("inline");
  }
};
h = /* @__PURE__ */ new WeakMap();
var it = class extends ki {
  constructor(e, n) {
    super(e, n);
    m(this, "$$PROVIDER_TYPE", "VIDEO");
    m(this, "airPlay");
    m(this, "fullscreen");
    m(this, "pictureInPicture");
    An(() => {
      if (this.airPlay = new Si(e, n), APe(e)) {
        const a = new Q(e, n);
        this.fullscreen = new W(a), this.pictureInPicture = new X(a);
      } else SPe(e) && (this.pictureInPicture = new K(e, n));
    }, this.scope);
  }
  get type() {
    return "video";
  }
  setup() {
    super.setup(), ube(this.video) && new G(this.video, this.ctx), this.ctx.textRenderers.attachVideo(this.video), Ht(() => {
      this.ctx.textRenderers.attachVideo(null);
    }), this.type === "video" && this.ctx.notify("provider-setup", this);
  }
  /**
   * The native HTML `<video>` element.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement}
   */
  get video() {
    return this.media;
  }
};

export {
  it
};
//# sourceMappingURL=chunk-ONKU6KKD.js.map
