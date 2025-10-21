import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  b,
  w
} from "./chunk-7JHM4O56.js";
import "./chunk-V3F6WX4O.js";
export {
  w as getVimeoVideoInfo,
  b as resolveVimeoVideoId
};
//# sourceMappingURL=vidstack-krOAtKMi-B4IZWKdc-BW4NNXUT.js.map
