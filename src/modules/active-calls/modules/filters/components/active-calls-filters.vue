<template>
  <wt-filters-panel-wrapper
    :table-action-icons="['filter-reset']"
    is-opened
    @reset="resetFilters">
  <component
    :is="`abstract-${filter.type}-filter`"
    v-for="(filter) of activeCallsFilters"
    :key="filter.filterQuery"
    :filter-query="filter.filterQuery"
    :namespace="namespace"
    :disabled="filter.disabled"
  ></component>
<!--    <skip-parent-filter-->
<!--      :namespace="namespace"-->
<!--    ></skip-parent-filter>-->
  </wt-filters-panel-wrapper>
</template>

<script>
import { mapGetters } from 'vuex';
import { computed } from 'vue';
import { WtObject } from '@webitel/ui-sdk/enums';

import filtersPanelMixin from '../../../../../app/mixins/supervisor-workspace/filtersPanelMixin';
import SkipParentFilter from './skip-parent-filter.vue';
import { useUserAccessControl } from '../../../../../app/composables/useUserAccessControl';

export default {
	name: 'ActiveCallsFilters',
	components: {
		SkipParentFilter,
	},
	mixins: [
		filtersPanelMixin,
	],
	setup: () => {
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
		return {
			hasUsersReadAccess,
			hasQueuesReadAccess,
			hasAgentsReadAccess,
			hasGatewaysReadAccess,
			hasTeamsReadAccess,
		};
	},
	computed: {
		// not just "filters" because mixin data.filters overlaps computed.filters
		activeCallsFilters() {
			return [
				{
					type: 'enum',
					filterQuery: 'direction',
				},
				{
					type: 'enum',
					filterQuery: 'result',
				},
				{
					type: 'api',
					filterQuery: 'gateway',
					disabled: !this.hasGatewaysReadAccess,
				},
				{
					type: 'api',
					filterQuery: 'queue',
					disabled: !this.hasQueuesReadAccess,
				},
				{
					type: 'api',
					filterQuery: 'user',
					disabled: !this.hasUsersReadAccess,
				},
				{
					type: 'api',
					filterQuery: 'agent',
					disabled: !this.hasAgentsReadAccess,
				},
				{
					type: 'api',
					filterQuery: 'supervisor',
					disabled: !this.hasAgentsReadAccess,
				}, // !this.allowAgents because we use agents api for this filter
				{
					type: 'api',
					filterQuery: 'team',
					disabled: !this.hasTeamsReadAccess,
				},
			];
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
