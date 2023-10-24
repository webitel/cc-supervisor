import { config } from '@vue/test-utils';
import mockAxios from 'jest-mock-axios';
import WebitelUi from '../../src/app/plugins/webitel-ui';
import en from '../../src/app/locale/en/en';

config.global.mocks.$t = (msg) => en[msg] || msg;
config.global.mocks.$tc = (msg) => en[msg] || msg;
config.global.plugins = [WebitelUi];

jest.mock('axios', () => mockAxios);
