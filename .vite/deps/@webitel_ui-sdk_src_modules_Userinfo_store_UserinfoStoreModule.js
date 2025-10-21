import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  BaseStoreModule
} from "./chunk-UATH6WJF.js";
import {
  ApplicationsAccess
} from "./chunk-JWKC5HQ2.js";
import "./chunk-OQ2VA3QI.js";
import "./chunk-663REQXU.js";
import "./chunk-KKIOOXCK.js";
import "./chunk-3LV7TFCB.js";
import "./chunk-D3J766ED.js";
import "./chunk-LA2MKZ3M.js";
import {
  applyTransform,
  merge_transformer_default,
  notify_transformer_default,
  snakeToCamel_transformer_default
} from "./chunk-DQN6GXDF.js";
import "./chunk-6FPSQGJR.js";
import "./chunk-4QMDQNJR.js";
import "./chunk-CKQ545WP.js";
import "./chunk-5BXUT56C.js";
import "./chunk-4OSCJW2H.js";
import "./chunk-HTF5FYCO.js";
import "./chunk-2OJGSHGR.js";
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
  getDefaultInstance
} from "./chunk-MT3OVQOT.js";
import "./chunk-YZMCRNG2.js";
import "./chunk-W24ITOCJ.js";
import "./chunk-555CXXDB.js";
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

// node_modules/@webitel/ui-sdk/src/modules/Userinfo/store/UserinfoStoreModule.js
var import_dist10 = __toESM(require_dist());
var import_dist11 = __toESM(require_dist2());
var import_dist12 = __toESM(require_dist3());

// node_modules/@webitel/ui-sdk/src/modules/Userinfo/api/userinfo.js
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/modules/Userinfo/v2/api/UserinfoAPI.ts
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var instance = getDefaultInstance();
var setInstance = (newInstance) => {
  instance = newInstance;
};
var getSession = async () => {
  const url = "/userinfo";
  try {
    const defaultObject = () => ({
      scope: [],
      permissions: []
    });
    const response = await instance.get(url);
    return applyTransform(response.data, [
      merge_transformer_default(defaultObject()),
      snakeToCamel_transformer_default()
    ]);
  } catch (err) {
    throw applyTransform(err, [notify_transformer_default]);
  }
};
var getUiVisibilityAccess = async () => {
  const url = "role/metadata/access";
  try {
    const response = await instance.get(url);
    return applyTransform(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw applyTransform(err, [notify_transformer_default]);
  }
};
var logout = async () => {
  const url = "/logout";
  try {
    return await instance.post(url, {});
  } catch (err) {
    throw applyTransform(err, [notify_transformer_default]);
  }
};

// node_modules/@webitel/ui-sdk/src/modules/Userinfo/api/userinfo.js
var userinfo = (instance2) => {
  if (instance2) {
    setInstance(instance2);
  }
  return {
    getSession,
    logout,
    getUiVisibilityAccess
  };
};
var userinfo_default = userinfo;

// node_modules/@webitel/ui-sdk/src/modules/Userinfo/enums/Permissions.enum.js
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);
var Permissions_enum_default = Object.freeze({
  CREATE: "add",
  READ: "read",
  EDIT: "write",
  DELETE: "delete",
  PLAYBACK_RECORD_FILE: "playbackRecordFile"
});

// node_modules/@webitel/ui-sdk/src/modules/Userinfo/store/UserinfoStoreModule.js
var userinfo2 = null;
var defaultState = () => ({
  isLoading: true,
  domainId: 0,
  name: "",
  username: "",
  account: "",
  preferredUsername: "",
  userId: 0,
  scope: {},
  permissions: {},
  roles: [],
  license: [],
  access: {},
  language: localStorage.getItem("lang")
});
var UserinfoStoreModule = class extends BaseStoreModule {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      ...defaultState()
    });
    __publicField(this, "getters", {
      THIS_APP: (state) => state.thisApp,
      // if no access[app] => accessed by default
      CHECK_APP_ACCESS: (state) => (app) => {
        var _a;
        return !state.access[app] || ((_a = state.access[app]) == null ? void 0 : _a._enabled);
      },
      CHECK_OBJECT_ACCESS: (state, getters) => ({ name, route }) => {
        if (!state.access[getters.THIS_APP] || !state.access[getters.THIS_APP]._enabled)
          return false;
        if (route) return getters.CHECK_OBJECT_ACCESS_BY_ROUTE(route);
        return getters.CHECK_OBJECT_ACCESS_BY_NAME(name);
      },
      CHECK_OBJECT_ACCESS_BY_NAME: (state, getters) => (name) => {
        var _a;
        return (_a = state.access[getters.THIS_APP][name]) == null ? void 0 : _a._enabled;
      },
      CHECK_OBJECT_ACCESS_BY_ROUTE: (state, getters) => (route) => {
        var _a;
        const accessKey = Object.keys(state.access[getters.THIS_APP]).find(
          (object) => route.name.includes(object)
        );
        return (_a = state.access[getters.THIS_APP][accessKey]) == null ? void 0 : _a._enabled;
      },
      GET_OBJECT_SCOPE: (state, getters) => ({ name, route }) => {
        if (route) return getters.GET_OBJECT_SCOPE_BY_ROUTE(route);
        return getters.GET_OBJECT_SCOPE_BY_NAME(name);
      },
      GET_OBJECT_SCOPE_BY_NAME: (state) => (name) => Object.values(state.scope).find((object) => name === object.name),
      GET_OBJECT_SCOPE_BY_ROUTE: (state) => (route) => Object.values(state.scope).find(
        (object) => route.name.includes(object.route)
      ),
      HAS_READ_ACCESS: (state, getters) => (checkedObject) => {
        var _a;
        if (!getters.CHECK_OBJECT_ACCESS(checkedObject)) return false;
        if (state.permissions[Permissions_enum_default.READ]) return true;
        const objectScope = getters.GET_OBJECT_SCOPE(checkedObject);
        return (_a = objectScope == null ? void 0 : objectScope.access) == null ? void 0 : _a.includes("r");
      },
      HAS_CREATE_ACCESS: (state, getters) => (checkedObject) => {
        var _a;
        if (state.permissions[Permissions_enum_default.CREATE]) return true;
        const objectScope = getters.GET_OBJECT_SCOPE(checkedObject);
        return (_a = objectScope == null ? void 0 : objectScope.access) == null ? void 0 : _a.includes("x");
      },
      HAS_EDIT_ACCESS: (state, getters) => (checkedObject) => {
        var _a;
        if (state.permissions[Permissions_enum_default.EDIT]) return true;
        const objectScope = getters.GET_OBJECT_SCOPE(checkedObject);
        return (_a = objectScope == null ? void 0 : objectScope.access) == null ? void 0 : _a.includes("w");
      },
      HAS_DELETE_ACCESS: (state, getters) => (checkedObject) => {
        var _a;
        if (state.permissions[Permissions_enum_default.DELETE]) return true;
        const objectScope = getters.GET_OBJECT_SCOPE(checkedObject);
        return (_a = objectScope == null ? void 0 : objectScope.access) == null ? void 0 : _a.includes("d");
      }
    });
    __publicField(this, "actions", {
      BEFORE_OPEN_SESSION_HOOK: () => {
      },
      AFTER_OPEN_SESSION_HOOK: () => {
      },
      CONVERT_USER_SCOPE: (context, scope) => scope,
      CONVERT_USER_PERMISSIONS: (context, initialPermissions) => {
        let permissions = {};
        if (!initialPermissions) return permissions;
        permissions = initialPermissions.reduce(
          (permissions2, currentPermission) => ({
            ...permissions2,
            [currentPermission.id]: currentPermission
          }),
          {}
        );
        return permissions;
      },
      OPEN_SESSION: async (context, { instance: instance2 }) => {
        userinfo2 = userinfo_default(instance2);
        await context.dispatch("BEFORE_OPEN_SESSION_HOOK");
        const HOUR_LENGTH = 60 * 60 * 1e3;
        const session = await userinfo2.getSession();
        if (session.expiresAt - Date.now() < HOUR_LENGTH) {
          await context.dispatch("LOGOUT");
          throw new Error(`Session expires soon ${session.expiresAt}`);
        }
        await context.dispatch("SET_SESSION", session);
        const access = await userinfo2.getUiVisibilityAccess();
        await context.dispatch(
          "SET_APPLICATIONS_ACCESS",
          new ApplicationsAccess({ access }).getAccess()
        );
        await context.dispatch("AFTER_OPEN_SESSION_HOOK");
      },
      SET_SESSION: async (context, _session) => {
        const defaultSession = {
          domainId: 0,
          username: "",
          userId: 0,
          scope: [],
          roles: [],
          license: []
        };
        try {
          await context.dispatch("RESET_STATE");
          const session = { ...defaultSession, ..._session };
          const scope = await context.dispatch(
            "CONVERT_USER_SCOPE",
            session.scope
          );
          const permissions = await context.dispatch(
            "CONVERT_USER_PERMISSIONS",
            session.permissions
          );
          context.commit("SET_SESSION", { ...session, scope, permissions });
          await context.dispatch("SET_LOADING", false);
        } catch (err) {
          throw err;
        }
      },
      LOGOUT: async (context, { authUrl = import.meta.env.VITE_AUTH_URL } = {}) => {
        if (!authUrl) throw new Error("No authUrl for LOGOUT provided");
        await userinfo2.logout();
        window.location.href = authUrl;
      },
      SET_APPLICATIONS_ACCESS: (context, access) => context.commit("SET_APPLICATIONS_ACCESS", access),
      SET_LOADING: (context, isLoading) => {
        context.commit("SET_LOADING", isLoading);
      },
      RESET_STATE: (context) => {
        context.commit("RESET_STATE");
      }
    });
    __publicField(this, "mutations", {
      SET_SESSION: (state, session) => {
        Object.assign(state, session);
      },
      SET_APPLICATIONS_ACCESS: (state, access) => {
        state.access = access;
      },
      SET_LOADING: (state, isLoading) => {
        state.isLoading = isLoading;
      },
      RESET_STATE: (state) => {
        Object.assign(state, defaultState());
      }
    });
  }
};
export {
  UserinfoStoreModule as default
};
//# sourceMappingURL=@webitel_ui-sdk_src_modules_Userinfo_store_UserinfoStoreModule.js.map
