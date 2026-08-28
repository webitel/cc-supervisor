import { AgentsAPI } from '@webitel/api-services/api';

import AgentAPI from '../agent-edit';

vi.mock('@webitel/api-services/api');

describe('Agent Edit API', () => {
	it('get: asks for the card-specific defaults', async () => {
		AgentsAPI.get = vi.fn(() =>
			Promise.resolve({
				name: 'vi',
			}),
		);
		await AgentAPI.get({
			itemId: 1,
		});
		expect(AgentsAPI.get).toHaveBeenCalledWith({
			itemId: 1,
			// `progressiveCount` must stay null: it is validated with minValue(1)
			defaultObject: {
				_dirty: false,
				progressiveCount: null,
				chatCount: 0,
			},
		});
	});

	it('patch: delegates to the shared client', async () => {
		const payload = {
			id: 1,
			changes: {
				_dirty: true,
				team: {
					name: 'vi',
				},
			},
		};
		AgentsAPI.patch = vi.fn(() => Promise.resolve(payload));
		const response = await AgentAPI.patch(payload);
		expect(AgentsAPI.patch).toHaveBeenCalledWith(payload);
		expect(response).toEqual(payload);
	});
});
