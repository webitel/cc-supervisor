import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import ringingSoundMixin from '../ringingSoundMixin/ringingSoundMixin';

describe('Ringing sound mixin', () => {
	const store = createStore({
		modules: {
			call: {
				state: {
					call: {
						direction: 'inbound',
						state: 'ringing',
					},
				},
				namespaced: true,
			},
		},
	});
	const ringingAudio = {
		play: vi.fn(),
		pause: vi.fn(),
	};
	const Component = {
		render() {},
		mixins: [
			ringingSoundMixin,
		],
		data: () => ({
			ringingAudio,
		}),
	};
	const wrapper = shallowMount(Component, {
		global: {
			plugins: [
				store,
			],
		},
	});

	it('renders a component', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
