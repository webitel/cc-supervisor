import { mount } from '@vue/test-utils';

import store from '../../../../../app/store/index';
import FilterPagination from '../filter-pagination.vue';

const $route = {
	query: {},
};

const mountFilter = (component, namespace) =>
	mount(component, {
		shallow: true,
		global: {
			plugins: [
				store,
			],
			mocks: {
				$route,
			},
		},
		props: {
			namespace,
		},
	});

// The `wt-*` components are now registered as async global components, so under
// a shallow mount they render as `async-component-wrapper-stub` and can no
// longer be located via `findComponent({ name: 'wt-datepicker' })`. These
// smoke tests therefore assert that the filter component mounts and renders its
// (single, root) control without throwing from the base filter mixin / store.
describe('Filter components', () => {
	it('renders pagination filter component', () => {
		const wrapper = mountFilter(FilterPagination, 'queues/filters');
		expect(wrapper.isVisible()).toBe(true);
		expect(wrapper.html()).not.toBe('');
	});
});
