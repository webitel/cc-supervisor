import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  isObject_default
} from "./chunk-YX35SWNW.js";
import {
  baseGetTag_default,
  root_default
} from "./chunk-ZIQ6ZSOK.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/lodash-es/eq.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_ListCache.js
var import_dist22 = __toESM(require_dist(), 1);
var import_dist23 = __toESM(require_dist2(), 1);
var import_dist24 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_listCacheClear.js
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/_listCacheDelete.js
var import_dist10 = __toESM(require_dist(), 1);
var import_dist11 = __toESM(require_dist2(), 1);
var import_dist12 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_assocIndexOf.js
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
var import_dist13 = __toESM(require_dist(), 1);
var import_dist14 = __toESM(require_dist2(), 1);
var import_dist15 = __toESM(require_dist3(), 1);
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
var import_dist16 = __toESM(require_dist(), 1);
var import_dist17 = __toESM(require_dist2(), 1);
var import_dist18 = __toESM(require_dist3(), 1);
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
var import_dist19 = __toESM(require_dist(), 1);
var import_dist20 = __toESM(require_dist2(), 1);
var import_dist21 = __toESM(require_dist3(), 1);
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/isFunction.js
var import_dist25 = __toESM(require_dist(), 1);
var import_dist26 = __toESM(require_dist2(), 1);
var import_dist27 = __toESM(require_dist3(), 1);
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_toSource.js
var import_dist28 = __toESM(require_dist(), 1);
var import_dist29 = __toESM(require_dist2(), 1);
var import_dist30 = __toESM(require_dist3(), 1);
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_Map.js
var import_dist46 = __toESM(require_dist(), 1);
var import_dist47 = __toESM(require_dist2(), 1);
var import_dist48 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_getNative.js
var import_dist43 = __toESM(require_dist(), 1);
var import_dist44 = __toESM(require_dist2(), 1);
var import_dist45 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_baseIsNative.js
var import_dist37 = __toESM(require_dist(), 1);
var import_dist38 = __toESM(require_dist2(), 1);
var import_dist39 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_isMasked.js
var import_dist34 = __toESM(require_dist(), 1);
var import_dist35 = __toESM(require_dist2(), 1);
var import_dist36 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_coreJsData.js
var import_dist31 = __toESM(require_dist(), 1);
var import_dist32 = __toESM(require_dist2(), 1);
var import_dist33 = __toESM(require_dist3(), 1);
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
var import_dist40 = __toESM(require_dist(), 1);
var import_dist41 = __toESM(require_dist2(), 1);
var import_dist42 = __toESM(require_dist3(), 1);
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_Map.js
var Map = getNative_default(root_default, "Map");
var Map_default = Map;

// node_modules/lodash-es/_MapCache.js
var import_dist91 = __toESM(require_dist(), 1);
var import_dist92 = __toESM(require_dist2(), 1);
var import_dist93 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_mapCacheClear.js
var import_dist70 = __toESM(require_dist(), 1);
var import_dist71 = __toESM(require_dist2(), 1);
var import_dist72 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_Hash.js
var import_dist67 = __toESM(require_dist(), 1);
var import_dist68 = __toESM(require_dist2(), 1);
var import_dist69 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_hashClear.js
var import_dist52 = __toESM(require_dist(), 1);
var import_dist53 = __toESM(require_dist2(), 1);
var import_dist54 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_nativeCreate.js
var import_dist49 = __toESM(require_dist(), 1);
var import_dist50 = __toESM(require_dist2(), 1);
var import_dist51 = __toESM(require_dist3(), 1);
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
var import_dist55 = __toESM(require_dist(), 1);
var import_dist56 = __toESM(require_dist2(), 1);
var import_dist57 = __toESM(require_dist3(), 1);
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var import_dist58 = __toESM(require_dist(), 1);
var import_dist59 = __toESM(require_dist2(), 1);
var import_dist60 = __toESM(require_dist3(), 1);
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto2 = Object.prototype;
var hasOwnProperty2 = objectProto2.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty2.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var import_dist61 = __toESM(require_dist(), 1);
var import_dist62 = __toESM(require_dist2(), 1);
var import_dist63 = __toESM(require_dist3(), 1);
var objectProto3 = Object.prototype;
var hasOwnProperty3 = objectProto3.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty3.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var import_dist64 = __toESM(require_dist(), 1);
var import_dist65 = __toESM(require_dist2(), 1);
var import_dist66 = __toESM(require_dist3(), 1);
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_mapCacheDelete.js
var import_dist79 = __toESM(require_dist(), 1);
var import_dist80 = __toESM(require_dist2(), 1);
var import_dist81 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_getMapData.js
var import_dist76 = __toESM(require_dist(), 1);
var import_dist77 = __toESM(require_dist2(), 1);
var import_dist78 = __toESM(require_dist3(), 1);

// node_modules/lodash-es/_isKeyable.js
var import_dist73 = __toESM(require_dist(), 1);
var import_dist74 = __toESM(require_dist2(), 1);
var import_dist75 = __toESM(require_dist3(), 1);
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
var import_dist82 = __toESM(require_dist(), 1);
var import_dist83 = __toESM(require_dist2(), 1);
var import_dist84 = __toESM(require_dist3(), 1);
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
var import_dist85 = __toESM(require_dist(), 1);
var import_dist86 = __toESM(require_dist2(), 1);
var import_dist87 = __toESM(require_dist3(), 1);
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
var import_dist88 = __toESM(require_dist(), 1);
var import_dist89 = __toESM(require_dist2(), 1);
var import_dist90 = __toESM(require_dist3(), 1);
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

export {
  eq_default,
  ListCache_default,
  isFunction_default,
  coreJsData_default,
  toSource_default,
  baseIsNative_default,
  getNative_default,
  Map_default,
  MapCache_default
};
//# sourceMappingURL=chunk-SJL6G23E.js.map
