import { shallowMount } from '@vue/test-utils';
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
      now() { return Date.now(); },
      isVisible() { return true; },
      call() { return call; },
      agent() { return agent; },
    };

    jest.spyOn(CallWindowConversation.methods, 'subscribeCalls')
    .mockImplementationOnce(jest.fn());
  });

  it('renders a component', () => {
    const wrapper = shallowMount(CallWindowConversation, { computed });
    expect(wrapper.isVisible()).toBe(true);
  });

  it('answers on call at ringing state', () => {
    // ringing
    call.state = CallActions.Ringing;
    call.direction = CallDirection.Inbound;

    const mock = jest.fn();
    jest.spyOn(CallWindowConversation.methods, 'answerCall')
    .mockImplementationOnce(mock);
    const wrapper = shallowMount(CallWindowConversation, { computed });
    const answerBtn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .wrappers.find((btn) => btn.props().icon === 'call-ringing');

    expect(answerBtn.isVisible()).toBe(true);
    answerBtn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });

  it('shows sonar in header if not ringing and isnt expanded (by default)', () => {
    const wrapper = shallowMount(CallWindowConversation, { computed });
    const answerBtn = wrapper.find('.call-window-conversation-header__sonar');
    expect(answerBtn.isVisible()).toBe(true);
  });

  it('hangups call at active state', () => {
    // active
    call.active = true;

    const mock = jest.fn();
    jest.spyOn(CallWindowConversation.methods, 'leaveCall')
    .mockImplementationOnce(mock);
    const wrapper = shallowMount(CallWindowConversation, { computed });
    const answerBtn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .wrappers.find((btn) => btn.props().icon === 'call-end');

    expect(answerBtn.isVisible()).toBe(true);
    answerBtn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });

  it('shows main sonar if not ringing and is expanded', () => {
    const wrapper = shallowMount(CallWindowConversation, {
      computed,
      data: () => ({ isExpanded: true }),
    });
    const answerBtn = wrapper.find('.call-window-conversation-content__sonar-wrapper');
    expect(answerBtn.isVisible()).toBe(true);
  });

  it('mutes call', () => {
    const mock = jest.fn();
    jest.spyOn(CallWindowConversation.methods, 'toggleMute')
    .mockImplementationOnce(mock);
    const wrapper = shallowMount(CallWindowConversation, { computed });
    const answerBtn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .wrappers.find((btn) => btn.props().icon === 'mic');

    expect(answerBtn.isVisible()).toBe(true);
    answerBtn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });

  it('holds call', () => {
    call.allowHold = true;

    const mock = jest.fn();
    jest.spyOn(CallWindowConversation.methods, 'toggleHold')
    .mockImplementationOnce(mock);
    const wrapper = shallowMount(CallWindowConversation, { computed });
    const answerBtn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .wrappers.find((btn) => btn.props().icon === 'hold');

    expect(answerBtn.isVisible()).toBe(true);
    answerBtn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });
});
