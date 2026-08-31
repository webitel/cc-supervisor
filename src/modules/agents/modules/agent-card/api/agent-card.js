import { AgentsAPI } from '@webitel/api-services/api';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';

const getAgent = async ({ itemId, from, to }) => {
	const defaultObject = {
		statusDuration: 0,
		online: 0,
		offline: 0,
		pause: 0,
	};

	const item = await AgentsAPI.getStatusStatisticsItem({
		agentId: itemId,
		from: from ?? new Date().setHours(0, 0, 0, 0),
		to: to ?? new Date().setHours(23, 59, 59, 999),
	});

	const merged = {
		...defaultObject,
		...item,
	};

	return {
		...merged,
		statusDuration: convertDuration(merged.statusDuration),
		online: convertDuration(merged.online),
		offline: convertDuration(merged.offline),
		pause: convertDuration(merged.pause),
	};
};

const getScore = async ({ agentId }) => {
	const { scoreCount = 0, scoreRequiredAvg = 0 } =
		await AgentsAPI.getStatusStatisticsItem({
			agentId,
			// why 0? https://webitel.atlassian.net/browse/WTEL-5439?focusedCommentId=641601
			from: '0',
			to: '0',
		});
	return {
		scoreCount,
		scoreRequiredAvg,
	};
};

export default {
	get: getAgent,
	getScore,
};
