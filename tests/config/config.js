import { config } from '@vue/test-utils';
import en from '../../src/app/locale/en/en';

config.mocks.$t = (msg) => en[msg] || msg;
