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

// node_modules/file-saver-es/src/FileSaver.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var _global = typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : void 0;
function bom(blob, opts) {
  if (typeof opts === "undefined") opts = { autoBom: false };
  else if (typeof opts !== "object") {
    console.warn("Deprecated: Expected third argument to be a object");
    opts = { autoBom: !opts };
  }
  if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
    return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
  }
  return blob;
}
function download(url, name, opts) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.onload = function() {
    saveAs(xhr.response, name, opts);
  };
  xhr.onerror = function() {
    console.error("could not download file");
  };
  xhr.send();
}
function corsEnabled(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", url, false);
  try {
    xhr.send();
  } catch (e) {
  }
  return xhr.status >= 200 && xhr.status <= 299;
}
function click(node) {
  try {
    node.dispatchEvent(new MouseEvent("click"));
  } catch (e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      80,
      20,
      false,
      false,
      false,
      false,
      0,
      null
    );
    node.dispatchEvent(evt);
  }
}
var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
var saveAs = _global.saveAs || // probably in some web worker
(typeof window !== "object" || window !== _global ? function saveAs2() {
} : "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? function saveAs3(blob, name, opts) {
  var URL = _global.URL || _global.webkitURL;
  var a = document.createElement("a");
  name = name || blob.name || "download";
  a.download = name;
  a.rel = "noopener";
  if (typeof blob === "string") {
    a.href = blob;
    if (a.origin !== location.origin) {
      corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = "_blank");
    } else {
      click(a);
    }
  } else {
    a.href = URL.createObjectURL(blob);
    setTimeout(function() {
      URL.revokeObjectURL(a.href);
    }, 4e4);
    setTimeout(function() {
      click(a);
    }, 0);
  }
} : "msSaveOrOpenBlob" in navigator ? function saveAs4(blob, name, opts) {
  name = name || blob.name || "download";
  if (typeof blob === "string") {
    if (corsEnabled(blob)) {
      download(blob, name, opts);
    } else {
      var a = document.createElement("a");
      a.href = blob;
      a.target = "_blank";
      setTimeout(function() {
        click(a);
      });
    }
  } else {
    navigator.msSaveOrOpenBlob(bom(blob, opts), name);
  }
} : function saveAs5(blob, name, opts, popup) {
  popup = popup || open("", "_blank");
  if (popup) {
    popup.document.title = popup.document.body.innerText = "downloading...";
  }
  if (typeof blob === "string") return download(blob, name, opts);
  var force = blob.type === "application/octet-stream";
  var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;
  var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
    var reader = new FileReader();
    reader.onloadend = function() {
      var url2 = reader.result;
      url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
      if (popup) popup.location.href = url2;
      else location = url2;
      popup = null;
    };
    reader.readAsDataURL(blob);
  } else {
    var URL = _global.URL || _global.webkitURL;
    var url = URL.createObjectURL(blob);
    if (popup) popup.location = url;
    else location.href = url;
    popup = null;
    setTimeout(function() {
      URL.revokeObjectURL(url);
    }, 4e4);
  }
});
_global.saveAs = saveAs.saveAs = saveAs;

export {
  saveAs
};
//# sourceMappingURL=chunk-6LY73PXU.js.map
