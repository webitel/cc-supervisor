import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  defineStore,
  storeToRefs
} from "./chunk-LDM2NRRE.js";
import {
  useRoute,
  useRouter
} from "./chunk-RV34Z7WP.js";
import {
  createFiltersManager
} from "./chunk-Y2RNBSIB.js";
import "./chunk-Y7OW5ORD.js";
import "./chunk-K5VDDDOW.js";
import "./chunk-RK4D342A.js";
import {
  SortSymbols,
  sortToQueryAdapter
} from "./chunk-4BU36TI7.js";
import "./chunk-6Q3UUCCZ.js";
import "./chunk-6LY73PXU.js";
import "./chunk-TBMZGSYP.js";
import "./chunk-ALYEIJI5.js";
import "./chunk-SZR5SZ7W.js";
import "./chunk-663REQXU.js";
import "./chunk-KKIOOXCK.js";
import "./chunk-3LV7TFCB.js";
import "./chunk-D3J766ED.js";
import "./chunk-5SXUFGYU.js";
import "./chunk-2RMMXMED.js";
import "./chunk-VVVSXXDF.js";
import {
  set_default
} from "./chunk-AU3PIKNZ.js";
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
  computed,
  isRef,
  nextTick,
  reactive,
  ref,
  toRefs,
  unref,
  watch
} from "./chunk-QI253I2C.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-datalist/src/index.ts
var import_dist34 = __toESM(require_dist());
var import_dist35 = __toESM(require_dist2());
var import_dist36 = __toESM(require_dist3());

// node_modules/@webitel/ui-datalist/src/modules/table/createTableStore.store.ts
var import_dist31 = __toESM(require_dist(), 1);
var import_dist32 = __toESM(require_dist2(), 1);
var import_dist33 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/_shared/createDatalistStore.ts
var import_dist7 = __toESM(require_dist(), 1);
var import_dist8 = __toESM(require_dist2(), 1);
var import_dist9 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/scripts/utils.ts
var import_dist = __toESM(require_dist(), 1);
var import_dist2 = __toESM(require_dist2(), 1);
var import_dist3 = __toESM(require_dist3(), 1);
var applyStorePatch = (store, patch) => {
  for (const key of Object.keys(patch)) {
    const value = patch[key];
    const target = store[key];
    if (isRef(target)) {
      target.value = isRef(value) ? unref(value) : value;
    } else {
      store[key] = isRef(value) ? value : ref(value);
    }
  }
};

// node_modules/@webitel/ui-datalist/src/modules/types/StoreProvider.ts
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
var DatalistStoreProvider = {
  Composable: "composable",
  Pinia: "pinia"
};

// node_modules/@webitel/ui-datalist/src/modules/_shared/createDatalistStore.ts
var defaultStoreType = DatalistStoreProvider.Pinia;
var makeThisToRefs = (store, storeType) => {
  const thisStoreType = storeType || defaultStoreType;
  if (thisStoreType === DatalistStoreProvider.Pinia) {
    return storeToRefs(store);
  }
  return toRefs(store);
};
var createDatalistStore = ({
  config,
  namespace,
  storeBody
}) => {
  const thisStoreType = config.storeType || defaultStoreType;
  if (thisStoreType === DatalistStoreProvider.Composable) {
    const storeFactory = storeBody({
      ...config,
      storeType: thisStoreType
    });
    storeFactory.$patch = (val) => applyStorePatch(storeFactory, val);
    return () => storeFactory;
  }
  if (thisStoreType === DatalistStoreProvider.Pinia) {
    return defineStore(
      namespace,
      () => storeBody({
        ...config,
        storeType: thisStoreType
      })
    );
  }
  throw new Error(`Unsupported store type: ${thisStoreType}`);
};

// node_modules/@webitel/ui-datalist/src/modules/filters/createTableFiltersStore.ts
var import_dist22 = __toESM(require_dist(), 1);
var import_dist23 = __toESM(require_dist2(), 1);
var import_dist24 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/persist/PersistedStorage.types.ts
var import_dist10 = __toESM(require_dist(), 1);
var import_dist11 = __toESM(require_dist2(), 1);
var import_dist12 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/persist/usePersistedStorage.ts
var import_dist19 = __toESM(require_dist(), 1);
var import_dist20 = __toESM(require_dist2(), 1);
var import_dist21 = __toESM(require_dist3(), 1);

// node_modules/@webitel/ui-datalist/src/modules/persist/useLocalStoragePersistedStorage.ts
var import_dist13 = __toESM(require_dist(), 1);
var import_dist14 = __toESM(require_dist2(), 1);
var import_dist15 = __toESM(require_dist3(), 1);
var separator = ";";
var makePath = (storagePath, key) => `${storagePath}/${key}`;
var useLocalStoragePersistedStorage = ({
  storagePath = ""
}) => {
  const getItem = async (key) => {
    const value = localStorage.getItem(makePath(storagePath, key));
    try {
      return value.split(separator).join();
    } catch {
      return value;
    }
  };
  const setItem = async (key, inputValue) => {
    const value = Array.isArray(inputValue) ? inputValue.join(separator) : inputValue;
    localStorage.setItem(makePath(storagePath, key), value);
  };
  const removeItem = async (key) => {
    localStorage.removeItem(makePath(storagePath, key));
  };
  return {
    getItem,
    setItem,
    removeItem
  };
};

// node_modules/@webitel/ui-datalist/src/modules/persist/useRoutePersistedStorage.ts
var import_dist16 = __toESM(require_dist(), 1);
var import_dist17 = __toESM(require_dist2(), 1);
var import_dist18 = __toESM(require_dist3(), 1);
var useRoutePersistedStorage = () => {
  const router = useRouter();
  const route = useRoute();
  const getItem = async (key) => {
    return route.query[key];
  };
  const setItem = async (key, value) => {
    await router.replace({
      name: route.name,
      params: route.params,
      hash: route.hash,
      query: {
        ...route.query,
        [key]: value
      }
    });
  };
  const removeItem = async (key) => {
    const query = { ...route.query };
    delete query[key];
    await router.replace({
      name: route.name,
      params: route.params,
      hash: route.hash,
      query
    });
  };
  return {
    getItem,
    setItem,
    removeItem
  };
};

// node_modules/@webitel/ui-datalist/src/modules/persist/usePersistedStorage.ts
var usePersistedStorage = ({
  name,
  value,
  storages: configStorages = ["route" /* Route */],
  storagePath,
  startWatchManually = false,
  onStore,
  onRestore
}) => {
  let unwatch = null;
  const setItemFns = [];
  const getItemFns = [];
  const removeItemFns = [];
  const composedValueGetter = async (name2) => {
    const settledResults = await Promise.allSettled(
      getItemFns.map((getter) => getter(name2))
    );
    return settledResults.reduce((acc, result) => {
      if (result.status === "fulfilled") {
        return [...acc, result.value];
      }
      return acc;
    }, []);
  };
  const storages = Array.isArray(configStorages) ? configStorages : [configStorages];
  if (storages.includes("route" /* Route */)) {
    const { setItem, getItem, removeItem } = useRoutePersistedStorage();
    setItemFns.push(setItem);
    getItemFns.push(getItem);
    removeItemFns.push(removeItem);
  }
  if (storages.includes("localStorage" /* LocalStorage */)) {
    const { setItem, getItem, removeItem } = useLocalStoragePersistedStorage({
      storagePath
    });
    setItemFns.push(setItem);
    getItemFns.push(getItem);
    removeItemFns.push(removeItem);
  }
  const startWatch = () => {
    unwatch = watch(
      value,
      async () => {
        if (onStore) {
          const save = async ({ name: name2, value: storedValue }) => {
            setItemFns.forEach((setter) => {
              setter(name2, storedValue);
            });
          };
          await onStore(save, { name, value });
        } else {
          const storedValue = value.value;
          setItemFns.forEach((setter) => {
            setter(name, storedValue);
          });
        }
      },
      { deep: true }
    );
  };
  const restore = async () => {
    if (onRestore) {
      const restore2 = async (name2) => {
        const restoredValues = await composedValueGetter(name2);
        return restoredValues.find((value2) => {
          return value2 != null;
        });
      };
      await onRestore(restore2, name);
    } else {
      const restoredValues = await composedValueGetter(name);
      const restoredValue = restoredValues.find((value2) => value2 !== null);
      if (restoredValue !== void 0) {
        value.value = restoredValue;
      }
    }
    if (!startWatchManually) {
      startWatch();
    }
  };
  const reset = async () => {
    await Promise.all(removeItemFns.map((removeItem) => removeItem(name)));
  };
  const endWatch = () => unwatch && unwatch();
  return {
    watch: startWatch,
    unwatch: endWatch,
    restore,
    reset
  };
};

// node_modules/@webitel/ui-datalist/src/modules/filters/createTableFiltersStore.ts
var tableFiltersStoreBody = (namespace, config) => {
  const filtersManager = reactive(
    createFiltersManager(config == null ? void 0 : config.filtersManagerConfig)
  );
  const isRestoring = ref(false);
  const searchMode = ref("");
  const updateSearchMode = (newSearch) => {
    searchMode.value = newSearch;
  };
  const hasFilter = filtersManager.hasFilter.bind(filtersManager);
  const addFilter = filtersManager.addFilter.bind(filtersManager);
  const updateFilter = filtersManager.updateFilter.bind(filtersManager);
  const deleteFilter = filtersManager.deleteFilter.bind(filtersManager);
  const filtersList = computed(() => filtersManager.getFiltersList());
  const setupPersistence = () => {
    const { restore: restoreFilters } = usePersistedStorage({
      name: "filters",
      value: computed(
        () => filtersManager
      ),
      storages: ["route" /* Route */],
      /* use custom .toString() logic, provided by FiltersManager */
      onStore: async (save, { name }) => {
        const snapshotStr = filtersManager.toString();
        return save({ name, value: snapshotStr });
      },
      /* use custom .fromString() logic, provided by FiltersManager */
      onRestore: async (restore, name) => {
        isRestoring.value = true;
        const snapshotStr = await restore(name);
        if (snapshotStr) filtersManager.fromString(snapshotStr);
        isRestoring.value = false;
      }
    });
    const { restore: restoreSearchMode } = usePersistedStorage({
      name: "searchMode",
      value: searchMode,
      storages: ["localStorage" /* LocalStorage */],
      storagePath: namespace,
      onStore: async (save, { name }) => {
        return save({ name, value: searchMode.value });
      },
      onRestore: async (restore, name) => {
        const value = await restore(name);
        if (value) searchMode.value = value;
      }
    });
    return Promise.all([restoreFilters(), restoreSearchMode()]);
  };
  return {
    filtersManager,
    isRestoring,
    searchMode,
    filtersList,
    hasFilter,
    addFilter,
    updateFilter,
    deleteFilter,
    updateSearchMode,
    setupPersistence
  };
};
var createTableFiltersStore = (namespace, config) => {
  const id = `${namespace}/filters`;
  return createDatalistStore({
    storeBody: () => tableFiltersStoreBody(namespace, config),
    config,
    namespace: id
  });
};

// node_modules/@webitel/ui-datalist/src/modules/headers/createTableHeadersStore.ts
var import_dist25 = __toESM(require_dist(), 1);
var import_dist26 = __toESM(require_dist2(), 1);
var import_dist27 = __toESM(require_dist3(), 1);
var tableHeadersStoreBody = ({
  rawHeaders,
  id
}) => {
  const headers = ref(rawHeaders);
  const isReorderingColumn = ref(false);
  const shownHeaders = computed(() => {
    return headers.value.filter((header) => header.show);
  });
  const fields = computed(() => {
    return shownHeaders.value.map((header) => header.field);
  });
  const sort = computed(() => {
    const encodeSortQuery = ({ column, order }) => `${sortToQueryAdapter(order)}${column.field}`;
    const sortedCol = headers.value.find((header) => header.sort);
    return sortedCol ? encodeSortQuery({ column: sortedCol, order: sortedCol.sort }) : null;
  });
  const columnWidths = computed(() => {
    return headers.value.reduce((acc, header) => {
      if (header.width) {
        acc[header.field] = header.width;
      }
      return acc;
    }, {});
  });
  const $reset = () => {
    headers.value = rawHeaders;
  };
  const updateShownHeaders = (value) => {
    headers.value = value;
  };
  const setHeaderOrder = (orderedFields) => {
    const arrayFieldOrder = /* @__PURE__ */ new Map();
    headers.value.forEach((header, idx) => arrayFieldOrder.set(header.field, idx));
    const newOrder = orderedFields.map((field) => arrayFieldOrder.get(field));
    return newOrder.map((idx) => headers.value[idx]);
  };
  const updateFields = (fields2) => {
    const newHeaders = headers.value.map((header) => ({
      ...header,
      show: fields2.includes(header.field)
    }));
    const customFields = fields2.filter((field) => !headers.value.some((header) => header.field === field));
    const customFieldHeaders = customFields.map((field) => ({
      show: true,
      field,
      shouldBeInitialized: true
    }));
    const mergedHeaders = [...newHeaders, ...customFieldHeaders];
    const orderedFields = fields2.filter((field) => mergedHeaders.some((header) => header.field === field));
    const reordered = setHeaderOrder(orderedFields);
    updateShownHeaders(reordered);
  };
  const updateSort = (column) => {
    const getNextSortOrder = (sort2) => {
      switch (sort2) {
        case SortSymbols.NONE:
          return SortSymbols.ASC;
        case SortSymbols.ASC:
          return SortSymbols.DESC;
        case SortSymbols.DESC:
          return SortSymbols.NONE;
        default:
          return SortSymbols.ASC;
      }
    };
    const changeHeadersSort = ({ headers: headers2, sortedHeader, order: order2 }) => {
      return headers2.map((header) => {
        if (header.sort === void 0) return header;
        let newSort = null;
        if (header.field === sortedHeader.field) {
          newSort = order2;
        }
        return {
          ...header,
          sort: newSort
        };
      });
    };
    const order = getNextSortOrder(column.sort);
    headers.value = changeHeadersSort({
      headers: headers.value,
      sortedHeader: column,
      order
    });
  };
  const setupPersistence = async () => {
    const { restore: restoreFields } = usePersistedStorage({
      name: "fields",
      value: fields,
      storages: ["localStorage" /* LocalStorage */, "route" /* Route */],
      storagePath: id,
      onStore: (save, { name }) => {
        const value = fields.value.join(",");
        return save({ name, value });
      },
      onRestore: async (restore, name) => {
        const value = await restore(name);
        if (value) {
          return updateFields(value.split(","));
        }
      }
    });
    const { restore: restoreSort } = usePersistedStorage({
      name: "sort",
      value: sort
    });
    const { restore: restoreColumnWidths } = usePersistedStorage({
      name: "columnWidths",
      value: columnWidths,
      storages: ["localStorage" /* LocalStorage */],
      storagePath: id,
      onStore: (save, { name }) => {
        const value = JSON.stringify(columnWidths.value);
        return save({ name, value });
      },
      onRestore: async (restore, name) => {
        const value = await restore(name);
        if (value) {
          const parsedWidths = JSON.parse(value);
          headers.value = headers.value.map((header) => ({
            ...header,
            width: parsedWidths[header.field] || header.width
          }));
        }
      }
    });
    return Promise.allSettled([restoreFields(), restoreSort(), restoreColumnWidths()]);
  };
  const getHeaderByField = (field) => {
    return headers.value.find((header) => header.field === field);
  };
  const columnResize = ({ columnName, columnWidth }) => {
    const column = getHeaderByField(columnName);
    if (column) {
      column.width = columnWidth;
    }
  };
  const columnReorder = (orderedFields) => {
    isReorderingColumn.value = true;
    const reordered = setHeaderOrder(orderedFields);
    updateShownHeaders(reordered);
    nextTick(() => {
      isReorderingColumn.value = false;
    });
  };
  return {
    headers,
    shownHeaders,
    fields,
    sort,
    columnWidths,
    isReorderingColumn,
    updateShownHeaders,
    updateSort,
    columnResize,
    columnReorder,
    setupPersistence,
    $reset
  };
};
var createTableHeadersStore = (namespace, config, { headers: rawHeaders }) => {
  const id = `${namespace}/headers`;
  return createDatalistStore({
    storeBody: () => tableHeadersStoreBody({ rawHeaders, id }),
    namespace: id,
    config
  });
};

// node_modules/@webitel/ui-datalist/src/modules/pagination/createTablePaginationStore.ts
var import_dist28 = __toESM(require_dist(), 1);
var import_dist29 = __toESM(require_dist2(), 1);
var import_dist30 = __toESM(require_dist3(), 1);
var tablePaginationStoreBody = () => {
  const page = ref(1);
  const size = ref(10);
  const next = ref(false);
  const updatePage = (newPage) => {
    page.value = newPage;
  };
  const updateSize = (newSize) => {
    size.value = newSize;
  };
  const $reset = () => {
    page.value = 1;
    size.value = 10;
    next.value = false;
  };
  const setupPersistence = () => {
    const { restore: restorePage } = usePersistedStorage({
      name: "page",
      value: page,
      onRestore: async (restore, name) => {
        const value = await restore(name);
        const numValue = +value;
        if (numValue) page.value = numValue;
      }
    });
    const { restore: restoreSize } = usePersistedStorage({
      name: "size",
      value: size,
      onRestore: async (restore, name) => {
        const value = await restore(name);
        const numValue = +value;
        if (numValue) size.value = numValue;
      }
    });
    return Promise.allSettled([restorePage(), restoreSize()]);
  };
  return {
    page,
    size,
    next,
    updatePage,
    updateSize,
    setupPersistence,
    $reset
  };
};
var createTablePaginationStore = (namespace, config) => {
  const id = `${namespace}/pagination`;
  return createDatalistStore({
    storeBody: tablePaginationStoreBody,
    namespace: id,
    config
  });
};

// node_modules/@webitel/ui-datalist/src/modules/table/createTableStore.store.ts
var tableStoreBody = (namespace, config) => {
  const {
    apiModule,
    headers: rowHeaders,
    disablePersistence,
    storeType,
    isAppendDataList
  } = config;
  const usePaginationStore = createTablePaginationStore(namespace, config);
  const useHeadersStore = createTableHeadersStore(namespace, config, {
    headers: rowHeaders
  });
  const useFiltersStore = createTableFiltersStore(namespace, config);
  const parentId = ref();
  const paginationStore = usePaginationStore();
  const { page, size, next } = makeThisToRefs(
    paginationStore,
    storeType
  );
  const {
    updatePage,
    updateSize,
    // $reset: $resetPaginationStore,
    $patch: $patchPaginationStore,
    setupPersistence: setupPaginationPersistence
  } = paginationStore;
  const headersStore = useHeadersStore();
  const { headers, shownHeaders, fields, sort, columnWidths, isReorderingColumn } = makeThisToRefs(headersStore, storeType);
  const {
    updateSort,
    columnResize,
    columnReorder,
    updateShownHeaders,
    setupPersistence: setupHeadersPersistence
  } = headersStore;
  const filtersStore = useFiltersStore();
  const { filtersManager, isRestoring: isFiltersRestoring, searchMode } = makeThisToRefs(filtersStore, storeType);
  const {
    hasFilter,
    addFilter,
    updateFilter,
    deleteFilter,
    setupPersistence: setupFiltersPersistence,
    updateSearchMode
  } = filtersStore;
  const isStoreSetUp = ref(false);
  const dataList = ref([]);
  const selected = ref([]);
  const error = ref(null);
  const isLoading = ref(false);
  const updateSelected = (value) => {
    selected.value = value;
  };
  const getLoadDataParams = () => ({
    ...filtersManager.value.getAllValues(),
    page: page.value,
    size: size.value,
    sort: sort.value,
    fields: fields.value,
    parentId: parentId.value
  });
  const loadDataList = async () => {
    isLoading.value = true;
    $patchPaginationStore({ next: false });
    const params = getLoadDataParams();
    try {
      const { items, next: next2 } = await apiModule.getList(params);
      dataList.value = items;
      updateSelected([]);
      $patchPaginationStore({ next: next2 });
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      isLoading.value = false;
    }
  };
  const appendToDataList = async () => {
    isLoading.value = true;
    $patchPaginationStore({ next: false });
    updatePage(page.value + 1);
    const params = getLoadDataParams();
    try {
      const { items, next: next2 } = await apiModule.getList(params);
      dataList.value.push(...items);
      $patchPaginationStore({ next: next2 });
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      isLoading.value = false;
    }
  };
  const patchItemProperty = async ({
    index,
    path,
    value
  }) => {
    const item = dataList.value[index];
    const changes = {};
    set_default(path, value, changes);
    try {
      await apiModule.patch({
        changes,
        parentId: parentId.value,
        id: item.id,
        etag: item.etag
      });
      set_default(path, value, item);
    } catch (err) {
      await loadDataList();
      throw err;
    }
  };
  const deleteEls = async (_els) => {
    const els = Array.isArray(_els) ? _els : [_els];
    const deleteEl = (el) => {
      return apiModule.delete({
        id: el.id,
        etag: el.etag,
        parentId: parentId.value
      });
    };
    try {
      await Promise.all(els.map(deleteEl));
    } finally {
      if (els.length === dataList.value.length && page.value > 1) {
        updatePage(page.value - 1);
      }
      await loadDataList();
    }
  };
  const setupStore = async () => {
    if (isStoreSetUp.value) {
      return;
    }
    if (!disablePersistence) {
      await Promise.allSettled([
        setupPaginationPersistence(),
        setupFiltersPersistence(),
        setupHeadersPersistence()
      ]);
    }
    let loadingAfterFiltersChange = false;
    watch(
      [() => filtersManager.value.getAllValues(), sort, fields, size],
      async () => {
        if (isReorderingColumn.value) {
          return;
        }
        loadingAfterFiltersChange = true;
        updatePage(1);
        await loadDataList();
        loadingAfterFiltersChange = false;
      },
      /* filtersManager requires deep watching for its values */
      { deep: true }
    );
    watch([page], () => {
      if (!loadingAfterFiltersChange && !isAppendDataList) {
        return loadDataList();
      }
    });
    isStoreSetUp.value = true;
  };
  const initialize = async ({
    parentId: storeParentId
  } = {}) => {
    if (storeParentId) {
      parentId.value = storeParentId;
    }
    await setupStore();
    return loadDataList();
  };
  return {
    isStoreSetUp,
    // internal export for pinia devtools
    dataList,
    selected,
    error,
    isLoading,
    page,
    size,
    next,
    headers,
    shownHeaders,
    fields,
    sort,
    columnWidths,
    searchMode,
    filtersManager,
    isFiltersRestoring,
    setupStore,
    // only setup, no data loading
    initialize,
    // setup + load data
    loadDataList,
    appendToDataList,
    updateSelected,
    patchItemProperty,
    deleteEls,
    updateSearchMode,
    updatePage,
    updateSize,
    updateSort,
    columnResize,
    columnReorder,
    updateShownHeaders,
    hasFilter,
    addFilter,
    updateFilter,
    deleteFilter
  };
};
var createTableStore = (namespace, config) => {
  return createDatalistStore({
    storeBody: () => tableStoreBody(namespace, config),
    namespace,
    config
  });
};
export {
  createTableStore
};
//# sourceMappingURL=@webitel_ui-datalist.js.map
