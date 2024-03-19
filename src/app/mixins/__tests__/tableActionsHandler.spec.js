import { shallowMount } from '@vue/test-utils';
import tableActionsHandlerMixin from '../supervisor-workspace/tableActionsHandlerMixin';

const initializeListMock = vi.fn();
const resetFiltersMock = vi.fn();

const Component = {
  render() {},
  mixins: [tableActionsHandlerMixin],
  methods: {
    initializeList: initializeListMock,
    resetFilters: resetFiltersMock,
  },
};

describe('Table actions handler', () => {
  it('refresh action', () => {
    const wrapper = shallowMount(Component);
    wrapper.vm.tableActionsHandler('refresh');
    expect(initializeListMock).toHaveBeenCalled();
  });
  it('reset filters action', () => {
    const wrapper = shallowMount(Component);
    wrapper.vm.tableActionsHandler('filterReset');
    expect(resetFiltersMock).toHaveBeenCalled();
  });
});
