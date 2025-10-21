import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  updateObject_default
} from "./chunk-TBMZGSYP.js";
import {
  eventBus_default
} from "./chunk-ALYEIJI5.js";
import {
  get_default
} from "./chunk-6FPSQGJR.js";
import {
  require_deep_copy
} from "./chunk-4QMDQNJR.js";
import {
  objCamelToSnake,
  objSnakeToCamel
} from "./chunk-RGTN4WD6.js";
import {
  require_cjs
} from "./chunk-ZJPGTC72.js";
import {
  stringify
} from "./chunk-YZMCRNG2.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/api/transformers/index.js
var import_dist37 = __toESM(require_dist());
var import_dist38 = __toESM(require_dist2());
var import_dist39 = __toESM(require_dist3());

// node_modules/@webitel/ui-sdk/src/api/transformers/addQueryParamsToUrl/addQueryParamsToUrl.transformer.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var addQueryParamsToUrl = (queryArray) => (url) => {
  let modifyUrl = url;
  if (queryArray && queryArray.length > 0) {
    if (modifyUrl.includes("?")) {
      modifyUrl += "&" + queryArray.join("&");
      return modifyUrl;
    }
    modifyUrl += "?" + queryArray.join("&");
  }
  return modifyUrl;
};
var addQueryParamsToUrl_transformer_default = addQueryParamsToUrl;

// node_modules/@webitel/ui-sdk/src/api/transformers/applyTransform.js
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
var applyTransform = (target, transformers, { debug = false, withContext = null } = {}) => {
  return transformers.reduce((result, transformer, index) => {
    if (debug) console.info(`applyTransform debug on step ${index}`, result);
    if (withContext) {
      return transformer(result, withContext);
    }
    return transformer(result);
  }, target);
};
var applyTransform_default = applyTransform;

// node_modules/@webitel/ui-sdk/src/api/transformers/camelToSnake/camelToSnake.transformer.js
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);
var camelToSnakeTransformer = (skipKeys) => (obj) => objCamelToSnake(obj, skipKeys);
var camelToSnake_transformer_default = camelToSnakeTransformer;

// node_modules/@webitel/ui-sdk/src/api/transformers/generateUrl/generateUrl.transformer.js
var import_dist10 = __toESM(require_dist(), 1);
var import_dist11 = __toESM(require_dist2(), 1);
var import_dist12 = __toESM(require_dist3(), 1);
var generateUrlTransformer = (baseUrl) => (params) => {
  const stringifyOptions = {
    skipEmptyString: true,
    skipNull: true,
    arrayFormat: "repeat"
  };
  const url = `${baseUrl}?${stringify(params, stringifyOptions)}`;
  return url;
};
var generateUrl_transformer_default = generateUrlTransformer;

// node_modules/@webitel/ui-sdk/src/api/transformers/log/log.transformer.js
var import_dist13 = __toESM(require_dist(), 1);
var import_dist14 = __toESM(require_dist2(), 1);
var import_dist15 = __toESM(require_dist3(), 1);
var logTransformer = (arg) => {
  console.log(arg);
  return arg;
};
var log_transformer_default = logTransformer;

// node_modules/@webitel/ui-sdk/src/api/transformers/merge/merge.transformer.js
var import_dist16 = __toESM(require_dist(), 1);
var import_dist17 = __toESM(require_dist2(), 1);
var import_dist18 = __toESM(require_dist3(), 1);
var import_deepmerge = __toESM(require_cjs(), 1);
var mergeTransformer = (...args) => (main) => import_deepmerge.default.all([...args, main]);
var merge_transformer_default = mergeTransformer;

// node_modules/@webitel/ui-sdk/src/api/transformers/mergeEach/mergeEach.transformer.js
var import_dist19 = __toESM(require_dist(), 1);
var import_dist20 = __toESM(require_dist2(), 1);
var import_dist21 = __toESM(require_dist3(), 1);
var import_deepmerge2 = __toESM(require_cjs(), 1);
var mergeEachTransformer = (...args) => (main) => main.map((item) => import_deepmerge2.default.all([...args, item]));
var mergeEach_transformer_default = mergeEachTransformer;

// node_modules/@webitel/ui-sdk/src/api/transformers/notify/notify.transformer.js
var import_dist22 = __toESM(require_dist(), 1);
var import_dist23 = __toESM(require_dist2(), 1);
var import_dist24 = __toESM(require_dist3(), 1);
var notifyTransformer = (notificationObject) => {
  var _a, _b, _c, _d;
  if (typeof notificationObject === "function") {
    const callback = ({ type, text }) => eventBus_default.$emit("notification", {
      type,
      text
    });
    return (payload) => {
      notificationObject({ callback });
      return payload;
    };
  }
  if (notificationObject instanceof Error) {
    eventBus_default.$emit("notification", {
      type: "error",
      text: ((_b = (_a = notificationObject.response) == null ? void 0 : _a.data) == null ? void 0 : _b.detail) || ((_d = (_c = notificationObject.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || notificationObject
    });
  }
  return notificationObject;
};
var notify_transformer_default = notifyTransformer;

// node_modules/@webitel/ui-sdk/src/api/transformers/sanitize/sanitize.transformer.js
var import_dist25 = __toESM(require_dist(), 1);
var import_dist26 = __toESM(require_dist2(), 1);
var import_dist27 = __toESM(require_dist3(), 1);
var sanitizeTransformer = (fieldsToSend) => (item) => {
  return Object.keys(item).reduce((sanitizedItem, key) => {
    if (fieldsToSend.indexOf(key) === -1) return sanitizedItem;
    return {
      ...sanitizedItem,
      [key]: item[key]
    };
  }, {});
};
var sanitize_transformer_default = sanitizeTransformer;

// node_modules/@webitel/ui-sdk/src/api/transformers/skipIf/skipIf.ts
var import_dist28 = __toESM(require_dist(), 1);
var import_dist29 = __toESM(require_dist2(), 1);
var import_dist30 = __toESM(require_dist3(), 1);
var skipIf = (transformer, ifFn) => (payload) => {
  if (typeof ifFn === "function" ? ifFn(payload) : ifFn) {
    return payload;
  }
  return transformer(payload);
};

// node_modules/@webitel/ui-sdk/src/api/transformers/snakeToCamel/snakeToCamel.transformer.js
var import_dist31 = __toESM(require_dist(), 1);
var import_dist32 = __toESM(require_dist2(), 1);
var import_dist33 = __toESM(require_dist3(), 1);
var snakeToCamelTransformer = (skipKeys) => (obj) => objSnakeToCamel(obj, skipKeys);
var snakeToCamel_transformer_default = snakeToCamelTransformer;

// node_modules/@webitel/ui-sdk/src/api/transformers/starToSearch/starToSearch.transformer.js
var import_dist34 = __toESM(require_dist(), 1);
var import_dist35 = __toESM(require_dist2(), 1);
var import_dist36 = __toESM(require_dist3(), 1);
var import_deep_copy = __toESM(require_deep_copy(), 1);
var starToSearchTransformer = (path = "search") => (params) => {
  const copy = (0, import_deep_copy.default)(params);
  const value = get_default(copy, path);
  if (!value || value.slice(-1) === "*") return copy;
  return updateObject_default({ obj: copy, path, value: `${value}*` });
};
var starToSearch_transformer_default = starToSearchTransformer;

// node_modules/@webitel/ui-sdk/src/api/transformers/index.js
var transformers_default = applyTransform_default;

export {
  addQueryParamsToUrl_transformer_default,
  camelToSnake_transformer_default,
  generateUrl_transformer_default,
  log_transformer_default,
  merge_transformer_default,
  mergeEach_transformer_default,
  notify_transformer_default,
  sanitize_transformer_default,
  skipIf,
  snakeToCamel_transformer_default,
  starToSearch_transformer_default,
  transformers_default
};
//# sourceMappingURL=chunk-SIGGZAOU.js.map
