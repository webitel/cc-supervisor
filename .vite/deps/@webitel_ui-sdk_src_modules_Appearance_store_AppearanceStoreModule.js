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

// node_modules/@webitel/ui-sdk/src/modules/Appearance/store/AppearanceStoreModule.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var AppearanceStoreModule = class extends BaseStoreModule {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      theme: null
    });
    __publicField(this, "getters", {
      DARK_MODE: (state) => state.theme === "dark"
    });
    __publicField(this, "actions", {
      SET_THEME: (context, theme) => {
        context.commit("SET_THEME", theme);
      }
    });
    __publicField(this, "mutations", {
      SET_THEME: (state, theme) => {
        state.theme = theme;
      }
    });
  }
};
export {
  AppearanceStoreModule as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_modules_Appearance_store_AppearanceStoreModule.js.map
