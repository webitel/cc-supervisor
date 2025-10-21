import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  useStore
} from "./chunk-S6OCV6O3.js";
import {
  useI18n
} from "./chunk-6JRCTP2G.js";
import "./chunk-Y7OW5ORD.js";
import "./chunk-K5VDDDOW.js";
import "./chunk-RK4D342A.js";
import "./chunk-4BU36TI7.js";
import {
  isEmpty_default
} from "./chunk-6Q3UUCCZ.js";
import "./chunk-6LY73PXU.js";
import "./chunk-TBMZGSYP.js";
import "./chunk-ALYEIJI5.js";
import "./chunk-SZR5SZ7W.js";
import {
  EmptyCause
} from "./chunk-663REQXU.js";
import "./chunk-KKIOOXCK.js";
import "./chunk-3LV7TFCB.js";
import "./chunk-D3J766ED.js";
import "./chunk-5SXUFGYU.js";
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
import {
  computed,
  inject
} from "./chunk-QI253I2C.js";
import {
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-V3F6WX4O.js";

// node_modules/@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var import_deepmerge = __toESM(require_cjs());
import EmptyFiltersDark from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-sdk/src/modules/TableComponentModule/_internals/assets/empty-filters-dark.svg";
import EmptyFiltersLight from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-sdk/src/modules/TableComponentModule/_internals/assets/empty-filters-light.svg";
import EmptyTableDark from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-sdk/src/modules/TableComponentModule/_internals/assets/empty-table-dark.svg";
import EmptyTableLight from "D:/study/webitel/supervisor/cc-supervisor/node_modules/@webitel/ui-sdk/src/modules/TableComponentModule/_internals/assets/empty-table-light.svg";
var useTableEmpty = ({ dataList, filters, error, isLoading }, overrides = {}) => {
  const store = useStore();
  const { t } = useI18n();
  const defaults = computed(() => ({
    image: {
      filters: {
        dark: EmptyFiltersDark,
        light: EmptyFiltersLight
      },
      error: {
        dark: EmptyTableDark,
        light: EmptyTableLight
      },
      empty: {
        dark: EmptyTableDark,
        light: EmptyTableLight
      }
    },
    headline: {
      filters: "",
      error: "",
      empty: ""
    },
    title: {
      filters: "",
      error: "",
      empty: ""
    },
    text: {
      filters: t("webitelUI.empty.text.filters"),
      error: "",
      empty: t("webitelUI.empty.text.empty")
    },
    primaryActionText: {
      filters: "",
      error: "",
      empty: t("reusable.add")
    },
    secondaryActionText: {
      filters: "",
      error: "",
      empty: ""
    }
  }));
  const merged = computed(() => (0, import_deepmerge.default)(defaults.value, overrides));
  let darkMode = computed(() => false);
  try {
    darkMode = inject("darkMode");
  } catch {
    try {
      darkMode = computed(() => store.getters["appearance/DARK_MODE"]);
    } catch {
      console.warn('"darkMode" value not found, using "false" as default');
    }
  }
  const emptyState = computed(() => {
    var _a;
    return !(isLoading == null ? void 0 : isLoading.value) && !(error == null ? void 0 : error.value) && !((_a = dataList == null ? void 0 : dataList.value) == null ? void 0 : _a.length);
  });
  const emptyCause = computed(() => {
    if (!(emptyState == null ? void 0 : emptyState.value)) return null;
    if (error.value) return EmptyCause.ERROR;
    if (filters == null ? void 0 : filters.value) {
      const uncheckedFilters = ["page", "size", "sort", "fields"];
      const filtersApplied = Object.entries(filters.value).some(
        ([filterName, filterValue]) => !isEmpty_default(filterValue) && !uncheckedFilters.includes(filterName)
      );
      if (filtersApplied) return EmptyCause.FILTERS;
    }
    return EmptyCause.EMPTY;
  });
  const image = computed(() => {
    switch (emptyCause.value) {
      case EmptyCause.ERROR:
        return (darkMode == null ? void 0 : darkMode.value) ? merged.value.image.error.dark : merged.value.image.error.light;
      case EmptyCause.FILTERS:
        return (darkMode == null ? void 0 : darkMode.value) ? merged.value.image.filters.dark : merged.value.image.filters.light;
      case EmptyCause.EMPTY:
        return (darkMode == null ? void 0 : darkMode.value) ? merged.value.image.empty.dark : merged.value.image.empty.light;
      default:
        return null;
    }
  });
  const headline = computed(() => {
    switch (emptyCause.value) {
      case EmptyCause.ERROR:
        return merged.value.headline.error;
      case EmptyCause.FILTERS:
        return merged.value.headline.filters;
      case EmptyCause.EMPTY:
        return merged.value.headline.empty;
      default:
        return null;
    }
  });
  const title = computed(() => {
    switch (emptyCause.value) {
      case EmptyCause.ERROR:
        return merged.value.title.error;
      case EmptyCause.FILTERS:
        return merged.value.title.filters;
      case EmptyCause.EMPTY:
        return merged.value.title.empty;
      default:
        return null;
    }
  });
  const text = computed(() => {
    switch (emptyCause.value) {
      case EmptyCause.ERROR:
        return merged.value.text.error;
      case EmptyCause.FILTERS:
        return merged.value.text.filters;
      case EmptyCause.EMPTY:
        return merged.value.text.empty;
      default:
        return null;
    }
  });
  const primaryActionText = computed(() => {
    switch (emptyCause.value) {
      case EmptyCause.ERROR:
        return merged.value.primaryActionText.error;
      case EmptyCause.FILTERS:
        return merged.value.primaryActionText.filters;
      case EmptyCause.EMPTY:
        return merged.value.primaryActionText.empty;
      default:
        return null;
    }
  });
  const secondaryActionText = computed(() => {
    switch (emptyCause.value) {
      case EmptyCause.ERROR:
        return merged.value.secondaryActionText.error;
      case EmptyCause.FILTERS:
        return merged.value.secondaryActionText.filters;
      case EmptyCause.EMPTY:
        return merged.value.secondaryActionText.empty;
      default:
        return null;
    }
  });
  return {
    showEmpty: emptyState,
    emptyCause,
    image,
    headline,
    title,
    text,
    primaryActionText,
    secondaryActionText
  };
};
export {
  useTableEmpty
};
//# sourceMappingURL=@webitel_ui-sdk_src_modules_TableComponentModule_composables_useTableEmpty.js.map
