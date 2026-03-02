<template>
	<wt-app-header>
		<wt-navigation-bar
			:current-app="currentApp"
			:nav="nav"
			:dark-mode="darkMode"
			:logo-route="RoutePaths.StartPage"
		/>
		<wt-logo
			:dark-mode="darkMode"
			:logo-href="startPageHref"
		/>
		<wt-dark-mode-switcher />
		<wt-app-navigator
			:current-app="currentApp"
			:apps="apps"
			:dark-mode="darkMode"
		/>
		<wt-header-actions
			:user="userInfo"
			:build-info="buildInfo"
			@settings="settings"
			@logout="logoutUser"
		/>
	</wt-app-header>
</template>

<script setup>
import { WtApplication } from '@webitel/ui-sdk/enums';
import WtDarkModeSwitcher from '@webitel/ui-sdk/src/modules/Appearance/components/wt-dark-mode-switcher.vue';
import { storeToRefs } from 'pinia';
import { computed, inject } from 'vue';
import { useStore } from 'vuex';

import RoutePaths from '../../../../app/router/_internals/RoutePaths.enum';
import { useNavStore } from '../../../start-page/stores/navStore';
import { useUserinfoStore } from '../../../userinfo/store/userInfoStore';
import packageJson from '../../../../../package.json' with { type: 'json' };

const store = useStore();
const config = inject('$config');

const navStore = useNavStore();
const userinfoStore = useUserinfoStore();
const { hasApplicationVisibility, logoutUser } = userinfoStore;
const { userInfo } = storeToRefs(userinfoStore);
const currentApp = computed(() => WtApplication.Supervisor);

// Initialize nav, if not initialized yet
navStore.initializeNav();

const { nav: fullNav } = storeToRefs(navStore);

const nav = computed(() => fullNav.value.filter(({ disabled }) => !disabled));

const darkMode = computed(() => store.getters['appearance/DARK_MODE']);

const startPageHref = computed(() => import.meta.env.VITE_START_PAGE_URL);

const buildInfo = {
	release: packageJson.version,
	build: import.meta.env.VITE_BUILD_NUMBER,
};

const apps = computed(() => {
	const agent = {
		name: WtApplication.Agent,
		href: import.meta.env.VITE_AGENT_URL,
	};
	const supervisor = {
		name: WtApplication.Supervisor,
		href: import.meta.env.VITE_SUPERVISOR_URL,
	};
	const history = {
		name: WtApplication.History,
		href: import.meta.env.VITE_HISTORY_URL,
	};
	const audit = {
		name: WtApplication.Audit,
		href: import.meta.env.VITE_AUDIT_URL,
	};
	const admin = {
		name: WtApplication.Admin,
		href: import.meta.env.VITE_ADMIN_URL,
	};
	const grafana = {
		name: WtApplication.Analytics,
		href: import.meta.env.VITE_GRAFANA_URL,
	};
	const crm = {
		name: WtApplication.Crm,
		href: import.meta.env.VITE_CRM_URL,
	};

	const allApps = [
		admin,
		supervisor,
		agent,
		history,
		audit,
		crm,
	];
	if (config?.ON_SITE) allApps.push(grafana);
	return allApps.filter(({ name }) => hasApplicationVisibility(name));
});

function settings() {
	const settingsUrl = import.meta.env.VITE_SETTINGS_URL;
	window.open(settingsUrl);
}
</script>

<style
	lang="scss"
	scoped
>
.wt-dark-mode-switcher {
	margin-right: auto;
}
</style>
