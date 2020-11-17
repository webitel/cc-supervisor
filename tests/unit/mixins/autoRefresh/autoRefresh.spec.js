import { shallowMount } from '@vue/test-utils';
import autoRefreshMixin from '../../../../src/mixins/autoRefresh/autoRefreshMixin';
import '../../mocks/localStorageMock';

test('autoRefresh triggered function twice', (done) => {
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
  setTimeout(() => {
    expect(counter).toBe(2);
    done();
  }, 20);
});
