<template>
  <wt-filters-panel-wrapper
    :table-action-icons="['filter-reset', 'settings']" @reset="resetFilters"
  >
    <wt-select
      v-for="(filter) of agentFilters"
      :key="filter.filterQuery"
      :disabled="filter.disabled"
      :search-method="filterOptions[filter.filterQuery].search"
      :multiple="filterOptions[filter.filterQuery].multiple"
      :label="t(filterOptions[filter.filterQuery].locale.label)"
      :close-on-select="filterOptions[filter.filterQuery].closeOnSelect"
      :options="filterOptions[filter.filterQuery].options"
      :value="filters[filter.filterQuery]"
      @update:model-value="handleFilter($event, filter.filterQuery)"
    ></wt-select>
  </wt-filters-panel-wrapper>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useAgentsTableStore } from '../../../stores/agents';
import { filterOptions } from '../configs/filterOptions';


const tableStore = useAgentsTableStore();
const {
  filtersManager,
} = storeToRefs(tableStore);
const {
  addFilter,
  updateFilter,
  deleteFilter,
  hasFilter,
} = tableStore;

const store = useStore();
const {t} = useI18n();

const filters = computed(() => filtersManager.value.getAllValues());

const getValueForFilter = ({ value, storedProp = 'id' }) => {
  if (Array.isArray(value)) {
    if (value.length && typeof value[0] !== 'object') {
      return value;
    } else {
      return value.map((item) => item[storedProp]);
    }
  } else if (typeof value === 'object' && value !== null) {
    return value[storedProp];
  } else {
    return value;
  }
}
const handleFilter = (value, field) => {
  if(value) {
    if (hasFilter(field)) {
      updateFilter({
        name: field,
        value: getValueForFilter({ value, storedProp: filterOptions[field].storedProp }),
      });
    } else {
      addFilter({
        name: field,
        value: getValueForFilter({ value, storedProp: filterOptions[field].storedProp }),
      });
    }
  } else {
    deleteFilter({ name: field })
  }
};

const checkAccess = computed(() => {
  return {
    allowQueues: store.getters['userinfo/CHECK_APP_ACCESS'](),
    allowSkills: store.getters['userinfo/CHECK_APP_ACCESS'](),
    allowTeams: store.getters['userinfo/CHECK_APP_ACCESS'](),
    allowAgents: store.getters['userinfo/CHECK_APP_ACCESS'](),
    allowUsers: store.getters['userinfo/CHECK_APP_ACCESS'](),
    allowRegions: store.getters['userinfo/CHECK_APP_ACCESS'](),
  };
});

const agentFilters = computed(() => {
  return [
    { type: 'enum', filterQuery: 'status' },
    { type: 'api', filterQuery: 'queue', disabled: !checkAccess.value.allowQueues },
    { type: 'api', filterQuery: 'skill', disabled: !checkAccess.value.allowSkills },
    { type: 'api', filterQuery: 'team', disabled: !checkAccess.value.allowTeams },
    { type: 'api', filterQuery: 'supervisor', disabled: !checkAccess.value.allowAgents }, // !this.allowAgents because we use agents api for this filter
    { type: 'api', filterQuery: 'auditor', disabled: !checkAccess.value.allowUsers },
    { type: 'api', filterQuery: 'region', disabled: !checkAccess.value.allowRegions },
    { type: 'enum', filterQuery: 'utilization' },
  ];
});

const resetFilters = () => {
  filtersManager.value.reset({ exclude: ['search'] });
};
</script>

<style lang="scss" scoped>
</style>
