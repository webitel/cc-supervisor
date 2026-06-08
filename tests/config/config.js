import { config } from '@vue/test-utils';
import axiosMock from '@webitel/ui-sdk/src/tests/mocks/axiosMock';
import en from '../../src/app/locale/en/en';
import i18n from '../../src/app/locale/i18n';
import WebitelUi from '../../src/app/plugins/webitel/ui-sdk';

config.global.mocks.$t = (msg) => en[msg] || msg;
config.global.mocks.$tc = (msg) => en[msg] || msg;
// `i18n` (composition mode) is installed so `<script setup>` components calling
// `useI18n()` work; the `$t`/`$tc` mocks above still cover Options-API specs.
config.global.plugins = [
	WebitelUi,
	i18n,
];

vi.doMock('axios', axiosMock());
