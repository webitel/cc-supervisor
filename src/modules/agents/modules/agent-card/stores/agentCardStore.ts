import { AgentsAPI } from '@webitel/api-services/api';
import type { EngineAgentStatusStatisticItem } from '@webitel/api-services/gen/models';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { AgentsNamespace } from '../../../namespace';

const AgentCardNamespace = `${AgentsNamespace}/card`;

type AgentId = string | number;

export const useAgentCardStore = defineStore(AgentCardNamespace, () => {
	const agentId = ref<AgentId | null>(null);
	const agent = ref<EngineAgentStatusStatisticItem>({});
	const score = ref({
		scoreCount: 0 as number | string,
		scoreRequiredAvg: 0,
	});

	const setAgentId = (id: AgentId) => {
		agentId.value = id;
	};

	// today's statistics, the panel shows its timers
	const loadAgent = async () => {
		const item = await AgentsAPI.getStatusStatisticsItem({
			agentId: agentId.value,
			from: String(new Date().setHours(0, 0, 0, 0)),
			to: String(new Date().setHours(23, 59, 59, 999)),
		});

		agent.value = {
			...item,
			statusDuration: convertDuration(item.statusDuration ?? 0),
			online: convertDuration(item.online ?? 0),
			offline: convertDuration(item.offline ?? 0),
			pause: convertDuration(item.pause ?? 0),
		};
	};

	const loadScoreData = async () => {
		const { scoreCount = 0, scoreRequiredAvg = 0 } =
			await AgentsAPI.getStatusStatisticsItem({
				agentId: agentId.value,
				// why 0? https://webitel.atlassian.net/browse/WTEL-5439?focusedCommentId=641601
				from: '0',
				to: '0',
			});

		score.value = {
			scoreCount,
			scoreRequiredAvg,
		};
	};

	return {
		agentId,
		agent,
		score,

		setAgentId,
		loadAgent,
		loadScoreData,
	};
});
