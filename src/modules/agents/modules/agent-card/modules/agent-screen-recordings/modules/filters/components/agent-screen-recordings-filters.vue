<template>
  <wt-filters-panel-wrapper 
    :table-action-icons="['filter-reset']"
    @reset="resetFilters">
    <wt-datepicker 
      mode="datetime"
      :label="$t('reusable.from')"
      :value="filters['uploadedAtFrom']"
      @input="handleFilter($event, 'uploadedAtFrom')"
    />
    <wt-datepicker 
      mode="datetime"
      :label="$t('reusable.to')"
      :value="filters['uploadedAtTo']"
      @input="handleFilter($event, 'uploadedAtTo')"
    />
  </wt-filters-panel-wrapper>
</template>

<script setup>
import { useScreenRecordingsDatalistStore } from '../../../store/screen-recordings';
import { storeToRefs } from 'pinia';
import { computed } from 'vue'

const tableStore = useScreenRecordingsDatalistStore()
const {
  hasFilter,
  addFilter,
  updateFilter,
  deleteFilter,
} = tableStore;

const {
  filtersManager
} = storeToRefs(tableStore)

const filters = computed(() => filtersManager.value.getAllValues());

const handleFilter = (value, field) => {
  if(value) {
    if (hasFilter(field)) {
      updateFilter({
        name: field,
        value,
      });
    } else {
      addFilter({
        name: field,
        value,
      });
    }
  } else {
    deleteFilter(field)
  }
};

const resetFilters = () => {
  updateFilter({
    name: 'uploadedAtFrom',
    value: new Date().setHours(0, 0, 0, 0),
  })

  updateFilter({
    name: 'uploadedAtTo',
    value: new Date().setHours(23, 59, 59, 999),
  })
}
</script>

<style lang="scss" scoped>
</style>
