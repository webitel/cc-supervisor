import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  NavigationFailureType,
  RouterLink,
  RouterView,
  START_LOCATION_NORMALIZED,
  createMemoryHistory,
  createRouter,
  createRouterMatcher,
  createWebHashHistory,
  createWebHistory,
  isNavigationFailure,
  loadRouteLocation,
  matchedRouteKey,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  parseQuery,
  routeLocationKey,
  routerKey,
  routerViewLocationKey,
  stringifyQuery,
  useLink,
  useRoute,
  useRouter,
  viewDepthKey
} from "./chunk-RV34Z7WP.js";
import "./chunk-QI253I2C.js";
import "./chunk-V3F6WX4O.js";
export {
  NavigationFailureType,
  RouterLink,
  RouterView,
  START_LOCATION_NORMALIZED as START_LOCATION,
  createMemoryHistory,
  createRouter,
  createRouterMatcher,
  createWebHashHistory,
  createWebHistory,
  isNavigationFailure,
  loadRouteLocation,
  matchedRouteKey,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  parseQuery,
  routeLocationKey,
  routerKey,
  routerViewLocationKey,
  stringifyQuery,
  useLink,
  useRoute,
  useRouter,
  viewDepthKey
};
//# sourceMappingURL=vue-router.js.map
