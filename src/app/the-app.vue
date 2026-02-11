<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'TheApp',
	created() {
		this.setAutoRefresh();
		this.setLanguage();
	},
	unmounted() {
		this.closeSession();
	},
	methods: {
		...mapActions({
			closeSession: 'CLOSE_SESSION',
		}),

		setLanguage() {
			const lang = localStorage.getItem('lang');
			if (lang) this.$i18n.locale = lang;
			const fallbackLang = localStorage.getItem('fallbackLang');
			if (fallbackLang) this.$i18n.fallbackLocale = fallbackLang;
		},

		setAutoRefresh() {
			const autoRefresh = localStorage.getItem('auto-refresh');
			if (!autoRefresh) localStorage.setItem('auto-refresh', '10000');
		},
	},
};
</script>

<style lang="scss"></style>
