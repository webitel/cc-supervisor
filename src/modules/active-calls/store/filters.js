import QueryFiltersStoreModule from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';

const state = {
  direction: {
    value: [],
    defaultValue: [],
    storedProp: 'value',
  },
  user: {
    value: [],
    defaultValue: [],
    storedProp: 'id',
    multiple: true,
  },
  gateway: {
    value: [],
    defaultValue: [],
    storedProp: 'id',
    multiple: true,
  },
  queue: {
    value: [],
    defaultValue: [],
    storedProp: 'id',
    multiple: true,
  },
  agent: {
    value: [],
    defaultValue: [],
    storedProp: 'id',
    multiple: true,
  },
};

export default new QueryFiltersStoreModule({ state }).getModule();
