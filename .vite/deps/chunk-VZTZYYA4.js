import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  EPe,
  He,
  Sbe,
  _i,
  gE,
  sbe
} from "./chunk-VQLFV2GX.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/dist/vidstack-D2pY00kU-DpjDzLuY.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var _ = Object.defineProperty;
var w = (t) => {
  throw TypeError(t);
};
var P = (t, e, a) => e in t ? _(t, e, { enumerable: true, configurable: true, writable: true, value: a }) : t[e] = a;
var u = (t, e, a) => P(t, typeof e != "symbol" ? e + "" : e, a);
var C = (t, e, a) => e.has(t) || w("Cannot " + a);
var c = (t, e, a) => (C(t, e, "read from private field"), a ? a.call(t) : e.get(t));
var m = (t, e, a) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a);
var y = (t, e, a, o) => (C(t, e, "write to private field"), o ? o.call(t, a) : e.set(t, a), a);
var s = (t, e, a) => (C(t, e, "access private method"), a);
function G() {
  return "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
}
function L() {
  var t;
  return !!((t = window.cast) != null && t.framework);
}
function N() {
  var t, e;
  return !!((e = (t = window.chrome) == null ? void 0 : t.cast) != null && e.isAvailable);
}
function v() {
  return g().getCastState() === cast.framework.CastState.CONNECTED;
}
function g() {
  return window.cast.framework.CastContext.getInstance();
}
function E() {
  return g().getCurrentSession();
}
function T() {
  var t;
  return (t = E()) == null ? void 0 : t.getSessionObj().media[0];
}
function J(t) {
  var a;
  return ((a = T()) == null ? void 0 : a.media.contentId) === (t == null ? void 0 : t.src);
}
function U() {
  return {
    language: "en-US",
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
    receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
    resumeSavedSession: true,
    androidReceiverCompatible: true
  };
}
function j(t) {
  return `Google Cast Error Code: ${t}`;
}
function V(t, e) {
  return _i(g(), t, e);
}
var n;
var r;
var S;
var k;
var I;
var l;
var d;
var F = class {
  constructor() {
    m(this, r);
    u(this, "name", "google-cast");
    u(this, "target");
    m(this, n);
  }
  /**
   * @see {@link https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastContext}
   */
  get cast() {
    return g();
  }
  mediaType() {
    return "video";
  }
  canPlay(e) {
    return sbe && !gE && Sbe(e);
  }
  async prompt(e) {
    var h;
    let a, o, i;
    try {
      a = await s(this, r, S).call(this, e), c(this, n) || (y(this, n, new cast.framework.RemotePlayer()), new cast.framework.RemotePlayerController(c(this, n))), o = e.player.createEvent("google-cast-prompt-open", {
        trigger: a
      }), e.player.dispatchEvent(o), s(this, r, l).call(this, e, "connecting", o), await s(this, r, k).call(this, He(e.$props.googleCast)), e.$state.remotePlaybackInfo.set({
        deviceName: (h = E()) == null ? void 0 : h.getCastDevice().friendlyName
      }), v() && s(this, r, l).call(this, e, "connected", o);
    } catch (p) {
      const f = p instanceof Error ? p : s(this, r, d).call(this, (p + "").toUpperCase(), "Prompt failed.");
      throw i = e.player.createEvent("google-cast-prompt-error", {
        detail: f,
        trigger: o ?? a,
        cancelable: true
      }), e.player.dispatch(i), s(this, r, l).call(this, e, v() ? "connected" : "disconnected", i), f;
    } finally {
      e.player.dispatch("google-cast-prompt-close", {
        trigger: i ?? o ?? a
      });
    }
  }
  async load(e) {
    if (!c(this, n))
      throw Error("[vidstack] google cast player was not initialized");
    return new (await import("./vidstack-google-cast-BIeOl5GP-PBMKEVBP.js")).GoogleCastProvider(c(this, n), e);
  }
};
n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakSet(), S = async function(e) {
  if (L()) return;
  const a = e.player.createEvent("google-cast-load-start");
  e.player.dispatch(a), await EPe(G()), await customElements.whenDefined("google-cast-launcher");
  const o = e.player.createEvent("google-cast-loaded", { trigger: a });
  if (e.player.dispatch(o), !N())
    throw s(this, r, d).call(this, "CAST_NOT_AVAILABLE", "Google Cast not available on this platform.");
  return o;
}, k = async function(e) {
  s(this, r, I).call(this, e);
  const a = await this.cast.requestSession();
  if (a)
    throw s(this, r, d).call(this, a.toUpperCase(), j(a));
}, I = function(e) {
  var a;
  (a = this.cast) == null || a.setOptions({
    ...U(),
    ...e
  });
}, l = function(e, a, o) {
  const i = { type: "google-cast", state: a };
  e.notify("remote-playback-change", i, o);
}, d = function(e, a) {
  const o = Error(a);
  return o.code = e, o;
};
var q = Object.freeze(Object.defineProperty({
  __proto__: null,
  GoogleCastLoader: F
}, Symbol.toStringTag, { value: "Module" }));

export {
  g,
  E,
  T,
  J,
  j,
  V,
  q
};
//# sourceMappingURL=chunk-VZTZYYA4.js.map
