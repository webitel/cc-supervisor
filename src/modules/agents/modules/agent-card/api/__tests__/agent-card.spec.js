import { AgentsAPI } from '@webitel/api-services/api';

import AgentCardAPI from '../agent-card';

vi.mock('@webitel/api-services/api');

const expectedResponse = {
	name: 'vi',
	offline: '00:00:00',
	online: '00:00:00',
	pause: '00:00:00',
	statusDuration: '00:00:00',
};

describe('Agent Page API', () => {
	it('get: formats the shared client response', async () => {
		AgentsAPI.getStatusStatisticsItem = vi.fn(() =>
			Promise.resolve({
				name: 'vi',
			}),
		);
		const response = await AgentCardAPI.get({
			itemId: 1,
		});
		expect(AgentsAPI.getStatusStatisticsItem).toHaveBeenCalled();
		expect(response).toEqual(expectedResponse);
	});
});
