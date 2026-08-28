import { ActiveCallsAPI } from '@webitel/api-services/api';
import { FormatDateMode } from '@webitel/ui-sdk/enums';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';

export const getActiveCallList = async (params) => {
	const defaultParams = {
		search: '',
		skipParent: true,
	};

	const { items, next } = await ActiveCallsAPI.getList({
		...defaultParams,
		...params,
	});

	return {
		items: items.map((item) => ({
			duration: 0,
			...item,
			duration: convertDuration(item.duration ?? 0),
			createdAt: formatDate(+item.createdAt, FormatDateMode.DATETIME),
		})),
		next,
	};
};

export default {
	getList: getActiveCallList,
};
