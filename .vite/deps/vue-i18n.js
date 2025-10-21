import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  DatetimeFormat,
  I18nD,
  I18nInjectionKey,
  I18nN,
  I18nT,
  NumberFormat,
  Translation,
  VERSION,
  createI18n,
  useI18n,
  vTDirective
} from "./chunk-6JRCTP2G.js";
import "./chunk-QI253I2C.js";
import "./chunk-V3F6WX4O.js";
export {
  DatetimeFormat,
  I18nD,
  I18nInjectionKey,
  I18nN,
  I18nT,
  NumberFormat,
  Translation,
  VERSION,
  createI18n,
  useI18n,
  vTDirective
};
//# sourceMappingURL=vue-i18n.js.map
