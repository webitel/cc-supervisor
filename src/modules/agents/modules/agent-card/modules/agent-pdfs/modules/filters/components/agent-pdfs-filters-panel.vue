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

import { useAgentPdfsTableStore } from '../../../stores/datalist/pdfs';
import {
	defaultUploadedAtFilter,
	filtersOptions,
} from '../configs/filterOptions';

const agentPdfsTableStore = useAgentPdfsTableStore();
const { filtersManager } = storeToRefs(agentPdfsTableStore);

const { addFilter, updateFilter, deleteFilter } = agentPdfsTableStore;

const resetFilters = () => {
	filtersManager.value.reset({
		exclude: [
			'agentId',
		],
	});
	addFilter(defaultUploadedAtFilter());
};
</script>
