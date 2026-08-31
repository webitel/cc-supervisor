import { AgentsAPI } from '@webitel/api-services/api';
import { FormatDateMode } from '@webitel/ui-sdk/enums';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';

export const getAgentHistoryList = async (params) => {
	const defaultParams = {
		sort: '-joined_at',
		from: new Date().setHours(0, 0, 0),
		to: new Date().setHours(23, 59, 59, 999),
	};

	const { items, next } = await AgentsAPI.getAgentHistory({
		...defaultParams,
		...params,
		parentId: params.agentId,
	});

	return {
		items: items.map((item) => ({
			...item,
			from: formatDate(+item.joinedAt, FormatDateMode.DATETIME),
			to: item.duration
				? formatDate(
						+item.joinedAt + item.duration * 1000,
						FormatDateMode.DATETIME,
					)
				: null,
			duration: convertDuration(item.duration),
		})),
		next,
	};
};

export default {
	getList: getAgentHistoryList,
};
