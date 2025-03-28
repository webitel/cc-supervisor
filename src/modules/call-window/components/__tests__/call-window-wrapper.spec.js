import { shallowMount } from '@vue/test-utils';

import CallWindowWrapper from '../call-window-wrapper.vue';

describe('CallWindowWrapper', () => {
  it('renders a component', () => {
    const wrapper = shallowMount(CallWindowWrapper);
    expect(wrapper.isVisible()).toBe(true);
  });
});
