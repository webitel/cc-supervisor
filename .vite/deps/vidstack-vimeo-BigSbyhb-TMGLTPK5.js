import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  b,
  w
} from "./chunk-7JHM4O56.js";
import {
  W
} from "./chunk-3UNSOOUW.js";
import {
  F
} from "./chunk-HFJFBHBL.js";
import {
  D1,
  Dt,
  He,
  Rt,
  Yi,
  _i,
  ig,
  io,
  kf,
  ma,
  mh,
  uh,
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

// node_modules/@webitel/ui-sdk/dist/vidstack-vimeo-BigSbyhb.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var ue = Object.defineProperty;
var N = (r) => {
  throw TypeError(r);
};
var de = (r, c, e) => c in r ? ue(r, c, { enumerable: true, configurable: true, writable: true, value: e }) : r[c] = e;
var b2 = (r, c, e) => de(r, typeof c != "symbol" ? c + "" : c, e);
var S = (r, c, e) => c.has(r) || N("Cannot " + e);
var t = (r, c, e) => (S(r, c, "read from private field"), e ? e.call(r) : c.get(r));
var f = (r, c, e) => c.has(r) ? N("Cannot add the same private member more than once") : c instanceof WeakSet ? c.add(r) : c.set(r, e);
var u = (r, c, e, i) => (S(r, c, "write to private field"), i ? i.call(r, e) : c.set(r, e), e);
var o = (r, c, e) => (S(r, c, "access private method"), e);
var Ce = [
  "bufferend",
  "bufferstart",
  // 'cuechange',
  "durationchange",
  "ended",
  "enterpictureinpicture",
  "error",
  "fullscreenchange",
  "leavepictureinpicture",
  "loaded",
  // 'loadeddata',
  // 'loadedmetadata',
  // 'loadstart',
  "playProgress",
  "loadProgress",
  "pause",
  "play",
  "playbackratechange",
  // 'progress',
  "qualitychange",
  "seeked",
  "seeking",
  // 'texttrackchange',
  "timeupdate",
  "volumechange",
  "waiting"
  // 'adstarted',
  // 'adcompleted',
  // 'aderror',
  // 'adskipped',
  // 'adallcompleted',
  // 'adclicked',
  // 'chapterchange',
  // 'chromecastconnected',
  // 'remoteplaybackavailabilitychange',
  // 'remoteplaybackconnecting',
  // 'remoteplaybackconnect',
  // 'remoteplaybackdisconnect',
  // 'liveeventended',
  // 'liveeventstarted',
  // 'livestreamoffline',
  // 'livestreamonline',
];
var a;
var y;
var k;
var w2;
var g;
var V;
var v;
var $;
var M;
var P;
var m;
var E;
var s;
var K;
var W2;
var Y;
var z;
var T;
var G;
var H;
var X;
var L;
var Z;
var ee;
var te;
var se;
var ie;
var x;
var ne;
var ae;
var oe;
var F2;
var he;
var O;
var re;
var D;
var ce;
var le;
var l;
var j;
var B;
var Re = class extends W {
  constructor(e, i) {
    super(e);
    f(this, s);
    b2(this, "$$PROVIDER_TYPE", "VIMEO");
    b2(this, "scope", uh());
    b2(this, "fullscreen");
    f(this, a);
    f(this, y, Dt(""));
    f(this, k, Dt(false));
    f(this, w2, null);
    f(this, g, null);
    f(this, V, false);
    f(this, v, new kf(0, 0));
    f(this, $, new F(o(this, s, z).bind(this)));
    f(this, M, null);
    f(this, P, null);
    f(this, m, /* @__PURE__ */ new Map());
    f(this, E, null);
    b2(this, "cookies", false);
    b2(this, "title", true);
    b2(this, "byline", true);
    b2(this, "portrait", true);
    b2(this, "color", "00ADEF");
    f(this, T, false);
    u(this, a, i);
    const n = this;
    this.fullscreen = {
      get active() {
        return t(n, V);
      },
      supported: true,
      enter: () => o(this, s, l).call(this, "requestFullscreen"),
      exit: () => o(this, s, l).call(this, "exitFullscreen")
    };
  }
  get type() {
    return "vimeo";
  }
  get currentSrc() {
    return t(this, g);
  }
  get videoId() {
    return t(this, y).call(this);
  }
  get hash() {
    return t(this, w2);
  }
  get isPro() {
    return t(this, k).call(this);
  }
  preconnect() {
    D1(this.getOrigin());
  }
  setup() {
    super.setup(), ye(o(this, s, K).bind(this)), ye(o(this, s, W2).bind(this)), ye(o(this, s, Y).bind(this)), t(this, a).notify("provider-setup", this);
  }
  destroy() {
    o(this, s, j).call(this), this.fullscreen = void 0;
    const e = "provider destroyed";
    for (const i of t(this, m).values())
      for (const { reject: n } of i) n(e);
    t(this, m).clear(), o(this, s, l).call(this, "destroy");
  }
  async play() {
    return o(this, s, l).call(this, "play");
  }
  async pause() {
    return o(this, s, l).call(this, "pause");
  }
  setMuted(e) {
    o(this, s, l).call(this, "setMuted", e);
  }
  setCurrentTime(e) {
    o(this, s, l).call(this, "seekTo", e), t(this, a).notify("seeking", e);
  }
  setVolume(e) {
    o(this, s, l).call(this, "setVolume", e), o(this, s, l).call(this, "setMuted", He(t(this, a).$state.muted));
  }
  setPlaybackRate(e) {
    o(this, s, l).call(this, "setPlaybackRate", e);
  }
  async loadSource(e) {
    if (!Rt(e.src)) {
      u(this, g, null), u(this, w2, null), t(this, y).set("");
      return;
    }
    const { videoId: i, hash: n } = b(e.src);
    t(this, y).set(i ?? ""), u(this, w2, n ?? null), u(this, g, e);
  }
  getOrigin() {
    return "https://player.vimeo.com";
  }
  buildParams() {
    const { keyDisabled: e } = t(this, a).$props, { playsInline: i, nativeControls: n } = t(this, a).$state, h = n();
    return {
      title: this.title,
      byline: this.byline,
      color: this.color,
      portrait: this.portrait,
      controls: h,
      h: this.hash,
      keyboard: h && !e(),
      transparent: true,
      playsinline: i(),
      dnt: !this.cookies
    };
  }
  onMessage(e, i) {
    e.event ? o(this, s, ce).call(this, e.event, e.data, i) : e.method && o(this, s, Z).call(this, e.method, e.value, i);
  }
  onLoad() {
  }
};
a = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), w2 = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet(), K = function() {
  o(this, s, j).call(this);
  const e = t(this, y).call(this);
  if (!e) {
    this.src.set("");
    return;
  }
  this.src.set(`${this.getOrigin()}/video/${e}`), t(this, a).notify("load-start");
}, W2 = function() {
  const e = t(this, y).call(this);
  if (!e) return;
  const i = ig(), n = new AbortController();
  return u(this, E, i), w(e, n, t(this, w2)).then((h) => {
    i.resolve(h);
  }).catch((h) => {
    i.reject();
  }), () => {
    i.reject(), n.abort();
  };
}, Y = function() {
  const e = t(this, k).call(this), { $state: i, qualities: n } = t(this, a);
  if (i.canSetPlaybackRate.set(e), n[io.setReadonly](!e), e)
    return _i(n, "change", () => {
      var d;
      if (n.auto) return;
      const h = (d = n.selected) == null ? void 0 : d.id;
      h && o(this, s, l).call(this, "setQuality", h);
    });
}, z = function() {
  o(this, s, l).call(this, "getCurrentTime");
}, T = /* @__PURE__ */ new WeakMap(), G = function(e, i) {
  if (t(this, T) && e === 0) return;
  const { realCurrentTime: n, paused: h, bufferedEnd: d, seekableEnd: p, live: I } = t(this, a).$state;
  if (n() === e) return;
  const A = n();
  t(this, a).notify("time-change", e, i), Math.abs(A - e) > 1.5 && (t(this, a).notify("seeking", e, i), !h() && d() < e && t(this, a).notify("waiting", void 0, i)), !I() && p() - e < 0.01 && (t(this, a).notify("end", void 0, i), u(this, T, true), setTimeout(() => {
    u(this, T, false);
  }, 500));
}, H = function(e, i) {
  t(this, a).notify("seeked", e, i);
}, X = function(e) {
  var n;
  const i = t(this, y).call(this);
  (n = t(this, E)) == null || n.promise.then((h) => {
    if (!h) return;
    const { title: d, poster: p, duration: I, pro: A } = h;
    t(this, k).set(A), t(this, a).notify("title-change", d, e), t(this, a).notify("poster-change", p, e), t(this, a).notify("duration-change", I, e), o(this, s, L).call(this, I, e);
  }).catch(() => {
    i === t(this, y).call(this) && (o(this, s, l).call(this, "getVideoTitle"), o(this, s, l).call(this, "getDuration"));
  });
}, L = function(e, i) {
  const { nativeControls: n } = t(this, a).$state, h = n();
  u(this, v, new kf(0, e));
  const d = {
    buffered: new kf(0, 0),
    seekable: t(this, v),
    duration: e
  };
  t(this, a).delegate.ready(d, i), h || o(this, s, l).call(this, "_hideOverlay"), o(this, s, l).call(this, "getQualities"), o(this, s, l).call(this, "getChapters");
}, Z = function(e, i, n) {
  var h;
  switch (e) {
    case "getVideoTitle":
      const d = i;
      t(this, a).notify("title-change", d, n);
      break;
    case "getDuration":
      const p = i;
      t(this, a).$state.canPlay() ? t(this, a).notify("duration-change", p, n) : o(this, s, L).call(this, p, n);
      break;
    case "getCurrentTime":
      o(this, s, G).call(this, i, n);
      break;
    case "getBuffered":
      Yi(i) && i.length && o(this, s, x).call(this, i[i.length - 1][1], n);
      break;
    case "setMuted":
      o(this, s, F2).call(this, He(t(this, a).$state.volume), i, n);
      break;
    case "getChapters":
      o(this, s, he).call(this, i);
      break;
    case "getQualities":
      o(this, s, re).call(this, i, n);
      break;
  }
  (h = o(this, s, B).call(this, e)) == null || h.resolve();
}, ee = function() {
  for (const e of Ce)
    o(this, s, l).call(this, "addEventListener", e);
}, te = function(e) {
  t(this, $).stop(), t(this, a).notify("pause", void 0, e);
}, se = function(e) {
  t(this, $).start(), t(this, a).notify("play", void 0, e);
}, ie = function(e) {
  const { paused: i } = t(this, a).$state;
  !i() && !t(this, T) && t(this, a).notify("playing", void 0, e);
}, x = function(e, i) {
  const n = {
    buffered: new kf(0, e),
    seekable: t(this, v)
  };
  t(this, a).notify("progress", n, i);
}, ne = function(e) {
  t(this, a).notify("waiting", void 0, e);
}, ae = function(e) {
  const { paused: i } = t(this, a).$state;
  i() || t(this, a).notify("playing", void 0, e);
}, oe = function(e) {
  const { paused: i } = t(this, a).$state;
  i() && t(this, a).notify("play", void 0, e), t(this, a).notify("waiting", void 0, e);
}, F2 = function(e, i, n) {
  const h = { volume: e, muted: i };
  t(this, a).notify("volume-change", h, n);
}, // #onTextTrackChange(track: VimeoTextTrack, trigger: Event) {
//   const textTrack = this.#ctx.textTracks.toArray().find((t) => t.language === track.language);
//   if (textTrack) textTrack.mode = track.mode;
// }
// #onTextTracksChange(tracks: VimeoTextTrack[], trigger: Event) {
//   for (const init of tracks) {
//     const textTrack = new TextTrack({
//       ...init,
//       label: init.label.replace('auto-generated', 'auto'),
//     });
//     textTrack[TextTrackSymbol.readyState] = 2;
//     this.#ctx.textTracks.add(textTrack, trigger);
//     textTrack.setMode(init.mode, trigger);
//   }
// }
// #onCueChange(cue: VimeoTextCue, trigger: Event) {
//   const { textTracks, $state } = this.#ctx,
//     { currentTime } = $state,
//     track = textTracks.selected;
//   if (this.#currentCue) track?.removeCue(this.#currentCue, trigger);
//   this.#currentCue = new window.VTTCue(currentTime(), Number.MAX_SAFE_INTEGER, cue.text);
//   track?.addCue(this.#currentCue, trigger);
// }
he = function(e) {
  if (o(this, s, O).call(this), !e.length) return;
  const i = new mh({
    kind: "chapters",
    default: true
  }), { seekableEnd: n } = t(this, a).$state;
  for (let h = 0; h < e.length; h++) {
    const d = e[h], p = e[h + 1];
    i.addCue(
      new window.VTTCue(
        d.startTime,
        (p == null ? void 0 : p.startTime) ?? n(),
        d.title
      )
    );
  }
  u(this, P, i), t(this, a).textTracks.add(i);
}, O = function() {
  t(this, P) && (t(this, a).textTracks.remove(t(this, P)), u(this, P, null));
}, re = function(e, i) {
  t(this, a).qualities[ma.enableAuto] = e.some((n) => n.id === "auto") ? () => o(this, s, l).call(this, "setQuality", "auto") : void 0;
  for (const n of e) {
    if (n.id === "auto") continue;
    const h = +n.id.slice(0, -1);
    isNaN(h) || t(this, a).qualities[io.add](
      {
        id: n.id,
        width: h * (16 / 9),
        height: h,
        codec: "avc1,h.264",
        bitrate: -1
      },
      i
    );
  }
  o(this, s, D).call(this, e.find((n) => n.active), i);
}, D = function({ id: e } = {}, i) {
  if (!e) return;
  const n = e === "auto", h = t(this, a).qualities.getById(e);
  n ? (t(this, a).qualities[ma.setAuto](n, i), t(this, a).qualities[io.select](void 0, true, i)) : t(this, a).qualities[io.select](h ?? void 0, true, i);
}, ce = function(e, i, n) {
  switch (e) {
    case "ready":
      o(this, s, ee).call(this);
      break;
    case "loaded":
      o(this, s, X).call(this, n);
      break;
    case "play":
      o(this, s, se).call(this, n);
      break;
    case "playProgress":
      o(this, s, ie).call(this, n);
      break;
    case "pause":
      o(this, s, te).call(this, n);
      break;
    case "loadProgress":
      o(this, s, x).call(this, i.seconds, n);
      break;
    case "waiting":
      o(this, s, oe).call(this, n);
      break;
    case "bufferstart":
      o(this, s, ne).call(this, n);
      break;
    case "bufferend":
      o(this, s, ae).call(this, n);
      break;
    case "volumechange":
      o(this, s, F2).call(this, i.volume, He(t(this, a).$state.muted), n);
      break;
    case "durationchange":
      u(this, v, new kf(0, i.duration)), t(this, a).notify("duration-change", i.duration, n);
      break;
    case "playbackratechange":
      t(this, a).notify("rate-change", i.playbackRate, n);
      break;
    case "qualitychange":
      o(this, s, D).call(this, i, n);
      break;
    case "fullscreenchange":
      u(this, V, i.fullscreen), t(this, a).notify("fullscreen-change", i.fullscreen, n);
      break;
    case "enterpictureinpicture":
      t(this, a).notify("picture-in-picture-change", true, n);
      break;
    case "leavepictureinpicture":
      t(this, a).notify("picture-in-picture-change", false, n);
      break;
    case "ended":
      t(this, a).notify("end", void 0, n);
      break;
    case "error":
      o(this, s, le).call(this, i, n);
      break;
    case "seek":
    case "seeked":
      o(this, s, H).call(this, i.seconds, n);
      break;
  }
}, le = function(e, i) {
  var d;
  const { message: n, method: h } = e;
  h === "setPlaybackRate" && t(this, k).set(false), h && ((d = o(this, s, B).call(this, h)) == null || d.reject(n));
}, l = async function(e, i) {
  let n = ig(), h = t(this, m).get(e);
  return h || t(this, m).set(e, h = []), h.push(n), this.postMessage({
    method: e,
    value: i
  }), n.promise;
}, j = function() {
  t(this, $).stop(), u(this, v, new kf(0, 0)), u(this, E, null), u(this, M, null), t(this, k).set(false), o(this, s, O).call(this);
}, B = function(e) {
  var i;
  return (i = t(this, m).get(e)) == null ? void 0 : i.shift();
};
export {
  Re as VimeoProvider
};
//# sourceMappingURL=vidstack-vimeo-BigSbyhb-TMGLTPK5.js.map
