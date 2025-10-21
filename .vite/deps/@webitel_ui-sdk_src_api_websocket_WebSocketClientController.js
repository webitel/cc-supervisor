import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  i18n_default
} from "./chunk-QLPG6TDQ.js";
import "./chunk-6JRCTP2G.js";
import "./chunk-QVMLP2C6.js";
import "./chunk-Y7OW5ORD.js";
import "./chunk-K5VDDDOW.js";
import "./chunk-RK4D342A.js";
import "./chunk-4BU36TI7.js";
import "./chunk-6Q3UUCCZ.js";
import "./chunk-6LY73PXU.js";
import "./chunk-TBMZGSYP.js";
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
import "./chunk-RGTN4WD6.js";
import "./chunk-LXFDMCD7.js";
import "./chunk-UGIS5QVQ.js";
import "./chunk-JBUOYAAV.js";
import "./chunk-GIUIDLUB.js";
import "./chunk-ZIQ6ZSOK.js";
import "./chunk-ZJPGTC72.js";
import {
  shallowReactive
} from "./chunk-QI253I2C.js";
import {
  Client
} from "./chunk-555CXXDB.js";
import "./chunk-CIP22KGZ.js";
import "./chunk-ESEZ4R5I.js";
import "./chunk-ECRK6EO5.js";
import {
  __publicField,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/api/websocket/WebSocketClientController.ts
var import_dist10 = __toESM(require_dist());
var import_dist11 = __toESM(require_dist2());
var import_dist12 = __toESM(require_dist3());

// node_modules/@webitel/ui-sdk/src/api/websocket/config.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var getConfig = () => {
  let cliConfig = {};
  try {
    const CONFIG = JSON.parse(localStorage.getItem("CONFIG"));
    cliConfig = CONFIG.CLI || {};
  } catch {
  }
  return cliConfig;
};
var { hostname, protocol } = window.location;
var origin = `${protocol}//${hostname}`.replace(/^http/, "ws");
var fallbackSocketPath = import.meta.env.VITE_WEB_SOCKET_URL || "wss://test.webitel.me/ws";
var endpoint = import.meta.env.MODE === "production" ? `${origin}/ws` : fallbackSocketPath;

// node_modules/@webitel/ui-sdk/src/api/websocket/enums/WebSocketClientEvent.ts
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
var WebSocketClientEvent = {
  AFTER_AUTH: "afterAuth",
  ERROR: "error"
};

// node_modules/@webitel/ui-sdk/src/api/websocket/websocketErrorEventHandler.ts
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);
var websocketErrorEventHandler = (error) => {
  var _a;
  const errLocale = `error.websocket.${(_a = error.id) == null ? void 0 : _a.replaceAll(".", "_")}`;
  const message = {
    type: "error",
    text: i18n_default.global.te(errLocale) ? i18n_default.global.t(errLocale) : error
  };
  eventBus_default.$emit("notification", message);
  return error;
};
var websocketErrorEventHandler_default = websocketErrorEventHandler;

// node_modules/@webitel/ui-sdk/src/api/websocket/WebSocketClientController.ts
var WebSocketClientController = class {
  constructor() {
    __publicField(this, "cli", null);
    __publicField(this, "Event", WebSocketClientEvent);
    __publicField(this, "_config", getConfig());
    __publicField(this, "_on", {
      [WebSocketClientEvent.ERROR]: [websocketErrorEventHandler_default],
      [WebSocketClientEvent.AFTER_AUTH]: []
    });
    __publicField(this, "_createCliInstance", async () => {
      const token = localStorage.getItem("access-token");
      const configCli = getConfig();
      const config = {
        endpoint,
        token,
        registerWebDevice: configCli.registerWebDevice,
        debug: configCli.debug
      };
      const cli = shallowReactive(new Client(config));
      this._on[WebSocketClientEvent.AFTER_AUTH].forEach((callback) => callback());
      this._on[WebSocketClientEvent.ERROR].forEach(
        (callback) => cli.on("error", callback)
      );
      cli.on(
        `show_message`,
        (e) => eventBus_default.$emit("notification", {
          type: e.type,
          text: e.message,
          timeout: e.timeout
        })
      );
      await cli.connect();
      await cli.auth();
      window.cli = cli;
      return cli;
    });
  }
  getCliInstance(createCliInstance = this._createCliInstance) {
    if (!this.cli) this.cli = createCliInstance();
    return this.cli;
  }
  async destroyCliInstance() {
    if (!window.cli) return;
    await window.cli.destroy();
    this.cli = null;
    window.cli = null;
  }
  addEventListener(event, callback) {
    if (Array.isArray(callback))
      this._on[event] = this._on[event].concat(callback);
    else this._on[event].push(callback);
  }
};
var webSocketClientController = new WebSocketClientController();
var WebSocketClientController_default = webSocketClientController;
export {
  WebSocketClientController_default as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_api_websocket_WebSocketClientController.js.map
