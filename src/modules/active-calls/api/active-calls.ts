import { ActiveCallsAPI as SharedActiveCallsAPI } from '@webitel/api-services/api';
import { FormatDateMode } from '@webitel/ui-sdk/enums';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';

export const getActiveCallList = async (params?: Record<string, unknown>) => {
	const defaultParams = {
		search: '',
		skipParent: true,
	};

	const { items, next } = await SharedActiveCallsAPI.getList({
		...defaultParams,
		...params,
	});

	return {
		items: items.map((item: Record<string, unknown>) => ({
			...item,
			duration: convertDuration(Number(item.duration ?? 0)),
			createdAt: formatDate(Number(item.createdAt), FormatDateMode.DATETIME),
		})),
		next,
	};
};

export default {
	getList: getActiveCallList,
};
