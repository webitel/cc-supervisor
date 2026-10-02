<template>
  <wt-notifications-bar />
  <router-view />
</template>

<script setup>
import { WtNotificationsBar } from '@webitel/ui-sdk/components';
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUnmounted, provide } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAppearanceStore } from '../modules/appearance/store/appearanceStore';
import { useUserinfoStore } from '../modules/userinfo/store/userInfoStore';
import { useNowStore } from './store/nowStore';

const { locale, fallbackLocale } = useI18n();

const { showUserNotifications } = useUserinfoStore();
const appearanceStore = useAppearanceStore();
const nowStore = useNowStore();

const { darkMode } = storeToRefs(appearanceStore);
provide('darkMode', darkMode);

const setLanguage = () => {
	const lang = localStorage.getItem('lang');
	if (lang) locale.value = lang;

	const fallbackLang = localStorage.getItem('fallbackLang');
	if (fallbackLang) fallbackLocale.value = fallbackLang;
};

const setAutoRefresh = () => {
	const autoRefresh = localStorage.getItem('auto-refresh');
	if (!autoRefresh) localStorage.setItem('auto-refresh', '10000');
};

setAutoRefresh();
setLanguage();
nowStore.startWatcher();

onMounted(() => showUserNotifications());
onUnmounted(() => nowStore.stopWatcher());
</script>

<style lang="scss"></style>
