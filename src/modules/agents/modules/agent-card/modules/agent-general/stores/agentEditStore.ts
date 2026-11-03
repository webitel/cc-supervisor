import { AgentsAPI } from '@webitel/api-services/api';
import type { EngineAgent } from '@webitel/api-services/gen/models';
import { isEmpty } from '@webitel/ui-sdk/scripts';
import { defineStore, storeToRefs } from 'pinia';
import { ref } from 'vue';

import { AgentsNamespace } from '../../../../../namespace';
import { useAgentCardStore } from '../../../stores/agentCardStore';

const AgentEditNamespace = `${AgentsNamespace}/card/edit`;

type EditableAgent = EngineAgent & {
	_dirty?: boolean;
};

/**
 * [Claude] `progressiveCount` is validated with `minValue(1)`, so an unset value has to
 * stay `null` — the shared client's default of `0` would fail validation on
 * load.
 */
const defaultObject = {
	_dirty: false,
	progressiveCount: null,
	chatCount: 0,
};

export const useAgentEditStore = defineStore(AgentEditNamespace, () => {
	const { agentId } = storeToRefs(useAgentCardStore());

	const agent = ref<EditableAgent>({});

	const loadAgent = async () => {
		agent.value = await AgentsAPI.get({
			itemId: agentId.value,
			defaultObject,
		});
	};

	const setAgentProperty = ({
		prop,
		value,
	}: {
		prop: string;
		value: unknown;
	}) => {
		Object.assign(agent.value, {
			[prop]: value,
			_dirty: true,
		});
	};

	const updateAgent = async () => {
		const changes = {
			...agent.value,
		};

		// strange patch formatting :(
		(
			[
				'team',
				'region',
			] as const
		).forEach((key) => {
			const prop = changes[key];
			if (typeof prop === 'object' && isEmpty(prop))
				changes[key] = {
					id: null,
				};
		});
		// strange patch formatting :(
		(
			[
				'supervisor',
				'auditor',
			] as const
		).forEach((key) => {
			const prop = changes[key];
			if (typeof prop === 'object' && isEmpty(prop))
				changes[key] = [
					{
						id: null,
					},
				];
		});

		try {
			await AgentsAPI.patch({
				id: agentId.value,
				changes,
			});
		} catch {
			// [Claude] the client has already notified about the error
		} finally {
			await loadAgent();
		}
	};

	return {
		agent,

		loadAgent,
		setAgentProperty,
		updateAgent,
	};
});
