import QueryFiltersStoreModule from '@webitel/ui-sdk/src/modules/QueryFilters/store/QueryFiltersStoreModule';

const state = {
  search: {
    value: '',
    defaultValue: '',
  },
  period: {
    value: [],
    defaultValue: [],
    storedProp: 'value',
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
  queueType: {
    value: [],
    defaultValue: [],
    storedProp: 'value',
    multiple: true,
  },
};

export default new QueryFiltersStoreModule({ state }).getModule();
