import { createTableStore } from '@webitel/ui-datalist';
import { ref } from 'vue';

export function createQueueTableStoreWrapper(namespace: string, options) {
  const {
    apiModule,
    ...restOptions
  } = options;

  const aggs = ref({});

  // Wrap the API module to extract aggs from response
  const wrappedApiModule = {
    ...apiModule,
    getList: async (params) => {
      const response = await apiModule.getList(params);

      // Extract aggs from response
      if (response?.aggs) {
        aggs.value = response.aggs;
      }

      return response;
    },
  };

  // Create the base table store with wrapped API
  const baseStore = createTableStore(namespace, {
    ...restOptions,
    apiModule: wrappedApiModule,
  });

  return () => {
    const store = baseStore();

    // Add aggs as a ref to the store instance
    // This preserves Pinia's reactivity system and works with storeToRefs
    if (!('aggs' in store)) {
      store.aggs = aggs;
    }

    return store;
  };
}

