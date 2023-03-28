import EnumFilterSchema
  from '@webitel/ui-sdk/src/modules/QueryFilters/classes/EnumFilterSchema';
import QueryFiltersStoreModule from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';
import BaseFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/BaseFilterSchema';
import RatedCallsOptionsLookup
  from '../../../../../../../../_shared/lookups/lookups/RatedCallsOptions.lookup';
import ApiFilterSchema from "@webitel/ui-sdk/src/modules/QueryFilters/classes/ApiFilterSchema";
import AgentFilterAPI from "@/modules/_shared/lookups/api/agentLookupApi";
import CallFilterAPI from "@/modules/_shared/lookups/api/callLookupApi";
import {AgentServiceApi} from "webitel-sdk";


const state = {
  from: new BaseFilterSchema({
    value: new Date().setHours(0, 0, 0, 0),
    defaultValue: new Date().setHours(0, 0, 0, 0),
  }),
  to: new BaseFilterSchema({
    value: new Date().setHours(23, 59, 59, 999),
    defaultValue: new Date().setHours(23, 59, 59, 999),
  }),
  // rated: new EnumFilterSchema({
  //   locale: { label: 'filters.rated.title' },
  //   options: RatedCallsOptionsLookup,
  //   multiple: false,
  //   closeOnSelect: true,
  // }),
  rated: new ApiFilterSchema({
    API: CallFilterAPI,
    locale: { label: 'filters.rated.title' },
  }),
};

export default new QueryFiltersStoreModule({ state }).getModule();
