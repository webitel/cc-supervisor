import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  require_actualApply,
  require_call_bind_apply_helpers,
  require_call_bound,
  require_es_define_property,
  require_es_errors,
  require_es_object_atoms,
  require_functionApply,
  require_function_bind,
  require_get_intrinsic,
  require_get_proto,
  require_gopd,
  require_has_symbols,
  require_hasown,
  require_shams,
  require_side_channel,
  require_syntax,
  require_type
} from "./chunk-ECRK6EO5.js";
import {
  __commonJS,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/object-keys/isArguments.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var toStr = Object.prototype.toString;
    module.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// node_modules/object-keys/implementation.js
var require_implementation = __commonJS({
  "node_modules/object-keys/implementation.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var keysShim;
    if (!Object.keys) {
      has = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }
    var has;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module.exports = keysShim;
  }
});

// node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "node_modules/object-keys/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var slice = Array.prototype.slice;
    var isArgs = require_isArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
    } : require_implementation();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module.exports = keysShim;
  }
});

// node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "node_modules/define-data-property/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "node_modules/define-properties/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var keys = require_object_keys();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var defineDataProperty = require_define_data_property();
    var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var supportsDescriptors = require_has_property_descriptors()();
    var defineProperty = function(object, name, value, predicate) {
      if (name in object) {
        if (predicate === true) {
          if (object[name] === value) {
            return;
          }
        } else if (!isFunction(predicate) || !predicate()) {
          return;
        }
      }
      if (supportsDescriptors) {
        defineDataProperty(object, name, value, true);
      } else {
        defineDataProperty(object, name, value);
      }
    };
    var defineProperties = function(object, map) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map);
      if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module.exports = defineProperties;
  }
});

// node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "node_modules/set-function-length/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var GetIntrinsic = require_get_intrinsic();
    var define = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// node_modules/call-bind-apply-helpers/applyBind.js
var require_applyBind = __commonJS({
  "node_modules/call-bind-apply-helpers/applyBind.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var actualApply = require_actualApply();
    module.exports = function applyBind() {
      return actualApply(bind, $apply, arguments);
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var setFunctionLength = require_set_function_length();
    var $defineProperty = require_es_define_property();
    var callBindBasic = require_call_bind_apply_helpers();
    var applyBind = require_applyBind();
    module.exports = function callBind(originalFunction) {
      var func = callBindBasic(arguments);
      var adjustedLength = originalFunction.length - (arguments.length - 1);
      return setFunctionLength(
        func,
        1 + (adjustedLength > 0 ? adjustedLength : 0),
        true
      );
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// node_modules/object.assign/implementation.js
var require_implementation2 = __commonJS({
  "node_modules/object.assign/implementation.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var objectKeys = require_object_keys();
    var hasSymbols = require_shams()();
    var callBound = require_call_bound();
    var $Object = require_es_object_atoms();
    var $push = callBound("Array.prototype.push");
    var $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable");
    var originalGetSymbols = hasSymbols ? $Object.getOwnPropertySymbols : null;
    module.exports = function assign(target, source1) {
      if (target == null) {
        throw new TypeError("target must be an object");
      }
      var to = $Object(target);
      if (arguments.length === 1) {
        return to;
      }
      for (var s = 1; s < arguments.length; ++s) {
        var from = $Object(arguments[s]);
        var keys = objectKeys(from);
        var getSymbols = hasSymbols && ($Object.getOwnPropertySymbols || originalGetSymbols);
        if (getSymbols) {
          var syms = getSymbols(from);
          for (var j = 0; j < syms.length; ++j) {
            var key = syms[j];
            if ($propIsEnumerable(from, key)) {
              $push(keys, key);
            }
          }
        }
        for (var i = 0; i < keys.length; ++i) {
          var nextKey = keys[i];
          if ($propIsEnumerable(from, nextKey)) {
            var propValue = from[nextKey];
            to[nextKey] = propValue;
          }
        }
      }
      return to;
    };
  }
});

// node_modules/object.assign/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/object.assign/polyfill.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var implementation = require_implementation2();
    var lacksProperEnumerationOrder = function() {
      if (!Object.assign) {
        return false;
      }
      var str = "abcdefghijklmnopqrst";
      var letters = str.split("");
      var map = {};
      for (var i = 0; i < letters.length; ++i) {
        map[letters[i]] = letters[i];
      }
      var obj = Object.assign({}, map);
      var actual = "";
      for (var k in obj) {
        actual += k;
      }
      return str !== actual;
    };
    var assignHasPendingExceptions = function() {
      if (!Object.assign || !Object.preventExtensions) {
        return false;
      }
      var thrower = Object.preventExtensions({ 1: 2 });
      try {
        Object.assign(thrower, "xy");
      } catch (e) {
        return thrower[1] === "y";
      }
      return false;
    };
    module.exports = function getPolyfill() {
      if (!Object.assign) {
        return implementation;
      }
      if (lacksProperEnumerationOrder()) {
        return implementation;
      }
      if (assignHasPendingExceptions()) {
        return implementation;
      }
      return Object.assign;
    };
  }
});

// node_modules/object.assign/shim.js
var require_shim = __commonJS({
  "node_modules/object.assign/shim.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var define = require_define_properties();
    var getPolyfill = require_polyfill();
    module.exports = function shimAssign() {
      var polyfill = getPolyfill();
      define(
        Object,
        { assign: polyfill },
        { assign: function() {
          return Object.assign !== polyfill;
        } }
      );
      return polyfill;
    };
  }
});

// node_modules/object.assign/index.js
var require_object = __commonJS({
  "node_modules/object.assign/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var defineProperties = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation2();
    var getPolyfill = require_polyfill();
    var shim = require_shim();
    var polyfill = callBind.apply(getPolyfill());
    var bound = function assign(target, source1) {
      return polyfill(Object, arguments);
    };
    defineProperties(bound, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = bound;
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/functions-have-names/index.js
var require_functions_have_names = __commonJS({
  "node_modules/functions-have-names/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var functionsHaveNames = function functionsHaveNames2() {
      return typeof (function f() {
      }).name === "string";
    };
    var gOPD = Object.getOwnPropertyDescriptor;
    if (gOPD) {
      try {
        gOPD([], "length");
      } catch (e) {
        gOPD = null;
      }
    }
    functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
      if (!functionsHaveNames() || !gOPD) {
        return false;
      }
      var desc = gOPD(function() {
      }, "name");
      return !!desc && !!desc.configurable;
    };
    var $bind = Function.prototype.bind;
    functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
      return functionsHaveNames() && typeof $bind === "function" && (function f() {
      }).bind().name !== "";
    };
    module.exports = functionsHaveNames;
  }
});

// node_modules/set-function-name/index.js
var require_set_function_name = __commonJS({
  "node_modules/set-function-name/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var define = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var functionsHaveConfigurableNames = require_functions_have_names().functionsHaveConfigurableNames();
    var $TypeError = require_type();
    module.exports = function setFunctionName(fn, name) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      if (!loose || functionsHaveConfigurableNames) {
        if (hasDescriptors) {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "name",
            name,
            true,
            true
          );
        } else {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "name",
            name
          );
        }
      }
      return fn;
    };
  }
});

// node_modules/regexp.prototype.flags/implementation.js
var require_implementation3 = __commonJS({
  "node_modules/regexp.prototype.flags/implementation.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var setFunctionName = require_set_function_name();
    var $TypeError = require_type();
    var $Object = Object;
    module.exports = setFunctionName(function flags() {
      if (this == null || this !== $Object(this)) {
        throw new $TypeError("RegExp.prototype.flags getter called on non-object");
      }
      var result = "";
      if (this.hasIndices) {
        result += "d";
      }
      if (this.global) {
        result += "g";
      }
      if (this.ignoreCase) {
        result += "i";
      }
      if (this.multiline) {
        result += "m";
      }
      if (this.dotAll) {
        result += "s";
      }
      if (this.unicode) {
        result += "u";
      }
      if (this.unicodeSets) {
        result += "v";
      }
      if (this.sticky) {
        result += "y";
      }
      return result;
    }, "get flags", true);
  }
});

// node_modules/regexp.prototype.flags/polyfill.js
var require_polyfill2 = __commonJS({
  "node_modules/regexp.prototype.flags/polyfill.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var implementation = require_implementation3();
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var $gOPD = Object.getOwnPropertyDescriptor;
    module.exports = function getPolyfill() {
      if (supportsDescriptors && /a/mig.flags === "gim") {
        var descriptor = $gOPD(RegExp.prototype, "flags");
        if (descriptor && typeof descriptor.get === "function" && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
          var calls = "";
          var o = {};
          Object.defineProperty(o, "hasIndices", {
            get: function() {
              calls += "d";
            }
          });
          Object.defineProperty(o, "sticky", {
            get: function() {
              calls += "y";
            }
          });
          descriptor.get.call(o);
          if (calls === "dy") {
            return descriptor.get;
          }
        }
      }
      return implementation;
    };
  }
});

// node_modules/regexp.prototype.flags/shim.js
var require_shim2 = __commonJS({
  "node_modules/regexp.prototype.flags/shim.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var getPolyfill = require_polyfill2();
    var gOPD = require_gopd();
    var defineProperty = Object.defineProperty;
    var $TypeError = require_es_errors();
    var getProto = require_get_proto();
    var regex = /a/;
    module.exports = function shimFlags() {
      if (!supportsDescriptors || !getProto) {
        throw new $TypeError("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
      }
      var polyfill = getPolyfill();
      var proto = getProto(regex);
      var descriptor = gOPD(proto, "flags");
      if (!descriptor || descriptor.get !== polyfill) {
        defineProperty(proto, "flags", {
          configurable: true,
          enumerable: false,
          get: polyfill
        });
      }
      return polyfill;
    };
  }
});

// node_modules/regexp.prototype.flags/index.js
var require_regexp_prototype = __commonJS({
  "node_modules/regexp.prototype.flags/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var define = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation3();
    var getPolyfill = require_polyfill2();
    var shim = require_shim2();
    var flagsBound = callBind(getPolyfill());
    define(flagsBound, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = flagsBound;
  }
});

// node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "node_modules/is-arguments/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var hasToStringTag = require_shams2()();
    var callBound = require_call_bound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && "length" in value && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && "callee" in value && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// node_modules/internal-slot/index.js
var require_internal_slot = __commonJS({
  "node_modules/internal-slot/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var hasOwn = require_hasown();
    var channel = require_side_channel()();
    var $TypeError = require_type();
    var SLOT = {
      assert: function(O, slot) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new $TypeError("`O` is not an object");
        }
        if (typeof slot !== "string") {
          throw new $TypeError("`slot` must be a string");
        }
        channel.assert(O);
        if (!SLOT.has(O, slot)) {
          throw new $TypeError("`" + slot + "` is not present on `O`");
        }
      },
      get: function(O, slot) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new $TypeError("`O` is not an object");
        }
        if (typeof slot !== "string") {
          throw new $TypeError("`slot` must be a string");
        }
        var slots = channel.get(O);
        return slots && slots[
          /** @type {SaltedInternalSlot} */
          "$" + slot
        ];
      },
      has: function(O, slot) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new $TypeError("`O` is not an object");
        }
        if (typeof slot !== "string") {
          throw new $TypeError("`slot` must be a string");
        }
        var slots = channel.get(O);
        return !!slots && hasOwn(
          slots,
          /** @type {SaltedInternalSlot} */
          "$" + slot
        );
      },
      set: function(O, slot, V) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new $TypeError("`O` is not an object");
        }
        if (typeof slot !== "string") {
          throw new $TypeError("`slot` must be a string");
        }
        var slots = channel.get(O);
        if (!slots) {
          slots = {};
          channel.set(O, slots);
        }
        slots[
          /** @type {SaltedInternalSlot} */
          "$" + slot
        ] = V;
      }
    };
    if (Object.freeze) {
      Object.freeze(SLOT);
    }
    module.exports = SLOT;
  }
});

// node_modules/stop-iteration-iterator/index.js
var require_stop_iteration_iterator = __commonJS({
  "node_modules/stop-iteration-iterator/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var SLOT = require_internal_slot();
    var $SyntaxError = require_syntax();
    var $StopIteration = typeof StopIteration === "object" ? StopIteration : null;
    module.exports = function getStopIterationIterator(origIterator) {
      if (!$StopIteration) {
        throw new $SyntaxError("this environment lacks StopIteration");
      }
      SLOT.set(origIterator, "[[Done]]", false);
      var siIterator = {
        next: (
          /** @type {() => IteratorResult<T>} */
          function next() {
            var iterator = (
              /** @type {typeof origIterator} */
              SLOT.get(this, "[[Iterator]]")
            );
            var done = !!SLOT.get(iterator, "[[Done]]");
            try {
              return {
                done,
                // eslint-disable-next-line no-extra-parens
                value: done ? void 0 : (
                  /** @type {T} */
                  iterator.next()
                )
              };
            } catch (e) {
              SLOT.set(iterator, "[[Done]]", true);
              if (e !== $StopIteration) {
                throw e;
              }
              return {
                done: true,
                value: void 0
              };
            }
          }
        )
      };
      SLOT.set(siIterator, "[[Iterator]]", origIterator);
      return siIterator;
    };
  }
});

// node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/isarray/index.js"(exports, module) {
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/is-string/index.js
var require_is_string = __commonJS({
  "node_modules/is-string/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBound = require_call_bound();
    var $strValueOf = callBound("String.prototype.valueOf");
    var tryStringObject = function tryStringObject2(value) {
      try {
        $strValueOf(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var $toString = callBound("Object.prototype.toString");
    var strClass = "[object String]";
    var hasToStringTag = require_shams2()();
    module.exports = function isString(value) {
      if (typeof value === "string") {
        return true;
      }
      if (!value || typeof value !== "object") {
        return false;
      }
      return hasToStringTag ? tryStringObject(value) : $toString(value) === strClass;
    };
  }
});

// node_modules/is-map/index.js
var require_is_map = __commonJS({
  "node_modules/is-map/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var $Map = typeof Map === "function" && Map.prototype ? Map : null;
    var $Set = typeof Set === "function" && Set.prototype ? Set : null;
    var exported;
    if (!$Map) {
      exported = function isMap(x) {
        return false;
      };
    }
    var $mapHas = $Map ? Map.prototype.has : null;
    var $setHas = $Set ? Set.prototype.has : null;
    if (!exported && !$mapHas) {
      exported = function isMap(x) {
        return false;
      };
    }
    module.exports = exported || function isMap(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $mapHas.call(x);
        if ($setHas) {
          try {
            $setHas.call(x);
          } catch (e) {
            return true;
          }
        }
        return x instanceof $Map;
      } catch (e) {
      }
      return false;
    };
  }
});

// node_modules/is-set/index.js
var require_is_set = __commonJS({
  "node_modules/is-set/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var $Map = typeof Map === "function" && Map.prototype ? Map : null;
    var $Set = typeof Set === "function" && Set.prototype ? Set : null;
    var exported;
    if (!$Set) {
      exported = function isSet(x) {
        return false;
      };
    }
    var $mapHas = $Map ? Map.prototype.has : null;
    var $setHas = $Set ? Set.prototype.has : null;
    if (!exported && !$setHas) {
      exported = function isSet(x) {
        return false;
      };
    }
    module.exports = exported || function isSet(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $setHas.call(x);
        if ($mapHas) {
          try {
            $mapHas.call(x);
          } catch (e) {
            return true;
          }
        }
        return x instanceof $Set;
      } catch (e) {
      }
      return false;
    };
  }
});

// node_modules/es-get-iterator/index.js
var require_es_get_iterator = __commonJS({
  "node_modules/es-get-iterator/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var isArguments = require_is_arguments();
    var getStopIterationIterator = require_stop_iteration_iterator();
    if (require_has_symbols()() || require_shams()()) {
      $iterator = Symbol.iterator;
      module.exports = function getIterator(iterable) {
        if (iterable != null && typeof iterable[$iterator] !== "undefined") {
          return iterable[$iterator]();
        }
        if (isArguments(iterable)) {
          return Array.prototype[$iterator].call(iterable);
        }
      };
    } else {
      isArray = require_isarray();
      isString = require_is_string();
      GetIntrinsic = require_get_intrinsic();
      $Map = GetIntrinsic("%Map%", true);
      $Set = GetIntrinsic("%Set%", true);
      callBound = require_callBound();
      $arrayPush = callBound("Array.prototype.push");
      $charCodeAt = callBound("String.prototype.charCodeAt");
      $stringSlice = callBound("String.prototype.slice");
      advanceStringIndex = function advanceStringIndex2(S, index) {
        var length = S.length;
        if (index + 1 >= length) {
          return index + 1;
        }
        var first = $charCodeAt(S, index);
        if (first < 55296 || first > 56319) {
          return index + 1;
        }
        var second = $charCodeAt(S, index + 1);
        if (second < 56320 || second > 57343) {
          return index + 1;
        }
        return index + 2;
      };
      getArrayIterator = function getArrayIterator2(arraylike) {
        var i = 0;
        return {
          next: function next() {
            var done = i >= arraylike.length;
            var value;
            if (!done) {
              value = arraylike[i];
              i += 1;
            }
            return {
              done,
              value
            };
          }
        };
      };
      getNonCollectionIterator = function getNonCollectionIterator2(iterable, noPrimordialCollections) {
        if (isArray(iterable) || isArguments(iterable)) {
          return getArrayIterator(iterable);
        }
        if (isString(iterable)) {
          var i = 0;
          return {
            next: function next() {
              var nextIndex = advanceStringIndex(iterable, i);
              var value = $stringSlice(iterable, i, nextIndex);
              i = nextIndex;
              return {
                done: nextIndex > iterable.length,
                value
              };
            }
          };
        }
        if (noPrimordialCollections && typeof iterable["_es6-shim iterator_"] !== "undefined") {
          return iterable["_es6-shim iterator_"]();
        }
      };
      if (!$Map && !$Set) {
        module.exports = function getIterator(iterable) {
          if (iterable != null) {
            return getNonCollectionIterator(iterable, true);
          }
        };
      } else {
        isMap = require_is_map();
        isSet = require_is_set();
        $mapForEach = callBound("Map.prototype.forEach", true);
        $setForEach = callBound("Set.prototype.forEach", true);
        if (typeof process === "undefined" || !process.versions || !process.versions.node) {
          $mapIterator = callBound("Map.prototype.iterator", true);
          $setIterator = callBound("Set.prototype.iterator", true);
        }
        $mapAtAtIterator = callBound("Map.prototype.@@iterator", true) || callBound("Map.prototype._es6-shim iterator_", true);
        $setAtAtIterator = callBound("Set.prototype.@@iterator", true) || callBound("Set.prototype._es6-shim iterator_", true);
        getCollectionIterator = function getCollectionIterator2(iterable) {
          if (isMap(iterable)) {
            if ($mapIterator) {
              return getStopIterationIterator($mapIterator(iterable));
            }
            if ($mapAtAtIterator) {
              return $mapAtAtIterator(iterable);
            }
            if ($mapForEach) {
              var entries = [];
              $mapForEach(iterable, function(v, k) {
                $arrayPush(entries, [k, v]);
              });
              return getArrayIterator(entries);
            }
          }
          if (isSet(iterable)) {
            if ($setIterator) {
              return getStopIterationIterator($setIterator(iterable));
            }
            if ($setAtAtIterator) {
              return $setAtAtIterator(iterable);
            }
            if ($setForEach) {
              var values = [];
              $setForEach(iterable, function(v) {
                $arrayPush(values, v);
              });
              return getArrayIterator(values);
            }
          }
        };
        module.exports = function getIterator(iterable) {
          return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
        };
      }
    }
    var $iterator;
    var isArray;
    var isString;
    var GetIntrinsic;
    var $Map;
    var $Set;
    var callBound;
    var $arrayPush;
    var $charCodeAt;
    var $stringSlice;
    var advanceStringIndex;
    var getArrayIterator;
    var getNonCollectionIterator;
    var isMap;
    var isSet;
    var $mapForEach;
    var $setForEach;
    var $mapIterator;
    var $setIterator;
    var $mapAtAtIterator;
    var $setAtAtIterator;
    var getCollectionIterator;
  }
});

// node_modules/object-is/implementation.js
var require_implementation4 = __commonJS({
  "node_modules/object-is/implementation.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var numberIsNaN = function(value) {
      return value !== value;
    };
    module.exports = function is(a, b) {
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      if (a === b) {
        return true;
      }
      if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
      }
      return false;
    };
  }
});

// node_modules/object-is/polyfill.js
var require_polyfill3 = __commonJS({
  "node_modules/object-is/polyfill.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var implementation = require_implementation4();
    module.exports = function getPolyfill() {
      return typeof Object.is === "function" ? Object.is : implementation;
    };
  }
});

// node_modules/object-is/shim.js
var require_shim3 = __commonJS({
  "node_modules/object-is/shim.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var getPolyfill = require_polyfill3();
    var define = require_define_properties();
    module.exports = function shimObjectIs() {
      var polyfill = getPolyfill();
      define(Object, { is: polyfill }, {
        is: function testObjectIs() {
          return Object.is !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// node_modules/object-is/index.js
var require_object_is = __commonJS({
  "node_modules/object-is/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var define = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation4();
    var getPolyfill = require_polyfill3();
    var shim = require_shim3();
    var polyfill = callBind(getPolyfill(), Object);
    define(polyfill, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = polyfill;
  }
});

// node_modules/is-array-buffer/index.js
var require_is_array_buffer = __commonJS({
  "node_modules/is-array-buffer/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBind = require_call_bind();
    var callBound = require_call_bound();
    var GetIntrinsic = require_get_intrinsic();
    var $ArrayBuffer = GetIntrinsic("%ArrayBuffer%", true);
    var $byteLength = callBound("ArrayBuffer.prototype.byteLength", true);
    var $toString = callBound("Object.prototype.toString");
    var abSlice = !!$ArrayBuffer && !$byteLength && new $ArrayBuffer(0).slice;
    var $abSlice = !!abSlice && callBind(abSlice);
    module.exports = $byteLength || $abSlice ? function isArrayBuffer(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      try {
        if ($byteLength) {
          $byteLength(obj);
        } else {
          $abSlice(obj, 0);
        }
        return true;
      } catch (e) {
        return false;
      }
    } : $ArrayBuffer ? function isArrayBuffer(obj) {
      return $toString(obj) === "[object ArrayBuffer]";
    } : function isArrayBuffer(obj) {
      return false;
    };
  }
});

// node_modules/is-date-object/index.js
var require_is_date_object = __commonJS({
  "node_modules/is-date-object/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBound = require_call_bound();
    var getDay = callBound("Date.prototype.getDay");
    var tryDateObject = function tryDateGetDayCall(value) {
      try {
        getDay(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = callBound("Object.prototype.toString");
    var dateClass = "[object Date]";
    var hasToStringTag = require_shams2()();
    module.exports = function isDateObject(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      return hasToStringTag ? tryDateObject(value) : toStr(value) === dateClass;
    };
  }
});

// node_modules/is-regex/index.js
var require_is_regex = __commonJS({
  "node_modules/is-regex/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBound = require_call_bound();
    var hasToStringTag = require_shams2()();
    var hasOwn = require_hasown();
    var gOPD = require_gopd();
    var fn;
    if (hasToStringTag) {
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
      fn = function isRegex(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        var descriptor = (
          /** @type {NonNullable<typeof gOPD>} */
          gOPD(
            /** @type {{ lastIndex?: unknown }} */
            value,
            "lastIndex"
          )
        );
        var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, "value");
        if (!hasLastIndexDataProperty) {
          return false;
        }
        try {
          $exec(
            value,
            /** @type {string} */
            /** @type {unknown} */
            badStringifier
          );
        } catch (e) {
          return e === isRegexMarker;
        }
      };
    } else {
      $toString = callBound("Object.prototype.toString");
      regexClass = "[object RegExp]";
      fn = function isRegex(value) {
        if (!value || typeof value !== "object" && typeof value !== "function") {
          return false;
        }
        return $toString(value) === regexClass;
      };
    }
    var $exec;
    var isRegexMarker;
    var throwRegexMarker;
    var badStringifier;
    var $toString;
    var regexClass;
    module.exports = fn;
  }
});

// node_modules/is-shared-array-buffer/index.js
var require_is_shared_array_buffer = __commonJS({
  "node_modules/is-shared-array-buffer/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBound = require_call_bound();
    var $byteLength = callBound("SharedArrayBuffer.prototype.byteLength", true);
    module.exports = $byteLength ? function isSharedArrayBuffer(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      try {
        $byteLength(obj);
        return true;
      } catch (e) {
        return false;
      }
    } : function isSharedArrayBuffer(_obj) {
      return false;
    };
  }
});

// node_modules/is-number-object/index.js
var require_is_number_object = __commonJS({
  "node_modules/is-number-object/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBound = require_call_bound();
    var $numToStr = callBound("Number.prototype.toString");
    var tryNumberObject = function tryNumberObject2(value) {
      try {
        $numToStr(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var $toString = callBound("Object.prototype.toString");
    var numClass = "[object Number]";
    var hasToStringTag = require_shams2()();
    module.exports = function isNumberObject(value) {
      if (typeof value === "number") {
        return true;
      }
      if (!value || typeof value !== "object") {
        return false;
      }
      return hasToStringTag ? tryNumberObject(value) : $toString(value) === numClass;
    };
  }
});

// node_modules/is-boolean-object/index.js
var require_is_boolean_object = __commonJS({
  "node_modules/is-boolean-object/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBound = require_call_bound();
    var $boolToStr = callBound("Boolean.prototype.toString");
    var $toString = callBound("Object.prototype.toString");
    var tryBooleanObject = function booleanBrandCheck(value) {
      try {
        $boolToStr(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var boolClass = "[object Boolean]";
    var hasToStringTag = require_shams2()();
    module.exports = function isBoolean(value) {
      if (typeof value === "boolean") {
        return true;
      }
      if (value === null || typeof value !== "object") {
        return false;
      }
      return hasToStringTag ? tryBooleanObject(value) : $toString(value) === boolClass;
    };
  }
});

// node_modules/safe-regex-test/index.js
var require_safe_regex_test = __commonJS({
  "node_modules/safe-regex-test/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBound = require_call_bound();
    var isRegex = require_is_regex();
    var $exec = callBound("RegExp.prototype.exec");
    var $TypeError = require_type();
    module.exports = function regexTester(regex) {
      if (!isRegex(regex)) {
        throw new $TypeError("`regex` must be a RegExp");
      }
      return function test(s) {
        return $exec(regex, s) !== null;
      };
    };
  }
});

// node_modules/is-symbol/index.js
var require_is_symbol = __commonJS({
  "node_modules/is-symbol/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBound = require_call_bound();
    var $toString = callBound("Object.prototype.toString");
    var hasSymbols = require_has_symbols()();
    var safeRegexTest = require_safe_regex_test();
    if (hasSymbols) {
      $symToStr = callBound("Symbol.prototype.toString");
      isSymString = safeRegexTest(/^Symbol\(.*\)$/);
      isSymbolObject = function isRealSymbolObject(value) {
        if (typeof value.valueOf() !== "symbol") {
          return false;
        }
        return isSymString($symToStr(value));
      };
      module.exports = function isSymbol(value) {
        if (typeof value === "symbol") {
          return true;
        }
        if (!value || typeof value !== "object" || $toString(value) !== "[object Symbol]") {
          return false;
        }
        try {
          return isSymbolObject(value);
        } catch (e) {
          return false;
        }
      };
    } else {
      module.exports = function isSymbol(value) {
        return false;
      };
    }
    var $symToStr;
    var isSymString;
    var isSymbolObject;
  }
});

// node_modules/has-bigints/index.js
var require_has_bigints = __commonJS({
  "node_modules/has-bigints/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var $BigInt = typeof BigInt !== "undefined" && BigInt;
    module.exports = function hasNativeBigInts() {
      return typeof $BigInt === "function" && typeof BigInt === "function" && typeof $BigInt(42) === "bigint" && typeof BigInt(42) === "bigint";
    };
  }
});

// node_modules/is-bigint/index.js
var require_is_bigint = __commonJS({
  "node_modules/is-bigint/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var hasBigInts = require_has_bigints()();
    if (hasBigInts) {
      bigIntValueOf = BigInt.prototype.valueOf;
      tryBigInt = function tryBigIntObject(value) {
        try {
          bigIntValueOf.call(value);
          return true;
        } catch (e) {
        }
        return false;
      };
      module.exports = function isBigInt(value) {
        if (value === null || typeof value === "undefined" || typeof value === "boolean" || typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "function") {
          return false;
        }
        if (typeof value === "bigint") {
          return true;
        }
        return tryBigInt(value);
      };
    } else {
      module.exports = function isBigInt(value) {
        return false;
      };
    }
    var bigIntValueOf;
    var tryBigInt;
  }
});

// node_modules/which-boxed-primitive/index.js
var require_which_boxed_primitive = __commonJS({
  "node_modules/which-boxed-primitive/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var isString = require_is_string();
    var isNumber = require_is_number_object();
    var isBoolean = require_is_boolean_object();
    var isSymbol = require_is_symbol();
    var isBigInt = require_is_bigint();
    module.exports = function whichBoxedPrimitive(value) {
      if (value == null || typeof value !== "object" && typeof value !== "function") {
        return null;
      }
      if (isString(value)) {
        return "String";
      }
      if (isNumber(value)) {
        return "Number";
      }
      if (isBoolean(value)) {
        return "Boolean";
      }
      if (isSymbol(value)) {
        return "Symbol";
      }
      if (isBigInt(value)) {
        return "BigInt";
      }
    };
  }
});

// node_modules/is-weakmap/index.js
var require_is_weakmap = __commonJS({
  "node_modules/is-weakmap/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var $WeakMap = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap : null;
    var $WeakSet = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet : null;
    var exported;
    if (!$WeakMap) {
      exported = function isWeakMap(x) {
        return false;
      };
    }
    var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
    var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
    if (!exported && !$mapHas) {
      exported = function isWeakMap(x) {
        return false;
      };
    }
    module.exports = exported || function isWeakMap(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $mapHas.call(x, $mapHas);
        if ($setHas) {
          try {
            $setHas.call(x, $setHas);
          } catch (e) {
            return true;
          }
        }
        return x instanceof $WeakMap;
      } catch (e) {
      }
      return false;
    };
  }
});

// node_modules/is-weakset/index.js
var require_is_weakset = __commonJS({
  "node_modules/is-weakset/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var $WeakSet = GetIntrinsic("%WeakSet%", true);
    var $setHas = callBound("WeakSet.prototype.has", true);
    if ($setHas) {
      $mapHas = callBound("WeakMap.prototype.has", true);
      module.exports = function isWeakSet(x) {
        if (!x || typeof x !== "object") {
          return false;
        }
        try {
          $setHas(x, $setHas);
          if ($mapHas) {
            try {
              $mapHas(x, $mapHas);
            } catch (e) {
              return true;
            }
          }
          return x instanceof $WeakSet;
        } catch (e) {
        }
        return false;
      };
    } else {
      module.exports = function isWeakSet(x) {
        return false;
      };
    }
    var $mapHas;
  }
});

// node_modules/which-collection/index.js
var require_which_collection = __commonJS({
  "node_modules/which-collection/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var isMap = require_is_map();
    var isSet = require_is_set();
    var isWeakMap = require_is_weakmap();
    var isWeakSet = require_is_weakset();
    module.exports = function whichCollection(value) {
      if (value && typeof value === "object") {
        if (isMap(value)) {
          return "Map";
        }
        if (isSet(value)) {
          return "Set";
        }
        if (isWeakMap(value)) {
          return "WeakMap";
        }
        if (isWeakSet(value)) {
          return "WeakSet";
        }
      }
      return false;
    };
  }
});

// node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "node_modules/is-callable/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [,]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e) {
            }
          }
          return false;
        };
      }
    }
    var all;
    module.exports = reflectApply ? function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
  }
});

// node_modules/for-each/index.js
var require_for_each = __commonJS({
  "node_modules/for-each/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var isCallable = require_is_callable();
    var toStr = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object, iterator, receiver) {
      for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
          if (receiver == null) {
            iterator(object[k], k, object);
          } else {
            iterator.call(receiver, object[k], k, object);
          }
        }
      }
    };
    function isArray(x) {
      return toStr.call(x) === "[object Array]";
    }
    module.exports = function forEach(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (isArray(list)) {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
  }
});

// node_modules/possible-typed-array-names/index.js
var require_possible_typed_array_names = __commonJS({
  "node_modules/possible-typed-array-names/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    module.exports = [
      "Float16Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array"
    ];
  }
});

// node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS({
  "node_modules/available-typed-arrays/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var possibleNames = require_possible_typed_array_names();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    module.exports = function availableTypedArrays() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
  }
});

// node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "node_modules/which-typed-array/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var forEach = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBind = require_call_bind();
    var callBound = require_call_bound();
    var gOPD = require_gopd();
    var getProto = require_get_proto();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $slice = callBound("String.prototype.slice");
    var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var cache = { __proto__: null };
    if (hasToStringTag && gOPD && getProto) {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr && getProto) {
          var proto = getProto(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor && proto) {
            var superProto = getProto(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          cache["$" + typedArray] = callBind(descriptor.get);
        }
      });
    } else {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        var fn = arr.slice || arr.set;
        if (fn) {
          cache[
            /** @type {`$${import('.').TypedArrayName}`} */
            "$" + typedArray
          ] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
          // @ts-expect-error TODO FIXME
          callBind(fn);
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var found = false;
      forEach(
        /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
        cache,
        /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
        function(getter, typedArray) {
          if (!found) {
            try {
              if ("$" + getter(value) === typedArray) {
                found = /** @type {import('.').TypedArrayName} */
                $slice(typedArray, 1);
              }
            } catch (e) {
            }
          }
        }
      );
      return found;
    };
    var trySlices = function tryAllSlices(value) {
      var found = false;
      forEach(
        /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
        cache,
        /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
        function(getter, name) {
          if (!found) {
            try {
              getter(value);
              found = /** @type {import('.').TypedArrayName} */
              $slice(name, 1);
            } catch (e) {
            }
          }
        }
      );
      return found;
    };
    module.exports = function whichTypedArray(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag) {
        var tag = $slice($toString(value), 8, -1);
        if ($indexOf(typedArrays, tag) > -1) {
          return tag;
        }
        if (tag !== "Object") {
          return false;
        }
        return trySlices(value);
      }
      if (!gOPD) {
        return null;
      }
      return tryTypedArrays(value);
    };
  }
});

// node_modules/array-buffer-byte-length/index.js
var require_array_buffer_byte_length = __commonJS({
  "node_modules/array-buffer-byte-length/index.js"(exports, module) {
    "use strict";
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var callBound = require_call_bound();
    var $byteLength = callBound("ArrayBuffer.prototype.byteLength", true);
    var isArrayBuffer = require_is_array_buffer();
    module.exports = function byteLength(ab) {
      if (!isArrayBuffer(ab)) {
        return NaN;
      }
      return $byteLength ? $byteLength(ab) : ab.byteLength;
    };
  }
});

// node_modules/deep-equal/index.js
var require_deep_equal = __commonJS({
  "node_modules/deep-equal/index.js"(exports, module) {
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var assign = require_object();
    var callBound = require_callBound();
    var flags = require_regexp_prototype();
    var GetIntrinsic = require_get_intrinsic();
    var getIterator = require_es_get_iterator();
    var getSideChannel = require_side_channel();
    var is = require_object_is();
    var isArguments = require_is_arguments();
    var isArray = require_isarray();
    var isArrayBuffer = require_is_array_buffer();
    var isDate = require_is_date_object();
    var isRegex = require_is_regex();
    var isSharedArrayBuffer = require_is_shared_array_buffer();
    var objectKeys = require_object_keys();
    var whichBoxedPrimitive = require_which_boxed_primitive();
    var whichCollection = require_which_collection();
    var whichTypedArray = require_which_typed_array();
    var byteLength = require_array_buffer_byte_length();
    var sabByteLength = callBound("SharedArrayBuffer.prototype.byteLength", true);
    var $getTime = callBound("Date.prototype.getTime");
    var gPO = Object.getPrototypeOf;
    var $objToString = callBound("Object.prototype.toString");
    var $Set = GetIntrinsic("%Set%", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSize = callBound("Map.prototype.size", true);
    var $setAdd = callBound("Set.prototype.add", true);
    var $setDelete = callBound("Set.prototype.delete", true);
    var $setHas = callBound("Set.prototype.has", true);
    var $setSize = callBound("Set.prototype.size", true);
    function setHasEqualElement(set, val1, opts, channel) {
      var i = getIterator(set);
      var result;
      while ((result = i.next()) && !result.done) {
        if (internalDeepEqual(val1, result.value, opts, channel)) {
          $setDelete(set, result.value);
          return true;
        }
      }
      return false;
    }
    function findLooseMatchingPrimitives(prim) {
      if (typeof prim === "undefined") {
        return null;
      }
      if (typeof prim === "object") {
        return void 0;
      }
      if (typeof prim === "symbol") {
        return false;
      }
      if (typeof prim === "string" || typeof prim === "number") {
        return +prim === +prim;
      }
      return true;
    }
    function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) {
        return altValue;
      }
      var curB = $mapGet(b, altValue);
      var looseOpts = assign({}, opts, { strict: false });
      if (typeof curB === "undefined" && !$mapHas(b, altValue) || !internalDeepEqual(item, curB, looseOpts, channel)) {
        return false;
      }
      return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
    }
    function setMightHaveLoosePrim(a, b, prim) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) {
        return altValue;
      }
      return $setHas(b, altValue) && !$setHas(a, altValue);
    }
    function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
      var i = getIterator(set);
      var result;
      var key2;
      while ((result = i.next()) && !result.done) {
        key2 = result.value;
        if (
          // eslint-disable-next-line no-use-before-define
          internalDeepEqual(key1, key2, opts, channel) && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)
        ) {
          $setDelete(set, key2);
          return true;
        }
      }
      return false;
    }
    function internalDeepEqual(actual, expected, options, channel) {
      var opts = options || {};
      if (opts.strict ? is(actual, expected) : actual === expected) {
        return true;
      }
      var actualBoxed = whichBoxedPrimitive(actual);
      var expectedBoxed = whichBoxedPrimitive(expected);
      if (actualBoxed !== expectedBoxed) {
        return false;
      }
      if (!actual || !expected || typeof actual !== "object" && typeof expected !== "object") {
        return opts.strict ? is(actual, expected) : actual == expected;
      }
      var hasActual = channel.has(actual);
      var hasExpected = channel.has(expected);
      var sentinel;
      if (hasActual && hasExpected) {
        if (channel.get(actual) === channel.get(expected)) {
          return true;
        }
      } else {
        sentinel = {};
      }
      if (!hasActual) {
        channel.set(actual, sentinel);
      }
      if (!hasExpected) {
        channel.set(expected, sentinel);
      }
      return objEquiv(actual, expected, opts, channel);
    }
    function isBuffer(x) {
      if (!x || typeof x !== "object" || typeof x.length !== "number") {
        return false;
      }
      if (typeof x.copy !== "function" || typeof x.slice !== "function") {
        return false;
      }
      if (x.length > 0 && typeof x[0] !== "number") {
        return false;
      }
      return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
    }
    function setEquiv(a, b, opts, channel) {
      if ($setSize(a) !== $setSize(b)) {
        return false;
      }
      var iA = getIterator(a);
      var iB = getIterator(b);
      var resultA;
      var resultB;
      var set;
      while ((resultA = iA.next()) && !resultA.done) {
        if (resultA.value && typeof resultA.value === "object") {
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, resultA.value);
        } else if (!$setHas(b, resultA.value)) {
          if (opts.strict) {
            return false;
          }
          if (!setMightHaveLoosePrim(a, b, resultA.value)) {
            return false;
          }
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, resultA.value);
        }
      }
      if (set) {
        while ((resultB = iB.next()) && !resultB.done) {
          if (resultB.value && typeof resultB.value === "object") {
            if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
              return false;
            }
          } else if (!opts.strict && !$setHas(a, resultB.value) && !setHasEqualElement(set, resultB.value, opts.strict, channel)) {
            return false;
          }
        }
        return $setSize(set) === 0;
      }
      return true;
    }
    function mapEquiv(a, b, opts, channel) {
      if ($mapSize(a) !== $mapSize(b)) {
        return false;
      }
      var iA = getIterator(a);
      var iB = getIterator(b);
      var resultA;
      var resultB;
      var set;
      var key;
      var item1;
      var item2;
      while ((resultA = iA.next()) && !resultA.done) {
        key = resultA.value[0];
        item1 = resultA.value[1];
        if (key && typeof key === "object") {
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, key);
        } else {
          item2 = $mapGet(b, key);
          if (typeof item2 === "undefined" && !$mapHas(b, key) || !internalDeepEqual(item1, item2, opts, channel)) {
            if (opts.strict) {
              return false;
            }
            if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {
              return false;
            }
            if (!set) {
              set = new $Set();
            }
            $setAdd(set, key);
          }
        }
      }
      if (set) {
        while ((resultB = iB.next()) && !resultB.done) {
          key = resultB.value[0];
          item2 = resultB.value[1];
          if (key && typeof key === "object") {
            if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {
              return false;
            }
          } else if (!opts.strict && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel)) && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, { strict: false }), channel)) {
            return false;
          }
        }
        return $setSize(set) === 0;
      }
      return true;
    }
    function objEquiv(a, b, opts, channel) {
      var i, key;
      if (typeof a !== typeof b) {
        return false;
      }
      if (a == null || b == null) {
        return false;
      }
      if ($objToString(a) !== $objToString(b)) {
        return false;
      }
      if (isArguments(a) !== isArguments(b)) {
        return false;
      }
      var aIsArray = isArray(a);
      var bIsArray = isArray(b);
      if (aIsArray !== bIsArray) {
        return false;
      }
      var aIsError = a instanceof Error;
      var bIsError = b instanceof Error;
      if (aIsError !== bIsError) {
        return false;
      }
      if (aIsError || bIsError) {
        if (a.name !== b.name || a.message !== b.message) {
          return false;
        }
      }
      var aIsRegex = isRegex(a);
      var bIsRegex = isRegex(b);
      if (aIsRegex !== bIsRegex) {
        return false;
      }
      if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {
        return false;
      }
      var aIsDate = isDate(a);
      var bIsDate = isDate(b);
      if (aIsDate !== bIsDate) {
        return false;
      }
      if (aIsDate || bIsDate) {
        if ($getTime(a) !== $getTime(b)) {
          return false;
        }
      }
      if (opts.strict && gPO && gPO(a) !== gPO(b)) {
        return false;
      }
      var aWhich = whichTypedArray(a);
      var bWhich = whichTypedArray(b);
      if (aWhich !== bWhich) {
        return false;
      }
      if (aWhich || bWhich) {
        if (a.length !== b.length) {
          return false;
        }
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      var aIsBuffer = isBuffer(a);
      var bIsBuffer = isBuffer(b);
      if (aIsBuffer !== bIsBuffer) {
        return false;
      }
      if (aIsBuffer || bIsBuffer) {
        if (a.length !== b.length) {
          return false;
        }
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      var aIsArrayBuffer = isArrayBuffer(a);
      var bIsArrayBuffer = isArrayBuffer(b);
      if (aIsArrayBuffer !== bIsArrayBuffer) {
        return false;
      }
      if (aIsArrayBuffer || bIsArrayBuffer) {
        if (byteLength(a) !== byteLength(b)) {
          return false;
        }
        return typeof Uint8Array === "function" && internalDeepEqual(new Uint8Array(a), new Uint8Array(b), opts, channel);
      }
      var aIsSAB = isSharedArrayBuffer(a);
      var bIsSAB = isSharedArrayBuffer(b);
      if (aIsSAB !== bIsSAB) {
        return false;
      }
      if (aIsSAB || bIsSAB) {
        if (sabByteLength(a) !== sabByteLength(b)) {
          return false;
        }
        return typeof Uint8Array === "function" && internalDeepEqual(new Uint8Array(a), new Uint8Array(b), opts, channel);
      }
      if (typeof a !== typeof b) {
        return false;
      }
      var ka = objectKeys(a);
      var kb = objectKeys(b);
      if (ka.length !== kb.length) {
        return false;
      }
      ka.sort();
      kb.sort();
      for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i]) {
          return false;
        }
      }
      for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!internalDeepEqual(a[key], b[key], opts, channel)) {
          return false;
        }
      }
      var aCollection = whichCollection(a);
      var bCollection = whichCollection(b);
      if (aCollection !== bCollection) {
        return false;
      }
      if (aCollection === "Set" || bCollection === "Set") {
        return setEquiv(a, b, opts, channel);
      }
      if (aCollection === "Map") {
        return mapEquiv(a, b, opts, channel);
      }
      return true;
    }
    module.exports = function deepEqual(a, b, opts) {
      return internalDeepEqual(a, b, opts, getSideChannel());
    };
  }
});

export {
  require_deep_equal
};
//# sourceMappingURL=chunk-CSCVDDAJ.js.map
