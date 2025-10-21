import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  compareSize,
  debounce_default,
  getEndOfDay,
  getStartOfDay,
  greaterOrEqual,
  greaterThen,
  isRelativeDatetimeValue,
  normalizeToTimestamp,
  prettifyFileSize_default,
  prettifyTime_default,
  saveAsJSON_default,
  smallerOrEqual,
  smallerThen,
  wtlog
} from "./chunk-Y7OW5ORD.js";
import {
  convertDuration_default
} from "./chunk-K5VDDDOW.js";
import {
  preventHiddenPageCallsDecorator_default
} from "./chunk-RK4D342A.js";
import {
  getNextSortOrder,
  queryToSortAdapter,
  sortToQueryAdapter
} from "./chunk-4BU36TI7.js";
import {
  isEmpty_default
} from "./chunk-6Q3UUCCZ.js";
import "./chunk-6LY73PXU.js";
import {
  updateObject_default
} from "./chunk-TBMZGSYP.js";
import {
  eventBus_default
} from "./chunk-ALYEIJI5.js";
import "./chunk-SZR5SZ7W.js";
import "./chunk-663REQXU.js";
import "./chunk-KKIOOXCK.js";
import "./chunk-3LV7TFCB.js";
import "./chunk-D3J766ED.js";
import "./chunk-5SXUFGYU.js";
import "./chunk-2RMMXMED.js";
import "./chunk-VVVSXXDF.js";
import "./chunk-AU3PIKNZ.js";
import "./chunk-DVN4RKS3.js";
import "./chunk-HRTMU5W5.js";
import "./chunk-SJL6G23E.js";
import "./chunk-YX35SWNW.js";
import {
  camelToKebab,
  camelToSnake,
  kebabToCamel,
  kebabToSnake,
  objCamelToKebab,
  objCamelToSnake,
  objSnakeToCamel,
  snakeToCamel,
  snakeToKebab
} from "./chunk-RGTN4WD6.js";
import "./chunk-LXFDMCD7.js";
import "./chunk-UGIS5QVQ.js";
import "./chunk-JBUOYAAV.js";
import "./chunk-GIUIDLUB.js";
import "./chunk-ZIQ6ZSOK.js";
import "./chunk-V3F6WX4O.js";
export {
  camelToKebab,
  camelToSnake,
  compareSize,
  convertDuration_default as convertDuration,
  debounce_default as debounce,
  eventBus_default as eventBus,
  getEndOfDay,
  getNextSortOrder,
  getStartOfDay,
  isEmpty_default as isEmpty,
  isRelativeDatetimeValue,
  kebabToCamel,
  kebabToSnake,
  normalizeToTimestamp,
  objCamelToKebab,
  objCamelToSnake,
  objSnakeToCamel,
  prettifyFileSize_default as prettifyFileSize,
  prettifyTime_default as prettifyTime,
  preventHiddenPageCallsDecorator_default as preventHiddenPageCallsDecorator,
  queryToSortAdapter,
  saveAsJSON_default as saveAsJSON,
  greaterOrEqual as sizeGreaterOrEqual,
  greaterThen as sizeGreaterThen,
  smallerOrEqual as sizeSmallerOrEqual,
  smallerThen as sizeSmallerThen,
  snakeToCamel,
  snakeToKebab,
  sortToQueryAdapter,
  updateObject_default as updateObject,
  wtlog
};
//# sourceMappingURL=@webitel_ui-sdk_scripts.js.map
