import { shallowMount } from '@vue/test-utils';
import { CallDirection } from 'webitel-sdk';

import TableDirection from '../_internals/table-templates/table-direction.vue';

describe('Agent calls direction cell', () => {
	let item;
	beforeEach(() => {
		item = {};
	});
	it('renders a component', () => {
		const wrapper = shallowMount(TableDirection, {
			props: {
				item,
			},
		});
		expect(wrapper.exists()).toBe(true);
	});
	it('correctly computes outbound direction icon and color', () => {
		item.direction = CallDirection.Outbound;
		const wrapper = shallowMount(TableDirection, {
			props: {
				item,
			},
		});
		expect(wrapper.vm.directionIcon).toBe('call-outbound');
		expect(wrapper.vm.directionIconColor).toBe('success');
	});
	it('correctly computes inbound direction icon and color', () => {
		item.direction = CallDirection.Inbound;
		const wrapper = shallowMount(TableDirection, {
			props: {
				item,
			},
		});
		expect(wrapper.vm.directionIcon).toBe('call-inbound');
		expect(wrapper.vm.directionIconColor).toBe('primary');
	});
});
