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

// node_modules/@webitel/api-services/src/utils/api/caseConverters.ts
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var snakeToCamel = (str) => str.replace(
  /([a-z])([_])([a-z])/g,
  (_group, p1, _p2, p3) => [p1, p3.toUpperCase()].join("")
);
var camelToSnake = (str) => str.replace(
  /([a-z])([A-Z])/g,
  (_group, p1, p2) => [p1, "_", p2.toLowerCase()].join("")
);
var kebabToCamel = (str) => str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace("-", ""));
var camelToKebab = (str) => str.replace(/([A-Z])/g, (group) => group.toLowerCase().replace("", "-"));
var kebabToSnake = (str) => str.replace(/([-_][a-z])/g, (group) => group.replace("-", "_"));
var snakeToKebab = (str) => str.replace(/([-_][a-z])/g, (group) => group.replace("_", "-"));
var convertObject = ({ self, converter }) => (obj, skipKeys) => {
  if (!obj) return obj;
  const newObj = {};
  if (Array.isArray(obj)) {
    return obj.map((value) => {
      if (typeof value === "object") {
        return self(value, skipKeys);
      }
      if (typeof value === "string") return converter(value);
      return value;
    });
  }
  Object.keys(obj).forEach((oldKey) => {
    if (skipKeys.includes(oldKey)) {
      newObj[oldKey] = obj[oldKey];
    } else {
      const newKey = converter(oldKey);
      let value = obj[oldKey];
      if (Array.isArray(value) || value !== null && value !== void 0 && value.constructor === Object) {
        value = self(value, skipKeys);
      }
      newObj[newKey] = value;
    }
  });
  return newObj;
};
var objSnakeToCamel = (obj, skipKeys = []) => {
  return convertObject({
    self: objSnakeToCamel,
    converter: snakeToCamel
  })(obj, skipKeys);
};
var objCamelToSnake = (obj, skipKeys = []) => {
  return convertObject({
    self: objCamelToSnake,
    converter: camelToSnake
  })(obj, skipKeys);
};
var objCamelToKebab = (obj, skipKeys = []) => {
  return convertObject({
    self: objCamelToKebab,
    converter: camelToKebab
  })(obj, skipKeys);
};

export {
  snakeToCamel,
  camelToSnake,
  kebabToCamel,
  camelToKebab,
  kebabToSnake,
  snakeToKebab,
  objSnakeToCamel,
  objCamelToSnake,
  objCamelToKebab
};
//# sourceMappingURL=chunk-RGTN4WD6.js.map
