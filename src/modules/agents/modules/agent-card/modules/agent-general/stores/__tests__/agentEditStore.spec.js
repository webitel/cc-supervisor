import { AgentsAPI } from '@webitel/api-services/api';
import { createPinia, setActivePinia } from 'pinia';

import { useAgentCardStore } from '../../../../stores/agentCardStore';
import { useAgentEditStore } from '../agentEditStore';

const agentId = 123;

describe('Agent Edit store', () => {
	let store;

	beforeEach(() => {
		setActivePinia(createPinia());
		vi.restoreAllMocks();
		useAgentCardStore().setAgentId(agentId);
		store = useAgentEditStore();
	});

	it('loadAgent asks for the card agent with card-specific defaults', async () => {
		const agent = {
			name: 'vi',
		};
		const getAgent = vi.spyOn(AgentsAPI, 'get').mockResolvedValue(agent);
		await store.loadAgent();
		expect(getAgent).toHaveBeenCalledWith({
			itemId: agentId,
			// `progressiveCount` must stay null: it is validated with minValue(1)
			defaultObject: {
				_dirty: false,
				progressiveCount: null,
				chatCount: 0,
			},
		});
		expect(store.agent).toEqual(agent);
	});

	it('setAgentProperty sets the prop and marks agent as dirty', () => {
		store.setAgentProperty({
			prop: 'chatCount',
			value: 2,
		});
		expect(store.agent).toEqual({
			chatCount: 2,
			_dirty: true,
		});
	});

	it('updateAgent patches the agent, sending empty lookups as nulls', async () => {
		const patchAgent = vi.spyOn(AgentsAPI, 'patch').mockResolvedValue({});
		vi.spyOn(AgentsAPI, 'get').mockResolvedValue({});
		store.agent = {
			name: 'vi',
			team: {},
			region: {
				id: 1,
			},
			supervisor: [],
			auditor: [
				{
					id: 2,
				},
			],
		};
		await store.updateAgent();
		expect(patchAgent).toHaveBeenCalledWith({
			id: agentId,
			changes: {
				name: 'vi',
				team: {
					id: null,
				},
				region: {
					id: 1,
				},
				supervisor: [
					{
						id: null,
					},
				],
				auditor: [
					{
						id: 2,
					},
				],
			},
		});
	});

	it('updateAgent reloads the agent even if patch fails', async () => {
		vi.spyOn(AgentsAPI, 'patch').mockRejectedValue(new Error());
		const getAgent = vi.spyOn(AgentsAPI, 'get').mockResolvedValue({});
		await store.updateAgent();
		expect(getAgent).toHaveBeenCalled();
	});
});
