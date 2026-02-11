import { FormatDateMode } from '@webitel/ui-sdk/enums';
import {
	getDefaultGetListResponse,
	getDefaultGetParams,
} from '@webitel/ui-sdk/src/api/defaults/index.js';
import applyTransform, {
	merge,
	mergeEach,
	notify,
	snakeToCamel,
	starToSearch,
} from '@webitel/ui-sdk/src/api/transformers/index.js';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import { formatDate } from '@webitel/ui-sdk/utils';
import { CallServiceApiFactory } from 'webitel-sdk';

import instance from '../../../app/api/instance';
import configuration from '../../../app/api/utils/openAPIConfig';

const callService = new CallServiceApiFactory(configuration, '', instance);

export const getActiveCallList = async (params) => {
	const defaultParams = {
		search: '',
		skipParent: true,
	};

	const defaultObject = {
		duration: 0,
	};

	const listHandler = (items) =>
		items.map((item) => ({
			...item,
			duration: convertDuration(item.duration),
			createdAt: formatDate(+item.createdAt, FormatDateMode.DATETIME),
		}));

	const {
		page,
		size,
		search,
		fields,
		queue,
		team,
		agent,
		supervisor,
		sort,
		direction,
		user,
		gateway,
		result,
		skipParent,
	} = applyTransform(params, [
		merge(getDefaultGetParams()),
		merge(defaultParams),
		starToSearch('search'),
	]);

	try {
		const response = await callService.searchActiveCall(
			page,
			size,
			search,
			sort,
			fields,
			undefined,
			undefined,
			user,
			agent,
			queue,
			team,
			undefined,
			gateway,
			undefined,
			undefined,
			skipParent,
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
			direction,
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
			supervisor,
			result,
		);
		const { items, next } = applyTransform(response.data, [
			snakeToCamel(),
			merge(getDefaultGetListResponse()),
		]);
		return {
			items: applyTransform(items, [
				mergeEach(defaultObject),
				listHandler,
			]),
			next,
		};
	} catch (err) {
		throw applyTransform(err, [
			notify,
		]);
	}
};

export default {
	getList: getActiveCallList,
};
