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

// node_modules/@webitel/ui-sdk/src/enums/index.ts
var import_dist58 = __toESM(require_dist());
var import_dist59 = __toESM(require_dist2());
var import_dist60 = __toESM(require_dist3());

// node_modules/@webitel/ui-sdk/src/enums/AbstractUserStatus/AbstractUserStatus.enum.js
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var AbstractUserStatus = Object.freeze({
  ACTIVE: "active",
  DND: "dnd",
  BUSY: "busy",
  OFFLINE: "offline",
  ONLINE: "online",
  PAUSE: "pause"
});
var AbstractUserStatus_enum_default = AbstractUserStatus;

// node_modules/@webitel/ui-sdk/src/enums/AgentStatus/AgentStatus.enum.js
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
var AgentStatus_enum_default = Object.freeze({
  ONLINE: "online",
  PAUSE: "pause",
  OFFLINE: "offline",
  BREAK_OUT: "break_out"
});

// node_modules/@webitel/ui-sdk/src/enums/ButtonColor/ButtonColor.js
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);
var ButtonColor = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  ERROR: "error",
  TRANSFER: "transfer",
  JOB: "job",
  INFO: "info"
};

// node_modules/@webitel/ui-sdk/src/enums/ButtonVariant/ButtonVariant.ts
var import_dist10 = __toESM(require_dist(), 1);
var import_dist11 = __toESM(require_dist2(), 1);
var import_dist12 = __toESM(require_dist3(), 1);
var ButtonVariant = {
  ACTIVE: "active",
  OUTLINED: "outlined",
  TEXT: "text"
};

// node_modules/@webitel/ui-sdk/src/enums/ChatGatewayProvider/ChatGatewayProvider.enum.js
var import_dist13 = __toESM(require_dist(), 1);
var import_dist14 = __toESM(require_dist2(), 1);
var import_dist15 = __toESM(require_dist3(), 1);
var ChatGatewayProvider = Object.freeze({
  TELEGRAM_BOT: "telegram",
  TELEGRAM_APP: "gotd",
  MESSENGER: "messenger",
  VIBER: "viber",
  WEBCHAT: "webchat",
  INFOBIP: "infobip_whatsapp",
  CUSTOM: "custom",
  PORTAL: "portal"
});
var ChatGatewayProvider_enum_default = ChatGatewayProvider;

// node_modules/@webitel/ui-sdk/src/enums/ChipColor/ChipColor.ts
var import_dist16 = __toESM(require_dist(), 1);
var import_dist17 = __toESM(require_dist2(), 1);
var import_dist18 = __toESM(require_dist3(), 1);
var ChipColor = {
  MAIN: "main",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  TRANSFER: "transfer"
};

// node_modules/@webitel/ui-sdk/src/enums/ComponentSize/ComponentSize.js
var import_dist19 = __toESM(require_dist(), 1);
var import_dist20 = __toESM(require_dist2(), 1);
var import_dist21 = __toESM(require_dist3(), 1);
var ComponentSize = {
  XXXS: "3xs",
  XXS: "2xs",
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  XXL: "2xl",
  XXXL: "3xl"
};

// node_modules/@webitel/ui-sdk/src/enums/CrudAction/CrudAction.js
var import_dist22 = __toESM(require_dist(), 1);
var import_dist23 = __toESM(require_dist2(), 1);
var import_dist24 = __toESM(require_dist3(), 1);
var CrudAction = {
  Read: "read",
  Create: "create",
  Update: "update",
  Delete: "delete"
};

// node_modules/@webitel/ui-sdk/src/enums/EmptyCause/EmptyCause.ts
var import_dist25 = __toESM(require_dist(), 1);
var import_dist26 = __toESM(require_dist2(), 1);
var import_dist27 = __toESM(require_dist3(), 1);
var EmptyCause = Object.freeze({
  ERROR: "error",
  FILTERS: "filters",
  EMPTY: "empty"
});

// node_modules/@webitel/ui-sdk/src/enums/IconColor/IconColor.ts
var import_dist28 = __toESM(require_dist(), 1);
var import_dist29 = __toESM(require_dist2(), 1);
var import_dist30 = __toESM(require_dist3(), 1);
var IconColor = {
  DEFAULT: "default",
  ACTIVE: "active",
  DISABLED: "disabled",
  PRIMARY: "primary",
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  ON_DARK: "on-dark",
  ON_LIGHT: "on-light",
  ON_PRIMARY: "on-primary",
  INFO: "info",
  CHAT: "chat",
  TRANSFER: "transfer",
  JOB: "job"
};

// node_modules/@webitel/ui-sdk/src/enums/ProcessingTableColumnType/ProcessingTableColumnType.ts
var import_dist31 = __toESM(require_dist(), 1);
var import_dist32 = __toESM(require_dist2(), 1);
var import_dist33 = __toESM(require_dist3(), 1);
var ProcessingTableColumnType = {
  TEXT: "text",
  NUMBER: "number",
  BOOL: "bool",
  DATETIME: "datetime",
  LINK: "link"
};

// node_modules/@webitel/ui-sdk/src/enums/QueueType/QueueType.enum.js
var import_dist34 = __toESM(require_dist(), 1);
var import_dist35 = __toESM(require_dist2(), 1);
var import_dist36 = __toESM(require_dist3(), 1);
var QueueType = Object.freeze({
  OFFLINE_QUEUE: 0,
  INBOUND_QUEUE: 1,
  OUTBOUND_IVR_QUEUE: 2,
  PREVIEW_DIALER: 3,
  PROGRESSIVE_DIALER: 4,
  PREDICTIVE_DIALER: 5,
  CHAT_INBOUND_QUEUE: 6,
  INBOUND_JOB_QUEUE: 7,
  OUTBOUND_JOB_QUEUE: 8
});
var QueueType_enum_default = QueueType;

// node_modules/@webitel/ui-sdk/src/enums/RelativeDatetimeValue/RelativeDatetimeValue.ts
var import_dist37 = __toESM(require_dist(), 1);
var import_dist38 = __toESM(require_dist2(), 1);
var import_dist39 = __toESM(require_dist3(), 1);
var valuePrefix = "rdt";
var RelativeDatetimeValue = {
  Today: `${valuePrefix}_today`,
  ThisWeek: `${valuePrefix}_this_week`,
  ThisMonth: `${valuePrefix}_this_month`,
  Custom: `${valuePrefix}_custom`
};

// node_modules/@webitel/ui-sdk/src/enums/TypesExportedSettings/TypesExportedSettings.enum.js
var import_dist40 = __toESM(require_dist(), 1);
var import_dist41 = __toESM(require_dist2(), 1);
var import_dist42 = __toESM(require_dist3(), 1);
var TypesExportedSettings_enum_default = Object.freeze({
  CSV: "csv",
  XLS: "xls"
});

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/AdminSections.ts
var import_dist43 = __toESM(require_dist(), 1);
var import_dist44 = __toESM(require_dist2(), 1);
var import_dist45 = __toESM(require_dist3(), 1);
var AdminSections = {
  Agents: "agents",
  Blacklist: "blacklist",
  Buckets: "buckets",
  Calendars: "calendars",
  Changelogs: "changelogs",
  ChatGateways: "chat-gateways",
  Chatplan: "chatplan",
  CognitiveProfiles: "cognitive-profiles",
  Communications: "communications",
  Configuration: "configuration",
  Dialplan: "dialplan",
  Devices: "devices",
  EmailProfiles: "email-profiles",
  Flow: "flow",
  Gateways: "gateways",
  GlobalVariables: "global-variables",
  ImportCsv: "import-csv",
  License: "license",
  Media: "media",
  Members: "members",
  Objects: "objects",
  PauseCause: "pause-cause",
  PauseTemplates: "pause-templates",
  Queues: "queues",
  Regions: "regions",
  ResourceGroups: "resource-groups",
  Resources: "resources",
  Roles: "roles",
  ShiftTemplates: "shift-templates",
  SingleSignOn: "single-sign-on",
  Skills: "skills",
  Storage: "storage",
  StoragePolicies: "storage-policies",
  Teams: "teams",
  Triggers: "triggers",
  Users: "users",
  WorkingConditions: "working-conditions",
  QuickReplies: "quick-replies"
};

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/AuditorSections.ts
var import_dist46 = __toESM(require_dist(), 1);
var import_dist47 = __toESM(require_dist2(), 1);
var import_dist48 = __toESM(require_dist3(), 1);
var AuditorSections = {
  Scorecards: "scorecards"
};

// node_modules/@webitel/ui-sdk/src/enums/WebitelApplications/CrmSections.ts
var import_dist49 = __toESM(require_dist(), 1);
var import_dist50 = __toESM(require_dist2(), 1);
var import_dist51 = __toESM(require_dist3(), 1);
var CrmSections = {
  Contacts: "contacts",
  Cases: "cases",
  // CONFIGURATION - LOOKUPS
  Slas: "slas",
  ServiceCatalogs: "service-catalogs",
  Priorities: "priorities",
  Statuses: "statuses",
  Sources: "sources",
  CloseReasonGroups: "close-reason-groups",
  ContactGroups: "contact-groups",
  CaseSources: "case-sources",
  // CUSTOMIZATION
  CasesExtensions: "ext-cases",
  ContactsExtensions: "ext-contacts",
  CustomLookups: "custom-lookups"
};

// node_modules/@webitel/ui-sdk/src/enums/WtObject/WtObject.ts
var import_dist52 = __toESM(require_dist(), 1);
var import_dist53 = __toESM(require_dist2(), 1);
var import_dist54 = __toESM(require_dist3(), 1);
var WtObject = {
  Agent: "agent",
  Queue: "queue",
  Contact: "contact",
  Region: "region",
  User: "user",
  Resource: "resource",
  Device: "device",
  License: "license",
  Flow: "flow",
  Dialplan: "dialplan",
  Gateway: "gateway",
  Chatplan: "chatplan",
  ChatGateway: "chatGateway",
  Blacklist: "blacklist",
  Calendar: "calendar",
  Communication: "communication",
  PauseCause: "pauseCause",
  Media: "media",
  ShiftTemplate: "shiftTemplate",
  PauseTemplate: "pauseTemplate",
  WorkingCondition: "workingCondition",
  Skill: "skill",
  Bucket: "bucket",
  Member: "member",
  ResourceGroup: "resourceGroup",
  Team: "team",
  Storage: "storage",
  CognitiveProfile: "cognitiveProfile",
  EmailProfile: "emailProfile",
  SingleSignOn: "singleSignOn",
  ImportCsv: "importCsv",
  Trigger: "trigger",
  Role: "role",
  Object: "object",
  ChangeLog: "changelog",
  Configuration: "configuration",
  GlobalVariable: "globalVariable",
  ActiveCall: "activeCall",
  Scorecard: "scorecard",
  Logger: "logger",
  Call: "call",
  RecordFile: "recordFile",
  ContactGroup: "contactGroup",
  ChatBot: "chatBot",
  Case: "case",
  CaseComment: "caseComment",
  Slas: "slas",
  ServiceCatalog: "serviceCatalog",
  CaseSource: "caseSource",
  CloseReasonGroup: "closeReasonGroup",
  Priorities: "priorities",
  Status: "status",
  Source: "source",
  CustomLookup: "customLookup",
  AuditForm: "auditForm",
  AuditRating: "auditRating",
  QuickReply: "quickReply"
};

// node_modules/@webitel/ui-sdk/src/enums/WtTypeExtensionFieldKind/WtTypeExtensionFieldKind.ts
var import_dist55 = __toESM(require_dist(), 1);
var import_dist56 = __toESM(require_dist2(), 1);
var import_dist57 = __toESM(require_dist3(), 1);
var WtTypeExtensionFieldKind = {
  Text: "string",
  Number: "int32",
  Select: "lookup",
  Multiselect: "list",
  Calendar: "datetime",
  Boolean: "bool"
};

export {
  AbstractUserStatus_enum_default,
  AgentStatus_enum_default,
  ButtonColor,
  ButtonVariant,
  ChatGatewayProvider_enum_default,
  ChipColor,
  ComponentSize,
  CrudAction,
  EmptyCause,
  IconColor,
  ProcessingTableColumnType,
  QueueType_enum_default,
  RelativeDatetimeValue,
  TypesExportedSettings_enum_default,
  AdminSections,
  AuditorSections,
  CrmSections,
  WtObject,
  WtTypeExtensionFieldKind
};
//# sourceMappingURL=chunk-663REQXU.js.map
