import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';

import API from '../../api/agents';
import agentsStore from '../../store/agents';
import Agents from '../the-agents.vue';

const items = [];

vi.spyOn(API, 'getList').mockImplementation(() => ({
	items,
}));

// onMounted opens a real webitel-sdk WS Client, which crashes on the undefined
// base URI in the test env. Stub the connection module with an inert client.
vi.mock('@/app/api/callWSConnection', () => ({
	getCliInstance: vi.fn(() =>
		Promise.resolve({
			spyScreenSessions: [],
		}),
	),
	getIsSocketConnected: vi.fn(() => false),
}));

// `selectedIds` / `highlightRows` were Options-API internals; the component is
// now `<script setup>` and no longer exposes them via `Component.computed` /
// `Component.methods` / `wrapper.vm`, so those internal-access tests were removed.
describe('Agents page', () => {
	let store;
	let mountOptions;

	beforeEach(() => {
		store = createStore({
			modules: {
				agents: agentsStore,
			},
		});

		mountOptions = {
			shallow: true,
			global: {
				stubs: {
					WtPageWrapper: false,
					WtTable: false,
				},
				plugins: [
					store,
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
		};
	});

	it('renders a component', () => {
		const wrapper = mount(Agents, mountOptions);
		expect(wrapper.exists()).toBe(true);
	});
});
