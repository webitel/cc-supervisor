import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  SupervisorSections_enum_default
} from "./chunk-OQ2VA3QI.js";
import {
  AdminSections,
  AuditorSections,
  CrmSections
} from "./chunk-663REQXU.js";
import {
  WebitelApplications_enum_default
} from "./chunk-KKIOOXCK.js";
import {
  SupervisorSections
} from "./chunk-D3J766ED.js";
import {
  require_deep_copy
} from "./chunk-4QMDQNJR.js";
import {
  upperCase_default
} from "./chunk-LXFDMCD7.js";
import {
  require_cjs
} from "./chunk-ZJPGTC72.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/modules/Userinfo/classes/ApplicationsAccess.js
var import_dist10 = __toESM(require_dist(), 1);
var import_dist11 = __toESM(require_dist2(), 1);
var import_dist12 = __toESM(require_dist3(), 1);
var import_deep_copy = __toESM(require_deep_copy(), 1);
var import_deepmerge = __toESM(require_cjs(), 1);

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/AdminSections.enum.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var AdminSections_enum_default = Object.fromEntries(
  Object.entries(AdminSections).map(([key, value]) => [
    upperCase_default(key).replaceAll(" ", "_"),
    value
  ])
);

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/AuditorSections.enum.js
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
var AuditorSections_enum_default = Object.fromEntries(
  Object.entries(AuditorSections).map(([key, value]) => [
    upperCase_default(key).replaceAll(" ", "_"),
    value
  ])
);

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/CrmSections.enum.js
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);
var CrmSections_enum_default = Object.fromEntries(
  Object.entries(CrmSections).map(([key, value]) => [
    upperCase_default(key).replaceAll(" ", "_"),
    value
  ])
);

// node_modules/@webitel/ui-sdk/src/modules/Userinfo/classes/ApplicationsAccess.js
var applicationsAccess = (value = true) => ({
  [WebitelApplications_enum_default.AGENT]: {
    _enabled: value,
    _locale: `WebitelApplications.${WebitelApplications_enum_default.AGENT}.name`
  },
  [WebitelApplications_enum_default.HISTORY]: {
    _enabled: value,
    _locale: `WebitelApplications.${WebitelApplications_enum_default.HISTORY}.name`
  },
  [WebitelApplications_enum_default.ANALYTICS]: {
    _enabled: value,
    _locale: `WebitelApplications.${WebitelApplications_enum_default.ANALYTICS}.name`
  },
  [WebitelApplications_enum_default.SUPERVISOR]: {
    _enabled: value,
    _locale: `WebitelApplications.${WebitelApplications_enum_default.SUPERVISOR}.name`,
    [SupervisorSections_enum_default.QUEUES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.SUPERVISOR}.sections.${SupervisorSections.Queues}`
    },
    [SupervisorSections_enum_default.AGENTS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.SUPERVISOR}.sections.${SupervisorSections.Agents}`
    },
    [SupervisorSections_enum_default.ACTIVE_CALLS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.SUPERVISOR}.sections.${SupervisorSections.ActiveCalls}`
    }
  },
  [WebitelApplications_enum_default.ADMIN]: {
    _enabled: value,
    _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.name`,
    [AdminSections_enum_default.LICENSE]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.License}`
    },
    [AdminSections_enum_default.USERS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Users}`
    },
    [AdminSections_enum_default.DEVICES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Devices}`
    },
    [AdminSections_enum_default.FLOW]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Flow}`
    },
    [AdminSections_enum_default.DIALPLAN]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Dialplan}`
    },
    [AdminSections_enum_default.GATEWAYS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Gateways}`
    },
    [AdminSections_enum_default.CHATPLAN]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Chatplan}`
    },
    [AdminSections_enum_default.CHAT_GATEWAYS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.ChatGateways}`
    },
    [AdminSections_enum_default.SKILLS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Skills}`
    },
    [AdminSections_enum_default.BUCKETS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Buckets}`
    },
    [AdminSections_enum_default.BLACKLIST]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Blacklist}`
    },
    [AdminSections_enum_default.REGIONS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Regions}`
    },
    [AdminSections_enum_default.CALENDARS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Calendars}`
    },
    [AdminSections_enum_default.COMMUNICATIONS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Communications}`
    },
    [AdminSections_enum_default.PAUSE_CAUSE]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.PauseCause}`
    },
    [AdminSections_enum_default.MEDIA]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Media}`
    },
    [AdminSections_enum_default.SHIFT_TEMPLATES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.ShiftTemplates}`
    },
    [AdminSections_enum_default.PAUSE_TEMPLATES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.PauseTemplates}`
    },
    [AdminSections_enum_default.WORKING_CONDITIONS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.WorkingConditions}`
    },
    [AdminSections_enum_default.QUICK_REPLIES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.QuickReplies}`
    },
    [AdminSections_enum_default.AGENTS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Agents}`
    },
    [AdminSections_enum_default.TEAMS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Teams}`
    },
    [AdminSections_enum_default.RESOURCES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Resources}`
    },
    [AdminSections_enum_default.RESOURCE_GROUPS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.ResourceGroups}`
    },
    [AdminSections_enum_default.QUEUES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Queues}`
    },
    [AdminSections_enum_default.STORAGE]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Storage}`
    },
    [AdminSections_enum_default.STORAGE_POLICIES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.StoragePolicies}`
    },
    [AdminSections_enum_default.COGNITIVE_PROFILES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.CognitiveProfiles}`
    },
    [AdminSections_enum_default.EMAIL_PROFILES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.EmailProfiles}`
    },
    [AdminSections_enum_default.SINGLE_SIGN_ON]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.SingleSignOn}`
    },
    [AdminSections_enum_default.IMPORT_CSV]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.ImportCsv}`
    },
    [AdminSections_enum_default.TRIGGERS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Triggers}`
    },
    [AdminSections_enum_default.ROLES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Roles}`
    },
    [AdminSections_enum_default.OBJECTS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Objects}`
    },
    [AdminSections_enum_default.CHANGELOGS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Changelogs}`
    },
    [AdminSections_enum_default.CONFIGURATION]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.Configuration}`
    },
    [AdminSections_enum_default.GLOBAL_VARIABLES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.ADMIN}.sections.${AdminSections.GlobalVariables}`
    }
  },
  [WebitelApplications_enum_default.AUDIT]: {
    _enabled: value,
    _locale: `WebitelApplications.${WebitelApplications_enum_default.AUDIT}.name`,
    [AuditorSections_enum_default.SCORECARDS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.AUDIT}.sections.${AuditorSections.Scorecards}`
    }
  },
  [WebitelApplications_enum_default.CRM]: {
    _enabled: value,
    _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.name`,
    [CrmSections_enum_default.CONTACTS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.Contacts}`
    },
    [CrmSections_enum_default.CASES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.Cases}`
    },
    [CrmSections_enum_default.SLAS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.Slas}`
    },
    [CrmSections_enum_default.SOURCES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.Sources}`
    },
    [CrmSections_enum_default.SERVICE_CATALOGS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.ServiceCatalogs}`
    },
    [CrmSections_enum_default.CLOSE_REASON_GROUPS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.CloseReasonGroups}`
    },
    [CrmSections_enum_default.CONTACT_GROUPS]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.ContactGroups}`
    },
    [CrmSections_enum_default.PRIORITIES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.Priorities}`
    },
    [CrmSections_enum_default.STATUSES]: {
      _enabled: value,
      _locale: `WebitelApplications.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.Statuses}`
    },
    [CrmSections.CasesExtensions]: {
      _enabled: value,
      _locale: `WebitelApplications.overrideApplicationsAccess.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.CasesExtensions}`
    },
    [CrmSections.ContactsExtensions]: {
      _enabled: value,
      _locale: `WebitelApplications.overrideApplicationsAccess.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.ContactsExtensions}`
    },
    [CrmSections.CustomLookups]: {
      _enabled: value,
      _locale: `WebitelApplications.overrideApplicationsAccess.${WebitelApplications_enum_default.CRM}.sections.${CrmSections.CustomLookups}`
    }
  }
});
var ApplicationsAccess = class _ApplicationsAccess {
  // value param could be passed to set same value for all options
  constructor({ access, value } = { value: true }) {
    this.access = access ? _ApplicationsAccess.restore(access) : applicationsAccess(value);
  }
  // minify schema for API sending
  static minify(access) {
    const rmEmptyKeys = (obj) => {
      Object.keys(obj).forEach((key) => {
        if (!obj[key] || key === "_locale") delete obj[key];
        if (typeof obj[key] === "object") {
          rmEmptyKeys(obj[key]);
          if (!Object.keys(obj[key]).length) delete obj[key];
        }
      });
      return obj;
    };
    return rmEmptyKeys((0, import_deep_copy.default)(access));
  }
  // restore minified schema from API response
  static restore(access) {
    return (0, import_deepmerge.default)(applicationsAccess(false), access);
  }
  getAccess() {
    return this.access;
  }
};

export {
  ApplicationsAccess
};
//# sourceMappingURL=chunk-JWKC5HQ2.js.map
