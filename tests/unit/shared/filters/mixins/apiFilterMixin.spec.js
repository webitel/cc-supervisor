import { shallowMount } from '@vue/test-utils';
import apiFilterMixin from '../../../../../src/shared/filters/mixins/apiFilterMixin';

const $route = {
  query: {
    team: ['1', '2'],
  },
};

describe('API filter mixin', () => {
  let wrapper;
  const Component = {
    render() {},
    mixins: [apiFilterMixin],
    data: () => ({
      filterQuery: 'team',
    }),
  };

  it('Correctly sets value from $route query', async () => {
    wrapper = shallowMount(Component, {
      mocks: { $route },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.value)
    .toEqual($route.query.team);
  });

  it('Sets empty array value if $route query is empty', async () => {
    wrapper = shallowMount(Component, {
      mocks: { $route },
      data: () => ({
        filterQuery: 'queue',
      }),
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.value)
    .toEqual([]);
  });
});
