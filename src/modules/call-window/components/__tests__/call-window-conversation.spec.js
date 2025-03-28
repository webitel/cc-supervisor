import { mount,shallowMount } from '@vue/test-utils';
import { CallActions, CallDirection } from 'webitel-sdk';

import CallWindowConversation from '../call-window-conversation.vue';

describe('CallWindowConversation', () => {
  let call;
  let agent;
  let computed;

  beforeEach(() => {
    call = {};
    agent = {};
    computed = {
      ...CallWindowConversation.computed,
      now() { return Date.now(); },
      isVisible() { return true; },
      call() { return call; },
      agent() { return agent; },
    };

    vi.spyOn(CallWindowConversation.methods, 'subscribeCalls')
    .mockImplementationOnce(vi.fn());
  });

  it('renders a component', () => {
    const wrapper = shallowMount(CallWindowConversation, { computed });
    expect(wrapper.isVisible()).toBe(true);
  });

  it('answers on call at ringing state', () => {
    // ringing
    call.state = CallActions.Ringing;
    call.direction = CallDirection.Inbound;

    const mock = vi.fn();
    vi.spyOn(CallWindowConversation.methods, 'answerCall')
    .mockImplementationOnce(mock);
    const wrapper = mount(CallWindowConversation, { computed });
    const answerBtn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .find((btn) => btn.props().icon === 'call-ringing');

    expect(answerBtn.isVisible()).toBe(true);
    answerBtn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });

  it('shows sonar in header if not ringing and isnt expanded (by default)', () => {
    const wrapper = mount(CallWindowConversation, { computed });
    const answerBtn = wrapper.find('.call-window-conversation-header__sonar');
    expect(answerBtn.isVisible()).toBe(true);
  });

  it('hangups call at active state', () => {
    // active
    call.active = true;

    const mock = vi.fn();
    vi.spyOn(CallWindowConversation.methods, 'leaveCall')
    .mockImplementationOnce(mock);
    const wrapper = mount(CallWindowConversation, { computed });
    const answerBtn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .find((btn) => btn.props().icon === 'call-end');

    expect(answerBtn.isVisible()).toBe(true);
    answerBtn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });

  it('shows main sonar if not ringing and is expanded', async () => {
    const wrapper = mount(CallWindowConversation, {
      computed,
      data: () => ({ isExpanded: true }),
    });
    await wrapper.findComponent({ name: 'call-window-wrapper' }).setData({ isExpanded: true });
    const answerBtn = wrapper.find('.call-window-conversation-content__sonar-wrapper');
    expect(answerBtn.isVisible()).toBe(true);
  });

  it('mutes call', async () => {
    const mock = vi.fn();
    vi.spyOn(CallWindowConversation.methods, 'toggleMute')
    .mockImplementationOnce(mock);
    const wrapper = mount(CallWindowConversation, { computed });
    await wrapper.findComponent({ name: 'call-window-wrapper' }).setData({ isExpanded: true });
    const answerBtn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .find((btn) => btn.props().icon === 'mic');

    expect(answerBtn.isVisible()).toBe(true);
    answerBtn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });

  it('holds call', async () => {
    call.allowHold = true;

    const mock = vi.fn();
    vi.spyOn(CallWindowConversation.methods, 'toggleHold')
    .mockImplementationOnce(mock);
    const wrapper = mount(CallWindowConversation, { computed });
    await wrapper.findComponent({ name: 'call-window-wrapper' }).setData({ isExpanded: true });
    const answerBtn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .find((btn) => btn.props().icon === 'hold');

    expect(answerBtn.isVisible()).toBe(true);
    answerBtn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });
});
