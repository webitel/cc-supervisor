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
  bbe,
  cbe,
  io,
  kl,
  ma,
  mh,
  na,
  o5,
  pbe,
  sbe,
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

// node_modules/@webitel/ui-sdk/dist/vidstack-dash-DOuceC5F.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var vt = Object.defineProperty;
var Y = (n) => {
  throw TypeError(n);
};
var wt = (n, t, e) => t in n ? vt(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var I = (n, t, e) => wt(n, typeof t != "symbol" ? t + "" : t, e);
var b = (n, t, e) => t.has(n) || Y("Cannot " + e);
var i = (n, t, e) => (b(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var f = (n, t, e) => t.has(n) ? Y("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var p = (n, t, e, r) => (b(n, t, "write to private field"), r ? r.call(n, e) : t.set(n, e), e);
var h = (n, t, e) => (b(n, t, "access private method"), e);
function W(n) {
  try {
    return new Intl.DisplayNames(navigator.languages, { type: "language" }).of(n) ?? null;
  } catch {
    return null;
  }
}
var Ht = (n) => `dash-${uE(n)}`;
var L;
var d;
var o;
var R;
var F2;
var s;
var x;
var k;
var tt;
var it2;
var w;
var P;
var et;
var st;
var nt;
var rt;
var ot;
var at;
var ht;
var dt;
var A;
var ut;
var Q;
var G;
var ct;
var V;
var lt;
var pt;
var U;
var It = class {
  constructor(t, e) {
    f(this, s);
    f(this, L);
    f(this, d);
    f(this, o, null);
    f(this, R, /* @__PURE__ */ new Set());
    f(this, F2, null);
    I(this, "config", {});
    f(this, w, null);
    f(this, P, {});
    f(this, A, -1);
    p(this, L, t), p(this, d, e);
  }
  get instance() {
    return i(this, o);
  }
  setup(t) {
    p(this, o, t().create());
    const e = h(this, s, it2).bind(this);
    for (const r of Object.values(t.events)) i(this, o).on(r, e);
    i(this, o).on(t.events.ERROR, h(this, s, at).bind(this));
    for (const r of i(this, R)) r(i(this, o));
    i(this, d).player.dispatch("dash-instance", {
      detail: i(this, o)
    }), i(this, o).initialize(i(this, L), void 0, false), i(this, o).updateSettings({
      streaming: {
        text: {
          // Disabling text rendering by dash.
          defaultEnabled: false,
          dispatchForManualRendering: true
        },
        buffer: {
          /// Enables buffer replacement when switching bitrates for faster switching.
          fastSwitchEnabled: true
        }
      },
      ...this.config
    }), i(this, o).on(t.events.FRAGMENT_LOADING_STARTED, h(this, s, ht).bind(this)), i(this, o).on(
      t.events.FRAGMENT_LOADING_COMPLETED,
      h(this, s, dt).bind(this)
    ), i(this, o).on(t.events.MANIFEST_LOADED, h(this, s, ot).bind(this)), i(this, o).on(t.events.QUALITY_CHANGE_RENDERED, h(this, s, rt).bind(this)), i(this, o).on(t.events.TEXT_TRACKS_ADDED, h(this, s, st).bind(this)), i(this, o).on(t.events.TRACK_CHANGE_RENDERED, h(this, s, nt).bind(this)), i(this, d).qualities[ma.enableAuto] = h(this, s, ct).bind(this), _i(i(this, d).qualities, "change", h(this, s, lt).bind(this)), _i(i(this, d).audioTracks, "change", h(this, s, pt).bind(this)), p(this, F2, ye(h(this, s, k).bind(this)));
  }
  onInstance(t) {
    return i(this, R).add(t), () => i(this, R).delete(t);
  }
  loadSource(t) {
    var e;
    h(this, s, U).call(this), Rt(t.src) && ((e = i(this, o)) == null || e.attachSource(t.src));
  }
  destroy() {
    var t, e;
    h(this, s, U).call(this), (t = i(this, o)) == null || t.destroy(), p(this, o, null), (e = i(this, F2)) == null || e.call(this), p(this, F2, null);
  }
};
L = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), F2 = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet(), x = function(t) {
  return new Oo(Ht(t.type), { detail: t });
}, k = function() {
  if (!i(this, d).$state.live()) return;
  const t = new F(h(this, s, tt).bind(this));
  return t.start(), t.stop.bind(t);
}, tt = function() {
  if (!i(this, o)) return;
  const t = i(this, o).duration() - i(this, o).time();
  i(this, d).$state.liveSyncPosition.set(isNaN(t) ? 1 / 0 : t);
}, it2 = function(t) {
  var e;
  (e = i(this, d).player) == null || e.dispatch(h(this, s, x).call(this, t));
}, w = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), et = function(t) {
  var u;
  const e = (u = i(this, w)) == null ? void 0 : u[Wt.native], r = (e == null ? void 0 : e.track).cues;
  if (!e || !r) return;
  const l = i(this, w).id, g = i(this, P)[l] ?? 0, y = h(this, s, x).call(this, t);
  for (let m = g; m < r.length; m++) {
    const c = r[m];
    c.positionAlign || (c.positionAlign = "auto"), i(this, w).addCue(c, y);
  }
  i(this, P)[l] = r.length;
}, st = function(t) {
  var g;
  if (!i(this, o)) return;
  const e = t.tracks, r = [...i(this, L).textTracks].filter((y) => "manualMode" in y), l = h(this, s, x).call(this, t);
  for (let y = 0; y < r.length; y++) {
    const u = e[y], m = r[y], c = `dash-${u.kind}-${y}`, E = new mh({
      id: c,
      label: (u == null ? void 0 : u.label) ?? ((g = u.labels.find((a) => a.text)) == null ? void 0 : g.text) ?? ((u == null ? void 0 : u.lang) && W(u.lang)) ?? (u == null ? void 0 : u.lang) ?? void 0,
      language: u.lang ?? void 0,
      kind: u.kind,
      default: u.defaultTrack
    });
    E[Wt.native] = {
      managed: true,
      track: m
    }, E[Wt.readyState] = 2, E[Wt.onModeChange] = () => {
      i(this, o) && (E.mode === "showing" ? (i(this, o).setTextTrack(y), p(this, w, E)) : (i(this, o).setTextTrack(-1), p(this, w, null)));
    }, i(this, d).textTracks.add(E, l);
  }
}, nt = function(t) {
  const { mediaType: e, newMediaInfo: r } = t;
  if (e === "audio") {
    const l = i(this, d).audioTracks.getById(`dash-audio-${r.index}`);
    if (l) {
      const g = h(this, s, x).call(this, t);
      i(this, d).audioTracks[io.select](l, true, g);
    }
  }
}, rt = function(t) {
  if (t.mediaType !== "video") return;
  const e = i(this, d).qualities[t.newQuality];
  if (e) {
    const r = h(this, s, x).call(this, t);
    i(this, d).qualities[io.select](e, true, r);
  }
}, ot = function(t) {
  if (i(this, d).$state.canPlay() || !i(this, o)) return;
  const { type: e, mediaPresentationDuration: r } = t.data, l = h(this, s, x).call(this, t);
  i(this, d).notify("stream-type-change", e !== "static" ? "live" : "on-demand", l), i(this, d).notify("duration-change", r, l), i(this, d).qualities[ma.setAuto](true, l);
  const g = i(this, o).getVideoElement(), y = i(this, o).getTracksForTypeFromManifest(
    "video",
    t.data
  ), u = [...new Set(y.map((a) => a.mimeType))].find(
    (a) => a && pbe(g, a)
  ), m = y.filter(
    (a) => u === a.mimeType
  )[0];
  let c = i(this, o).getTracksForTypeFromManifest(
    "audio",
    t.data
  );
  const E = [...new Set(c.map((a) => a.mimeType))].find(
    (a) => a && cbe(g, a)
  );
  if (c = c.filter((a) => E === a.mimeType), m.bitrateList.forEach((a, H) => {
    var C;
    const B = {
      id: ((C = a.id) == null ? void 0 : C.toString()) ?? `dash-bitrate-${H}`,
      width: a.width ?? 0,
      height: a.height ?? 0,
      bitrate: a.bandwidth ?? 0,
      codec: m.codec,
      index: H
    };
    i(this, d).qualities[io.add](B, l);
  }), na(m.index)) {
    const a = i(this, d).qualities[m.index];
    a && i(this, d).qualities[io.select](a, true, l);
  }
  c.forEach((a, H) => {
    const C = a.labels.find((K) => navigator.languages.some((St) => K.lang && St.toLowerCase().startsWith(K.lang.toLowerCase()))) || a.labels[0], Tt = {
      id: `dash-audio-${a == null ? void 0 : a.index}`,
      label: (C == null ? void 0 : C.text) ?? (a.lang && W(a.lang)) ?? a.lang ?? "",
      language: a.lang ?? "",
      kind: "main",
      mimeType: a.mimeType,
      codec: a.codec,
      index: H
    };
    i(this, d).audioTracks[io.add](Tt, l);
  }), g.dispatchEvent(new Oo("canplay", { trigger: l }));
}, at = function(t) {
  const { type: e, error: r } = t;
  switch (r.code) {
    case 27:
      h(this, s, ut).call(this, r);
      break;
    default:
      h(this, s, G).call(this, r);
      break;
  }
}, ht = function() {
  i(this, A) >= 0 && h(this, s, Q).call(this);
}, dt = function(t) {
  t.mediaType === "text" && requestAnimationFrame(h(this, s, et).bind(this, t));
}, A = /* @__PURE__ */ new WeakMap(), ut = function(t) {
  var e;
  h(this, s, Q).call(this), (e = i(this, o)) == null || e.play(), p(this, A, window.setTimeout(() => {
    p(this, A, -1), h(this, s, G).call(this, t);
  }, 5e3));
}, Q = function() {
  clearTimeout(i(this, A)), p(this, A, -1);
}, G = function(t) {
  i(this, d).notify("error", {
    message: t.message ?? "",
    code: 1,
    error: t
  });
}, ct = function() {
  var e;
  h(this, s, V).call(this, "video", true);
  const { qualities: t } = i(this, d);
  (e = i(this, o)) == null || e.setQualityFor("video", t.selectedIndex, true);
}, V = function(t, e) {
  var r;
  (r = i(this, o)) == null || r.updateSettings({
    streaming: { abr: { autoSwitchBitrate: { [t]: e } } }
  });
}, lt = function() {
  const { qualities: t } = i(this, d);
  !i(this, o) || t.auto || !t.selected || (h(this, s, V).call(this, "video", false), i(this, o).setQualityFor("video", t.selectedIndex, t.switch === "current"), sbe && (i(this, L).currentTime = i(this, L).currentTime));
}, pt = function() {
  if (!i(this, o)) return;
  const { audioTracks: t } = i(this, d), e = i(this, o).getTracksFor("audio").find(
    (r) => t.selected && t.selected.id === `dash-audio-${r.index}`
  );
  e && i(this, o).setCurrentTrack(e);
}, U = function() {
  h(this, s, Q).call(this), p(this, w, null), p(this, P, {});
};
var M;
var S;
var $;
var v;
var gt;
var ft;
var yt;
var mt;
var Ot = class {
  constructor(t, e, r) {
    f(this, v);
    f(this, M);
    f(this, S);
    f(this, $);
    p(this, M, t), p(this, S, e), p(this, $, r), h(this, v, gt).call(this);
  }
};
M = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakSet(), gt = async function() {
  const t = {
    onLoadStart: h(this, v, ft).bind(this),
    onLoaded: h(this, v, yt).bind(this),
    onLoadError: h(this, v, mt).bind(this)
  };
  let e = await bt(i(this, M), t);
  if (La(e) && !Rt(i(this, M)) && (e = await Qt(i(this, M), t)), !e) return null;
  if (!window.dashjs.supportsMediaSource()) {
    const r = "[vidstack] `dash.js` is not supported in this environment";
    return i(this, S).player.dispatch(new Oo("dash-unsupported")), i(this, S).notify("error", { message: r, code: 4 }), null;
  }
  return e;
}, ft = function() {
  i(this, S).player.dispatch(new Oo("dash-lib-load-start"));
}, yt = function(t) {
  i(this, S).player.dispatch(
    new Oo("dash-lib-loaded", {
      detail: t
    })
  ), i(this, $).call(this, t);
}, mt = function(t) {
  const e = o5(t);
  i(this, S).player.dispatch(
    new Oo("dash-lib-load-error", {
      detail: e
    })
  ), i(this, S).notify("error", {
    message: e.message,
    code: 4,
    error: e
  });
};
async function Qt(n, t = {}) {
  var e, r, l, g, y, u, m;
  if (!La(n)) {
    if ((e = t.onLoadStart) == null || e.call(t), Gt(n))
      return (r = t.onLoaded) == null || r.call(t, n), n;
    if (X(n)) {
      const c = n.MediaPlayer;
      return (l = t.onLoaded) == null || l.call(t, c), c;
    }
    try {
      const c = (g = await n()) == null ? void 0 : g.default;
      if (X(c))
        return (y = t.onLoaded) == null || y.call(t, c.MediaPlayer), c.MediaPlayer;
      if (c)
        (u = t.onLoaded) == null || u.call(t, c);
      else
        throw Error(
          ""
        );
      return c;
    } catch (c) {
      (m = t.onLoadError) == null || m.call(t, c);
    }
  }
}
async function bt(n, t = {}) {
  var e, r, l;
  if (Rt(n)) {
    (e = t.onLoadStart) == null || e.call(t);
    try {
      if (await EPe(n), !kl(window.dashjs.MediaPlayer))
        throw Error(
          ""
        );
      const g = window.dashjs.MediaPlayer;
      return (r = t.onLoaded) == null || r.call(t, g), g;
    } catch (g) {
      (l = t.onLoadError) == null || l.call(t, g);
    }
  }
}
function Gt(n) {
  return n && n.prototype && n.prototype !== Function;
}
function X(n) {
  return n && "MediaPlayer" in n;
}
var Vt = "https://cdn.jsdelivr.net";
var j;
var T;
var D;
var Ut = class extends it {
  constructor() {
    super(...arguments);
    I(this, "$$PROVIDER_TYPE", "DASH");
    f(this, j, null);
    f(this, T, new It(this.video, this.ctx));
    f(this, D, `${Vt}/npm/dashjs@4.7.4/dist/dash.all.min.js`);
  }
  /**
   * The `dash.js` constructor.
   */
  get ctor() {
    return i(this, j);
  }
  /**
   * The current `dash.js` instance.
   */
  get instance() {
    return i(this, T).instance;
  }
  get type() {
    return "dash";
  }
  get canLiveSync() {
    return true;
  }
  /**
   * The `dash.js` configuration object.
   *
   * @see {@link https://cdn.dashjs.org/latest/jsdoc/module-Settings.html}
   */
  get config() {
    return i(this, T).config;
  }
  set config(e) {
    i(this, T).config = e;
  }
  /**
   * The `dash.js` constructor (supports dynamic imports) or a URL of where it can be found.
   *
   * @defaultValue `https://cdn.jsdelivr.net/npm/dashjs@4.7.4/dist/dash.all.min.js`
   */
  get library() {
    return i(this, D);
  }
  set library(e) {
    p(this, D, e);
  }
  preconnect() {
    Rt(i(this, D)) && D1(i(this, D));
  }
  setup() {
    super.setup(), new Ot(i(this, D), this.ctx, (e) => {
      p(this, j, e), i(this, T).setup(e), this.ctx.notify("provider-setup", this);
      const r = He(this.ctx.$state.source);
      r && this.loadSource(r);
    });
  }
  async loadSource(e, r) {
    if (!Rt(e.src)) {
      this.removeSource();
      return;
    }
    this.media.preload = r || "", this.appendSource(e, "application/x-mpegurl"), i(this, T).loadSource(e), this.currentSrc = e;
  }
  /**
   * The given callback is invoked when a new `dash.js` instance is created and right before it's
   * attached to media.
   */
  onInstance(e) {
    const r = i(this, T).instance;
    return r && e(r), i(this, T).onInstance(e);
  }
  destroy() {
    i(this, T).destroy();
  }
};
j = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), /**
* Whether `dash.js` is supported in this environment.
*/
I(Ut, "supported", bbe());
export {
  Ut as DASHProvider
};
//# sourceMappingURL=vidstack-dash-DOuceC5F-AWBPIRPP.js.map
