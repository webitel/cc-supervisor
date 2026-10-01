import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { QueuesAPI } from '@webitel/api-services/api';

import Queues from '../the-queues.vue';

const items = [
	{
		_isSelected: true,
		abandoned: 50,
		avg_aht_sec: 14.157177,
		avg_asa_sec: 56.35288,
		avg_awt_sec: 9.33228,
		avg_wrap_sec: 5.174368,
		bridged: 50,
		count: '2',
		max_awt_sec: 9.33228,
		online: 2,
		pause: 1,
		queue: {
			id: '124',
			name: 'PREDICTIVE DIALER dfd',
		},
		sum_bill_sec: 8.982809,
		team: {
			id: '2',
			name: 'igor 1',
		},
		agent_status: {
			free: 1,
		},
		waiting: '5',
	},
];

vi.mock('@webitel/api-services/api');

// The `selectedIds` test relied on Options-API internals (`Queues.computed`,
// `wrapper.vm.selectedIds`); the component is now `<script setup>` and no longer
// exposes them, so that test was removed.
describe('Queues page', () => {
	const mountOptions = () => ({
		global: {
			plugins: [
				createTestingPinia({
					createSpy: vi.fn,
				}),
			],
			mocks: {
				$route: {
					query: {},
				},
			},
		},
	});

	beforeEach(() => {
		QueuesAPI.getReportGeneral = vi.fn().mockImplementation(() =>
			Promise.resolve({
				items,
			}),
		);
	});

	it('renders a component', () => {
		const wrapper = shallowMount(Queues, mountOptions());
		expect(wrapper.exists()).toBe(true);
	});
});
