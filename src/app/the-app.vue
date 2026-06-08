<template>
  <wt-notifications-bar />
  <router-view />
</template>

<script setup>
import { WtNotificationsBar } from '@webitel/ui-sdk/components';
import { onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useUserinfoStore } from '../modules/userinfo/store/userInfoStore';

const store = useStore();
const { locale, fallbackLocale } = useI18n();

const { showUserNotifications } = useUserinfoStore();

const closeSession = () => store.dispatch('CLOSE_SESSION');
const openSession = () => store.dispatch('OPEN_SESSION');

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
openSession();

onMounted(() => showUserNotifications());
onUnmounted(() => closeSession());
</script>

<style lang="scss"></style>
