import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  MutationType,
  acceptHMRUpdate,
  createPinia,
  defineStore,
  disposePinia,
  getActivePinia,
  mapActions,
  mapGetters,
  mapState,
  mapStores,
  mapWritableState,
  setActivePinia,
  setMapStoreSuffix,
  shouldHydrate,
  skipHydrate,
  storeToRefs
} from "./chunk-LDM2NRRE.js";
import "./chunk-QI253I2C.js";
import "./chunk-V3F6WX4O.js";
export {
  MutationType,
  acceptHMRUpdate,
  createPinia,
  defineStore,
  disposePinia,
  getActivePinia,
  mapActions,
  mapGetters,
  mapState,
  mapStores,
  mapWritableState,
  setActivePinia,
  setMapStoreSuffix,
  shouldHydrate,
  skipHydrate,
  storeToRefs
};
//# sourceMappingURL=pinia.js.map
