import { createTestingPinia } from '@pinia/testing';
import { mount, shallowMount } from '@vue/test-utils';

import { useCallStore } from '../../store/callStore';
import CallWindowEavesdrop from '../call-window-eavesdrop.vue';

describe('CallWindowEavesdrop', () => {
	let call;
	let mountOptions;

	beforeEach(() => {
		call = {
			changeEavesdropState: vi.fn(),
		};

		const pinia = createTestingPinia({
			createSpy: vi.fn,
			initialState: {
				call: {
					eavesdrop: {
						isOpened: true,
					},
					agent: {},
					call,
				},
			},
			stubActions: false,
		});

		mountOptions = {
			global: {
				plugins: [
					pinia,
				],
			},
		};
	});

	it('renders a component', () => {
		const wrapper = shallowMount(CallWindowEavesdrop, mountOptions);
		expect(wrapper.isVisible()).toBe(true);
	});

	it('by default shows ear icon at header', () => {
		const wrapper = mount(CallWindowEavesdrop, mountOptions);
		const btn = wrapper
			.findAllComponents({
				name: 'wt-icon',
			})
			.find((btn) => btn.props().icon === 'sv-ear');

		expect(btn.isVisible()).toBe(true);
	});

	it('closes window at "close" click', () => {
		const wrapper = mount(CallWindowEavesdrop, mountOptions);
		const callStore = useCallStore();
		const btn = wrapper
			.findAllComponents({
				name: 'wt-button',
			})
			.find((btn) => btn.props().icon === 'close');

		expect(btn.isVisible()).toBe(true);
		btn.vm.$emit('click');
		expect(callStore.eavesdropCloseWindow).toHaveBeenCalled();
	});

	it('at isExpanded=true shows main ear icon', async () => {
		const wrapper = mount(CallWindowEavesdrop, mountOptions);
		await wrapper
			.findComponent({
				name: 'call-window-wrapper',
			})
			.setData({
				isExpanded: true,
			});
		const btn = wrapper
			.find('.call-window-eavesdrop-content')
			.findAllComponents({
				name: 'wt-icon',
			})
			.find((btn) => btn.props().icon === 'sv-ear');

		expect(btn.isVisible()).toBe(true);
	});

	it('mutes call', async () => {
		const wrapper = mount(CallWindowEavesdrop, mountOptions);
		await wrapper
			.findComponent({
				name: 'call-window-wrapper',
			})
			.setData({
				isExpanded: true,
			});
		const btn = wrapper
			.findAllComponents({
				name: 'wt-button',
			})
			.find((btn) => btn.props().icon === 'mic');

		expect(btn.isVisible()).toBe(true);
		btn.vm.$emit('click');
		expect(call.changeEavesdropState).toHaveBeenCalled();
	});

	it('prompts call', async () => {
		// mount all components to get conference button from wt-tooltip slot
		const wrapper = mount(CallWindowEavesdrop, mountOptions);

		// open expansion
		wrapper
			.findComponent({
				name: 'call-window-wrapper',
			})
			.setData({
				isExpanded: true,
			});
		await wrapper.vm.$nextTick();

		const btn = wrapper
			.findAllComponents({
				name: 'wt-button',
			})
			.find((btn) => btn.props().icon === 'prompter');

		expect(btn.isVisible()).toBe(true);
		btn.vm.$emit('click');
		expect(call.changeEavesdropState).toHaveBeenCalled();
	});

	it('conferences call', async () => {
		// mount all components to get conference button from wt-tooltip slot
		const wrapper = mount(CallWindowEavesdrop, mountOptions);

		// open expansion
		wrapper
			.findComponent({
				name: 'call-window-wrapper',
			})
			.setData({
				isExpanded: true,
			});
		await wrapper.vm.$nextTick();

		const btn = wrapper
			.findAllComponents({
				name: 'wt-button',
			})
			.find((btn) => btn.props().icon === 'conference');

		expect(btn.isVisible()).toBe(true);
		btn.vm.$emit('click');
		expect(call.changeEavesdropState).toHaveBeenCalled();
	});
});
