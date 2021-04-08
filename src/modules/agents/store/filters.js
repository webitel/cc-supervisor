import QueryFiltersStoreModule from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';

const state = {
  search: {
    value: '',
    defaultValue: '',
  },
  status: {
    value: [],
    defaultValue: [],
    storedProp: 'value',
    multiple: true,
  },
  queue: {
    value: [],
    defaultValue: [],
    storedProp: 'id',
    multiple: true,
  },
  team: {
    value: [],
    defaultValue: [],
    storedProp: 'id',
    multiple: true,
  },
  utilization: {
    value: {},
    defaultValue: {},
    storedProp: 'value',
  },
};

export default new QueryFiltersStoreModule({ state }).getModule();
