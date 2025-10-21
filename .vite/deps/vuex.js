import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  Store,
  createLogger,
  createNamespacedHelpers,
  createStore,
  mapActions,
  mapGetters,
  mapMutations,
  mapState,
  storeKey,
  useStore,
  vuex_esm_bundler_default
} from "./chunk-S6OCV6O3.js";
import "./chunk-QI253I2C.js";
import "./chunk-V3F6WX4O.js";
export {
  Store,
  createLogger,
  createNamespacedHelpers,
  createStore,
  vuex_esm_bundler_default as default,
  mapActions,
  mapGetters,
  mapMutations,
  mapState,
  storeKey,
  useStore
};
//# sourceMappingURL=vuex.js.map
