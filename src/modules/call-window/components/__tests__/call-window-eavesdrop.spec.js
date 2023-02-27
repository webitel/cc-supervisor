import { mount, shallowMount } from '@vue/test-utils';
import CallWindowEavesdrop from '../call-window-eavesdrop.vue';

describe('CallWindowEavesdrop', () => {
  let call;
  let agent;
  let client;
  let computed;

  beforeEach(() => {
    call = {};
    agent = {};
    client = {};
    computed = {
      now() { return Date.now(); },
      isOpened() { return true; },
      call() { return call; },
      agent() { return agent; },
      client() { return client; },
    };
  });

  it('renders a component', () => {
    const wrapper = shallowMount(CallWindowEavesdrop, { computed });
    expect(wrapper.isVisible()).toBe(true);
  });

  it('by default shows ear icon at header', () => {
    const wrapper = shallowMount(CallWindowEavesdrop, { computed });
    const btn = wrapper.findAllComponents({ name: 'wt-icon' })
    .wrappers.find((btn) => btn.props().icon === 'sv-ear');

    expect(btn.isVisible()).toBe(true);
  });

  it('closes window at "close" click', () => {
    const mock = jest.fn();
    jest.spyOn(CallWindowEavesdrop.methods, 'closeWindow')
    .mockImplementationOnce(mock);
    const wrapper = shallowMount(CallWindowEavesdrop, { computed });
    const btn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .wrappers.find((btn) => btn.props().icon === 'close');

    expect(btn.isVisible()).toBe(true);
    btn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });

  it('at isExpanded=true shows main ear icon', () => {
    const wrapper = shallowMount(CallWindowEavesdrop, {
      computed,
      data: () => ({ isExpanded: true }),
    });
    const btn = wrapper
    .find('.call-window-eavesdrop-content')
    .findAllComponents({ name: 'wt-icon' })
    .wrappers.find((btn) => btn.props().icon === 'sv-ear');

    expect(btn.isVisible()).toBe(true);
  });

  it('mutes call', () => {
    const mock = jest.fn();
    jest.spyOn(CallWindowEavesdrop.methods, 'mute')
    .mockImplementationOnce(mock);
    const wrapper = shallowMount(CallWindowEavesdrop, { computed });
    const btn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .wrappers.find((btn) => btn.props().icon === 'mic');

    expect(btn.isVisible()).toBe(true);
    btn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });

  it('prompts call', async () => {
    const mock = jest.fn();
    jest.spyOn(CallWindowEavesdrop.methods, 'prompter')
    .mockImplementationOnce(mock);

    // mount all components to get conference button from wt-tooltip slot
    const wrapper = mount(CallWindowEavesdrop, { computed });

    // open expansion
    wrapper.findComponent({ name: 'call-window-wrapper' })
    .setData({ isExpanded: true });
    await wrapper.vm.$nextTick();

    const btn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .wrappers.find((btn) => btn.props().icon === 'prompter');

    expect(btn.isVisible()).toBe(true);
    btn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });

  it('conferences call', async () => {
    const mock = jest.fn();
    jest.spyOn(CallWindowEavesdrop.methods, 'conference')
    .mockImplementationOnce(mock);

    // mount all components to get conference button from wt-tooltip slot
    const wrapper = mount(CallWindowEavesdrop, { computed });

    // open expansion
    wrapper.findComponent({ name: 'call-window-wrapper' })
    .setData({ isExpanded: true });
    await wrapper.vm.$nextTick();

    const btn = wrapper.findAllComponents({ name: 'wt-rounded-action' })
    .wrappers.find((btn) => btn.props().icon === 'conference');

    expect(btn.isVisible()).toBe(true);
    btn.vm.$emit('click');
    expect(mock).toHaveBeenCalled();
  });
});
