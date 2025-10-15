<template>
  <wt-filters-panel-wrapper
    :table-action-icons="['filter-reset', 'settings']" @reset="resetFilters"
  >
    <wt-select
      v-for="(filter) of queueFilters"
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
import { useTableFilters } from '../../../../../app/composables/useTableFilters.ts';
import { useQueuesTableStore } from '../../../stores/queues';
import { filterOptions } from '../configs/filterOptions';


const tableStore = useQueuesTableStore();

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

const {
  filters,
  handleFilter,
  resetFilters,
} = useTableFilters(filtersManager, filterOptions, addFilter, updateFilter, deleteFilter, hasFilter);

const checkAccess = computed(() => {
  return {
    allowQueues: store.getters['userinfo/CHECK_APP_ACCESS'](),
    allowTeams: store.getters['userinfo/CHECK_APP_ACCESS'](),
  };
});

const queueFilters = computed(() => {
  return [
    { type: 'enum', filterQuery: 'period' },
    { type: 'api', filterQuery: 'queue', disabled: !checkAccess.value.allowQueues },
    { type: 'api', filterQuery: 'team', disabled: !checkAccess.value.allowTeams },
    { type: 'enum', filterQuery: 'queueType' },
  ];
});
</script>

<style lang="scss" scoped>
</style>
