import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  ApplicationsAccess
} from "./chunk-JWKC5HQ2.js";
import {
  getDefaultGetListResponse_default,
  getDefaultGetParams_default,
  getDefaultInstance_default,
  getDefaultOpenAPIConfig_default
} from "./chunk-5H3W5IDD.js";
import {
  camelToSnake_transformer_default,
  generateUrl_transformer_default,
  mergeEach_transformer_default,
  merge_transformer_default,
  notify_transformer_default,
  sanitize_transformer_default,
  snakeToCamel_transformer_default,
  starToSearch_transformer_default,
  transformers_default
} from "./chunk-SIGGZAOU.js";
import "./chunk-OQ2VA3QI.js";
import {
  Filter,
  createFiltersManager
} from "./chunk-Y2RNBSIB.js";
import {
  i18n_default
} from "./chunk-QLPG6TDQ.js";
import "./chunk-6JRCTP2G.js";
import "./chunk-QVMLP2C6.js";
import "./chunk-Y7OW5ORD.js";
import {
  convertDuration_default
} from "./chunk-K5VDDDOW.js";
import "./chunk-RK4D342A.js";
import "./chunk-4BU36TI7.js";
import {
  isEmpty_default
} from "./chunk-6Q3UUCCZ.js";
import "./chunk-6LY73PXU.js";
import "./chunk-TBMZGSYP.js";
import "./chunk-ALYEIJI5.js";
import "./chunk-SZR5SZ7W.js";
import "./chunk-663REQXU.js";
import "./chunk-KKIOOXCK.js";
import "./chunk-3LV7TFCB.js";
import "./chunk-D3J766ED.js";
import {
  createSourceBody,
  getQuickRepliesService,
  getSources,
  listSourcesQueryParams,
  updateSourceBody
} from "./chunk-LA2MKZ3M.js";
import "./chunk-DQN6GXDF.js";
import "./chunk-6FPSQGJR.js";
import {
  require_deep_copy
} from "./chunk-4QMDQNJR.js";
import "./chunk-CKQ545WP.js";
import "./chunk-5BXUT56C.js";
import "./chunk-4OSCJW2H.js";
import "./chunk-HTF5FYCO.js";
import "./chunk-2OJGSHGR.js";
import {
  getShallowFieldsToSendFromZodSchema
} from "./chunk-5SXUFGYU.js";
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
import {
  require_cjs
} from "./chunk-ZJPGTC72.js";
import "./chunk-QI253I2C.js";
import "./chunk-MT3OVQOT.js";
import "./chunk-YZMCRNG2.js";
import "./chunk-W24ITOCJ.js";
import {
  AgentChatServiceApiFactory,
  AgentServiceApiFactory,
  AgentTeamServiceApiFactory,
  BucketServiceApiFactory,
  CalendarServiceApiFactory,
  CatalogApiFactory,
  CatalogsApiFactory,
  CloseReasonGroupsApiFactory,
  CloseReasonsApiFactory,
  CommunicationTypeServiceApiFactory,
  ContactsApiFactory,
  ContactsChatCatalogApiFactory,
  ExtensionsApiFactory,
  GroupsApiFactory,
  LabelsApiFactory,
  ListServiceApiFactory,
  MediaFileServiceApiFactory,
  PrioritiesApiFactory,
  QueueServiceApiFactory,
  RolesApiFactory,
  RoutingSchemaServiceApiFactory,
  SLAConditionsApiFactory,
  SLAsApiFactory,
  ServicesApiFactory,
  SkillServiceApiFactory,
  StatusConditionsApiFactory,
  StatusesApiFactory,
  SystemSettingServiceApiFactory,
  TypesApiFactory,
  WebitelContactsGroupType
} from "./chunk-555CXXDB.js";
import "./chunk-CIP22KGZ.js";
import {
  axios_default
} from "./chunk-ESEZ4R5I.js";
import "./chunk-ECRK6EO5.js";
import {
  __publicField,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-datalist/src/modules/filters/index.ts
var import_dist235 = __toESM(require_dist());
var import_dist236 = __toESM(require_dist2());
var import_dist237 = __toESM(require_dist3());
import DynamicFilterSearchComponent from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/components/search-bar/dynamic-filter-search.vue";
import TableFiltersPanelComponent from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/components/table-filters-panel.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/enums/FilterOption.ts
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var FilterOption = {
  Agent: "agent",
  AmdResult: "amdResult",
  Contact: "contact",
  CallDirection: "direction",
  Rated: "rated",
  Gateway: "gateway",
  Grantee: "grantee",
  HangupCause: "cause",
  Queue: "queue",
  RatedBy: "ratedBy",
  HasFile: "hasFile",
  Score: "score",
  Tag: "tag",
  TalkDuration: "talkDuration",
  Team: "team",
  TotalDuration: "totalDuration",
  HasTranscription: "hasTranscription",
  User: "user",
  Variable: "variable",
  CreatedAt: "createdAt",
  CaseStatus: "status",
  CaseSource: "source",
  CaseService: "service",
  CaseAuthor: "author",
  CaseReporter: "reporter",
  CaseImpacted: "impacted",
  CaseAssignee: "assignee",
  ContactGroup: "contactGroup",
  ContactLabel: "contactLabel",
  ContactOwner: "contactOwner",
  CasePriority: "priority",
  CaseCloseReasonGroups: "closeReasonGroups",
  Rating: "rating",
  CaseSla: "sla",
  CaseSlaCondition: "slaCondition",
  CaseReactionTime: "reactionTime",
  CaseResolutionTime: "resolutionTime",
  CaseActualReactionTime: "actualReactionTime",
  CaseActualResolutionTime: "actualResolutionTime",
  HasAttachment: "hasAttachment",
  HasUser: "hasUser"
};

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/index.ts
var import_dist232 = __toESM(require_dist(), 1);
var import_dist233 = __toESM(require_dist2(), 1);
var import_dist234 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/types/DynamicFilterPreviewComponent.ts
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/types/FilterConfigDefinition.ts
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/classes/createFilterConfig.ts
var import_dist229 = __toESM(require_dist(), 1);
var import_dist230 = __toESM(require_dist2(), 1);
var import_dist231 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
var import_dist226 = __toESM(require_dist(), 1);
var import_dist227 = __toESM(require_dist2(), 1);
var import_dist228 = __toESM(require_dist3(), 1);
import DateTimeOptionsFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/_shared/date-time-filter/date-time-options/date-time-options-filter-value-field.vue";
import DateTimeOptionsFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/_shared/date-time-filter/date-time-options/date-time-options-filter-value-preview.vue";
import AgentFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/agent/agent-filter-value-field.vue";
import AgentFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/agent/agent-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/agent/config.js
var import_dist13 = __toESM(require_dist(), 1);
var import_dist14 = __toESM(require_dist2(), 1);
var import_dist15 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/agents/agents.js
var import_dist10 = __toESM(require_dist());
var import_dist11 = __toESM(require_dist2());
var import_dist12 = __toESM(require_dist3());
var instance = getDefaultInstance_default();
var configuration = getDefaultOpenAPIConfig_default();
var agentService = new AgentServiceApiFactory(configuration, "", instance);
var convertStatusDuration = (value) => {
  if (value > 60 * 60 * 24) return ">24:00:00";
  return convertDuration_default(value);
};
var getAgentsList = async (params) => {
  const listResponseHandler = (items) => {
    return items.map((item) => ({
      ...item,
      statusDuration: convertStatusDuration(item.statusDuration)
    }));
  };
  const {
    page,
    size,
    search,
    sort,
    fields,
    id,
    team,
    skill,
    isSupervisor,
    isNotSupervisor,
    notTeamId,
    supervisorId,
    notSkillId
  } = transformers_default(params, [merge_transformer_default(getDefaultGetParams_default())]);
  try {
    const response = await agentService.searchAgent(
      page,
      size,
      search,
      sort,
      fields,
      id,
      void 0,
      supervisorId,
      team,
      void 0,
      void 0,
      isSupervisor,
      skill,
      void 0,
      isNotSupervisor,
      void 0,
      void 0,
      notTeamId,
      notSkillId
    );
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, [listResponseHandler]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getAgent = async ({ itemId: id }) => {
  const defaultObject = {
    user: {},
    team: {},
    supervisor: [],
    auditor: [],
    region: {},
    progressiveCount: 0,
    chatCount: 0,
    taskCount: 0,
    isSupervisor: false,
    description: "",
    greetingMedia: {}
  };
  try {
    const response = await agentService.readAgent(id);
    return transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default(defaultObject)
    ]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var fieldsToSend = [
  "user",
  "team",
  "supervisor",
  "auditor",
  "region",
  "greetingMedia",
  "progressiveCount",
  "chatCount",
  "taskCount",
  "isSupervisor"
];
var addAgent = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    sanitize_transformer_default(fieldsToSend),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await agentService.createAgent(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var patchAgent = async ({ changes, id }) => {
  const body = transformers_default(changes, [
    sanitize_transformer_default(fieldsToSend),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await agentService.patchAgent(id, body);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateAgent = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    sanitize_transformer_default(fieldsToSend),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await agentService.updateAgent(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteAgent = async ({ id }) => {
  try {
    const response = await agentService.deleteAgent(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getAgentsLookup = (params) => getAgentsList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var getAgentHistory = async (params) => {
  const {
    parentId,
    from,
    to,
    page,
    size,
    sort = "-joined_at"
  } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    starToSearch_transformer_default("search")
  ]);
  try {
    const response = await agentService.searchAgentStateHistory(
      page,
      size,
      from,
      to,
      parentId,
      sort
    );
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items,
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getAgentUsersOptions = async (params) => {
  const { page, size, search, sort, fields, id } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    starToSearch_transformer_default("search")
  ]);
  try {
    const response = await agentService.searchLookupUsersAgentNotExists(
      page,
      size,
      search
    );
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items,
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getSupervisorOptions = async (params) => {
  const isSupervisor = true;
  return getAgentsList({ ...params, isSupervisor });
};
var getRegularAgentsOptions = async (params) => {
  const isNotSupervisor = true;
  return getAgentsList({ ...params, isNotSupervisor });
};
var AgentsAPI = {
  getList: getAgentsList,
  get: getAgent,
  add: addAgent,
  patch: patchAgent,
  update: updateAgent,
  delete: deleteAgent,
  getLookup: getAgentsLookup,
  getAgentHistory,
  getRegularAgentsOptions,
  getAgentUsersOptions,
  getSupervisorOptions
};
var agents_default = AgentsAPI;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/agent/config.js
var searchMethod = agents_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import AmdResultFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/amd-result/amd-result-filter-value-field.vue";
import AmdResultFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/amd-result/amd-result-filter-value-preview.vue";
import CallDirectionFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/call-direction/call-direction-filter-value-field.vue";
import CallDirectionFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/call-direction/call-direction-filter-value-preview.vue";
import CaseActualReactionTimeFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-actual-reaction-time/case-actual-reaction-time-filter-value-field.vue";
import CaseActualReactionTimeFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-actual-reaction-time/case-actual-reaction-time-filter-value-preview.vue";
import CaseActualResolutionTimeFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-actual-resolution-time/case-actual-resolution-time-filter-value-field.vue";
import CaseActualResolutionTimeFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-actual-resolution-time/case-actual-resolution-time-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-assignee/index.ts
var import_dist157 = __toESM(require_dist(), 1);
var import_dist158 = __toESM(require_dist2(), 1);
var import_dist159 = __toESM(require_dist3(), 1);
import CaseAssigneeFilterValueField2 from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-assignee/case-assignee-filter-value-field.vue";
import CaseAssigneeFilterValuePreview2 from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-assignee/case-assignee-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-assignee/filterConfig.ts
var import_dist154 = __toESM(require_dist(), 1);
var import_dist155 = __toESM(require_dist2(), 1);
var import_dist156 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/index.js
var import_dist148 = __toESM(require_dist());
var import_dist149 = __toESM(require_dist2());
var import_dist150 = __toESM(require_dist3());

// node_modules/@webitel/ui-sdk/src/api/clients/agents/agentChats.js
var import_dist16 = __toESM(require_dist(), 1);
var import_dist17 = __toESM(require_dist2(), 1);
var import_dist18 = __toESM(require_dist3(), 1);
var { t } = i18n_default.global;
var instance2 = getDefaultInstance_default();
var configuration2 = getDefaultOpenAPIConfig_default();
var agentChatsService = new AgentChatServiceApiFactory(
  configuration2,
  "",
  instance2
);

// node_modules/@webitel/ui-sdk/src/api/clients/buckets/buckets.js
var import_dist19 = __toESM(require_dist(), 1);
var import_dist20 = __toESM(require_dist2(), 1);
var import_dist21 = __toESM(require_dist3(), 1);
var instance3 = getDefaultInstance_default();
var configuration3 = getDefaultOpenAPIConfig_default();
var bucketService = new BucketServiceApiFactory(configuration3, "", instance3);

// node_modules/@webitel/ui-sdk/src/api/clients/calendars/calendars.js
var import_dist22 = __toESM(require_dist(), 1);
var import_dist23 = __toESM(require_dist2(), 1);
var import_dist24 = __toESM(require_dist3(), 1);
var import_deep_copy = __toESM(require_deep_copy(), 1);
var instance4 = getDefaultInstance_default();
var configuration4 = getDefaultOpenAPIConfig_default();
var calendarService = new CalendarServiceApiFactory(
  configuration4,
  "",
  instance4
);

// node_modules/@webitel/ui-sdk/src/api/clients/caseCloseReasonGroups/caseCloseReasonGroups.js
var import_dist25 = __toESM(require_dist());
var import_dist26 = __toESM(require_dist2());
var import_dist27 = __toESM(require_dist3());
var instance5 = getDefaultInstance_default();
var configuration5 = getDefaultOpenAPIConfig_default();
var closeReasonGroupsService = new CloseReasonGroupsApiFactory(
  configuration5,
  "",
  instance5
);
var fieldsToSend2 = ["name", "description"];
var getCloseReasonGroupsList = async (params) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
  const { page, size, fields, sort, id, q } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params2) => ({ ...params2, q: params2.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await closeReasonGroupsService.listCloseReasonGroups(
      page,
      size,
      fields,
      sort,
      id,
      q
    );
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, []),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getCloseReasonGroups = async ({ itemId: id }) => {
  const itemResponseHandler = (item) => {
    return item.closeReasonGroup;
  };
  try {
    const response = await closeReasonGroupsService.locateCloseReasonGroup(
      id,
      fieldsToSend2
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addCloseReasonGroups = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend2)
  ]);
  try {
    const response = await closeReasonGroupsService.createCloseReasonGroup(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateCloseReasonGroups = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend2)
  ]);
  try {
    const response = await closeReasonGroupsService.updateCloseReasonGroup(
      id,
      item
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteCloseReasonGroups = async ({ id }) => {
  try {
    const response = await closeReasonGroupsService.deleteCloseReasonGroup(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getCloseReasonGroupsLookup = async (params) => getCloseReasonGroupsList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var CaseCloseReasonGroupsAPI = {
  getList: getCloseReasonGroupsList,
  get: getCloseReasonGroups,
  add: addCloseReasonGroups,
  update: updateCloseReasonGroups,
  delete: deleteCloseReasonGroups,
  getLookup: getCloseReasonGroupsLookup
};
var caseCloseReasonGroups_default = CaseCloseReasonGroupsAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/caseCloseReasons/caseCloseReasons.js
var import_dist28 = __toESM(require_dist());
var import_dist29 = __toESM(require_dist2());
var import_dist30 = __toESM(require_dist3());
var instance6 = getDefaultInstance_default();
var configuration6 = getDefaultOpenAPIConfig_default();
var closeReasonsService = new CloseReasonsApiFactory(
  configuration6,
  "",
  instance6
);
var fieldsToSend3 = ["name", "description"];
var getCloseReasonsList = async ({ parentId, ...rest }) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
  const { page, size, fields, sort, id, q } = transformers_default(rest, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params) => ({ ...params, q: params.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await closeReasonsService.listCloseReasons(
      parentId,
      page,
      size,
      fields,
      sort,
      id,
      q
    );
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, [snakeToCamel_transformer_default()]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getCloseReason = async ({ parentId, itemId: id }) => {
  const itemResponseHandler = (item) => {
    return item.closeReason;
  };
  try {
    const response = await closeReasonsService.locateCloseReason(parentId, id);
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addCloseReason = async ({ itemInstance, parentId }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend3)
  ]);
  try {
    const response = await closeReasonsService.createCloseReason(
      parentId,
      item
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateCloseReason = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [camelToSnake_transformer_default()]);
  try {
    const response = await closeReasonsService.updateCloseReason(
      itemInstance.id,
      id,
      item
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteCloseReason = async ({ id, parentId }) => {
  try {
    const response = await closeReasonsService.deleteCloseReason(parentId, id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getCloseReasonLookup = async (params) => getCloseReasonsList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var CaseCloseReasonsAPI = {
  getList: getCloseReasonsList,
  getLookup: getCloseReasonLookup,
  get: getCloseReason,
  add: addCloseReason,
  update: updateCloseReason,
  delete: deleteCloseReason
};
var caseCloseReasons_default = CaseCloseReasonsAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/casePriorities/casePriorities.js
var import_dist31 = __toESM(require_dist());
var import_dist32 = __toESM(require_dist2());
var import_dist33 = __toESM(require_dist3());
var instance7 = getDefaultInstance_default();
var configuration7 = getDefaultOpenAPIConfig_default();
var priorityService = new PrioritiesApiFactory(configuration7, "", instance7);
var fieldsToSend4 = ["name", "description", "color"];
var getPrioritiesList = async (params) => {
  const fieldsToSend18 = [
    "page",
    "size",
    "q",
    "sort",
    "fields",
    "id",
    "notInSla",
    "inSla",
    "inSlaCond"
  ];
  const {
    page,
    size,
    fields,
    sort,
    id,
    q,
    not_in_sla: notInSla,
    in_sla_cond: inSlaCond
  } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params2) => ({ ...params2, q: params2.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await priorityService.listPriorities(
      page,
      size,
      fields,
      sort,
      id,
      q,
      notInSla,
      inSlaCond
    );
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, []),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getPriority = async ({ itemId: id }) => {
  const itemResponseHandler = (item) => {
    return item.priority;
  };
  try {
    const response = await priorityService.locatePriority(id, fieldsToSend4);
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addPriority = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend4)
  ]);
  try {
    const response = await priorityService.createPriority(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updatePriority = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend4)
  ]);
  try {
    const response = await priorityService.updatePriority(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deletePriority = async ({ id }) => {
  try {
    const response = await priorityService.deletePriority(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getConditionsLookup = (params) => getPrioritiesList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var CasePrioritiesAPI = {
  getList: getPrioritiesList,
  get: getPriority,
  update: updatePriority,
  getLookup: getConditionsLookup,
  delete: deletePriority,
  add: addPriority
};
var casePriorities_default = CasePrioritiesAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/caseServiceCatalogs/serviceCatalogs.js
var import_dist34 = __toESM(require_dist());
var import_dist35 = __toESM(require_dist2());
var import_dist36 = __toESM(require_dist3());
var instance8 = getDefaultInstance_default();
var configuration8 = getDefaultOpenAPIConfig_default();
var catalogsService = new CatalogsApiFactory(configuration8, "", instance8);
var fieldsToSend5 = [
  "id",
  "name",
  "code",
  "sla",
  "teams",
  "skills",
  "status",
  "state",
  "prefix",
  "close_reason_group",
  "reason",
  "description",
  "services"
];
var servicesFieldsToSend = [
  "id",
  "name",
  "group",
  "assignee",
  "assignee.name",
  "description",
  "code",
  "prefix",
  "state",
  "sla",
  "root_id",
  "catalog_id"
];
var getCatalogsList = async (params) => {
  const fieldsToSend18 = [
    "page",
    "size",
    "q",
    "sort",
    "fields",
    "id",
    "hasSubservices"
  ];
  const { page, size, fields, sort, id, q, has_subservices } = transformers_default(
    params,
    [
      merge_transformer_default(getDefaultGetParams_default()),
      starToSearch_transformer_default("search"),
      (params2) => ({ ...params2, q: params2.search }),
      sanitize_transformer_default(fieldsToSend18),
      camelToSnake_transformer_default()
    ]
  );
  try {
    const response = await catalogsService.listCatalogs(
      page,
      size,
      [...fields, "services"],
      sort,
      id,
      q,
      true,
      "100",
      // Implemented depth 100 for load all subservices in one request
      servicesFieldsToSend,
      has_subservices
    );
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, [snakeToCamel_transformer_default()]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getCatalog = async ({ itemId: id }) => {
  const itemResponseHandler = (item) => {
    return item.catalog;
  };
  try {
    const response = await catalogsService.locateCatalog(
      id,
      fieldsToSend5,
      servicesFieldsToSend
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addCatalog = async ({ itemInstance }) => {
  const fieldsToSend18 = [
    "name",
    "description",
    "prefix",
    "code",
    "state",
    "sla",
    "status",
    "close_reason_group",
    "teams",
    "skills"
  ];
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend18)
  ]);
  try {
    const response = await catalogsService.createCatalog(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateCatalog = async ({ itemInstance, itemId: id }) => {
  const fieldsToSend18 = [
    "name",
    "description",
    "prefix",
    "code",
    "state",
    "sla",
    "status",
    "close_reason_group",
    "teams",
    "skills"
  ];
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend18)
  ]);
  try {
    const response = await catalogsService.updateCatalog(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var patchCatalog = async ({ itemInstance, itemId: id }) => {
  const fieldsToSend18 = ["name", "description", "state"];
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend18)
  ]);
  try {
    const response = await catalogsService.updateCatalog2(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteCatalog = async ({ id }) => {
  try {
    const response = await catalogsService.deleteCatalog(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var ServiceCatalogsAPI = {
  getList: getCatalogsList,
  get: getCatalog,
  add: addCatalog,
  update: updateCatalog,
  patch: patchCatalog,
  delete: deleteCatalog
};
var serviceCatalogs_default = ServiceCatalogsAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/caseSources/caseSources.ts
var import_dist37 = __toESM(require_dist(), 1);
var import_dist38 = __toESM(require_dist2(), 1);
var import_dist39 = __toESM(require_dist3(), 1);
var sourceService = getSources();
var getSourcesList = async (params) => {
  const fieldsToSend18 = getShallowFieldsToSendFromZodSchema(
    listSourcesQueryParams
  );
  const { page, size, fields, sort, id, q, type } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await sourceService.listSources({
      page,
      size,
      fields,
      sort,
      id,
      q: q || params.search,
      type
    });
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, []),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getSource = async ({ itemId: id }) => {
  const itemResponseHandler = (item) => item.source;
  try {
    const response = await sourceService.locateSource(id);
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addSource = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    sanitize_transformer_default(getShallowFieldsToSendFromZodSchema(createSourceBody)),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await sourceService.createSource(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateSource = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(getShallowFieldsToSendFromZodSchema(updateSourceBody))
  ]);
  try {
    const response = await sourceService.updateSource(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteSource = async ({ id }) => {
  try {
    const response = await sourceService.deleteSource(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getLookup = (params) => getSourcesList({
  ...params,
  fields: params.fields || ["id", "name", "type"]
});
var CaseSourcesAPI = {
  getList: getSourcesList,
  get: getSource,
  add: addSource,
  update: updateSource,
  delete: deleteSource,
  getLookup
};
var caseSources_default = CaseSourcesAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/caseStatusConditions/caseStatusConditions.js
var import_dist40 = __toESM(require_dist());
var import_dist41 = __toESM(require_dist2());
var import_dist42 = __toESM(require_dist3());
var instance9 = getDefaultInstance_default();
var configuration9 = getDefaultOpenAPIConfig_default();
var statusConditionsService = new StatusConditionsApiFactory(
  configuration9,
  "",
  instance9
);
var fieldsToSend6 = ["name", "description"];
var getStatusConditionsList = async ({ parentId, ...rest }) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
  const { page, size, fields, sort, id, q } = transformers_default(rest, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params) => ({ ...params, q: params.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await statusConditionsService.listStatusConditions(
      parentId,
      page,
      size,
      fields,
      sort,
      id,
      q
    );
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, [snakeToCamel_transformer_default()]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getStatusCondition = async ({ parentId, itemId: id }) => {
  const itemResponseHandler = (item) => {
    return item.status;
  };
  try {
    const response = await statusConditionsService.locateStatusCondition(
      parentId,
      id,
      fieldsToSend6
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateStatusCondition = async ({
  itemInstance,
  itemId: id,
  parentId
}) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend6)
  ]);
  try {
    const response = await statusConditionsService.updateStatusCondition(
      parentId,
      id,
      item
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addStatusCondition = async ({ itemInstance, parentId }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend6)
  ]);
  try {
    const response = await statusConditionsService.createStatusCondition(
      parentId,
      item
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var patchStatusCondition = async ({ id, parentId, changes }) => {
  const fieldsToSend18 = ["name", "description", "initial", "final"];
  const input = transformers_default(changes, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend18)
  ]);
  try {
    const response = await statusConditionsService.updateStatusCondition2(
      parentId,
      id,
      input
    );
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteStatusCondition = async ({ id, parentId }) => {
  try {
    const response = await statusConditionsService.deleteStatusCondition(
      parentId,
      id
    );
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getStatusesLookup = (params) => getStatusConditionsList({
  ...params,
  parentId: params.parentId,
  id: params.id,
  fields: params.fields || ["id", "name"]
});
var CaseStatusConditionsAPI = {
  getList: getStatusConditionsList,
  getLookup: getStatusesLookup,
  get: getStatusCondition,
  update: updateStatusCondition,
  patch: patchStatusCondition,
  delete: deleteStatusCondition,
  add: addStatusCondition
};
var caseStatusConditions_default = CaseStatusConditionsAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/caseStatuses/caseStatuses.js
var import_dist43 = __toESM(require_dist());
var import_dist44 = __toESM(require_dist2());
var import_dist45 = __toESM(require_dist3());
var instance10 = getDefaultInstance_default();
var configuration10 = getDefaultOpenAPIConfig_default();
var statusesService = new StatusesApiFactory(configuration10, "", instance10);
var fieldsToSend7 = ["name", "description"];
var getStatusesList = async (params) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
  const { page, size, fields, sort, id, q } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params2) => ({ ...params2, q: params2.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await statusesService.listStatuses(
      page,
      size,
      fields,
      sort,
      id,
      q
    );
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, []),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getStatus = async ({ itemId: id }) => {
  const itemResponseHandler = (item) => {
    return item.status;
  };
  try {
    const response = await statusesService.locateStatus(id, fieldsToSend7);
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addStatus = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend7)
  ]);
  try {
    const response = await statusesService.createStatus(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateStatus = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend7)
  ]);
  try {
    const response = await statusesService.updateStatus(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteStatus = async ({ id }) => {
  try {
    const response = await statusesService.deleteStatus(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getStatusesLookup2 = async (params) => getStatusesList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var CaseStatusesApi = {
  getList: getStatusesList,
  get: getStatus,
  update: updateStatus,
  getLookup: getStatusesLookup2,
  delete: deleteStatus,
  add: addStatus
};
var caseStatuses_default = CaseStatusesApi;

// node_modules/@webitel/ui-sdk/src/api/clients/catalog/catalog.js
var import_dist46 = __toESM(require_dist(), 1);
var import_dist47 = __toESM(require_dist2(), 1);
var import_dist48 = __toESM(require_dist3(), 1);
var instance11 = getDefaultInstance_default();
var configuration11 = getDefaultOpenAPIConfig_default();
var catalogService = new CatalogApiFactory(configuration11, "", instance11);

// node_modules/@webitel/ui-sdk/src/api/clients/chatGateways/chatGateways.js
var import_dist61 = __toESM(require_dist(), 1);
var import_dist62 = __toESM(require_dist2(), 1);
var import_dist63 = __toESM(require_dist3(), 1);
var import_deep_copy2 = __toESM(require_deep_copy(), 1);
var import_deepmerge = __toESM(require_cjs(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/chatGateways/defaults/webChatGateway.js
var import_dist58 = __toESM(require_dist(), 1);
var import_dist59 = __toESM(require_dist2(), 1);
var import_dist60 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/chatGateways/defaults/defaultChatGateway.js
var import_dist52 = __toESM(require_dist(), 1);
var import_dist53 = __toESM(require_dist2(), 1);
var import_dist54 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/chatGateways/scripts/generateUri.js
var import_dist49 = __toESM(require_dist(), 1);
var import_dist50 = __toESM(require_dist2(), 1);
var import_dist51 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/chatGateways/enums/WebchatAlternativeChannel.enum.js
var import_dist55 = __toESM(require_dist(), 1);
var import_dist56 = __toESM(require_dist2(), 1);
var import_dist57 = __toESM(require_dist3(), 1);
var WebchatAlternativeChannel = Object.freeze({
  VIBER: "viber",
  WHATSAPP: "whatsapp",
  TELEGRAM: "telegram",
  MESSENGER: "messenger",
  EMAIL: "email"
});

// node_modules/@webitel/ui-sdk/src/api/clients/chatGateways/chatGateways.js
var instance12 = getDefaultInstance_default();

// node_modules/@webitel/ui-sdk/src/api/clients/communications/communications.js
var import_dist64 = __toESM(require_dist(), 1);
var import_dist65 = __toESM(require_dist2(), 1);
var import_dist66 = __toESM(require_dist3(), 1);
var instance13 = getDefaultInstance_default();
var configuration12 = getDefaultOpenAPIConfig_default();
var communicationService = new CommunicationTypeServiceApiFactory(
  configuration12,
  "",
  instance13
);

// node_modules/@webitel/ui-sdk/src/api/clients/configurations/configurations.js
var import_dist67 = __toESM(require_dist(), 1);
var import_dist68 = __toESM(require_dist2(), 1);
var import_dist69 = __toESM(require_dist3(), 1);
var instance14 = getDefaultInstance_default();
var configuration13 = getDefaultOpenAPIConfig_default();
var configurationService = new SystemSettingServiceApiFactory(
  configuration13,
  "",
  instance14
);

// node_modules/@webitel/ui-sdk/src/api/clients/contactGroups/contactGroups.js
var import_dist73 = __toESM(require_dist(), 1);
var import_dist74 = __toESM(require_dist2(), 1);
var import_dist75 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/_shared/generatePermissionsApi.js
var import_dist70 = __toESM(require_dist(), 1);
var import_dist71 = __toESM(require_dist2(), 1);
var import_dist72 = __toESM(require_dist3(), 1);
var permissionsUrl = "acl";
var handlePermissionsList = (items) => {
  return items.map((item) => ({
    ...item,
    access: {
      x: {
        id: (item.granted.match(/x/g) || []).length + 1,
        rule: "x".repeat((item.granted.match(/x/g) || []).length)
      },
      r: {
        id: (item.granted.match(/r/g) || []).length + 1,
        rule: "r".repeat((item.granted.match(/r/g) || []).length)
      },
      w: {
        id: (item.granted.match(/w/g) || []).length + 1,
        rule: "w".repeat((item.granted.match(/w/g) || []).length)
      },
      d: {
        id: (item.granted.match(/d/g) || []).length + 1,
        rule: "d".repeat((item.granted.match(/d/g) || []).length)
      }
    }
  }));
};
var generatePermissionsApi = (baseUrl5) => {
  const instance34 = getDefaultInstance_default();
  const getList3 = async ({ parentId, ...params }) => {
    const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
    const defaultObject = {
      user: false
    };
    const url = transformers_default(params, [
      merge_transformer_default(getDefaultGetParams_default()),
      starToSearch_transformer_default("search"),
      (params2) => ({
        ...params2,
        q: params2.search
      }),
      sanitize_transformer_default(fieldsToSend18),
      camelToSnake_transformer_default(),
      generateUrl_transformer_default(`${baseUrl5}/${parentId}/${permissionsUrl}`)
    ]);
    try {
      const response = await instance34.get(url);
      const { items, next } = transformers_default(response.data, [
        snakeToCamel_transformer_default(),
        merge_transformer_default(getDefaultGetListResponse_default())
      ]);
      return {
        items: transformers_default(items, [
          mergeEach_transformer_default(defaultObject),
          handlePermissionsList
        ]),
        next
      };
    } catch (err) {
      throw transformers_default(err, [notify_transformer_default]);
    }
  };
  const patch = async ({ changes, id }) => {
    const body = transformers_default(changes, [camelToSnake_transformer_default()]);
    const url = `${baseUrl5}/${id}/${permissionsUrl}`;
    try {
      const response = await instance34.patch(url, body);
      return transformers_default(response.data, [snakeToCamel_transformer_default()]);
    } catch (err) {
      throw transformers_default(err, [notify_transformer_default]);
    }
  };
  return {
    getPermissionsList: getList3,
    patchPermissions: patch
  };
};

// node_modules/@webitel/ui-sdk/src/api/clients/contactGroups/contactGroups.js
var instance15 = getDefaultInstance_default();
var configuration14 = getDefaultOpenAPIConfig_default();
var contactGroupsService = new GroupsApiFactory(configuration14, "", instance15);
var baseUrl = "/contacts/groups";
var fieldsToSend8 = [
  "name",
  "description",
  "enabled",
  "type",
  "default_group"
];
var getContactGroupsList = async (params) => {
  const fieldsToSend18 = [
    "page",
    "size",
    "q",
    "sort",
    "fields",
    "type",
    "enabled",
    "id"
  ];
  const defaultObject = {
    enabled: false
  };
  const { page, size, fields, sort, id, q, name, type, enabled } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params2) => ({ ...params2, q: params2.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await contactGroupsService.listGroups(
      page,
      size,
      fields,
      sort,
      id,
      q,
      name,
      type,
      enabled
    );
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, [mergeEach_transformer_default(defaultObject)]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getContactGroup = async ({ itemId: id }) => {
  const itemResponseHandler = (item) => item.group;
  try {
    const response = await contactGroupsService.locateGroup(id, fieldsToSend8);
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addStaticContactGroup = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend8)
  ]);
  try {
    const response = await contactGroupsService.createGroup(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addContactsToGroups = async ({ contactIds, groupIds }) => {
  try {
    const response = await contactGroupsService.addContactsToGroups({
      groupIds,
      contactIds
    });
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var removeContactsFromGroup = async ({ id, contactIds }) => {
  try {
    const response = await contactGroupsService.removeContactsFromGroup(
      id,
      contactIds
    );
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateStaticContactGroup = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend8)
  ]);
  try {
    const response = await contactGroupsService.updateGroup(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var patchStaticContactGroup = async ({ id, changes }) => {
  const item = transformers_default(changes, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend8)
  ]);
  try {
    const response = await contactGroupsService.updateGroup2(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteStaticContactGroup = async ({ id }) => {
  try {
    const response = await contactGroupsService.deleteGroup(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getLookup2 = (params) => getContactGroupsList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var ContactGroupsAPI = {
  getList: getContactGroupsList,
  get: getContactGroup,
  add: addStaticContactGroup,
  update: updateStaticContactGroup,
  patch: patchStaticContactGroup,
  delete: deleteStaticContactGroup,
  getLookup: getLookup2,
  addContactsToGroups,
  removeContactsFromGroup,
  ...generatePermissionsApi(baseUrl)
};
var contactGroups_default = ContactGroupsAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/flows/flow.js
var import_dist76 = __toESM(require_dist(), 1);
var import_dist77 = __toESM(require_dist2(), 1);
var import_dist78 = __toESM(require_dist3(), 1);
var instance16 = getDefaultInstance_default();
var configuration15 = getDefaultOpenAPIConfig_default();
var flowService = new RoutingSchemaServiceApiFactory(
  configuration15,
  "",
  instance16
);

// node_modules/@webitel/ui-sdk/src/api/clients/gateways/gateways.js
var import_dist88 = __toESM(require_dist());
var import_dist89 = __toESM(require_dist2());
var import_dist90 = __toESM(require_dist3());

// node_modules/@webitel/ui-sdk/src/api/clients/gateways/defaults/registerGateway.js
var import_dist82 = __toESM(require_dist(), 1);
var import_dist83 = __toESM(require_dist2(), 1);
var import_dist84 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/gateways/defaults/defaultGateway.js
var import_dist79 = __toESM(require_dist(), 1);
var import_dist80 = __toESM(require_dist2(), 1);
var import_dist81 = __toESM(require_dist3(), 1);
var defaultGateway = () => ({
  name: "",
  usage: "",
  proxy: "",
  schema: {},
  enable: true
});
var defaultGateway_default = defaultGateway;

// node_modules/@webitel/ui-sdk/src/api/clients/gateways/defaults/registerGateway.js
var registerGateway = () => ({
  ...defaultGateway_default(),
  register: true,
  account: "",
  username: "",
  expires: 600,
  password: ""
});
var registerGateway_default = registerGateway;

// node_modules/@webitel/ui-sdk/src/api/clients/gateways/defaults/trunkingGateway.js
var import_dist85 = __toESM(require_dist(), 1);
var import_dist86 = __toESM(require_dist2(), 1);
var import_dist87 = __toESM(require_dist3(), 1);
var trunkingGateway = () => ({
  ...defaultGateway_default(),
  register: false,
  host: "",
  ipacl: [
    // {
    //   ip: '',
    //   proto: 'any',
    //   port: null,
    // },
  ]
});
var trunkingGateway_default = trunkingGateway;

// node_modules/@webitel/ui-sdk/src/api/clients/gateways/gateways.js
var instance17 = getDefaultInstance_default();
var baseUrl2 = "/sip/gateways";
var getGatewayList = async (params) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id", "name"];
  const defaultObject = {
    name: "",
    proxy: "",
    enable: false
  };
  const url = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    starToSearch_transformer_default("search"),
    starToSearch_transformer_default("name"),
    (params2) => ({ ...params2, q: params2.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default(),
    generateUrl_transformer_default(baseUrl2)
  ]);
  try {
    const response = await instance17.get(url);
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, [mergeEach_transformer_default(defaultObject)]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getGateway = async ({ itemId: id }) => {
  const coerceTrunkingResponse = (response) => {
    const defaultIPacl = {
      ip: "",
      proto: "any",
      port: null
    };
    const result = { ...trunkingGateway_default(), ...response };
    result.ipacl = result.ipacl.map((acl) => ({ ...defaultIPacl, ...acl }));
    return result;
  };
  const coerceRegisterResponse = (response) => {
    const result = { ...registerGateway_default(), ...response };
    return result;
  };
  const itemResponseHandler = (response) => {
    if (response.register) return coerceRegisterResponse(response);
    return coerceTrunkingResponse(response);
  };
  const url = `${baseUrl2}/${id}`;
  try {
    const response = await instance17.get(url);
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var fieldsToSend9 = [
  "name",
  "proxy",
  "id",
  "host",
  "ipacl",
  "account",
  "username",
  "expires",
  "account",
  "registrar",
  "name",
  "register",
  "password",
  "schema",
  "usage",
  "enable"
];
var addGateway = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    sanitize_transformer_default(fieldsToSend9),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await instance17.post(baseUrl2, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateGateway = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    sanitize_transformer_default(fieldsToSend9),
    camelToSnake_transformer_default()
  ]);
  const url = `${baseUrl2}/${id}`;
  try {
    const response = await instance17.put(url, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var patchGateway = async ({ changes, id }) => {
  const body = transformers_default(changes, [
    sanitize_transformer_default(fieldsToSend9),
    camelToSnake_transformer_default()
  ]);
  const url = `${baseUrl2}/${id}`;
  try {
    const response = await instance17.patch(url, body);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteGateway = async ({ id }) => {
  const url = `${baseUrl2}/${id}`;
  try {
    const response = await instance17.delete(url);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getGatewaysLookup = (params) => getGatewayList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var GatewaysAPI = {
  getList: getGatewayList,
  get: getGateway,
  add: addGateway,
  patch: patchGateway,
  update: updateGateway,
  delete: deleteGateway,
  getLookup: getGatewaysLookup
};
var gateways_default = GatewaysAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/labels/labels.js
var import_dist91 = __toESM(require_dist(), 1);
var import_dist92 = __toESM(require_dist2(), 1);
var import_dist93 = __toESM(require_dist3(), 1);
var instance18 = getDefaultInstance_default();
var configuration16 = getDefaultOpenAPIConfig_default();
var service = new LabelsApiFactory(configuration16, "", instance18);
var getList = async (params) => {
  const fieldsToSend18 = ["page", "size", "search", "sort", "fields", "id"];
  const {
    page,
    size,
    search
  } = transformers_default(params, [
    sanitize_transformer_default(fieldsToSend18),
    merge_transformer_default(getDefaultGetParams_default()),
    starToSearch_transformer_default("search"),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await service.getLabels(page, size, search);
    const { labels, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default({ labels: [], next: false })
    ]);
    return {
      items: labels,
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getLabelsLookup = (params) => getList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var labels_default = {
  getList,
  getLookup: getLabelsLookup
};

// node_modules/@webitel/ui-sdk/src/api/clients/lists/blacklists.js
var import_dist94 = __toESM(require_dist(), 1);
var import_dist95 = __toESM(require_dist2(), 1);
var import_dist96 = __toESM(require_dist3(), 1);
var instance19 = getDefaultInstance_default();
var configuration17 = getDefaultOpenAPIConfig_default();
var listService = new ListServiceApiFactory(configuration17, "", instance19);

// node_modules/@webitel/ui-sdk/src/api/clients/media/media.js
var import_dist97 = __toESM(require_dist(), 1);
var import_dist98 = __toESM(require_dist2(), 1);
var import_dist99 = __toESM(require_dist3(), 1);
var instance20 = getDefaultInstance_default();
var configuration18 = getDefaultOpenAPIConfig_default();
var mediaService = new MediaFileServiceApiFactory(
  configuration18,
  "",
  instance20
);
var token = localStorage.getItem("access-token");
var baseUrl3 = import.meta.env.VITE_API_URL;
var addMediaInstance = axios_default.create({
  headers: {
    "content-type": "multipart/form-data"
  }
});

// node_modules/@webitel/ui-sdk/src/api/clients/object/object.js
var import_dist100 = __toESM(require_dist(), 1);
var import_dist101 = __toESM(require_dist2(), 1);
var import_dist102 = __toESM(require_dist3(), 1);
var instance21 = getDefaultInstance_default();
var configuration19 = getDefaultOpenAPIConfig_default();
var typeService = new TypesApiFactory(configuration19, "", instance21);

// node_modules/@webitel/ui-sdk/src/api/clients/queues/queues.js
var import_dist106 = __toESM(require_dist());
var import_dist107 = __toESM(require_dist2());
var import_dist108 = __toESM(require_dist3());
var import_deep_copy3 = __toESM(require_deep_copy());

// node_modules/@webitel/ui-sdk/src/api/clients/queues/defaults/processing.js
var import_dist103 = __toESM(require_dist(), 1);
var import_dist104 = __toESM(require_dist2(), 1);
var import_dist105 = __toESM(require_dist3(), 1);
var import_deepmerge2 = __toESM(require_cjs(), 1);
var processing = (processing2 = {}) => (0, import_deepmerge2.default)(
  {
    enabled: false,
    formSchema: {},
    sec: 30,
    renewalSec: 15
  },
  processing2
);
var processing_default = processing;

// node_modules/@webitel/ui-sdk/src/api/clients/queues/queues.js
var instance22 = getDefaultInstance_default();
var configuration20 = getDefaultOpenAPIConfig_default();
var queueService = new QueueServiceApiFactory(configuration20, "", instance22);
var doNotConvertKeys = ["variables"];
var fieldsToSend10 = [
  "name",
  "type",
  "strategy",
  "team",
  "priority",
  "dncList",
  "schema",
  "payload",
  "taskProcessing",
  "maxOfRetry",
  "timeout",
  "secBetweenRetries",
  "variables",
  "calendar",
  "description",
  "enabled",
  "ringtone",
  "doSchema",
  "afterSchema",
  "stickyAgent",
  "grantee",
  "tags"
];
var preRequestHandler = (item) => {
  const copy = (0, import_deep_copy3.default)(item);
  copy.variables = copy.variables.reduce((variables, variable) => {
    if (!variable.key) return variables;
    return { ...variables, [variable.key]: variable.value };
  }, {});
  return copy;
};
var getQueuesList = async (params) => {
  const defaultObject = {
    type: 0,
    enabled: false,
    active: 0,
    waiting: 0,
    priority: "0"
  };
  const { page, size, search, sort, fields, id, queueType, team, tags } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    starToSearch_transformer_default("search")
  ]);
  try {
    const response = await queueService.searchQueue(
      page,
      size,
      search,
      sort,
      fields,
      id,
      queueType,
      team,
      tags
    );
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(doNotConvertKeys),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, [mergeEach_transformer_default(defaultObject)]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getQueue = async ({ itemId: id }) => {
  const defaultObject = {
    tags: [],
    type: 0,
    formSchema: {},
    taskProcessing: {}
  };
  const responseHandler = (item) => {
    const copy = (0, import_deep_copy3.default)(item);
    try {
      if (copy.variables) {
        copy.variables = Object.keys(copy.variables).map((key) => ({
          key,
          value: copy.variables[key]
        }));
      }
      if (isEmpty_default(copy.taskProcessing)) {
        copy.taskProcessing = processing_default({
          enabled: !!copy.processing,
          formSchema: copy.formSchema,
          sec: copy.processingSec || 0,
          renewalSec: copy.processingRenewalSec || 0
        });
      }
      return copy;
    } catch (err) {
      throw err;
    }
  };
  try {
    const response = await queueService.readQueue(id);
    return transformers_default(response.data, [
      snakeToCamel_transformer_default(doNotConvertKeys),
      merge_transformer_default(defaultObject),
      responseHandler
    ]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addQueue = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    preRequestHandler,
    sanitize_transformer_default(fieldsToSend10),
    camelToSnake_transformer_default(doNotConvertKeys)
  ]);
  try {
    const response = await queueService.createQueue(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default(doNotConvertKeys)]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateQueue = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    preRequestHandler,
    sanitize_transformer_default(fieldsToSend10),
    camelToSnake_transformer_default(doNotConvertKeys)
  ]);
  try {
    const response = await queueService.updateQueue(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default(doNotConvertKeys)]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var patchQueue = async ({ id, changes }) => {
  const item = transformers_default(changes, [
    sanitize_transformer_default(fieldsToSend10),
    camelToSnake_transformer_default(doNotConvertKeys)
  ]);
  try {
    const response = await queueService.patchQueue(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default(doNotConvertKeys)]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteQueue = async ({ id }) => {
  try {
    const response = await queueService.deleteQueue(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getQueuesLookup = (params) => getQueuesList({
  ...params,
  fields: params.fields || ["id", "name", "type"]
});
var getQueuesTags = async (params) => {
  const { page, size, search, sort, fields } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    starToSearch_transformer_default(),
    camelToSnake_transformer_default(doNotConvertKeys)
  ]);
  try {
    const response = await queueService.searchQueueTags(
      page,
      size,
      search,
      sort,
      fields
    );
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(doNotConvertKeys),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items,
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var QueuesAPI = {
  getList: getQueuesList,
  get: getQueue,
  add: addQueue,
  patch: patchQueue,
  update: updateQueue,
  delete: deleteQueue,
  getLookup: getQueuesLookup,
  getQueuesTags
};
var queues_default = QueuesAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/quickReplies/quickReplies.ts
var import_dist109 = __toESM(require_dist(), 1);
var import_dist110 = __toESM(require_dist2(), 1);
var import_dist111 = __toESM(require_dist3(), 1);
var quickReplyService = getQuickRepliesService();

// node_modules/@webitel/ui-sdk/src/api/clients/roles/roles.ts
var import_dist112 = __toESM(require_dist());
var import_dist113 = __toESM(require_dist2());
var import_dist114 = __toESM(require_dist3());
var import_deep_copy4 = __toESM(require_deep_copy());
var instance23 = getDefaultInstance_default();
var configuration21 = getDefaultOpenAPIConfig_default();
var rolesApiFactory = RolesApiFactory(configuration21, "", instance23);
var fieldsToSend11 = ["name", "description", "permissions", "metadata"];
var preRequestHandler2 = (item) => {
  const copy = (0, import_deep_copy4.default)(item);
  copy.metadata.access = ApplicationsAccess.minify(copy.metadata.access);
  return copy;
};
var getRoleList = async (params) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
  const { page, size, q, sort, name, fields, id, userId, userName } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    starToSearch_transformer_default("search"),
    (params2) => {
      params2.ids = params2.ids || params2.id;
      return { ...params2, q: params2.search };
    },
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await rolesApiFactory.searchRoles(
      [id],
      name,
      userId,
      userName,
      q,
      fields,
      sort,
      page,
      size
    );
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items,
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getRole = async ({ itemId: id }) => {
  const defaultObject = {
    name: "",
    description: "",
    permissions: [],
    metadata: {}
  };
  const itemResponseHandler = (response) => {
    const copy = (0, import_deep_copy4.default)(response);
    copy.metadata.access = new ApplicationsAccess({
      access: copy.metadata.access
    }).getAccess();
    return copy;
  };
  try {
    const response = await rolesApiFactory.readRole(id, fieldsToSend11);
    return transformers_default(response.data, [
      // snakeToCamel(), // prevent role "access" custom lookups from being converted to camelCase
      merge_transformer_default(defaultObject),
      itemResponseHandler
    ]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addRole = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    preRequestHandler2,
    sanitize_transformer_default(fieldsToSend11),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await rolesApiFactory.createRole(item);
    return transformers_default(response.data, [
      // snakeToCamel(), // prevent role "access" custom lookups from being converted to camelCase
    ]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateRole = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    preRequestHandler2,
    sanitize_transformer_default(fieldsToSend11),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await rolesApiFactory.updateRole(id, item);
    return transformers_default(response.data, [
      // snakeToCamel(), // prevent role "access" custom lookups from being converted to camelCase
    ]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteRole = async ({ id }) => {
  try {
    const response = await rolesApiFactory.deleteRole(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getRolesLookup = (params) => getRoleList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var PERMISSIONS_LIST_URL = "/permissions";
var getPermissionsOptions = async (params) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
  const url = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params2) => ({ ...params2, q: params2.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default(),
    generateUrl_transformer_default(PERMISSIONS_LIST_URL)
  ]);
  try {
    const response = await instance23.get(url);
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items,
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var RolesAPI = {
  getList: getRoleList,
  get: getRole,
  add: addRole,
  update: updateRole,
  delete: deleteRole,
  getLookup: getRolesLookup,
  getPermissionsOptions
};
var roles_default = RolesAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/skills/skills.js
var import_dist115 = __toESM(require_dist(), 1);
var import_dist116 = __toESM(require_dist2(), 1);
var import_dist117 = __toESM(require_dist3(), 1);
var instance24 = getDefaultInstance_default();
var configuration22 = getDefaultOpenAPIConfig_default();
var skillService = new SkillServiceApiFactory(configuration22, "", instance24);

// node_modules/@webitel/ui-sdk/src/api/clients/slas/slas.js
var import_dist118 = __toESM(require_dist());
var import_dist119 = __toESM(require_dist2());
var import_dist120 = __toESM(require_dist3());
var instance25 = getDefaultInstance_default();
var configuration23 = getDefaultOpenAPIConfig_default();
var slaService = new SLAsApiFactory(configuration23, "", instance25);
var fieldsToSend12 = [
  "name",
  "description",
  "valid_from",
  "valid_to",
  "calendar",
  "reaction_time",
  "resolution_time"
];
var getSlasList = async (params) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
  const { page, size, fields, sort, id, q } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params2) => ({ ...params2, q: params2.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await slaService.listSLAs(page, size, fields, sort, id, q);
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, []),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getSla = async ({ itemId: id }) => {
  const itemResponseHandler = (item) => {
    return item.sla;
  };
  try {
    const response = await slaService.locateSLA(id, fieldsToSend12);
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addSla = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend12)
  ]);
  try {
    const response = await slaService.createSLA(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateSla = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend12)
  ]);
  try {
    const response = await slaService.updateSLA(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteSla = async ({ id }) => {
  try {
    const response = await slaService.deleteSLA(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getSlasLookup = (params) => getSlasList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var SlasAPI = {
  getList: getSlasList,
  getLookup: getSlasLookup,
  get: getSla,
  add: addSla,
  update: updateSla,
  delete: deleteSla
};
var slas_default = SlasAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/teams/teams.js
var import_dist121 = __toESM(require_dist());
var import_dist122 = __toESM(require_dist2());
var import_dist123 = __toESM(require_dist3());
var instance26 = getDefaultInstance_default();
var configuration24 = getDefaultOpenAPIConfig_default();
var teamService = new AgentTeamServiceApiFactory(configuration24, "", instance26);
var fieldsToSend13 = [
  "name",
  "description",
  "strategy",
  "admin",
  "maxNoAnswer",
  "wrapUpTime",
  "noAnswerDelayTime",
  "taskAcceptTimeout",
  "callTimeout",
  "inviteChatTimeout"
];
var getTeamsList = async (params) => {
  const { page, size, search, sort, fields, id, strategy, adminId } = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    starToSearch_transformer_default("search")
  ]);
  try {
    const response = await teamService.searchAgentTeam(
      page,
      size,
      search,
      sort,
      fields,
      id,
      strategy,
      adminId
    );
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items,
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getTeam = async ({ itemId: id }) => {
  const defaultObject = {
    name: "",
    strategy: {},
    admin: [],
    description: "",
    busyDelayTime: 0,
    callTimeout: 0,
    maxNoAnswer: 0,
    noAnswerDelayTime: 0,
    taskAcceptTimeout: 0,
    inviteChatTimeout: 0,
    rejectDelayTime: 0,
    wrapUpTime: 0
  };
  try {
    const response = await teamService.readAgentTeam(id);
    return transformers_default(response.data, [
      snakeToCamel_transformer_default(),
      merge_transformer_default(defaultObject)
    ]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addTeam = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    sanitize_transformer_default(fieldsToSend13),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await teamService.createAgentTeam(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateTeam = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    sanitize_transformer_default(fieldsToSend13),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await teamService.updateAgentTeam(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteTeam = async ({ id }) => {
  try {
    const response = await teamService.deleteAgentTeam(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getTeamsLookup = (params) => getTeamsList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var TeamsAPI = {
  getList: getTeamsList,
  get: getTeam,
  add: addTeam,
  update: updateTeam,
  delete: deleteTeam,
  getLookup: getTeamsLookup
};
var teams_default = TeamsAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/users/users.js
var import_dist124 = __toESM(require_dist());
var import_dist125 = __toESM(require_dist2());
var import_dist126 = __toESM(require_dist3());
var import_deep_copy5 = __toESM(require_deep_copy());
var instance27 = getDefaultInstance_default();
var baseUrl4 = "/users";
var fieldsToSend14 = [
  "name",
  "username",
  "password",
  "extension",
  "status",
  "note",
  "roles",
  "license",
  "devices",
  "device",
  "profile",
  "email",
  "contact",
  "chatName"
];
var getUsersList = async (params) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
  const defaultObject = {
    name: "",
    status: "",
    state: true,
    dnd: false
  };
  const url = transformers_default(params, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params2) => ({ ...params2, q: params2.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default(),
    generateUrl_transformer_default(baseUrl4)
  ]);
  try {
    const response = await instance27.get(url);
    const { items, next } = transformers_default(response.data, [
      snakeToCamel_transformer_default(["profile"]),
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, [mergeEach_transformer_default(defaultObject)]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getUser = async ({ itemId: id }) => {
  const defaultObject = {
    roles: [],
    license: [],
    devices: [],
    device: {},
    variables: [{ key: "", value: "" }]
  };
  const itemResponseHandler = (item) => {
    const copy = (0, import_deep_copy5.default)(item);
    if (copy.license) {
      copy.license.forEach((item2) => {
        item2.name = item2.prod;
      });
    }
    if (copy.profile) {
      copy.variables = Object.keys(copy.profile).map((key) => ({
        key,
        value: copy.profile[key]
      }));
    } else {
      copy.variables = [{ key: "", value: "" }];
    }
    return copy;
  };
  const url = `${baseUrl4}/${id}`;
  try {
    const response = await instance27.get(url);
    return transformers_default(response.data, [
      snakeToCamel_transformer_default(["profile"]),
      merge_transformer_default(defaultObject),
      itemResponseHandler
    ]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var preRequestHandler3 = (item) => {
  const copy = (0, import_deep_copy5.default)(item);
  if (item.device && !item.device.id) delete copy.device;
  if (copy.roles) copy.roles.forEach((copy2) => delete copy2.text);
  if (copy.devices) copy.devices.forEach((copy2) => delete copy2.text);
  if (copy.license) {
    copy.license = copy.license.map((copy2) => ({ id: copy2.id }));
  }
  copy.profile = {};
  if (copy.variables) {
    copy.variables.forEach((variable) => {
      copy.profile[variable.key] = variable.value;
    });
  }
  return copy;
};
var addUser = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    preRequestHandler3,
    sanitize_transformer_default(fieldsToSend14),
    camelToSnake_transformer_default(["profile"])
  ]);
  try {
    const response = await instance27.post(baseUrl4, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default(["profile"])]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateUser = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    preRequestHandler3,
    sanitize_transformer_default(fieldsToSend14),
    camelToSnake_transformer_default(["profile"])
  ]);
  const url = `${baseUrl4}/${id}`;
  try {
    const response = await instance27.put(url, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default(["profile"])]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var patchUser = async ({ changes, id }) => {
  const body = transformers_default(changes, [
    sanitize_transformer_default(fieldsToSend14),
    camelToSnake_transformer_default(["profile"])
  ]);
  const url = `${baseUrl4}/${id}`;
  try {
    const response = await instance27.patch(url, body);
    return transformers_default(response.data, [snakeToCamel_transformer_default(["profile"])]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var patchUserPresence = async ({ changes, id }) => {
  const body = transformers_default(changes, [
    sanitize_transformer_default(fieldsToSend14),
    camelToSnake_transformer_default(["profile"])
  ]);
  const url = `${baseUrl4}/${id}/presence`;
  try {
    const response = await instance27.patch(url, body);
    return transformers_default(response.data, [snakeToCamel_transformer_default(["profile"])]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteUser = async ({ id }) => {
  const url = `${baseUrl4}/${id}?permanent=true`;
  try {
    const response = await instance27.delete(url);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getUsersLookup = (params) => getUsersList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var logoutUser = async ({ id }) => {
  const url = `${baseUrl4}/${id}/logout`;
  try {
    const response = await instance27.post(url, {});
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var UsersAPI = {
  getList: getUsersList,
  get: getUser,
  add: addUser,
  patch: patchUser,
  update: updateUser,
  delete: deleteUser,
  getLookup: getUsersLookup,
  patchUserPresence,
  logoutUser,
  ...generatePermissionsApi(baseUrl4)
};
var users_default = UsersAPI;

// node_modules/@webitel/ui-sdk/src/api/clients/wtTypes/sysTypes/sysTypes.ts
var import_dist127 = __toESM(require_dist(), 1);
var import_dist128 = __toESM(require_dist2(), 1);
var import_dist129 = __toESM(require_dist3(), 1);
var instance28 = getDefaultInstance_default();

// node_modules/@webitel/ui-sdk/src/api/clients/wtTypes/typeExtensions/typeExtensions.ts
var import_dist133 = __toESM(require_dist(), 1);
var import_dist134 = __toESM(require_dist2(), 1);
var import_dist135 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/wtTypes/_shared/utils/sortDynamicFields.ts
var import_dist130 = __toESM(require_dist(), 1);
var import_dist131 = __toESM(require_dist2(), 1);
var import_dist132 = __toESM(require_dist3(), 1);
var import_deep_copy6 = __toESM(require_deep_copy(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/wtTypes/typeExtensions/typeExtensions.ts
var instance29 = getDefaultInstance_default();
var configuration25 = getDefaultOpenAPIConfig_default();
var typeExtensionsService = ExtensionsApiFactory(configuration25, "", instance29);

// node_modules/@webitel/ui-sdk/src/api/clients/сontacts/index.js
var import_dist145 = __toESM(require_dist(), 1);
var import_dist146 = __toESM(require_dist2(), 1);
var import_dist147 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/сontacts/contactChatMessagesHistory.js
var import_dist136 = __toESM(require_dist(), 1);
var import_dist137 = __toESM(require_dist2(), 1);
var import_dist138 = __toESM(require_dist3(), 1);
var { t: t2 } = i18n_default.global;
var instance30 = getDefaultInstance_default();
var configuration26 = getDefaultOpenAPIConfig_default();
var contactChatService = new ContactsChatCatalogApiFactory(
  configuration26,
  "",
  instance30
);

// node_modules/@webitel/ui-sdk/src/api/clients/сontacts/contacts.js
var import_dist142 = __toESM(require_dist());
var import_dist143 = __toESM(require_dist2());
var import_dist144 = __toESM(require_dist3());
var import_deep_copy7 = __toESM(require_deep_copy());

// node_modules/@webitel/ui-sdk/src/api/clients/сontacts/enums/ContactsSearchMode.js
var import_dist139 = __toESM(require_dist(), 1);
var import_dist140 = __toESM(require_dist2(), 1);
var import_dist141 = __toESM(require_dist3(), 1);
var ContactsSearchMode = Object.freeze({
  NAME: "name",
  LABELS: "labels",
  ABOUT: "about",
  VARIABLES: "variables",
  DESTINATION: "destination"
});
var ContactsSearchMode_default = ContactsSearchMode;

// node_modules/@webitel/ui-sdk/src/api/clients/сontacts/contacts.js
var instance31 = getDefaultInstance_default();
var configuration27 = getDefaultOpenAPIConfig_default();
var contactService = new ContactsApiFactory(configuration27, "", instance31);
var formatAccessMode = (item) => ({
  ...item,
  access: {
    edit: item.mode.includes("w"),
    delete: item.mode.includes("d")
  }
});
var getList2 = async (params) => {
  const fieldsToSend18 = [
    "page",
    "size",
    "q",
    "sort",
    "fields",
    "id",
    "qin",
    "notIdGroup",
    "group",
    "owner",
    "label",
    "user"
  ];
  if (!params.fields) {
    params.fields = [
      "id",
      "etag",
      "name",
      "managers",
      "labels",
      "about",
      "variables",
      "timezones",
      "phones",
      "emails",
      "imclients"
    ];
  }
  const listResponseHandler = (items) => items == null ? void 0 : items.map((item) => ({
    ...item,
    name: item.name.commonName,
    managers: item.managers ? [...item.managers.data] : [],
    labels: item.labels ? [...item.labels.data] : [],
    groups: getGroupsFromResponse(item),
    variables: item.variables ? [...item.variables.data] : [],
    timezones: item.timezones ? [...item.timezones.data] : [],
    phones: item.phones ? [...item.phones.data] : [],
    emails: item.emails ? [...item.emails.data] : []
  }));
  let changedParams;
  if (params == null ? void 0 : params.search) {
    changedParams = { ...params, q: params.search };
  } else if ((params == null ? void 0 : params.q) && (params == null ? void 0 : params.qin)) {
    changedParams = { ...params };
  } else {
    let searchValue = "";
    let searchKey = "";
    if (params[ContactsSearchMode_default.NAME]) {
      searchValue = params[ContactsSearchMode_default.NAME];
      searchKey = ContactsSearchMode_default.NAME;
    } else if (params[ContactsSearchMode_default.LABELS]) {
      searchValue = params[ContactsSearchMode_default.LABELS];
      searchKey = ContactsSearchMode_default.LABELS;
    } else if (params[ContactsSearchMode_default.ABOUT]) {
      searchValue = params[ContactsSearchMode_default.ABOUT];
      searchKey = ContactsSearchMode_default.ABOUT;
    } else if (params[ContactsSearchMode_default.VARIABLES]) {
      searchValue = params[ContactsSearchMode_default.VARIABLES];
      searchKey = ContactsSearchMode_default.VARIABLES;
    } else if (params[ContactsSearchMode_default.DESTINATION]) {
      searchValue = params[ContactsSearchMode_default.DESTINATION];
      searchKey = "emails,phones,imclients{user{name}}";
    }
    changedParams = {
      ...params,
      q: searchValue || "",
      qin: searchKey || ""
    };
    if (params.hasUser != null) {
      changedParams.user = params.hasUser;
    }
    if (params.contactGroup) {
      changedParams.group = [...params.contactGroup.list];
    }
    if (params.contactLabel) {
      changedParams.label = params.contactLabel.map((item) => item.label);
    }
    if (params.contactOwner) {
      changedParams.owner = params.contactOwner;
    }
  }
  if (params.parentId) {
    changedParams.group = [params.parentId];
  }
  const transformations = [
    sanitize_transformer_default(fieldsToSend18),
    merge_transformer_default(getDefaultGetParams_default()),
    camelToSnake_transformer_default()
  ];
  const {
    page,
    size,
    q,
    sort,
    fields,
    id,
    qin,
    mode,
    group_id,
    group,
    not_id_group,
    owner,
    label,
    user
  } = transformers_default(changedParams, transformations);
  try {
    const response = await contactService.searchContacts(
      page,
      size,
      q,
      sort || "+name",
      ["mode", ...fields],
      id,
      qin,
      mode,
      not_id_group,
      group,
      owner,
      label,
      user
    );
    const { items, next } = transformers_default(
      { ...response.data, items: response.data.data || [] },
      [snakeToCamel_transformer_default(["custom"]), merge_transformer_default(getDefaultGetListResponse_default())]
    );
    return {
      items: transformers_default(items, [
        (items2) => items2 == null ? void 0 : items2.map((item) => formatAccessMode(item)),
        listResponseHandler
      ]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var get = async ({ itemId: id }) => {
  const fields = [
    "name",
    "about",
    "labels",
    "groups",
    "etag",
    "mode",
    "managers",
    "timezones",
    "variables",
    "phones",
    "emails",
    "imclients",
    "user",
    "custom"
  ];
  const defaultObject = {};
  const itemResponseHandler = (item) => {
    return {
      ...item,
      name: item.name.commonName,
      labels: item.labels ? [...item.labels.data] : [],
      groups: getGroupsFromResponse(item),
      managers: item.managers ? [...item.managers.data] : [],
      timezones: item.timezones ? [...item.timezones.data] : [],
      variables: item.variables ? [...item.variables.data] : [],
      phones: item.phones ? [...item.phones.data] : [],
      emails: item.emails ? [...item.emails.data] : []
    };
  };
  try {
    const response = await contactService.locateContact(id, fields);
    return transformers_default(response.data, [
      snakeToCamel_transformer_default(["custom"]),
      merge_transformer_default(defaultObject),
      itemResponseHandler,
      formatAccessMode
    ]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var fieldsToSend15 = [
  "name",
  "labels",
  "about",
  "managers",
  "timezones",
  "groups",
  "custom"
];
var sanitizeManagers = (itemInstance) => {
  const managers = (itemInstance.managers || []).filter(
    ({ user } = {}) => user.id
  );
  return { ...itemInstance, managers };
};
var sanitizeTimezones = (itemInstance) => {
  const timezones = (itemInstance.timezones || []).filter(
    ({ timezone } = {}) => timezone.id
  );
  return { ...itemInstance, timezones };
};
var sanitizeGroups = (itemInstance) => {
  const groups = (itemInstance.groups || []).map((item) => ({ group: item }));
  return { ...itemInstance, groups };
};
var preRequestHandler4 = (item) => {
  const copy = (0, import_deep_copy7.default)(item);
  copy.name = {
    commonName: copy.name
  };
  return copy;
};
var getGroupsFromResponse = (item) => {
  return item.groups ? [...item.groups.data.map((el) => el.group)] : [];
};
var add = async ({ itemInstance }) => {
  const item = transformers_default(itemInstance, [
    preRequestHandler4,
    sanitizeManagers,
    sanitizeTimezones,
    sanitizeGroups,
    sanitize_transformer_default(fieldsToSend15),
    camelToSnake_transformer_default(["custom"])
  ]);
  try {
    const response = await contactService.createContact(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default(["custom"])]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var update = async ({ itemInstance }) => {
  const { etag } = itemInstance;
  const item = transformers_default(itemInstance, [
    preRequestHandler4,
    sanitizeManagers,
    sanitizeTimezones,
    sanitizeGroups,
    sanitize_transformer_default(fieldsToSend15),
    camelToSnake_transformer_default(["custom"])
  ]);
  try {
    const response = await contactService.updateContact(etag, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default(["custom"])]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteContact = async ({ id }) => {
  try {
    const response = await contactService.deleteContact(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getContactsLookup = (params) => getList2({
  ...params,
  fields: params.fields || ["id", "name"]
});
var ContactsAPI = {
  getList: getList2,
  get,
  add,
  update,
  delete: deleteContact,
  getLookup: getContactsLookup
};
var contacts_default = ContactsAPI;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/classes/FilterConfig.ts
var import_dist151 = __toESM(require_dist(), 1);
var import_dist152 = __toESM(require_dist2(), 1);
var import_dist153 = __toESM(require_dist3(), 1);
var FilterConfig = class {
  constructor({
    name,
    valueInputComponent,
    valuePreviewComponent,
    notDeletable,
    staticView
  } = {}) {
    __publicField(this, "name");
    __publicField(this, "valueInputComponent");
    __publicField(this, "valuePreviewComponent");
    __publicField(this, "label");
    __publicField(this, "staticView");
    __publicField(this, "notDeletable");
    if (name) this.name = name;
    if (valueInputComponent) this.valueInputComponent = valueInputComponent;
    if (valuePreviewComponent)
      this.valuePreviewComponent = valuePreviewComponent;
    this.notDeletable = !!notDeletable;
    if (staticView) this.staticView = staticView;
  }
};
var WtSysTypeFilterConfig = class extends FilterConfig {
};

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-assignee/filterConfig.ts
import CaseAssigneeFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-assignee/case-assignee-filter-value-field.vue";
import CaseAssigneeFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-assignee/case-assignee-filter-value-preview.vue";
var CaseAssigneeFilterConfig = class extends WtSysTypeFilterConfig {
  constructor() {
    super(...arguments);
    __publicField(this, "name", FilterOption.CaseAssignee);
    __publicField(this, "valueInputComponent", CaseAssigneeFilterValueField);
    __publicField(this, "valuePreviewComponent", CaseAssigneeFilterValuePreview);
  }
  searchRecords(params, { filterValue } = {}) {
    var _a;
    if ((filterValue == null ? void 0 : filterValue.unassigned) && !filterValue.list.length) return { items: [] };
    const id = ((_a = params.id) == null ? void 0 : _a.list) || params.id || (filterValue == null ? void 0 : filterValue.list);
    return contacts_default.getLookup({
      ...params,
      id
    });
  }
};
var createCaseAssigneeFilterConfig = (params) => new CaseAssigneeFilterConfig(params);

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CaseAuthorFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-author/case-author-filter-value-field.vue";
import CaseAuthorFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-author/case-author-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-author/config.js
var import_dist160 = __toESM(require_dist(), 1);
var import_dist161 = __toESM(require_dist2(), 1);
var import_dist162 = __toESM(require_dist3(), 1);
var searchMethod2 = users_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CaseCloseReasonGroupsFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-close-reason-groups/case-close-reason-groups-filter-value-field.vue";
import CaseCloseReasonGroupsFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-close-reason-groups/case-close-reason-groups-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-close-reason-groups/config.js
var import_dist163 = __toESM(require_dist(), 1);
var import_dist164 = __toESM(require_dist2(), 1);
var import_dist165 = __toESM(require_dist3(), 1);
var caseCloseReasonsGroupsSearchMethod = caseCloseReasonGroups_default.getLookup;
var caseCloseReasonsSearchMethod = caseCloseReasons_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CaseImpactedFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-impacted/case-impacted-filter-value-field.vue";
import CaseImpactedFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-impacted/case-impacted-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-impacted/config.js
var import_dist166 = __toESM(require_dist(), 1);
var import_dist167 = __toESM(require_dist2(), 1);
var import_dist168 = __toESM(require_dist3(), 1);
var searchMethod3 = contacts_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CasePriorityFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-priority/case-priority-filter-value-field.vue";
import CasePriorityFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-priority/case-priority-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-priority/config.js
var import_dist169 = __toESM(require_dist(), 1);
var import_dist170 = __toESM(require_dist2(), 1);
var import_dist171 = __toESM(require_dist3(), 1);
var searchMethod4 = casePriorities_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CaseReactionTimeFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-reaction-time/case-reaction-time-filter-value-field.vue";
import CaseReactionTimeFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-reaction-time/case-reaction-time-filter-value-preview.vue";
import CaseReporterFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-reporter/case-reporter-filter-value-field.vue";
import CaseReporterFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-reporter/case-reporter-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-reporter/config.js
var import_dist172 = __toESM(require_dist(), 1);
var import_dist173 = __toESM(require_dist2(), 1);
var import_dist174 = __toESM(require_dist3(), 1);
var searchMethod5 = contacts_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CaseResolutionTimeFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-resolution-time/case-resolution-time-filter-value-field.vue";
import CaseResolutionTimeFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-resolution-time/case-resolution-time-filter-value-preview.vue";
import CaseServiceFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-service/case-service-filter-value-field.vue";
import CaseServiceFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-service/case-service-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-service/config.js
var import_dist178 = __toESM(require_dist(), 1);
var import_dist179 = __toESM(require_dist2(), 1);
var import_dist180 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/caseServices/services.js
var import_dist175 = __toESM(require_dist());
var import_dist176 = __toESM(require_dist2());
var import_dist177 = __toESM(require_dist3());
var instance32 = getDefaultInstance_default();
var configuration28 = getDefaultOpenAPIConfig_default();
var servicesService = new ServicesApiFactory(configuration28, "", instance32);
var fieldsToSend16 = [
  "name",
  "code",
  "sla",
  "status",
  "state",
  "description",
  "group",
  "assignee",
  "services",
  "root_id",
  "catalog_id"
];
var getServicesList = async ({ rootId, ...rest }) => {
  const fieldsToSend18 = ["page", "size", "q", "sort", "fields", "id"];
  const { page, size, fields, sort, id, q } = transformers_default(rest, [
    merge_transformer_default(getDefaultGetParams_default()),
    starToSearch_transformer_default("search"),
    (params) => ({ ...params, q: params.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await servicesService.listServices(
      page,
      size,
      sort,
      id,
      q,
      rootId,
      void 0,
      fields
    );
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, []),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getService = async ({ itemId: id }) => {
  const fieldsToSend18 = [
    "name",
    "code",
    "sla",
    "state",
    "prefix",
    "group",
    "assignee",
    "description",
    "catalog_id",
    "root_id"
  ];
  const itemResponseHandler = (item) => {
    return item.service;
  };
  try {
    const response = await servicesService.locateService(id, fieldsToSend18);
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var preRequestHandler5 = ({ rootId, catalogId }) => {
  return (item) => {
    var _a;
    return {
      ...item,
      assignee: ((_a = item.group) == null ? void 0 : _a.type) === WebitelContactsGroupType.DYNAMIC ? {} : item.assignee,
      rootId,
      catalogId
    };
  };
};
var addService = async ({ itemInstance, rootId, catalogId }) => {
  const item = transformers_default(itemInstance, [
    preRequestHandler5({ rootId, catalogId }),
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend16)
  ]);
  try {
    const response = await servicesService.createService(item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateService = async ({
  itemInstance,
  itemId: id,
  rootId,
  catalogId
}) => {
  const item = transformers_default(itemInstance, [
    preRequestHandler5({ rootId, catalogId }),
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend16)
  ]);
  try {
    const response = await servicesService.updateService(id, item);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var patchService = async ({ changes, id }) => {
  const body = transformers_default(changes, [
    sanitize_transformer_default(fieldsToSend16),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await servicesService.updateService2(id, body);
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteService = async ({ id }) => {
  try {
    const response = await servicesService.deleteService(id);
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getServicesLookup = async (params) => getServicesList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var ServicesAPI = {
  getList: getServicesList,
  get: getService,
  add: addService,
  update: updateService,
  patch: patchService,
  delete: deleteService,
  getLookup: getServicesLookup
};
var services_default = ServicesAPI;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-service/config.js
var searchMethod6 = serviceCatalogs_default.getList;
var servicesSearchMethod = services_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CaseSlaFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-sla/case-sla-filter-value-field.vue";
import CaseSlaFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-sla/case-sla-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-sla/config.js
var import_dist181 = __toESM(require_dist(), 1);
var import_dist182 = __toESM(require_dist2(), 1);
var import_dist183 = __toESM(require_dist3(), 1);
var searchMethod7 = slas_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CaseSlaConditionFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-sla-condition/case-sla-condition-filter-value-field.vue";
import CaseSlaConditionFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-sla-condition/case-sla-condition-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-sla-condition/config.js
var import_dist187 = __toESM(require_dist(), 1);
var import_dist188 = __toESM(require_dist2(), 1);
var import_dist189 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-sdk/src/api/clients/slaConditions/slaConditions.js
var import_dist184 = __toESM(require_dist());
var import_dist185 = __toESM(require_dist2());
var import_dist186 = __toESM(require_dist3());
var instance33 = getDefaultInstance_default();
var configuration29 = getDefaultOpenAPIConfig_default();
var slaConditionsService = new SLAConditionsApiFactory(
  configuration29,
  "",
  instance33
);
var fieldsToSend17 = [
  "name",
  "priorities",
  "sla_id",
  "reaction_time",
  "resolution_time"
];
var getConditionsList = async ({ parentId, ...rest }) => {
  const fieldsToSend18 = [
    "page",
    "size",
    "q",
    "sort",
    "fields",
    "id",
    "slaConditionId",
    "priorityId"
  ];
  const {
    page,
    size,
    fields,
    sort,
    id,
    q,
    sla_condition_id: slaConditionId,
    priority_id: priorityId
  } = transformers_default(rest, [
    merge_transformer_default(getDefaultGetParams_default()),
    (params) => ({ ...params, q: params.search }),
    sanitize_transformer_default(fieldsToSend18),
    camelToSnake_transformer_default()
  ]);
  try {
    const response = await slaConditionsService.listSLAConditions(
      parentId,
      page,
      size,
      fields,
      sort,
      id,
      q,
      slaConditionId,
      priorityId
    );
    const { items, next } = transformers_default(response.data, [
      merge_transformer_default(getDefaultGetListResponse_default())
    ]);
    return {
      items: transformers_default(items, [snakeToCamel_transformer_default()]),
      next
    };
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getCondition = async ({ parentId, itemId: id }) => {
  const itemResponseHandler = (item) => {
    return item.slaCondition;
  };
  try {
    const response = await slaConditionsService.locateSLACondition(
      parentId,
      id,
      fieldsToSend17
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default(), itemResponseHandler]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var updateCondition = async ({ itemInstance, itemId: id }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend17)
  ]);
  try {
    const response = await slaConditionsService.updateSLACondition(
      itemInstance.slaId,
      id,
      item
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var addCondition = async ({ itemInstance, parentId }) => {
  const item = transformers_default(itemInstance, [
    camelToSnake_transformer_default(),
    sanitize_transformer_default(fieldsToSend17)
  ]);
  try {
    const response = await slaConditionsService.createSLACondition(
      parentId,
      item
    );
    return transformers_default(response.data, [snakeToCamel_transformer_default()]);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var deleteCondition = async ({ id, parentId }) => {
  try {
    const response = await slaConditionsService.deleteSLACondition(
      parentId,
      id
    );
    return transformers_default(response.data, []);
  } catch (err) {
    throw transformers_default(err, [notify_transformer_default]);
  }
};
var getLookup3 = async (params) => getConditionsList({
  ...params,
  fields: params.fields || ["id", "name"]
});
var SLAConditionsAPI = {
  getList: getConditionsList,
  get: getCondition,
  update: updateCondition,
  delete: deleteCondition,
  add: addCondition,
  getLookup: getLookup3
};
var slaConditions_default = SLAConditionsAPI;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-sla-condition/config.js
var slasConditionsSearchMethod = slaConditions_default.getLookup;
var slasSearchMethod = slas_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CaseSourceFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-source/case-source-filter-value-field.vue";
import CaseSourceFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-source/case-source-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-source/config.js
var import_dist190 = __toESM(require_dist(), 1);
var import_dist191 = __toESM(require_dist2(), 1);
var import_dist192 = __toESM(require_dist3(), 1);
var searchMethod8 = caseSources_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import CaseStatusFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-status/case-status-filter-value-field.vue";
import CaseStatusFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-status/case-status-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/case-status/config.js
var import_dist193 = __toESM(require_dist(), 1);
var import_dist194 = __toESM(require_dist2(), 1);
var import_dist195 = __toESM(require_dist3(), 1);
var caseStatusesSearchMethod = caseStatuses_default.getLookup;
var caseStatusConditionsSearchMethod = caseStatusConditions_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact/config.js
var import_dist196 = __toESM(require_dist(), 1);
var import_dist197 = __toESM(require_dist2(), 1);
var import_dist198 = __toESM(require_dist3(), 1);
var searchMethod9 = contacts_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import ContactFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact/contact-filter-value-field.vue";
import ContactFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact/contact-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-group/index.ts
var import_dist199 = __toESM(require_dist(), 1);
var import_dist200 = __toESM(require_dist2(), 1);
var import_dist201 = __toESM(require_dist3(), 1);
import ContactGroupFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-group/contact-group-filter-value-field.vue";
import ContactGroupFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-group/contact-group-filter-value-preview.vue";
var ContactGroupFilterConfig = class extends WtSysTypeFilterConfig {
  constructor(params = {}) {
    super(params);
    __publicField(this, "name", FilterOption.ContactGroup);
    __publicField(this, "valueInputComponent", ContactGroupFilterValueField);
    __publicField(this, "valuePreviewComponent", ContactGroupFilterValuePreview);
    __publicField(this, "hideUnassigned");
    if ("hideUnassigned" in params) {
      this.hideUnassigned = params.hideUnassigned;
    }
  }
  searchRecords(params, { filterValue } = {}) {
    var _a, _b, _c;
    const id = ((_b = (_a = params.id) == null ? void 0 : _a.list) == null ? void 0 : _b.length) ? (_c = params.id) == null ? void 0 : _c.list : params.id || (filterValue == null ? void 0 : filterValue.list);
    return contactGroups_default.getLookup({
      ...params,
      id,
      type: "STATIC"
    });
  }
};
var createContactGroupFilterConfig = (params) => new ContactGroupFilterConfig(params);

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import ContactGroupFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-group/contact-group-filter-value-field.vue";
import ContactGroupFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-group/contact-group-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-label/index.ts
var import_dist202 = __toESM(require_dist(), 1);
var import_dist203 = __toESM(require_dist2(), 1);
var import_dist204 = __toESM(require_dist3(), 1);
import ContactLabelFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-label/contact-label-filter-value-field.vue";
import ContactLabelFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-label/contact-label-filter-value-preview.vue";
var ContactLabelFilterConfig = class extends WtSysTypeFilterConfig {
  constructor() {
    super(...arguments);
    __publicField(this, "name", FilterOption.ContactLabel);
    __publicField(this, "valueInputComponent", ContactLabelFilterValueField);
    __publicField(this, "valuePreviewComponent", ContactLabelFilterValuePreview);
  }
  searchRecords(params, { filterValue } = {}) {
    if (filterValue) return { items: filterValue };
    return labels_default.getLookup(params);
  }
};
var createContactLabelFilterConfig = (params) => new ContactLabelFilterConfig(params);

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import ContactLabelFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-label/contact-label-filter-value-field.vue";
import ContactLabelFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-label/contact-label-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-owner/index.ts
var import_dist205 = __toESM(require_dist(), 1);
var import_dist206 = __toESM(require_dist2(), 1);
var import_dist207 = __toESM(require_dist3(), 1);
import ContactOwnerFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-owner/contact-owner-filter-value-field.vue";
import ContactOwnerFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-owner/contact-owner-filter-value-preview.vue";
var ContactOwnerFilterConfig = class extends WtSysTypeFilterConfig {
  constructor() {
    super(...arguments);
    __publicField(this, "name", FilterOption.ContactOwner);
    __publicField(this, "valueInputComponent", ContactOwnerFilterValueField);
    __publicField(this, "valuePreviewComponent", ContactOwnerFilterValuePreview);
  }
  searchRecords(params) {
    return users_default.getLookup(params);
  }
};
var createContactOwnerFilterConfig = (params) => new ContactOwnerFilterConfig(params);

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import ContactOwnerFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-owner/contact-owner-filter-value-field.vue";
import ContactOwnerFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/contact-owner/contact-owner-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/gateway/config.js
var import_dist208 = __toESM(require_dist(), 1);
var import_dist209 = __toESM(require_dist2(), 1);
var import_dist210 = __toESM(require_dist3(), 1);
var searchMethod10 = gateways_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import GatewayFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/gateway/gateway-filter-value-field.vue";
import GatewayFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/gateway/gateway-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/grantee/config.js
var import_dist211 = __toESM(require_dist(), 1);
var import_dist212 = __toESM(require_dist2(), 1);
var import_dist213 = __toESM(require_dist3(), 1);
var searchMethod11 = roles_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import GranteeFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/grantee/grantee-filter-value-field.vue";
import GranteeFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/grantee/grantee-filter-value-preview.vue";
import HangupCauseFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/hangup-cause/hangup-cause-filter-value-field.vue";
import HangupCauseFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/hangup-cause/hangup-cause-filter-value-preview.vue";
import HasAttachmentFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-attachment/has-attachment-filter-value-field.vue";
import HasAttachmentFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-attachment/has-attachment-filter-value-preview.vue";
import HasFileFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-file/has-file-filter-value-field.vue";
import HasFileFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-file/has-file-filter-value-preview.vue";
import HasRatingFilterValueField from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-rating/has-rating-filter-value-field.vue";
import HasRatingFilterValuePreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-rating/has-rating-filter-value-preview.vue";
import HasTranscriptionFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-transcription/has-transcription-filter-value-field.vue";
import HasTranscriptionFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-transcription/has-transcription-filter-value-preview.vue";
import HasUserFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-user/has-user-filter-value-field.vue";
import HasUserFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/has-user/has-user-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/queue/config.js
var import_dist214 = __toESM(require_dist(), 1);
var import_dist215 = __toESM(require_dist2(), 1);
var import_dist216 = __toESM(require_dist3(), 1);
var searchMethod12 = queues_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import QueueFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/queue/queue-filter-value-field.vue";
import QueueFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/queue/queue-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/rated-by/config.js
var import_dist217 = __toESM(require_dist(), 1);
var import_dist218 = __toESM(require_dist2(), 1);
var import_dist219 = __toESM(require_dist3(), 1);
var searchMethod13 = users_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import RatedByFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/rated-by/rated-by-filter-value-field.vue";
import RatedByFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/rated-by/rated-by-filter-value-preview.vue";
import RatingFromToFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/rating/rating-from-to-filter-value-field.vue";
import RatingFromToFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/rating/rating-from-to-filter-value-preview.vue";
import ScoreFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/score/score-from-to-filter-value-field.vue";
import ScoreFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/score/score-from-to-filter-value-preview.vue";
import TagFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/tag/tag-filter-value-field.vue";
import TagFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/tag/tag-filter-value-preview.vue";
import TalkDurationFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/talk-duration/talk-duration-filter-value-field.vue";
import TalkDurationFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/talk-duration/talk-duration-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/team/config.js
var import_dist220 = __toESM(require_dist(), 1);
var import_dist221 = __toESM(require_dist2(), 1);
var import_dist222 = __toESM(require_dist3(), 1);
var searchMethod14 = teams_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import TeamFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/team/team-filter-value-field.vue";
import TeamFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/team/team-filter-value-preview.vue";
import TotalDurationFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/total-duration/total-duration-filter-value-field.vue";
import TotalDurationFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/total-duration/total-duration-filter-value-preview.vue";

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/user/config.js
var import_dist223 = __toESM(require_dist(), 1);
var import_dist224 = __toESM(require_dist2(), 1);
var import_dist225 = __toESM(require_dist3(), 1);
var searchMethod15 = users_default.getLookup;

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/index.ts
import UserFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/user/user-filter-value-field.vue";
import UserFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/user/user-filter-value-preview.vue";
import VariableFilter from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/variable/variable-filter-value-field.vue";
import VariableFilterPreview from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/components/variable/variable-filter-value-preview.vue";
var FilterOptionToValueComponentMap = {
  [FilterOption.Agent]: AgentFilter,
  [FilterOption.AmdResult]: AmdResultFilter,
  [FilterOption.Contact]: ContactFilter,
  [FilterOption.CallDirection]: CallDirectionFilterValueField,
  [FilterOption.Rated]: HasRatingFilterValueField,
  [FilterOption.Gateway]: GatewayFilter,
  [FilterOption.Grantee]: GranteeFilter,
  [FilterOption.HangupCause]: HangupCauseFilterValueField,
  [FilterOption.Queue]: QueueFilter,
  [FilterOption.RatedBy]: RatedByFilter,
  [FilterOption.HasFile]: HasFileFilter,
  [FilterOption.Score]: ScoreFilter,
  [FilterOption.Tag]: TagFilter,
  [FilterOption.TalkDuration]: TalkDurationFilter,
  [FilterOption.Team]: TeamFilter,
  [FilterOption.TotalDuration]: TotalDurationFilter,
  [FilterOption.HasTranscription]: HasTranscriptionFilter,
  [FilterOption.HasUser]: HasUserFilter,
  [FilterOption.User]: UserFilter,
  [FilterOption.Variable]: VariableFilter,
  [FilterOption.CreatedAt]: DateTimeOptionsFilterValueField,
  [FilterOption.CaseStatus]: CaseStatusFilterValueField,
  [FilterOption.CaseSource]: CaseSourceFilterValueField,
  [FilterOption.CaseService]: CaseServiceFilterValueField,
  [FilterOption.CaseAuthor]: CaseAuthorFilterValueField,
  [FilterOption.CaseReporter]: CaseReporterFilterValueField,
  [FilterOption.CaseImpacted]: CaseImpactedFilterValueField,
  [FilterOption.CasePriority]: CasePriorityFilterValueField,
  [FilterOption.CaseCloseReasonGroups]: CaseCloseReasonGroupsFilterValueField,
  [FilterOption.Rating]: RatingFromToFilter,
  [FilterOption.CaseSla]: CaseSlaFilterValueField,
  [FilterOption.CaseSlaCondition]: CaseSlaConditionFilterValueField,
  [FilterOption.CaseReactionTime]: CaseReactionTimeFilterValueField,
  [FilterOption.CaseResolutionTime]: CaseResolutionTimeFilterValueField,
  [FilterOption.CaseActualReactionTime]: CaseActualReactionTimeFilterValueField,
  [FilterOption.CaseActualResolutionTime]: CaseActualResolutionTimeFilterValueField,
  [FilterOption.HasAttachment]: HasAttachmentFilter
};
var FilterOptionToPreviewComponentMap = {
  [FilterOption.CreatedAt]: DateTimeOptionsFilterValuePreview,
  [FilterOption.Agent]: AgentFilterPreview,
  [FilterOption.AmdResult]: AmdResultFilterPreview,
  [FilterOption.Contact]: ContactFilterPreview,
  [FilterOption.CallDirection]: CallDirectionFilterValuePreview,
  [FilterOption.Rated]: HasRatingFilterValuePreview,
  [FilterOption.Gateway]: GatewayFilterPreview,
  [FilterOption.Grantee]: GranteeFilterPreview,
  [FilterOption.HangupCause]: HangupCauseFilterValuePreview,
  [FilterOption.Queue]: QueueFilterPreview,
  [FilterOption.RatedBy]: RatedByFilterPreview,
  [FilterOption.HasFile]: HasFileFilterPreview,
  [FilterOption.Score]: ScoreFilterPreview,
  [FilterOption.Tag]: TagFilterPreview,
  [FilterOption.TalkDuration]: TalkDurationFilterPreview,
  [FilterOption.Team]: TeamFilterPreview,
  [FilterOption.TotalDuration]: TotalDurationFilterPreview,
  [FilterOption.HasTranscription]: HasTranscriptionFilterPreview,
  [FilterOption.HasUser]: HasUserFilterPreview,
  [FilterOption.User]: UserFilterPreview,
  [FilterOption.Variable]: VariableFilterPreview,
  [FilterOption.CaseStatus]: CaseStatusFilterValuePreview,
  [FilterOption.CaseSource]: CaseSourceFilterValuePreview,
  [FilterOption.CaseService]: CaseServiceFilterValuePreview,
  [FilterOption.CaseAuthor]: CaseAuthorFilterValuePreview,
  [FilterOption.CaseReporter]: CaseReporterFilterValuePreview,
  [FilterOption.CaseImpacted]: CaseImpactedFilterValuePreview,
  [FilterOption.CasePriority]: CasePriorityFilterValuePreview,
  [FilterOption.CaseCloseReasonGroups]: CaseCloseReasonGroupsFilterValuePreview,
  [FilterOption.Rating]: RatingFromToFilterPreview,
  [FilterOption.CaseSla]: CaseSlaFilterValuePreview,
  [FilterOption.CaseSlaCondition]: CaseSlaConditionFilterValuePreview,
  [FilterOption.CaseReactionTime]: CaseReactionTimeFilterValuePreview,
  [FilterOption.CaseResolutionTime]: CaseResolutionTimeFilterValuePreview,
  [FilterOption.CaseActualReactionTime]: CaseActualReactionTimeFilterValuePreview,
  [FilterOption.CaseActualResolutionTime]: CaseActualResolutionTimeFilterValuePreview,
  [FilterOption.HasAttachment]: HasAttachmentFilterPreview
};
var FilterOptionToPreviewApiSearchMethodMap = {
  [FilterOption.Agent]: searchMethod,
  [FilterOption.Gateway]: searchMethod10,
  [FilterOption.Grantee]: searchMethod11,
  [FilterOption.Queue]: searchMethod12,
  [FilterOption.RatedBy]: searchMethod13,
  [FilterOption.CaseReporter]: searchMethod5,
  [FilterOption.CaseSla]: searchMethod7,
  [FilterOption.CaseService]: servicesSearchMethod,
  [FilterOption.CaseSource]: searchMethod8,
  [FilterOption.CaseStatus]: ({ id: value }) => caseStatusConditionsSearchMethod({
    parentId: value == null ? void 0 : value.selection,
    id: value == null ? void 0 : value.conditions
  }),
  [FilterOption.User]: searchMethod15,
  [FilterOption.CaseAuthor]: searchMethod2,
  [FilterOption.CasePriority]: searchMethod4,
  [FilterOption.CaseImpacted]: searchMethod3,
  [FilterOption.Contact]: searchMethod9,
  [FilterOption.Team]: searchMethod14,
  [FilterOption.CaseCloseReasonGroups]: ({ id: value, ...rest }) => {
    return caseCloseReasonsSearchMethod({
      parentId: value == null ? void 0 : value.selection,
      id: value == null ? void 0 : value.conditions,
      ...rest
    });
  },
  [FilterOption.CaseSlaCondition]: ({ id: value, ...rest }) => {
    return slasConditionsSearchMethod({
      parentId: value == null ? void 0 : value.selection,
      id: value == null ? void 0 : value.conditions,
      ...rest
    });
  }
};
var FilterOptionToFilterConfigCreatorMap = {
  [FilterOption.CaseAssignee]: createCaseAssigneeFilterConfig,
  [FilterOption.ContactLabel]: createContactLabelFilterConfig,
  [FilterOption.ContactOwner]: createContactOwnerFilterConfig,
  [FilterOption.ContactGroup]: createContactGroupFilterConfig
};

// node_modules/@webitel/ui-datalist/src/modules/filters/modules/filterConfig/classes/createFilterConfig.ts
var createFilterConfig = (params) => {
  const { name } = params;
  const filterConfigClass = FilterOptionToFilterConfigCreatorMap[name];
  if (filterConfigClass) {
    return filterConfigClass(params);
  }
  return new FilterConfig({
    valueInputComponent: FilterOptionToValueComponentMap[name],
    valuePreviewComponent: FilterOptionToPreviewComponentMap[name],
    ...params
  });
};
export {
  DynamicFilterSearchComponent,
  Filter,
  FilterOption,
  TableFiltersPanelComponent,
  createFilterConfig,
  createFiltersManager
};
//# sourceMappingURL=@webitel_ui-datalist_filters.js.map
