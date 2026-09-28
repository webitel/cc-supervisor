<template>
  <table-filters-panel
    :filters-manager="filtersManager"
    :filter-options="filtersOptions"
    :has-read-access="userinfoStore.hasReadAccess"
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

import { useUserinfoStore } from '../../../../../../../../userinfo/store/userInfoStore';
import { useAgentCallsTableStore } from '../../../stores/datalist/agent-calls';
import {
	defaultCreatedAtFilter,
	filtersOptions,
} from '../configs/filterOptions';

const userinfoStore = useUserinfoStore();
const agentCallsTableStore = useAgentCallsTableStore();
const { filtersManager } = storeToRefs(agentCallsTableStore);

const { addFilter, updateFilter, deleteFilter } = agentCallsTableStore;

const resetFilters = () => {
	filtersManager.value.reset();
	addFilter(defaultCreatedAtFilter());
};
</script>
