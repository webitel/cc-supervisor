<template>
	<wt-start-page
		:nav="navCards"
		:dark-mode="theme === 'dark'"
		:app-logo="logo"
	/>
</template>

<script setup>
import WtStartPage from '@webitel/ui-sdk/src/components/on-demand/wt-start-page/components/wt-start-page.vue';
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import LogoDark from '../assets/supervisor-logo-dark.svg';
import LogoLight from '../assets/supervisor-logo-light.svg';

import { useNavStore } from '../stores/navStore';

const store = useStore();

const logo = {
	light: LogoLight,
	dark: LogoDark,
};

const navStore = useNavStore();
const { navCards } = storeToRefs(navStore);

const theme = computed(() => store.state.appearance?.theme || 'light');

onMounted(() => {
	navStore.initializeNav();
});
</script>

<style scoped></style>
