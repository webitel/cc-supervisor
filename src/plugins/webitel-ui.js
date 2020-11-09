import Vue from 'vue';
import WebitelUI from '@webitel/ui-sdk/dist/ui-sdk.common';
import WebitelUIEn from '@webitel/ui-sdk/src/locale/en/en';
import WebitelUIRu from '@webitel/ui-sdk/src/locale/ru/ru';
import eventBus from '@webitel/ui-sdk/src/scripts/eventBus';
import i18n from '../locale/i18n';
import router from '../router/index';
import '@webitel/ui-sdk/dist/ui-sdk.css';
import '@webitel/ui-sdk/src/css/main.scss';
import '@webitel/ui-sdk/dist/img/svg-sprites/wt-icon.svg';

Vue.use(WebitelUI, { eventBus, router });
i18n.mergeLocaleMessage('en', WebitelUIEn);
i18n.mergeLocaleMessage('ru', WebitelUIRu);
