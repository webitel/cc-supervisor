import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import JSDOM from 'jsdom';
import * as API from '../api/auth';
import Auth
  from '../components/auth.vue';
import userInfoStore from '../../../userinfo/store/userinfo';

const localVue = createLocalVue();
localVue.use(Vuex);

API.setToken = jest.fn();
API.getSession = jest.fn(() => ({}));

describe('Auth', () => {
  let store;
  let wrapper;
  global.window = new JSDOM.JSDOM().window;
  const $router = { replace: jest.fn() };

  beforeEach(() => {
    store = new Vuex.Store({
      modules: { userinfo: userInfoStore },
    });

    wrapper = shallowMount(Auth, {
      localVue,
      store,
      mocks: { $router },
    });
  });

  it('renders a component', () => {
    expect(wrapper.classes('auth-wrap')).toBe(true);
  });

  it('sets token, gets session and opens app after auth token message emit', async (done) => {
    const accessToken = 'hello there';
    window.postMessage({ accessToken }, '*');
    await setTimeout(() => {
      expect(API.setToken).toHaveBeenCalledWith(accessToken);
      expect(API.getSession).toHaveBeenCalled();
      expect($router.replace).toHaveBeenCalled();
      done();
    }, 100);
  });
});
