import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  it
} from "./chunk-ONKU6KKD.js";
import "./chunk-WAMQFCE2.js";
import {
  F
} from "./chunk-HFJFBHBL.js";
import {
  D1,
  EPe,
  He,
  La,
  Oo,
  Rt,
  Wt,
  _i,
  io,
  kl,
  ma,
  mh,
  o5,
  sbe,
  t8,
  uE,
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

// node_modules/@webitel/ui-sdk/dist/vidstack-hls-DRS2V7zw.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var rt = Object.defineProperty;
var N = (n) => {
  throw TypeError(n);
};
var ot = (n, t, i) => t in n ? rt(n, t, { enumerable: true, configurable: true, writable: true, value: i }) : n[t] = i;
var _ = (n, t, i) => ot(n, typeof t != "symbol" ? t + "" : t, i);
var R = (n, t, i) => t.has(n) || N("Cannot " + i);
var e = (n, t, i) => (R(n, t, "read from private field"), i ? i.call(n) : t.get(n));
var p = (n, t, i) => t.has(n) ? N("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, i);
var f = (n, t, i, s) => (R(n, t, "write to private field"), s ? s.call(n, i) : t.set(n, i), i);
var a = (n, t, i) => (R(n, t, "access private method"), i);
var Lt = (n) => uE(n);
var T;
var h;
var o;
var D;
var b;
var r;
var E;
var M;
var U;
var F2;
var Q;
var K;
var W;
var B;
var J;
var X;
var Y;
var z;
var G;
var Z;
var tt;
var St = class {
  constructor(t, i) {
    p(this, r);
    p(this, T);
    p(this, h);
    p(this, o, null);
    p(this, D, null);
    _(this, "config", {});
    p(this, b, /* @__PURE__ */ new Set());
    f(this, T, t), f(this, h, i);
  }
  get instance() {
    return e(this, o);
  }
  setup(t) {
    const { streamType: i } = e(this, h).$state, s = He(i).includes("live"), c = He(i).includes("ll-");
    f(this, o, new t({
      lowLatencyMode: c,
      backBufferLength: c ? 4 : s ? 8 : void 0,
      renderTextTracksNatively: false,
      ...this.config
    }));
    const u = a(this, r, F2).bind(this);
    for (const l of Object.values(t.Events)) e(this, o).on(l, u);
    e(this, o).on(t.Events.ERROR, a(this, r, Y).bind(this));
    for (const l of e(this, b)) l(e(this, o));
    e(this, h).player.dispatch("hls-instance", {
      detail: e(this, o)
    }), e(this, o).attachMedia(e(this, T)), e(this, o).on(t.Events.AUDIO_TRACK_SWITCHED, a(this, r, W).bind(this)), e(this, o).on(t.Events.LEVEL_SWITCHED, a(this, r, B).bind(this)), e(this, o).on(t.Events.LEVEL_LOADED, a(this, r, X).bind(this)), e(this, o).on(t.Events.LEVEL_UPDATED, a(this, r, J).bind(this)), e(this, o).on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND, a(this, r, Q).bind(this)), e(this, o).on(t.Events.CUES_PARSED, a(this, r, K).bind(this)), e(this, h).qualities[ma.enableAuto] = a(this, r, G).bind(this), _i(e(this, h).qualities, "change", a(this, r, Z).bind(this)), _i(e(this, h).audioTracks, "change", a(this, r, tt).bind(this)), f(this, D, ye(a(this, r, M).bind(this)));
  }
  onInstance(t) {
    return e(this, b).add(t), () => e(this, b).delete(t);
  }
  loadSource(t) {
    var i;
    Rt(t.src) && ((i = e(this, o)) == null || i.loadSource(t.src));
  }
  destroy() {
    var t, i;
    (t = e(this, o)) == null || t.destroy(), f(this, o, null), (i = e(this, D)) == null || i.call(this), f(this, D, null);
  }
};
T = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakSet(), E = function(t, i) {
  return new Oo(Lt(t), { detail: i });
}, M = function() {
  if (!e(this, h).$state.live()) return;
  const t = new F(a(this, r, U).bind(this));
  return t.start(), t.stop.bind(t);
}, U = function() {
  var t;
  e(this, h).$state.liveSyncPosition.set(((t = e(this, o)) == null ? void 0 : t.liveSyncPosition) ?? 1 / 0);
}, F2 = function(t, i) {
  var s;
  (s = e(this, h).player) == null || s.dispatch(a(this, r, E).call(this, t, i));
}, Q = function(t, i) {
  const s = a(this, r, E).call(this, t, i);
  let c = -1;
  for (let u = 0; u < i.tracks.length; u++) {
    const l = i.tracks[u], d = l.subtitleTrack ?? l.closedCaptions, w = new mh({
      id: `hls-${l.kind}-${u}`,
      src: d == null ? void 0 : d.url,
      label: l.label,
      language: d == null ? void 0 : d.lang,
      kind: l.kind,
      default: l.default
    });
    w[Wt.readyState] = 2, w[Wt.onModeChange] = () => {
      w.mode === "showing" ? (e(this, o).subtitleTrack = u, c = u) : c === u && (e(this, o).subtitleTrack = -1, c = -1);
    }, e(this, h).textTracks.add(w, s);
  }
}, K = function(t, i) {
  var l;
  const s = (l = e(this, o)) == null ? void 0 : l.subtitleTrack, c = e(this, h).textTracks.getById(`hls-${i.type}-${s}`);
  if (!c) return;
  const u = a(this, r, E).call(this, t, i);
  for (const d of i.cues)
    d.positionAlign = "auto", c.addCue(d, u);
}, W = function(t, i) {
  const s = e(this, h).audioTracks[i.id];
  if (s) {
    const c = a(this, r, E).call(this, t, i);
    e(this, h).audioTracks[io.select](s, true, c);
  }
}, B = function(t, i) {
  const s = e(this, h).qualities[i.level];
  if (s) {
    const c = a(this, r, E).call(this, t, i);
    e(this, h).qualities[io.select](s, true, c);
  }
}, J = function(t, i) {
  i.details.totalduration > 0 && e(this, h).$state.inferredLiveDVRWindow.set(i.details.totalduration);
}, X = function(t, i) {
  var P;
  if (e(this, h).$state.canPlay()) return;
  const { type: s, live: c, totalduration: u, targetduration: l } = i.details, d = a(this, r, E).call(this, t, i);
  e(this, h).notify(
    "stream-type-change",
    c ? s === "EVENT" && Number.isFinite(u) && l >= 10 ? "live:dvr" : "live" : "on-demand",
    d
  ), e(this, h).notify("duration-change", u, d);
  const w = e(this, o).media;
  e(this, o).currentLevel === -1 && e(this, h).qualities[ma.setAuto](true, d);
  for (const y of e(this, o).audioTracks) {
    const H = {
      id: y.id.toString(),
      label: y.name,
      language: y.lang || "",
      kind: "main"
    };
    e(this, h).audioTracks[io.add](H, d);
  }
  for (const y of e(this, o).levels) {
    const H = {
      id: ((P = y.id) == null ? void 0 : P.toString()) ?? y.height + "p",
      width: y.width,
      height: y.height,
      codec: y.codecSet,
      bitrate: y.bitrate
    };
    e(this, h).qualities[io.add](H, d);
  }
  w.dispatchEvent(new Oo("canplay", { trigger: d }));
}, Y = function(t, i) {
  var s;
  if (i.fatal)
    switch (i.type) {
      case "mediaError":
        (s = e(this, o)) == null || s.recoverMediaError();
        break;
      default:
        a(this, r, z).call(this, i.error);
        break;
    }
}, z = function(t) {
  e(this, h).notify("error", {
    message: t.message,
    code: 1,
    error: t
  });
}, G = function() {
  e(this, o) && (e(this, o).currentLevel = -1);
}, Z = function() {
  const { qualities: t } = e(this, h);
  !e(this, o) || t.auto || (e(this, o)[t.switch + "Level"] = t.selectedIndex, sbe && (e(this, T).currentTime = e(this, T).currentTime));
}, tt = function() {
  const { audioTracks: t } = e(this, h);
  e(this, o) && e(this, o).audioTrack !== t.selectedIndex && (e(this, o).audioTrack = t.selectedIndex);
};
var m;
var g;
var I;
var L;
var it2;
var et;
var st;
var nt;
var Et = class {
  constructor(t, i, s) {
    p(this, L);
    p(this, m);
    p(this, g);
    p(this, I);
    f(this, m, t), f(this, g, i), f(this, I, s), a(this, L, it2).call(this);
  }
};
m = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakSet(), it2 = async function() {
  const t = {
    onLoadStart: a(this, L, et).bind(this),
    onLoaded: a(this, L, st).bind(this),
    onLoadError: a(this, L, nt).bind(this)
  };
  let i = await mt(e(this, m), t);
  if (La(i) && !Rt(e(this, m)) && (i = await Tt(e(this, m), t)), !i) return null;
  if (!i.isSupported()) {
    const s = "[vidstack] `hls.js` is not supported in this environment";
    return e(this, g).player.dispatch(new Oo("hls-unsupported")), e(this, g).notify("error", { message: s, code: 4 }), null;
  }
  return i;
}, et = function() {
  e(this, g).player.dispatch(new Oo("hls-lib-load-start"));
}, st = function(t) {
  e(this, g).player.dispatch(
    new Oo("hls-lib-loaded", {
      detail: t
    })
  ), e(this, I).call(this, t);
}, nt = function(t) {
  const i = o5(t);
  e(this, g).player.dispatch(
    new Oo("hls-lib-load-error", {
      detail: i
    })
  ), e(this, g).notify("error", {
    message: i.message,
    code: 4,
    error: i
  });
};
async function Tt(n, t = {}) {
  var i, s, c, u, l;
  if (!La(n)) {
    if ((i = t.onLoadStart) == null || i.call(t), n.prototype && n.prototype !== Function)
      return (s = t.onLoaded) == null || s.call(t, n), n;
    try {
      const d = (c = await n()) == null ? void 0 : c.default;
      if (d && d.isSupported)
        (u = t.onLoaded) == null || u.call(t, d);
      else
        throw Error(
          ""
        );
      return d;
    } catch (d) {
      (l = t.onLoadError) == null || l.call(t, d);
    }
  }
}
async function mt(n, t = {}) {
  var i, s, c;
  if (Rt(n)) {
    (i = t.onLoadStart) == null || i.call(t);
    try {
      if (await EPe(n), !kl(window.Hls))
        throw Error(
          ""
        );
      const u = window.Hls;
      return (s = t.onLoaded) == null || s.call(t, u), u;
    } catch (u) {
      (c = t.onLoadError) == null || c.call(t, u);
    }
  }
}
var wt = "https://cdn.jsdelivr.net";
var A;
var v;
var S;
var xt = class extends it {
  constructor() {
    super(...arguments);
    _(this, "$$PROVIDER_TYPE", "HLS");
    p(this, A, null);
    p(this, v, new St(this.video, this.ctx));
    p(this, S, `${wt}/npm/hls.js@^1.5.0/dist/hls.min.js`);
  }
  /**
   * The `hls.js` constructor.
   */
  get ctor() {
    return e(this, A);
  }
  /**
   * The current `hls.js` instance.
   */
  get instance() {
    return e(this, v).instance;
  }
  get type() {
    return "hls";
  }
  get canLiveSync() {
    return true;
  }
  /**
   * The `hls.js` configuration object.
   *
   * @see {@link https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning}
   */
  get config() {
    return e(this, v).config;
  }
  set config(i) {
    e(this, v).config = i;
  }
  /**
   * The `hls.js` constructor (supports dynamic imports) or a URL of where it can be found.
   *
   * @defaultValue `https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.min.js`
   */
  get library() {
    return e(this, S);
  }
  set library(i) {
    f(this, S, i);
  }
  preconnect() {
    Rt(e(this, S)) && D1(e(this, S));
  }
  setup() {
    super.setup(), new Et(e(this, S), this.ctx, (i) => {
      f(this, A, i), e(this, v).setup(i), this.ctx.notify("provider-setup", this);
      const s = He(this.ctx.$state.source);
      s && this.loadSource(s);
    });
  }
  async loadSource(i, s) {
    if (!Rt(i.src)) {
      this.removeSource();
      return;
    }
    this.media.preload = s || "", this.appendSource(i, "application/x-mpegurl"), e(this, v).loadSource(i), this.currentSrc = i;
  }
  /**
   * The given callback is invoked when a new `hls.js` instance is created and right before it's
   * attached to media.
   */
  onInstance(i) {
    const s = e(this, v).instance;
    return s && i(s), e(this, v).onInstance(i);
  }
  destroy() {
    e(this, v).destroy();
  }
};
A = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), /**
* Whether `hls.js` is supported in this environment.
*/
_(xt, "supported", t8());
export {
  xt as HLSProvider
};
//# sourceMappingURL=vidstack-hls-DRS2V7zw-7RYCRKUG.js.map
