import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import AgentInfoForm from '../agent-info-form.vue';

const namespace = 'card';
const agent = {};
const store = createStore({
  modules: {
    [namespace]: {
      namespaced: true,
      state: { agent },
    },
  },
});

describe('Agent Info Form', () => {
  const mountOptions = {
    global: {
      plugins: [store],
    },
    props: { namespace },
  };
  it('renders a component', () => {
    const wrapper = shallowMount(AgentInfoForm, mountOptions);
    expect(wrapper.exists()).toBe(true);
  });
});
