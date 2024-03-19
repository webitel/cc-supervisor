import { shallowMount } from '@vue/test-utils';
import autoRefreshMixin from '../autoRefresh/autoRefreshMixin';
import '../../../../tests/unit/mocks/localStorageMock';

test('autoRefresh triggered function twice', async () => {
  let counter = 0;
  localStorage.setItem('auto-refresh', '10');
  const Component = {
    render() {},
    mixins: [autoRefreshMixin],
    methods: {
      loadList() {
        counter += 1;
      },
    },
    created() {
      this.setAutoRefresh();
    },
  };
  shallowMount(Component);
  await new Promise((r) => setTimeout(() => {
    r();
  }, 20));
});
