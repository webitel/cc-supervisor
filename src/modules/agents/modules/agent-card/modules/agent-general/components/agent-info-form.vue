<template>
	<div class="agent-info-form-wrapper">
		<div class="agent-info-form-header">
			<div class="agent-info-form-header-title table-title__title">
				{{ $t('reusable.generalInfo') }}
			</div>
		</div>
		<form class="agent-info-form wt-scrollbar">
			<wt-single-select
				:model-value="agent.team"
				:v="agentValidation.team"
				:label="$t('objects.team')"
				:search-method="TeamsAPI.getList"
				:disabled="disableUserInput || !hasTeamReadAccess"
				required
				@update:model-value="setItemProp({ prop: 'team', value: $event })"
			/>
			<wt-multi-select
				v-if="!isSupervisor"
				:model-value="agent.supervisor"
				:label="$t('objects.supervisor')"
				:search-method="supervisorLookupApi"
				:disabled="disableUserInput || !hasSupervisorReadAccess"
				@update:model-value="setItemProp({ prop: 'supervisor', value: $event })"
			/>
			<wt-multi-select
				:model-value="agent.auditor"
				:label="$t('objects.auditor')"
				:search-method="userLookupApi"
				:disabled="disableUserInput || !hasAuditorReadAccess"
				@update:model-value="setItemProp({ prop: 'auditor', value: $event })"
			/>
			<wt-single-select
				:model-value="agent.region"
				:label="$t('objects.region')"
				:search-method="RegionsAPI.getList"
				:disabled="disableUserInput || !hasRegionReadAccess"
				@update:model-value="setItemProp({ prop: 'region', value: $event })"
			/>
			<wt-input-number
				:model-value="agent.progressiveCount"
				:v="agentValidation.progressiveCount"
				:label="$t('objects.queue.progressiveCount')"
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
	</div>
</template>

<script lang="ts" setup>
import { type BaseValidation, useVuelidate } from '@vuelidate/core';
import { minValue, required } from '@vuelidate/validators';
import { RegionsAPI, TeamsAPI } from '@webitel/api-services/api';
import { WtObject } from '@webitel/ui-sdk/enums';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { useUserAccessControl } from '../../../../../../../app/composables/useUserAccessControl';
import supervisorLookupApi from '../../../../../../_shared/lookups/api/supervisorLookupApi';
import userLookupApi from '../../../../../../_shared/lookups/api/userLookupApi';
import { useAgentEditStore } from '../stores/agentEditStore';

const agentEditStore = useAgentEditStore();
const { agent } = storeToRefs(agentEditStore);
const {
	loadAgent,
	setAgentProperty: setItemProp,
	updateAgent: save,
} = agentEditStore;

const v$ = useVuelidate(
	{
		agent: {
			team: {
				required,
			},
			progressiveCount: {
				minValue: minValue(1),
			},
		},
	},
	{
		agent,
	},
	{
		$stopPropagation: true,
		$autoDirty: true,
	},
);

// vuelidate infers nested results as `undefined` when rules are passed explicitly
const agentValidation = computed(
	() => v$.value.agent as Record<'team' | 'progressiveCount', BaseValidation>,
);

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

const isSupervisor = computed(() => agent.value?.isSupervisor);

const disabledSave = computed(() => !agent.value._dirty || v$.value.$invalid);

loadAgent();
</script>

<style scoped>
.agent-info-form-wrapper {
	display: flex;
	flex-direction: column;
}

.agent-info-form-header {
	margin-top: var(--spacing-xs);
	padding-inline: var(--spacing-xs);
}

.agent-info-form {
	display: flex;
	flex-direction: column;
	gap: var(--spacing-xs);
  padding: var(--spacing-xs);
  overflow: auto;

  .wt-button {
    display: block;
    margin-left: auto;
  }
}
</style>
