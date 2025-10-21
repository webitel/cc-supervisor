import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/scripts/convertDuration.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var convertDuration = (duration) => {
  if (!duration) return "00:00:00";
  let hour = `${Math.floor(duration / 3600)}`;
  let min = `${Math.floor(duration % 3600 / 60)}`;
  let sec = `${Math.floor(duration % 3600 % 60)}`;
  if (hour.length === 1) hour = `0${hour}`;
  if (min.length === 1) min = `0${min}`;
  if (sec.length === 1) sec = `0${sec}`;
  return `${hour}:${min}:${sec}`;
};
var convertDuration_default = convertDuration;

export {
  convertDuration_default
};
//# sourceMappingURL=chunk-K5VDDDOW.js.map
