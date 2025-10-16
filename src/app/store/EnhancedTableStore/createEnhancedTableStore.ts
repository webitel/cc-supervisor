import { createTableStore } from '@webitel/ui-datalist';
import { ref } from 'vue';

export function createEnhancedTableStore(namespace: string, options) {
  const {
    apiModule,
    extractFromResponse,
    defaultValues = {},
    ...restOptions
  } = options;

  // Create refs for each property to extract
  const extractedRefs = {};
  extractFromResponse.forEach(propName => {
    extractedRefs[propName] = ref(defaultValues[propName] ?? {});
  });

  // Wrap the API module to extract specified properties from response
  const wrappedApiModule = {
    ...apiModule,
    getList: async (params) => {
      const response = await apiModule.getList(params);

      // Extract each specified property from response
      if (response) {
        extractFromResponse.forEach(propName => {
          if (propName in response) {
            extractedRefs[propName].value = response[propName];
          }
        });
      }

      return response;
    },
  };

  // Create the base table store with wrapped API
  const baseStore = createTableStore(namespace, {
    ...restOptions,
    apiModule: wrappedApiModule,
  });

  // Return a function that creates the enhanced store
  return () => {
    const store = baseStore();

    // Add all extracted properties as refs to the store instance
    // This preserves Pinia's reactivity system and works with storeToRefs
    extractFromResponse.forEach(propName => {
      if (!(propName in store)) {
        store[propName] = extractedRefs[propName];
      }
    });

    return store;
  };
}

