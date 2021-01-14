import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ringingSoundMixin from '../../../../src/mixins/ringingSoundMixin';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Ringing sound mixin', () => {
  const store = new Vuex.Store({
    modules: {
      call: {
        state: { call: { direction: 'inbound', state: 'ringing' } },
        namespaced: true,
      },
    },
  });
  const ringingAudio = { play: jest.fn(), pause: jest.fn() };
  const Component = {
    render() {},
    mixins: [ringingSoundMixin],
    data: () => ({ ringingAudio }),
  };
  const wrapper = shallowMount(Component, { localVue, store });

  it('renders a component', () => {
  expect(wrapper.exists()).toBe(true);
  });
});
