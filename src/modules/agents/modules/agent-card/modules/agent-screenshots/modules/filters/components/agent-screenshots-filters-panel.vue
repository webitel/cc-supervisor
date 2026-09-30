<template>
  <table-filters-panel
    :filters-manager="filtersManager"
    :filter-options="filtersOptions"
    static-mode
    @filter:add="addFilter"
    @filter:update="updateFilter"
    @filter:delete="deleteFilter"
    @filter:reset-all="resetFilters"
  />
</template>

<script lang="ts" setup>
import { TableFiltersPanelComponent as TableFiltersPanel } from '@webitel/ui-datalist/filters';
import { storeToRefs } from 'pinia';

import { useAgentScreenshotsTableStore } from '../../../stores/datalist/screenshots';
import {
	defaultUploadedAtFilter,
	filtersOptions,
} from '../configs/filterOptions';

const agentScreenshotsTableStore = useAgentScreenshotsTableStore();
const { filtersManager } = storeToRefs(agentScreenshotsTableStore);

const { addFilter, updateFilter, deleteFilter } = agentScreenshotsTableStore;

const resetFilters = () => {
	filtersManager.value.reset({
		exclude: [
			'agentId',
			'type',
			'channel',
		],
	});
	addFilter(defaultUploadedAtFilter());
};
</script>
