import QueryFiltersStoreModule from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';
import BaseFilterSchema from '@webitel/ui-sdk/src/modules/QueryFilters/classes/BaseFilterSchema';

const state = {
  from: new BaseFilterSchema({
    value: new Date().setHours(0, 0, 0, 0),
    defaultValue: new Date().setHours(0, 0, 0, 0),
  }),
  to: new BaseFilterSchema({
    value: new Date().setHours(23, 59, 59, 999),
    defaultValue: new Date().setHours(23, 59, 59, 999),
  }),
};

export default new QueryFiltersStoreModule({ state }).getModule();
