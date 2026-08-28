import { QueuesAPI } from '@webitel/api-services/api';

import parseJoined from './_internals/joined';

const defaultAgentStatusObject = {
	total: 0,
	online: 0,
	pause: 0,
	offline: 0,
	free: 0,
};

const asPercent = (value) => (value ? `${+value.toFixed(2)}%` : 0);
const rounded = (value) => (value ? +value.toFixed(2) : 0);

const getQueuesList = async (params) => {
	const defaultParams = {
		search: '',
		sort: '+priority',
	};

	const { joinedAtFrom, joinedAtTo } = parseJoined(params.queuePeriod);

	const { items, next, aggs } = await QueuesAPI.getReportGeneral({
		...defaultParams,
		...params,
		joinedAtFrom,
		joinedAtTo,
	});

	return {
		items: items.map((item) => ({
			...item,
			_isSelected: false,
			count: item.count || 0,
			transferred: item.transferred || 0,
			bridged: asPercent(item.bridged),
			abandoned: asPercent(item.abandoned),
			sumBillSec: rounded(item.sumBillSec),
			avgWrapSec: rounded(item.avgWrapSec),
			avgAsaSec: rounded(item.avgAsaSec),
			avgAwtSec: rounded(item.avgAwtSec),
			avgAhtSec: rounded(item.avgAhtSec),
			sl20: asPercent(item.sl20),
			sl30: asPercent(item.sl30),
			agentStatus: {
				...defaultAgentStatusObject,
				...item.agentStatus,
			},
			members: {
				processing: item.processed || 0,
				waiting: item.waiting || 0,
			},
		})),
		aggs: {
			...defaultAgentStatusObject,
			...aggs,
		},
		next,
	};
};

export default {
	getList: getQueuesList,
};
