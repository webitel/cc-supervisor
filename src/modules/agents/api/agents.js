import { AgentsAPI } from '@webitel/api-services/api';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';

const convertStatusDuration = (value) => {
	if (value > 60 * 60 * 24) return '>24:00:00';
	return convertDuration(value);
};

export const getAgentsList = async (params) => {
	const defaultParams = {
		search: '',
		sort: '+name',
		fields: [],
		from: new Date().setHours(0, 0, 0, 0),
		to: new Date().setHours(23, 59, 59, 999),
		utilizationFrom: '0',
	};
	const defaultObject = {
		offline: 0,
		online: 0,
		pause: 0,
		statusDuration: 0,
		transferred: 0,
		missed: 0,
		utilization: 0,
		occupancy: 0,
	};

	const { items, next } = await AgentsAPI.getStatusStatistics({
		...defaultParams,
		...params,
		// the filter is named after the progress bar it drives
		utilizationTo: params.utilizationProgress,
	});

	return {
		items: items.map((item) => {
			const merged = {
				...defaultObject,
				...item,
			};
			return {
				...merged,
				_isSelected: false,
				statusDuration: convertStatusDuration(merged.statusDuration),
				utilization: `${merged.utilization.toFixed(2)}%`,
				occupancy: `${merged.occupancy.toFixed(2)}%`,
				online: convertDuration(merged.online),
				offline: convertDuration(merged.offline),
				pause: convertDuration(merged.pause),
				callTime: convertDuration(merged.callTime),
				chatTime: convertDuration(merged.chatTime),
			};
		}),
		next,
	};
};

export default {
	getList: getAgentsList,
};
