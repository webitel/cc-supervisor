import { AgentsAPI as SharedAgentsAPI } from '@webitel/api-services/api';

import AgentsAPI from '../agents';

vi.mock('@webitel/api-services/api');

const expectResponse = {
	items: [
		{
			_isSelected: false,
			missed: 0,
			transferred: 0,
			statusDuration: '00:00:00',
			utilization: '0.00%',
			online: '00:00:00',
			offline: '00:00:00',
			pause: '00:00:00',
			callTime: '00:00:00',
			chatTime: '00:00:00',
			occupancy: '0.00%',
		},
	],
	next: false,
};

describe('Agents API', () => {
	it('getList: formats the shared client response', async () => {
		SharedAgentsAPI.getStatusStatistics = vi.fn(() =>
			Promise.resolve({
				items: [
					{},
				],
				next: false,
			}),
		);
		const response = await AgentsAPI.getList({});
		expect(SharedAgentsAPI.getStatusStatistics).toHaveBeenCalled();
		expect(response).toEqual(expectResponse);
	});
});
