import {
	getDefaultGetListResponse,
	getDefaultGetParams,
} from '@webitel/ui-sdk/src/api/defaults/index.js';
import applyTransform, {
	merge,
	notify,
	snakeToCamel,
	starToSearch,
} from '@webitel/ui-sdk/src/api/transformers/index.js';
import { AgentServiceApiFactory } from 'webitel-sdk';

import instance from '../../../../app/api/instance';
import configuration from '../../../../app/api/utils/openAPIConfig';

const agentService = new AgentServiceApiFactory(configuration, '', instance);

const getList = async (params) => {
	const { page, size, search, fields, id } = applyTransform(params, [
		merge(getDefaultGetParams()),
		starToSearch('search'),
	]);
	const isSupervisor = true;
	try {
		const response = await agentService.searchAgent(
			page,
			size,
			search,
			undefined,
			fields,
			id,
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
			isSupervisor,
		);
		const { items, next } = applyTransform(response.data, [
			snakeToCamel(),
			merge(getDefaultGetListResponse()),
		]);
		return {
			items,
			next,
		};
	} catch (err) {
		throw applyTransform(err, [
			notify,
		]);
	}
};

export default getList;
