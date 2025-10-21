import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  set_default
} from "./chunk-AU3PIKNZ.js";
import {
  __publicField,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/store/BaseStoreModules/BaseStoreModule.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var BaseStoreModule = class {
  constructor() {
    __publicField(this, "state", {});
    __publicField(this, "getters", {});
    __publicField(this, "actions", {});
    __publicField(this, "mutations", {});
    __publicField(this, "modules", {});
  }
  attachAPIModule(APIModule) {
    this._APIModule = APIModule;
    return this;
  }
  generateAPIActions() {
    if (!this._APIModule) throw new ReferenceError("attach API module first!");
    this.actions.GET_LIST = (context, params = {}) => this._APIModule.getList({ ...context.state, ...params });
    this.actions.GET_ITEM = (context, params = {}) => this._APIModule.get({ ...context.state, ...params });
    this.actions.POST_ITEM = (context) => this._APIModule.add(context.state);
    this.actions.PATCH_ITEM = (context, { id, changes }) => this._APIModule.patch({ ...context.state, id, changes });
    this.actions.UPD_ITEM = (context) => this._APIModule.update(context.state);
    this.actions.DELETE_ITEM = (context, id) => this._APIModule.delete({ ...context.state, id });
    return this;
  }
  setChildModules(modules) {
    this.modules = modules;
    return this;
  }
  getModule({
    state = {},
    getters = {},
    actions = {},
    mutations = {},
    modules = {},
    namespaced = true
  } = {}) {
    return {
      namespaced,
      state: { ...this.state, ...state },
      getters: { ...this.getters, ...getters },
      actions: { ...this.actions, ...actions },
      mutations: {
        ...this.mutations,
        ...mutations,
        SET: (state2, { path, value }) => {
          return set_default(state2, path, value);
        }
      },
      modules: { ...this.modules, ...modules }
    };
  }
};

export {
  BaseStoreModule
};
//# sourceMappingURL=chunk-UATH6WJF.js.map
