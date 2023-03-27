import EnumFilterSchema
  from '@webitel/ui-sdk/src/modules/QueryFilters/classes/EnumFilterSchema';
import QueryFiltersStoreModule from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';
import BaseFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/BaseFilterSchema';
import RatedCallsOptionsLookup
  from '../../../../../../../../_shared/lookups/lookups/RatedCallsOptions.lookup';

const state = {
  from: new BaseFilterSchema({
    value: new Date().setHours(0, 0, 0, 0),
    defaultValue: new Date().setHours(0, 0, 0, 0),
  }),
  to: new BaseFilterSchema({
    value: new Date().setHours(23, 59, 59, 999),
    defaultValue: new Date().setHours(23, 59, 59, 999),
  }),
  rated: new EnumFilterSchema({
    locale: { label: 'filters.rated.title' },
    options: RatedCallsOptionsLookup,
    multiple: false,
    closeOnSelect: true,
  }),
};

export default new QueryFiltersStoreModule({ state }).getModule();
