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
import "./chunk-HFJFBHBL.js";
import {
  An
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

// node_modules/@webitel/ui-sdk/dist/vidstack-audio-xxW_I9rG.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var a = Object.defineProperty;
var o = (i, e, t) => e in i ? a(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var r = (i, e, t) => o(i, typeof e != "symbol" ? e + "" : e, t);
var n = class extends ki {
  constructor(t, s) {
    super(t, s);
    r(this, "$$PROVIDER_TYPE", "AUDIO");
    r(this, "airPlay");
    An(() => {
      this.airPlay = new Si(this.media, s);
    }, this.scope);
  }
  get type() {
    return "audio";
  }
  setup() {
    super.setup(), this.type === "audio" && this.ctx.notify("provider-setup", this);
  }
  /**
   * The native HTML `<audio>` element.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement}
   */
  get audio() {
    return this.media;
  }
};
export {
  n as AudioProvider
};
//# sourceMappingURL=vidstack-audio-xxW_I9rG-P5VMBLTG.js.map
