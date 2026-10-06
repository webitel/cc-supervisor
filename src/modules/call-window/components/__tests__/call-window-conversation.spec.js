import { createTestingPinia } from '@pinia/testing';
import { mount, shallowMount } from '@vue/test-utils';
import { CallActions, CallDirection } from 'webitel-sdk';

import { useCallStore } from '../../store/callStore';
import CallWindowConversation from '../call-window-conversation.vue';

describe('CallWindowConversation', () => {
	let call;
	let mountOptions;

	beforeEach(() => {
		call = {
			mute: vi.fn(),
			toggleHold: vi.fn(),
		};

		const pinia = createTestingPinia({
			createSpy: vi.fn,
			initialState: {
				call: {
					callState: {
						isVisible: true,
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
		const wrapper = shallowMount(CallWindowConversation, mountOptions);
		expect(wrapper.isVisible()).toBe(true);
	});

	it('answers on call at ringing state', () => {
		// ringing
		call.state = CallActions.Ringing;
		call.direction = CallDirection.Inbound;

		const wrapper = mount(CallWindowConversation, mountOptions);
		const callStore = useCallStore();
		const answerBtn = wrapper
			.findAllComponents({
				name: 'wt-button',
			})
			.find((btn) => btn.props().icon === 'call--filled');

		expect(answerBtn.isVisible()).toBe(true);
		answerBtn.vm.$emit('click');
		expect(callStore.answerCall).toHaveBeenCalled();
	});

	it('shows sonar in header if not ringing and isnt expanded (by default)', () => {
		const wrapper = mount(CallWindowConversation, mountOptions);
		const answerBtn = wrapper.find('.call-window-conversation-header__sonar');
		expect(answerBtn.isVisible()).toBe(true);
	});

	it('hangups call at active state', () => {
		// active
		call.active = true;

		const wrapper = mount(CallWindowConversation, mountOptions);
		const callStore = useCallStore();
		const answerBtn = wrapper
			.findAllComponents({
				name: 'wt-button',
			})
			.find((btn) => btn.props().icon === 'call-end--filled');

		expect(answerBtn.isVisible()).toBe(true);
		answerBtn.vm.$emit('click');
		expect(callStore.leaveCall).toHaveBeenCalled();
	});

	it('shows main sonar if not ringing and is expanded', async () => {
		const wrapper = mount(CallWindowConversation, mountOptions);
		await wrapper
			.findComponent({
				name: 'call-window-wrapper',
			})
			.setData({
				isExpanded: true,
			});
		const answerBtn = wrapper.find(
			'.call-window-conversation-content__sonar-wrapper',
		);
		expect(answerBtn.isVisible()).toBe(true);
	});

	it('mutes call', async () => {
		const wrapper = mount(CallWindowConversation, mountOptions);
		const callStore = useCallStore();
		await wrapper
			.findComponent({
				name: 'call-window-wrapper',
			})
			.setData({
				isExpanded: true,
			});
		const answerBtn = wrapper
			.findAllComponents({
				name: 'wt-button',
			})
			.find((btn) => btn.props().icon === 'mic');

		expect(answerBtn.isVisible()).toBe(true);
		answerBtn.vm.$emit('click');
		expect(callStore.toggleMute).toHaveBeenCalled();
	});

	it('holds call', async () => {
		call.allowHold = true;

		const wrapper = mount(CallWindowConversation, mountOptions);
		const callStore = useCallStore();
		await wrapper
			.findComponent({
				name: 'call-window-wrapper',
			})
			.setData({
				isExpanded: true,
			});
		const answerBtn = wrapper
			.findAllComponents({
				name: 'wt-button',
			})
			.find((btn) => btn.props().icon === 'hold');

		expect(answerBtn.isVisible()).toBe(true);
		answerBtn.vm.$emit('click');
		expect(callStore.toggleHold).toHaveBeenCalled();
	});
});
