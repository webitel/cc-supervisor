<template>
  <table-filters-panel
    :filters-manager="filtersManager"
    :filter-options="filtersOptions"
    static-mode
    @filter:add="addFilter"
    @filter:update="updateFilter"
    @filter:delete="deleteFilter"
    @filter:reset-all="resetFilters"
    @hide="emit('hide')"
  />
</template>

<script lang="ts" setup>
import { TableFiltersPanelComponent as TableFiltersPanel } from '@webitel/ui-datalist/filters';
import { storeToRefs } from 'pinia';
import { filtersOptions } from '../configs/filterOptions';
import { useQueuesTableStore } from '../../../stores/queues';

const tableStore = useQueuesTableStore();
const { filtersManager } = storeToRefs(tableStore);

const emit = defineEmits<{
  hide: [];
}>();

const {
  addFilter,
  updateFilter,
  deleteFilter,
} = tableStore;

const resetFilters = () => {
  filtersManager.value.reset();
};
</script>
