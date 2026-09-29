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

import { useAgentStatusHistoryTableStore } from '../../../stores/datalist/agent-status-history';
import {
	defaultJoinedAtFilter,
	filtersOptions,
} from '../configs/filterOptions';

const agentStatusHistoryTableStore = useAgentStatusHistoryTableStore();
const { filtersManager } = storeToRefs(agentStatusHistoryTableStore);

const { addFilter, updateFilter, deleteFilter } = agentStatusHistoryTableStore;

const resetFilters = () => {
	filtersManager.value.reset();
	addFilter(defaultJoinedAtFilter());
};
</script>
