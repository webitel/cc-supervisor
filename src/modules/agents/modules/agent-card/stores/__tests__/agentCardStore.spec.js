import { AgentsAPI } from '@webitel/api-services/api';
import { createPinia, setActivePinia } from 'pinia';

import { useAgentCardStore } from '../agentCardStore';

const agentId = 123;

describe('Agent Card store', () => {
	let store;

	beforeEach(() => {
		setActivePinia(createPinia());
		store = useAgentCardStore();
		vi.restoreAllMocks();
	});

	it('setAgentId sets received id to state', () => {
		store.setAgentId(agentId);
		expect(store.agentId).toBe(agentId);
	});

	it('loadAgent asks for today statistics of the current agent', async () => {
		const getItem = vi
			.spyOn(AgentsAPI, 'getStatusStatisticsItem')
			.mockResolvedValue({});
		store.setAgentId(agentId);
		await store.loadAgent();
		expect(getItem).toHaveBeenCalledWith({
			agentId,
			from: String(new Date().setHours(0, 0, 0, 0)),
			to: String(new Date().setHours(23, 59, 59, 999)),
		});
	});

	it('loadAgent formats the durations of the response', async () => {
		vi.spyOn(AgentsAPI, 'getStatusStatisticsItem').mockResolvedValue({
			name: 'vi',
			online: 61,
		});
		await store.loadAgent();
		expect(store.agent).toEqual({
			name: 'vi',
			offline: '00:00:00',
			online: '00:01:01',
			pause: '00:00:00',
			statusDuration: '00:00:00',
		});
	});

	it('loadScoreData sets score, defaulting the missing values to 0', async () => {
		const getItem = vi
			.spyOn(AgentsAPI, 'getStatusStatisticsItem')
			.mockResolvedValue({
				scoreRequiredAvg: 4.5,
			});
		store.setAgentId(agentId);
		await store.loadScoreData();
		expect(getItem).toHaveBeenCalledWith({
			agentId,
			from: '0',
			to: '0',
		});
		expect(store.score).toEqual({
			scoreCount: 0,
			scoreRequiredAvg: 4.5,
		});
	});
});
