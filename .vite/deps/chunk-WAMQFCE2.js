import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  F
} from "./chunk-HFJFBHBL.js";
import {
  CPe,
  Dt,
  He,
  Ht,
  IPe,
  Oo,
  R1,
  Rt,
  TPe,
  _i,
  _o,
  e4e,
  gE,
  io,
  tt,
  uh,
  ye
} from "./chunk-VQLFV2GX.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/dist/vidstack-Bq6c3Bam-CcUn4SyX.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var Qt = Object.defineProperty;
var ot = (n) => {
  throw TypeError(n);
};
var Xt = (n, t, s) => t in n ? Qt(n, t, { enumerable: true, configurable: true, writable: true, value: s }) : n[t] = s;
var M = (n, t, s) => Xt(n, typeof t != "symbol" ? t + "" : t, s);
var X = (n, t, s) => t.has(n) || ot("Cannot " + s);
var i = (n, t, s) => (X(n, t, "read from private field"), s ? s.call(n) : t.get(n));
var d = (n, t, s) => t.has(n) ? ot("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, s);
var c = (n, t, s, r) => (X(n, t, "write to private field"), r ? r.call(n, s) : t.set(n, s), s);
var a = (n, t, s) => (X(n, t, "access private method"), s);
var q = null;
var z = [];
var J = [];
function ht() {
  return q ?? (q = new AudioContext());
}
function hi() {
  const n = ht(), t = n.createGain();
  return t.connect(n.destination), z.push(t), t;
}
function oi(n, t) {
  const s = ht(), r = s.createMediaElementSource(n);
  return t && r.connect(t), J.push(r), r;
}
function di(n) {
  const t = z.indexOf(n);
  t !== -1 && (z.splice(t, 1), n.disconnect(), ft());
}
function ci(n) {
  const t = J.indexOf(n);
  t !== -1 && (J.splice(t, 1), n.disconnect(), ft());
}
function ft() {
  q && z.length === 0 && J.length === 0 && q.close().then(() => {
    q = null;
  });
}
var R;
var E;
var m;
var p;
var P;
var mt;
var tt2;
var ui = class {
  constructor(t, s) {
    d(this, P);
    d(this, R);
    d(this, E);
    d(this, m, null);
    d(this, p, null);
    c(this, R, t), c(this, E, s);
  }
  get currentGain() {
    var t, s;
    return ((s = (t = i(this, m)) == null ? void 0 : t.gain) == null ? void 0 : s.value) ?? null;
  }
  get supported() {
    return true;
  }
  setGain(t) {
    const s = this.currentGain;
    if (t !== this.currentGain) {
      if (t === 1 && s !== 1) {
        this.removeGain();
        return;
      }
      i(this, m) || (c(this, m, hi()), i(this, p) && i(this, p).connect(i(this, m))), i(this, p) || c(this, p, oi(i(this, R), i(this, m))), i(this, m).gain.value = t, i(this, E).call(this, t);
    }
  }
  removeGain() {
    i(this, m) && (i(this, p) && i(this, p).connect(ht().destination), a(this, P, tt2).call(this), i(this, E).call(this, null));
  }
  destroy() {
    a(this, P, mt).call(this), a(this, P, tt2).call(this);
  }
};
R = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakSet(), mt = function() {
  if (i(this, p))
    try {
      ci(i(this, p));
    } catch {
    } finally {
      c(this, p, null);
    }
}, tt2 = function() {
  if (i(this, m))
    try {
      di(i(this, m));
    } catch {
    } finally {
      c(this, m, null);
    }
};
var li = ["focus", "blur", "visibilitychange", "pageshow", "pagehide"];
var k;
var A;
var D;
var K;
var pt;
var fi = class {
  constructor() {
    d(this, K);
    d(this, k, Dt(ct()));
    d(this, A, Dt(document.visibilityState));
    d(this, D);
  }
  connect() {
    const t = new _o(window), s = a(this, K, pt).bind(this);
    for (const r of li)
      t.add(r, s);
    IPe && t.add("beforeunload", (r) => {
      c(this, D, setTimeout(() => {
        r.defaultPrevented || r.returnValue.length > 0 || (i(this, k).set("hidden"), i(this, A).set("hidden"));
      }, 0));
    });
  }
  /**
   * The current page state. Important to note we only account for a subset of page states, as
   * the rest aren't valuable to the player at the moment.
   *
   * - **active:** A page is in the active state if it is visible and has input focus.
   * - **passive:** A page is in the passive state if it is visible and does not have input focus.
   * - **hidden:** A page is in the hidden state if it is not visible.
   *
   * @see https://developers.google.com/web/updates/2018/07/page-lifecycle-api#states
   */
  get pageState() {
    return i(this, k).call(this);
  }
  /**
   * The current document visibility state.
   *
   * - **visible:** The page content may be at least partially visible. In practice, this means that
   * the page is the foreground tab of a non-minimized window.
   * - **hidden:** The page content is not visible to the user. In practice this means that the
   * document is either a background tab or part of a minimized window, or the OS screen lock is
   * active.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState
   */
  get visibility() {
    return i(this, A).call(this);
  }
};
k = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakSet(), pt = function(t) {
  IPe && window.clearTimeout(i(this, D)), (t.type !== "blur" || i(this, k).call(this) === "active") && (i(this, k).set(ct(t)), i(this, A).set(document.visibilityState == "hidden" ? "hidden" : "visible"));
};
function ct(n) {
  return (n == null ? void 0 : n.type) === "blur" || document.visibilityState === "hidden" ? "hidden" : document.hasFocus() ? "active" : "passive";
}
var O;
var h;
var b;
var x;
var L;
var S;
var H;
var G;
var e;
var o;
var yt;
var $;
var N;
var gt;
var bt;
var vt;
var Tt;
var Q;
var at;
var u;
var pi;
var T;
var kt;
var it;
var St;
var wt;
var Pt;
var W;
var Ct;
var Et;
var At;
var xt;
var Lt;
var Gt;
var $t;
var Nt;
var Mt;
var Rt2;
var Dt2;
var Ot;
var Ht2;
var It;
var Ft;
var Ut;
var Vt;
var Bt;
var mi = class {
  constructor(t, s) {
    d(this, e);
    d(this, O);
    d(this, h);
    d(this, b, false);
    d(this, x, false);
    d(this, L, false);
    d(this, S, new F(a(this, e, gt).bind(this)));
    d(this, H, new fi());
    d(this, G);
    d(this, $, 0);
    d(this, N, -1);
    d(this, Q);
    d(this, at);
    c(this, O, t), c(this, h, s), c(this, G, new _o(t.media)), a(this, e, bt).call(this), i(this, H).connect(), ye(a(this, e, Mt).bind(this)), Ht(a(this, e, yt).bind(this));
  }
};
O = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakSet(), o = function() {
  return i(this, O).media;
}, yt = function() {
  var t;
  c(this, x, false), c(this, L, false), i(this, S).stop(), i(this, G).abort(), (t = i(this, Q)) == null || t.clear();
}, $ = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), gt = function() {
  const t = i(this, e, o).currentTime;
  !(IPe && t - i(this, N) < 0.35) && i(this, $) !== t && (a(this, e, T).call(this, t), c(this, $, t));
}, bt = function() {
  a(this, e, u).call(this, "loadstart", a(this, e, kt)), a(this, e, u).call(this, "abort", a(this, e, it)), a(this, e, u).call(this, "emptied", a(this, e, St)), a(this, e, u).call(this, "error", a(this, e, Bt)), a(this, e, u).call(this, "volumechange", a(this, e, Ot));
}, vt = function() {
  i(this, x) || (a(this, e, u).call(this, "loadeddata", a(this, e, wt)), a(this, e, u).call(this, "loadedmetadata", a(this, e, Pt)), a(this, e, u).call(this, "canplay", a(this, e, At)), a(this, e, u).call(this, "canplaythrough", a(this, e, xt)), a(this, e, u).call(this, "durationchange", a(this, e, Dt2)), a(this, e, u).call(this, "play", a(this, e, Ct)), a(this, e, u).call(this, "progress", a(this, e, Ft)), a(this, e, u).call(this, "stalled", a(this, e, Gt)), a(this, e, u).call(this, "suspend", a(this, e, Ut)), a(this, e, u).call(this, "ratechange", a(this, e, Vt)), c(this, x, true));
}, Tt = function() {
  i(this, L) || (a(this, e, u).call(this, "pause", a(this, e, Et)), a(this, e, u).call(this, "playing", a(this, e, Lt)), a(this, e, u).call(this, "seeked", a(this, e, Ht2)), a(this, e, u).call(this, "seeking", a(this, e, It)), a(this, e, u).call(this, "ended", a(this, e, Nt)), a(this, e, u).call(this, "waiting", a(this, e, $t)), c(this, L, true));
}, Q = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), u = function(t, s) {
  i(this, G).add(t, s.bind(this));
}, pi = function(t) {
}, T = function(t, s) {
  const r = Math.min(t, i(this, h).$state.seekableEnd());
  i(this, h).notify("time-change", r, s);
}, kt = function(t) {
  if (i(this, e, o).networkState === 3) {
    a(this, e, it).call(this, t);
    return;
  }
  a(this, e, vt).call(this), i(this, h).notify("load-start", void 0, t);
}, it = function(t) {
  i(this, h).notify("abort", void 0, t);
}, St = function() {
  i(this, h).notify("emptied", void 0, event);
}, wt = function(t) {
  i(this, h).notify("loaded-data", void 0, t);
}, Pt = function(t) {
  c(this, $, 0), c(this, N, -1), a(this, e, Tt).call(this), i(this, h).notify("loaded-metadata", void 0, t), (gE || IPe && R1(i(this, h).$state.source())) && i(this, h).delegate.ready(a(this, e, W).call(this), t);
}, W = function() {
  return {
    provider: He(i(this, h).$provider),
    duration: i(this, e, o).duration,
    buffered: i(this, e, o).buffered,
    seekable: i(this, e, o).seekable
  };
}, Ct = function(t) {
  i(this, h).$state.canPlay && i(this, h).notify("play", void 0, t);
}, Et = function(t) {
  i(this, e, o).readyState === 1 && !i(this, b) || (c(this, b, false), i(this, S).stop(), i(this, h).notify("pause", void 0, t));
}, At = function(t) {
  i(this, h).delegate.ready(a(this, e, W).call(this), t);
}, xt = function(t) {
  i(this, h).$state.started() || i(this, h).notify("can-play-through", a(this, e, W).call(this), t);
}, Lt = function(t) {
  i(this, e, o).paused || (c(this, b, false), i(this, h).notify("playing", void 0, t), i(this, S).start());
}, Gt = function(t) {
  i(this, h).notify("stalled", void 0, t), i(this, e, o).readyState < 3 && (c(this, b, true), i(this, h).notify("waiting", void 0, t));
}, $t = function(t) {
  i(this, e, o).readyState < 3 && (c(this, b, true), i(this, h).notify("waiting", void 0, t));
}, Nt = function(t) {
  i(this, S).stop(), a(this, e, T).call(this, i(this, e, o).duration, t), i(this, h).notify("end", void 0, t), i(this, h).$state.loop() && CPe(i(this, e, o).controls) && (i(this, e, o).controls = false);
}, Mt = function() {
  const t = i(this, h).$state.paused(), s = i(this, H).visibility === "hidden";
  (t || s) && _i(i(this, e, o), "timeupdate", a(this, e, Rt2).bind(this));
}, Rt2 = function(t) {
  a(this, e, T).call(this, i(this, e, o).currentTime, t);
}, Dt2 = function(t) {
  i(this, h).$state.ended() && a(this, e, T).call(this, i(this, e, o).duration, t), i(this, h).notify("duration-change", i(this, e, o).duration, t);
}, Ot = function(t) {
  const s = {
    volume: i(this, e, o).volume,
    muted: i(this, e, o).muted
  };
  i(this, h).notify("volume-change", s, t);
}, Ht2 = function(t) {
  c(this, N, i(this, e, o).currentTime), a(this, e, T).call(this, i(this, e, o).currentTime, t), i(this, h).notify("seeked", i(this, e, o).currentTime, t), Math.trunc(i(this, e, o).currentTime) === Math.trunc(i(this, e, o).duration) && e4e(i(this, e, o).duration) > e4e(i(this, e, o).currentTime) && (a(this, e, T).call(this, i(this, e, o).duration, t), i(this, e, o).ended || i(this, h).player.dispatch(
    new Oo("media-play-request", {
      trigger: t
    })
  ));
}, It = function(t) {
  i(this, h).notify("seeking", i(this, e, o).currentTime, t);
}, Ft = function(t) {
  const s = {
    buffered: i(this, e, o).buffered,
    seekable: i(this, e, o).seekable
  };
  i(this, h).notify("progress", s, t);
}, Ut = function(t) {
  i(this, h).notify("suspend", void 0, t);
}, Vt = function(t) {
  i(this, h).notify("rate-change", i(this, e, o).playbackRate, t);
}, Bt = function(t) {
  const s = i(this, e, o).error;
  if (!s) return;
  const r = {
    message: s.message,
    code: s.code,
    mediaError: s
  };
  i(this, h).notify("error", r, t);
};
var I;
var g;
var l;
var C;
var jt;
var qt;
var Wt;
var et;
var _t;
var yi = class {
  constructor(t, s) {
    d(this, l);
    d(this, I);
    d(this, g);
    c(this, I, t), c(this, g, s), i(this, l, C).onaddtrack = a(this, l, jt).bind(this), i(this, l, C).onremovetrack = a(this, l, qt).bind(this), i(this, l, C).onchange = a(this, l, Wt).bind(this), _i(i(this, g).audioTracks, "change", a(this, l, _t).bind(this));
  }
};
I = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakSet(), C = function() {
  return i(this, I).media.audioTracks;
}, jt = function(t) {
  const s = t.track;
  if (s.label === "") return;
  const r = s.id.toString() || `native-audio-${i(this, g).audioTracks.length}`, f = {
    id: r,
    label: s.label,
    language: s.language,
    kind: s.kind,
    selected: false
  };
  i(this, g).audioTracks[io.add](f, t), s.enabled && (f.selected = true);
}, qt = function(t) {
  const s = i(this, g).audioTracks.getById(t.track.id);
  s && i(this, g).audioTracks[io.remove](s, t);
}, Wt = function(t) {
  let s = a(this, l, et).call(this);
  if (!s) return;
  const r = i(this, g).audioTracks.getById(s.id);
  r && i(this, g).audioTracks[io.select](r, true, t);
}, et = function() {
  return Array.from(i(this, l, C)).find((t) => t.enabled);
}, _t = function(t) {
  const { current: s } = t.detail;
  if (!s) return;
  const r = i(this, l, C).getTrackById(s.id);
  if (r) {
    const f = a(this, l, et).call(this);
    f && (f.enabled = false), r.enabled = true;
  }
};
var F2;
var st;
var ki = class {
  constructor(t, s) {
    d(this, F2);
    M(this, "scope", uh());
    M(this, "currentSrc", null);
    M(this, "audioGain");
    this.media = t, this.ctx = s, this.audioGain = new ui(t, (r) => {
      this.ctx.notify("audio-gain-change", r);
    });
  }
  setup() {
    new mi(this, this.ctx), "audioTracks" in this.media && new yi(this, this.ctx), Ht(() => {
      this.audioGain.destroy(), this.media.srcObject = null, this.media.removeAttribute("src");
      for (const t of this.media.querySelectorAll("source")) t.remove();
      this.media.load();
    });
  }
  get type() {
    return "";
  }
  setPlaybackRate(t) {
    this.media.playbackRate = t;
  }
  async play() {
    return this.media.play();
  }
  async pause() {
    return this.media.pause();
  }
  setMuted(t) {
    this.media.muted = t;
  }
  setVolume(t) {
    this.media.volume = t;
  }
  setCurrentTime(t) {
    this.media.currentTime = t;
  }
  setPlaysInline(t) {
    tt(this.media, "playsinline", t);
  }
  async loadSource({ src: t, type: s }, r) {
    this.media.preload = r || "", TPe(t) ? (this.removeSource(), this.media.srcObject = t) : (this.media.srcObject = null, Rt(t) ? s !== "?" ? this.appendSource({ src: t, type: s }) : (this.removeSource(), this.media.src = a(this, F2, st).call(this, t)) : (this.removeSource(), this.media.src = window.URL.createObjectURL(t))), this.media.load(), this.currentSrc = { src: t, type: s };
  }
  /**
   * Append source so it works when requesting AirPlay since hls.js will remove it.
   */
  appendSource(t, s) {
    const r = this.media.querySelector("source[data-vds]"), f = r ?? document.createElement("source");
    tt(f, "src", a(this, F2, st).call(this, t.src)), tt(f, "type", t.type !== "?" ? t.type : s), tt(f, "data-vds", ""), r || this.media.append(f);
  }
  removeSource() {
    var t;
    (t = this.media.querySelector("source[data-vds]")) == null || t.remove();
  }
};
F2 = /* @__PURE__ */ new WeakSet(), st = function(t) {
  const { clipStartTime: s, clipEndTime: r } = this.ctx.$state, f = s(), B = r();
  return f > 0 && B > 0 ? `${t}#t=${f},${B}` : f > 0 ? `${t}#t=${f}` : B > 0 ? `${t}#t=0,${B}` : t;
};
var y;
var U;
var V;
var w;
var v;
var zt;
var Jt;
var Kt;
var gi = class {
  constructor(t, s) {
    d(this, v);
    d(this, y);
    d(this, U);
    d(this, V);
    d(this, w, Dt(false));
    c(this, y, t), c(this, U, s), a(this, v, zt).call(this);
  }
  get supported() {
    return i(this, w).call(this);
  }
  async prompt() {
    if (!this.supported) throw Error("Not supported on this platform.");
    return this.type === "airplay" && i(this, y).webkitShowPlaybackTargetPicker ? i(this, y).webkitShowPlaybackTargetPicker() : i(this, y).remote.prompt();
  }
};
y = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakSet(), zt = function() {
  var t;
  !((t = i(this, y)) != null && t.remote) || !this.canPrompt || (i(this, y).remote.watchAvailability((s) => {
    i(this, w).set(s);
  }).catch(() => {
    i(this, w).set(false);
  }), ye(a(this, v, Jt).bind(this)));
}, Jt = function() {
  if (!i(this, w).call(this)) return;
  const t = ["connecting", "connect", "disconnect"], s = a(this, v, Kt).bind(this);
  s(), _i(i(this, y), "playing", s);
  const r = new _o(i(this, y).remote);
  for (const f of t)
    r.add(f, s);
}, Kt = function(t) {
  const s = i(this, y).remote.state;
  if (s === i(this, V)) return;
  const r = { type: this.type, state: s };
  i(this, U).notify("remote-playback-change", r, t), c(this, V, s);
};
var Si = class extends gi {
  constructor() {
    super(...arguments);
    M(this, "type", "airplay");
  }
  get canPrompt() {
    return "WebKitPlaybackTargetAvailabilityEvent" in window;
  }
};

export {
  ki,
  Si
};
//# sourceMappingURL=chunk-WAMQFCE2.js.map
