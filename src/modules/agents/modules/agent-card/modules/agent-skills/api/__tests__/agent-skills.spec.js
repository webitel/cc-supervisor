import { AgentSkillsAPI } from '@webitel/api-services/api';

import AgentSkillsModule from '../agent-skills';

vi.mock('@webitel/api-services/api');

const parentId = '1';
const id = '2';

describe('Agent Skills API', () => {
	it.each([
		[
			'getList',
			{
				parentId,
			},
		],
		[
			'get',
			{
				parentId,
				itemId: id,
			},
		],
		[
			'add',
			{
				parentId,
				itemInstance: {},
			},
		],
		[
			'patch',
			{
				parentId,
				id,
				changes: {},
			},
		],
		[
			'update',
			{
				parentId,
				itemId: id,
				itemInstance: {},
			},
		],
		[
			'delete',
			{
				parentId,
				id,
			},
		],
	])('%s delegates to the shared client', async (method, params) => {
		AgentSkillsAPI[method] = vi.fn(() => Promise.resolve());
		await AgentSkillsModule[method](params);
		expect(AgentSkillsAPI[method]).toHaveBeenCalledWith(params);
	});
});
