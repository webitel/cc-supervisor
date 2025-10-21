import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  E,
  J,
  T,
  V,
  g,
  j
} from "./chunk-VZTZYYA4.js";
import {
  F
} from "./chunk-HFJFBHBL.js";
import {
  He,
  Ht,
  Nu,
  Oo,
  _i,
  io,
  kPe,
  kf,
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

// node_modules/@webitel/ui-sdk/dist/vidstack-google-cast-BIeOl5GP.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var Lt = Object.defineProperty;
var W = (d) => {
  throw TypeError(d);
};
var vt = (d, t, s) => t in d ? Lt(d, t, { enumerable: true, configurable: true, writable: true, value: s }) : d[t] = s;
var G = (d, t, s) => vt(d, typeof t != "symbol" ? t + "" : t, s);
var O = (d, t, s) => t.has(d) || W("Cannot " + s);
var e = (d, t, s) => (O(d, t, "read from private field"), s ? s.call(d) : t.get(d));
var T2 = (d, t, s) => t.has(d) ? W("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(d) : t.set(d, s);
var l = (d, t, s, i) => (O(d, t, "write to private field"), i ? i.call(d, s) : t.set(d, s), s);
var r = (d, t, s) => (O(d, t, "access private method"), s);
var g2;
var _;
var at;
var _t = class {
  constructor(t) {
    T2(this, _);
    T2(this, g2);
    l(this, g2, new chrome.cast.media.MediaInfo(t.src, t.type));
  }
  build() {
    return e(this, g2);
  }
  setStreamType(t) {
    return t.includes("live") ? e(this, g2).streamType = chrome.cast.media.StreamType.LIVE : e(this, g2).streamType = chrome.cast.media.StreamType.BUFFERED, this;
  }
  setTracks(t) {
    return e(this, g2).tracks = t.map(r(this, _, at)), this;
  }
  setMetadata(t, s) {
    return e(this, g2).metadata = new chrome.cast.media.GenericMediaMetadata(), e(this, g2).metadata.title = t, e(this, g2).metadata.images = [{ url: s }], this;
  }
};
g2 = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakSet(), at = function(t, s) {
  const i = new chrome.cast.media.Track(s, chrome.cast.media.TrackType.TEXT);
  return i.name = t.label, i.trackContentId = t.src, i.trackContentType = "text/vtt", i.language = t.language, i.subtype = t.kind.toUpperCase(), i;
};
var p;
var k;
var M;
var c;
var $;
var A;
var rt;
var nt;
var ot;
var U;
var P;
var H;
var xt = class {
  constructor(t, s, i) {
    T2(this, c);
    T2(this, p);
    T2(this, k);
    T2(this, M);
    l(this, p, t), l(this, k, s), l(this, M, i);
  }
  setup() {
    const t = this.syncRemoteActiveIds.bind(this);
    _i(e(this, k).audioTracks, "change", t), _i(e(this, k).textTracks, "mode-change", t), ye(r(this, c, nt).bind(this));
  }
  getLocalTextTracks() {
    return e(this, k).$state.textTracks().filter((t) => t.src && t.type === "vtt");
  }
  syncRemoteTracks(t) {
    if (!e(this, p).isMediaLoaded) return;
    const s = r(this, c, $).call(this), i = this.getLocalTextTracks(), n = r(this, c, A).call(this, chrome.cast.media.TrackType.AUDIO), m = r(this, c, A).call(this, chrome.cast.media.TrackType.TEXT);
    for (const u of n) {
      if (r(this, c, U).call(this, s, u)) continue;
      const w = {
        id: u.trackId.toString(),
        label: u.name,
        language: u.language,
        kind: u.subtype ?? "main",
        selected: false
      };
      e(this, k).audioTracks[io.add](w, t);
    }
    for (const u of m) {
      if (r(this, c, U).call(this, i, u)) continue;
      const w = {
        id: u.trackId.toString(),
        src: u.trackContentId,
        label: u.name,
        language: u.language,
        kind: u.subtype.toLowerCase()
      };
      e(this, k).textTracks.add(w, t);
    }
  }
  syncRemoteActiveIds(t) {
    if (!e(this, p).isMediaLoaded) return;
    const s = r(this, c, rt).call(this), i = new chrome.cast.media.EditTracksInfoRequest(s);
    r(this, c, ot).call(this, i).catch((n) => {
    });
  }
};
p = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakSet(), $ = function() {
  return e(this, k).$state.audioTracks();
}, A = function(t) {
  var i;
  const s = ((i = e(this, p).mediaInfo) == null ? void 0 : i.tracks) ?? [];
  return t ? s.filter((n) => n.type === t) : s;
}, rt = function() {
  const t = [], s = r(this, c, $).call(this).find((n) => n.selected), i = this.getLocalTextTracks().filter((n) => n.mode === "showing");
  if (s) {
    const n = r(this, c, A).call(this, chrome.cast.media.TrackType.AUDIO), m = r(this, c, P).call(this, n, s);
    m && t.push(m.trackId);
  }
  if (i != null && i.length) {
    const n = r(this, c, A).call(this, chrome.cast.media.TrackType.TEXT);
    if (n.length)
      for (const m of i) {
        const u = r(this, c, P).call(this, n, m);
        u && t.push(u.trackId);
      }
  }
  return t;
}, nt = function() {
  const t = this.getLocalTextTracks();
  if (!e(this, p).isMediaLoaded) return;
  const s = r(this, c, A).call(this, chrome.cast.media.TrackType.TEXT);
  for (const i of t)
    if (!r(this, c, P).call(this, s, i)) {
      Nu(() => {
        var m;
        return (m = e(this, M)) == null ? void 0 : m.call(this);
      });
      break;
    }
}, ot = function(t) {
  const s = T();
  return new Promise((i, n) => s == null ? void 0 : s.editTracksInfo(t, i, n));
}, U = function(t, s) {
  return t.find((i) => r(this, c, H).call(this, i, s));
}, P = function(t, s) {
  return t.find((i) => r(this, c, H).call(this, s, i));
}, // Note: we can't rely on id matching because they will differ between local/remote. A local
// track id might not even exist.
H = function(t, s) {
  return s.name === t.label && s.language === t.language && s.subtype.toLowerCase() === t.kind.toLowerCase();
};
var o;
var h;
var C;
var E2;
var D;
var I;
var v;
var S;
var b;
var N;
var f;
var R;
var a;
var ht;
var ct;
var F2;
var dt;
var q;
var ut;
var lt;
var mt;
var B;
var X;
var K;
var Y;
var Tt;
var ft;
var gt;
var j2;
var kt;
var z;
var yt;
var J2;
var y;
var pt;
var Ct;
var Q;
var Et;
var Ut = class {
  constructor(t, s) {
    T2(this, a);
    G(this, "$$PROVIDER_TYPE", "GOOGLE_CAST");
    G(this, "scope", uh());
    T2(this, o);
    T2(this, h);
    T2(this, C);
    T2(this, E2, null);
    T2(this, D, "disconnected");
    T2(this, I, 0);
    T2(this, v, 0);
    T2(this, S, new kf(0, 0));
    T2(this, b, new F(r(this, a, lt).bind(this)));
    T2(this, N);
    T2(this, f, null);
    T2(this, R, false);
    l(this, o, t), l(this, h, s), l(this, C, new xt(t, s, r(this, a, Et).bind(this)));
  }
  get type() {
    return "google-cast";
  }
  get currentSrc() {
    return e(this, E2);
  }
  /**
   * The Google Cast remote player.
   *
   * @see {@link https://developers.google.com/cast/docs/reference/web_sender/cast.framework.RemotePlayer}
   */
  get player() {
    return e(this, o);
  }
  /**
   * @see {@link https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastContext}
   */
  get cast() {
    return g();
  }
  /**
   * @see {@link https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastSession}
   */
  get session() {
    return E();
  }
  /**
   * @see {@link https://developers.google.com/cast/docs/reference/web_sender/chrome.cast.media.Media}
   */
  get media() {
    return T();
  }
  /**
   * Whether the current Google Cast session belongs to this provider.
   */
  get hasActiveSession() {
    return J(e(this, E2));
  }
  setup() {
    r(this, a, ht).call(this), r(this, a, ct).call(this), e(this, C).setup(), e(this, h).notify("provider-setup", this);
  }
  async play() {
    var t;
    if (!(!e(this, o).isPaused && !e(this, R))) {
      if (e(this, R)) {
        await r(this, a, Q).call(this, false, 0);
        return;
      }
      (t = e(this, o).controller) == null || t.playOrPause();
    }
  }
  async pause() {
    var t;
    e(this, o).isPaused || (t = e(this, o).controller) == null || t.playOrPause();
  }
  getMediaStatus(t) {
    return new Promise((s, i) => {
      var n;
      (n = this.media) == null || n.getStatus(t, s, i);
    });
  }
  setMuted(t) {
    var i;
    (t && !e(this, o).isMuted || !t && e(this, o).isMuted) && ((i = e(this, o).controller) == null || i.muteOrUnmute());
  }
  setCurrentTime(t) {
    var s;
    e(this, o).currentTime = t, e(this, h).notify("seeking", t), (s = e(this, o).controller) == null || s.seek();
  }
  setVolume(t) {
    var s;
    e(this, o).volumeLevel = t, (s = e(this, o).controller) == null || s.setVolumeLevel();
  }
  async loadSource(t) {
    var n;
    if (((n = e(this, f)) == null ? void 0 : n.src) !== t && l(this, f, null), J(t)) {
      r(this, a, dt).call(this), l(this, E2, t);
      return;
    }
    e(this, h).notify("load-start");
    const s = r(this, a, Ct).call(this, t), i = await this.session.loadMedia(s);
    if (i) {
      l(this, E2, null), e(this, h).notify("error", Error(j(i)));
      return;
    }
    l(this, E2, t);
  }
  destroy() {
    r(this, a, F2).call(this), r(this, a, q).call(this);
  }
};
o = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), E2 = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakSet(), ht = function() {
  V(
    cast.framework.CastContextEventType.CAST_STATE_CHANGED,
    r(this, a, B).bind(this)
  );
}, ct = function() {
  const t = cast.framework.RemotePlayerEventType, s = {
    [t.IS_CONNECTED_CHANGED]: r(this, a, B),
    [t.IS_MEDIA_LOADED_CHANGED]: r(this, a, X),
    [t.CAN_CONTROL_VOLUME_CHANGED]: r(this, a, K),
    [t.CAN_SEEK_CHANGED]: r(this, a, Y),
    [t.DURATION_CHANGED]: r(this, a, gt),
    [t.IS_MUTED_CHANGED]: r(this, a, j2),
    [t.VOLUME_LEVEL_CHANGED]: r(this, a, j2),
    [t.IS_PAUSED_CHANGED]: r(this, a, kt),
    [t.LIVE_SEEKABLE_RANGE_CHANGED]: r(this, a, z),
    [t.PLAYER_STATE_CHANGED]: r(this, a, yt)
  };
  l(this, N, s);
  const i = r(this, a, mt).bind(this);
  for (const n of kPe(s))
    e(this, o).controller.addEventListener(n, i);
  Ht(() => {
    for (const n of kPe(s))
      e(this, o).controller.removeEventListener(n, i);
  });
}, F2 = function() {
  e(this, f) || (l(this, v, 0), l(this, S, new kf(0, 0))), e(this, b).stop(), l(this, I, 0), l(this, f, null);
}, dt = function() {
  const t = new Oo("resume-session", { detail: this.session });
  r(this, a, X).call(this, t);
  const { muted: s, volume: i, savedState: n } = e(this, h).$state, m = n();
  this.setCurrentTime(Math.max(e(this, o).currentTime, (m == null ? void 0 : m.currentTime) ?? 0)), this.setMuted(s()), this.setVolume(i()), (m == null ? void 0 : m.paused) === false && this.play();
}, q = function() {
  this.cast.endCurrentSession(true);
  const { remotePlaybackLoader: t } = e(this, h).$state;
  t.set(null);
}, ut = function() {
  const { savedState: t } = e(this, h).$state;
  t.set({
    paused: e(this, o).isPaused,
    currentTime: e(this, o).currentTime
  }), r(this, a, q).call(this);
}, lt = function() {
  r(this, a, ft).call(this);
}, mt = function(t) {
  e(this, N)[t.type].call(this, t);
}, B = function(t) {
  const s = this.cast.getCastState(), i = s === cast.framework.CastState.CONNECTED ? "connected" : s === cast.framework.CastState.CONNECTING ? "connecting" : "disconnected";
  if (e(this, D) === i) return;
  const n = { type: "google-cast", state: i }, m = r(this, a, y).call(this, t);
  l(this, D, i), e(this, h).notify("remote-playback-change", n, m), i === "disconnected" && r(this, a, ut).call(this);
}, X = function(t) {
  if (!!!e(this, o).isMediaLoaded) return;
  const i = He(e(this, h).$state.source);
  Promise.resolve().then(() => {
    if (i !== He(e(this, h).$state.source) || !e(this, o).isMediaLoaded) return;
    r(this, a, F2).call(this);
    const n = e(this, o).duration;
    l(this, S, new kf(0, n));
    const m = {
      provider: this,
      duration: n,
      buffered: new kf(0, 0),
      seekable: r(this, a, J2).call(this)
    }, u = r(this, a, y).call(this, t);
    e(this, h).notify("loaded-metadata", void 0, u), e(this, h).notify("loaded-data", void 0, u), e(this, h).notify("can-play", m, u), r(this, a, K).call(this), r(this, a, Y).call(this, t);
    const { volume: x, muted: w } = e(this, h).$state;
    this.setVolume(x()), this.setMuted(w()), e(this, b).start(), e(this, C).syncRemoteTracks(u), e(this, C).syncRemoteActiveIds(u);
  });
}, K = function() {
  e(this, h).$state.canSetVolume.set(e(this, o).canControlVolume);
}, Y = function(t) {
  const s = r(this, a, y).call(this, t);
  e(this, h).notify("stream-type-change", r(this, a, Tt).call(this), s);
}, Tt = function() {
  var s;
  return ((s = e(this, o).mediaInfo) == null ? void 0 : s.streamType) === chrome.cast.media.StreamType.LIVE ? e(this, o).canSeek ? "live:dvr" : "live" : "on-demand";
}, ft = function() {
  if (e(this, f)) return;
  const t = e(this, o).currentTime;
  t !== e(this, I) && (e(this, h).notify("time-change", t), t > e(this, v) && (l(this, v, t), r(this, a, z).call(this)), e(this, h).$state.seeking() && e(this, h).notify("seeked", t), l(this, I, t));
}, gt = function(t) {
  if (!e(this, o).isMediaLoaded || e(this, f)) return;
  const s = e(this, o).duration, i = r(this, a, y).call(this, t);
  l(this, S, new kf(0, s)), e(this, h).notify("duration-change", s, i);
}, j2 = function(t) {
  if (!e(this, o).isMediaLoaded) return;
  const s = {
    muted: e(this, o).isMuted,
    volume: e(this, o).volumeLevel
  }, i = r(this, a, y).call(this, t);
  e(this, h).notify("volume-change", s, i);
}, kt = function(t) {
  const s = r(this, a, y).call(this, t);
  e(this, o).isPaused ? e(this, h).notify("pause", void 0, s) : e(this, h).notify("play", void 0, s);
}, z = function(t) {
  const s = {
    seekable: r(this, a, J2).call(this),
    buffered: new kf(0, e(this, v))
  }, i = t ? r(this, a, y).call(this, t) : void 0;
  e(this, h).notify("progress", s, i);
}, yt = function(t) {
  const s = e(this, o).playerState, i = chrome.cast.media.PlayerState;
  if (l(this, R, s === i.IDLE), s === i.PAUSED) return;
  const n = r(this, a, y).call(this, t);
  switch (s) {
    case i.PLAYING:
      e(this, h).notify("playing", void 0, n);
      break;
    case i.BUFFERING:
      e(this, h).notify("waiting", void 0, n);
      break;
    case i.IDLE:
      e(this, b).stop(), e(this, h).notify("pause"), e(this, h).notify("end");
      break;
  }
}, J2 = function() {
  return e(this, o).liveSeekableRange ? new kf(e(this, o).liveSeekableRange.start, e(this, o).liveSeekableRange.end) : e(this, S);
}, y = function(t) {
  return t instanceof Event ? t : new Oo(t.type, { detail: t });
}, pt = function(t) {
  const { streamType: s, title: i, poster: n } = e(this, h).$state;
  return new _t(t).setMetadata(i(), n()).setStreamType(s()).setTracks(e(this, C).getLocalTextTracks()).build();
}, Ct = function(t) {
  var m, u;
  const s = r(this, a, pt).call(this, t), i = new chrome.cast.media.LoadRequest(s), n = e(this, h).$state.savedState();
  return i.autoplay = (((m = e(this, f)) == null ? void 0 : m.paused) ?? (n == null ? void 0 : n.paused)) === false, i.currentTime = ((u = e(this, f)) == null ? void 0 : u.time) ?? (n == null ? void 0 : n.currentTime) ?? 0, i;
}, Q = async function(t, s) {
  const i = He(e(this, h).$state.source);
  l(this, f, { src: i, paused: t, time: s }), await this.loadSource(i);
}, Et = function() {
  r(this, a, Q).call(this, e(this, o).isPaused, e(this, o).currentTime).catch((t) => {
  });
};
export {
  Ut as GoogleCastProvider
};
//# sourceMappingURL=vidstack-google-cast-BIeOl5GP-PBMKEVBP.js.map
