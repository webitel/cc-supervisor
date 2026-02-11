<template>
  <wt-filters-panel-wrapper
    :table-action-icons="['filter-reset']"
    @reset="resetFilters">
    <wt-datepicker
      mode="datetime"
      :label="$t('reusable.from')"
      :value="filters['createdAtFrom']"
      @input="handleFilter($event, 'createdAtFrom')"
    />
    <wt-datepicker
      mode="datetime"
      :label="$t('reusable.to')"
      :value="filters['createdAtTo']"
      @input="handleFilter($event, 'createdAtTo')"
    />
  </wt-filters-panel-wrapper>
</template>

<script setup>
import { getEndOfDay, getStartOfDay } from '@webitel/ui-sdk/scripts';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { usePdfsDataListStore } from '../../../store/pdfs';

const tableStore = usePdfsDataListStore();
const { hasFilter, addFilter, updateFilter, deleteFilter } = tableStore;

const { filtersManager } = storeToRefs(tableStore);

const filters = computed(() => filtersManager.value.getAllValues());

const handleFilter = (value, field) => {
	if (value) {
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
		deleteFilter(field);
	}
};

const resetFilters = () => {
	updateFilter({
		name: 'createdAtFrom',
		value: getStartOfDay(),
	});

	updateFilter({
		name: 'createdAtTo',
		value: getEndOfDay(),
	});
};
</script>

<style lang="scss" scoped>
</style>


