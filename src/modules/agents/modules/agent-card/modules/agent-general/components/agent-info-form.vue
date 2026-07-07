<template>
  <form class="agent-info-form wt-scrollbar">
    <wt-single-select
      :model-value="agent.team"
      :v="v$.agent.team"
      :label="$t('objects.team')"
      :search-method="searchTeams"
      :disabled="disableUserInput || !hasTeamReadAccess"
      required
      @update:model-value="setItemProp({ prop: 'team', value: $event })"
    />
    <wt-multi-select
      v-if="!isSupervisor"
      :model-value="agent.supervisor"
      :label="$t('objects.supervisor')"
      :search-method="searchSupervisors"
      :disabled="disableUserInput || !hasSupervisorReadAccess"
      @update:model-value="setItemProp({ prop: 'supervisor', value: $event })"
    />
    <wt-multi-select
      :model-value="agent.auditor"
      :label="$t('objects.auditor')"
      :search-method="searchAuditors"
      :disabled="disableUserInput || !hasAuditorReadAccess"
      @update:model-value="setItemProp({ prop: 'auditor', value: $event })"
    />
    <wt-single-select
      :model-value="agent.region"
      :label="$t('objects.region')"
      :search-method="searchRegions"
      :disabled="disableUserInput || !hasRegionReadAccess"
      @update:model-value="setItemProp({ prop: 'region', value: $event })"
    />
    <wt-input-number
      :model-value="agent.progressiveCount"
      :v="v$.agent.progressiveCount"
      :label="$t('pages.card.progressiveCount')"
      :disabled="disableUserInput"
      @update:model-value="setItemProp({ prop: 'progressiveCount', value: $event })"
    />
    <wt-input-number
      :model-value="agent.chatCount"
      :label="$t('pages.card.chatCount')"
      :disabled="disableUserInput"
      @update:model-value="setItemProp({ prop: 'chatCount', value: $event })"
    />
    <wt-button
      :disabled="disabledSave || !hasSaveActionAccess"
      @click="save"
    >{{ $t('defaults.save') }}</wt-button>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { minValue, required } from '@vuelidate/validators';
import { WtObject } from '@webitel/ui-sdk/enums';
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';

import { useUserAccessControl } from '../../../../../../../app/composables/useUserAccessControl';
import regionLookupApi from '../../../../../../_shared/lookups/api/regionLookupApi';
import supervisorLookupApi from '../../../../../../_shared/lookups/api/supervisorLookupApi';
import teamLookupApi from '../../../../../../_shared/lookups/api/teamLookupApi';
import userLookupApi from '../../../../../../_shared/lookups/api/userLookupApi';

export default {
	name: 'AgentInfoForm',
	props: {
		namespace: {
			type: String,
			required: true,
		},
	},
	setup() {
		const v$ = useVuelidate({
			$stopPropagation: true,
			$autoDirty: true,
		});

		const { disableUserInput, hasSaveActionAccess } = useUserAccessControl();

		const { hasReadAccess: hasTeamReadAccess } = useUserAccessControl(
			WtObject.Team,
		);
		const { hasReadAccess: hasAuditorReadAccess } = useUserAccessControl(
			WtObject.User,
		);
		const { hasReadAccess: hasSupervisorReadAccess } = useUserAccessControl(
			WtObject.Agent,
		);
		const { hasReadAccess: hasRegionReadAccess } = useUserAccessControl(
			WtObject.Region,
		);

		return {
			v$,
			disableUserInput,
			hasSaveActionAccess,

			hasTeamReadAccess,
			hasAuditorReadAccess,
			hasSupervisorReadAccess,
			hasRegionReadAccess,
		};
	},
	created() {
		this.loadAgent();
	},
	computed: {
		...mapState({
			agent(state) {
				return getNamespacedState(state, this.namespace).agent;
			},
		}),
		isSupervisor() {
			return this.agent?.isSupervisor;
		},
		disabledSave() {
			return !this.agent._dirty || this.v$.$invalid;
		},
	},
	validations: {
		agent: {
			team: {
				required,
			},
			progressiveCount: {
				minValue: minValue(1),
			},
		},
	},
	methods: {
		...mapActions({
			loadAgent(dispatch, payload) {
				return dispatch(`${this.namespace}/LOAD_AGENT`, payload);
			},
			setItemProp(dispatch, payload) {
				return dispatch(`${this.namespace}/SET_AGENT_PROPERTY`, payload);
			},
			save(dispatch, payload) {
				return dispatch(`${this.namespace}/UPDATE_AGENT`, payload);
			},
		}),
		searchTeams: teamLookupApi,
		searchSupervisors: supervisorLookupApi,
		searchAuditors: userLookupApi,
		searchRegions: regionLookupApi,
	},
};
</script>

<style scoped>
.agent-info-form {
  padding: var(--spacing-sm);
  overflow: auto;

  .wt-select, .wt-input-number {
    margin-bottom: var(--spacing-sm);
  }

  .wt-button {
    display: block;
    margin-left: auto;
  }
}
</style>
