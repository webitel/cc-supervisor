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
import { WtObject } from '@webitel/ui-sdk/enums';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { useUserAccessControl } from '../../../../../app/composables/useUserAccessControl';
import { useActiveCallsTableStore } from '../../../stores/datalist/active-calls';
import { buildFiltersOptions } from '../configs/filterOptions';

const { hasReadAccess: hasUsersReadAccess } = useUserAccessControl(
	WtObject.User,
);
const { hasReadAccess: hasQueuesReadAccess } = useUserAccessControl(
	WtObject.Queue,
);
const { hasReadAccess: hasAgentsReadAccess } = useUserAccessControl(
	WtObject.Agent,
);
const { hasReadAccess: hasGatewaysReadAccess } = useUserAccessControl(
	WtObject.Gateway,
);
const { hasReadAccess: hasTeamsReadAccess } = useUserAccessControl(
	WtObject.Team,
);

const filtersOptions = computed(() =>
	buildFiltersOptions({
		hasUsersReadAccess: hasUsersReadAccess.value,
		hasQueuesReadAccess: hasQueuesReadAccess.value,
		hasAgentsReadAccess: hasAgentsReadAccess.value,
		hasGatewaysReadAccess: hasGatewaysReadAccess.value,
		hasTeamsReadAccess: hasTeamsReadAccess.value,
	}),
);

const tableStore = useActiveCallsTableStore();
const { filtersManager } = storeToRefs(tableStore);

const { addFilter, updateFilter, deleteFilter } = tableStore;

const resetFilters = () => {
	filtersManager.value.reset();
};
</script>
