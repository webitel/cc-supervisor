import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import enumFilterMixin from '../../../../../src/shared/filters/mixins/enumFilterMixin';
import TypeOptions from '../../../../../src/shared/filters/api/TypeOptions.enum';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

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

  beforeEach(() => {
    if (Object.keys(router.currentRoute.query).length) router.replace({ query: null });
  });

  it('Correctly sets value from $route query', async () => {
    await router.replace({ query: { type: [TypeOptions[0].value]} });
    wrapper = shallowMount(Component, {
      localVue,
      router,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.value)
    .toEqual([TypeOptions[0]]);
  });

  it('Resets value after $route query reset', async () => {
    await router.replace({ query: { type: [TypeOptions[0].value]} });
    wrapper = shallowMount(Component, {
      localVue,
      router,
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.value).toEqual([TypeOptions[0]]);
    await wrapper.vm.$router.replace({ query: null });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.value).toEqual([]);
  });
});
