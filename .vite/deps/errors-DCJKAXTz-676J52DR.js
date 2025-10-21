import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  et,
  it
} from "./chunk-SJBVCNRV.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/dist/errors-DCJKAXTz.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var i = {
  r() {
    return new it({
      code: et.BadSignature,
      reason: "missing WEBVTT file header",
      line: 1
    });
  },
  s(n, e) {
    return new it({
      code: et.BadTimestamp,
      reason: `cue start timestamp \`${n}\` is invalid on line ${e}`,
      line: e
    });
  },
  t(n, e) {
    return new it({
      code: et.BadTimestamp,
      reason: `cue end timestamp \`${n}\` is invalid on line ${e}`,
      line: e
    });
  },
  u(n, e, r) {
    return new it({
      code: et.BadTimestamp,
      reason: `cue end timestamp \`${e}\` is greater than start \`${n}\` on line ${r}`,
      line: r
    });
  },
  y(n, e, r) {
    return new it({
      code: et.BadSettingValue,
      reason: `invalid value for cue setting \`${n}\` on line ${r} (value: ${e})`,
      line: r
    });
  },
  x(n, e, r) {
    return new it({
      code: et.UnknownSetting,
      reason: `unknown cue setting \`${n}\` on line ${r} (value: ${e})`,
      line: r
    });
  },
  w(n, e, r) {
    return new it({
      code: et.BadSettingValue,
      reason: `invalid value for region setting \`${n}\` on line ${r} (value: ${e})`,
      line: r
    });
  },
  v(n, e, r) {
    return new it({
      code: et.UnknownSetting,
      reason: `unknown region setting \`${n}\` on line ${r} (value: ${e})`,
      line: r
    });
  },
  // SSA-specific errors
  T(n, e) {
    return new it({
      code: et.BadFormat,
      reason: `format missing for \`${n}\` block on line ${e}`,
      line: e
    });
  }
};
export {
  i as ParseErrorBuilder
};
//# sourceMappingURL=errors-DCJKAXTz-676J52DR.js.map
