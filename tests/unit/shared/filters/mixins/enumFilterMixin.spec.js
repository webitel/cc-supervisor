import { shallowMount } from '@vue/test-utils';
import enumFilterMixin from '../../../../../src/shared/filters/mixins/enumFilterMixin';
import TypeOptions from '../../../../../src/shared/filters/api/TypeOptions.enum';

const $route = {
  query: {
    type: [TypeOptions[0].value],
  },
};

describe('Enum filter mixin', () => {
  let wrapper;
  const Component = {
    render() {},
    mixins: [enumFilterMixin],
    data: () => ({
      filterQuery: 'type',
      options: TypeOptions,
    }),
  };

  it('Correctly sets value from $route query', async () => {
    wrapper = shallowMount(Component, {
      mocks: { $route },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.value)
    .toEqual([TypeOptions[0]]);
  });
});
