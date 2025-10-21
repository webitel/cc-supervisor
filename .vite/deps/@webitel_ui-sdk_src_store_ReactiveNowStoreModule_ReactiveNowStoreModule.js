import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  BaseStoreModule
} from "./chunk-UATH6WJF.js";
import "./chunk-AU3PIKNZ.js";
import "./chunk-DVN4RKS3.js";
import "./chunk-HRTMU5W5.js";
import "./chunk-SJL6G23E.js";
import "./chunk-YX35SWNW.js";
import "./chunk-UGIS5QVQ.js";
import "./chunk-JBUOYAAV.js";
import "./chunk-GIUIDLUB.js";
import "./chunk-ZIQ6ZSOK.js";
import {
  __publicField,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/store/ReactiveNowStoreModule/ReactiveNowStoreModule.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var interval = null;
var ReactiveNowStoreModule = class extends BaseStoreModule {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      now: Date.now()
    });
    __publicField(this, "actions", {
      SET_NOW_WATCHER: (context) => {
        interval = setInterval(() => {
          context.commit("UPDATE_NOW");
        }, 1e3);
      },
      CLEAR_NOW_WATCHER: () => {
        clearInterval(interval);
      }
    });
    __publicField(this, "mutations", {
      UPDATE_NOW: (state) => {
        state.now = Date.now();
      }
    });
  }
};
export {
  ReactiveNowStoreModule as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_store_ReactiveNowStoreModule_ReactiveNowStoreModule.js.map
