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

import { useUserinfoStore } from '../../../../userinfo/store/userInfoStore';
import { useQueuesTableStore } from '../../../stores/datalist/queues';
import { filtersOptions } from '../configs/filterOptions';

const userinfoStore = useUserinfoStore();
const queuesTableStore = useQueuesTableStore();
const { filtersManager } = storeToRefs(queuesTableStore);

const { addFilter, updateFilter, deleteFilter } = queuesTableStore;

const resetFilters = () => {
	filtersManager.value.reset();
};
</script>
