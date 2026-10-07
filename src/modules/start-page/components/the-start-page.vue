<template>
	<wt-start-page
		:nav="navCards"
		:dark-mode="darkMode"
		:app-logo="logo"
	/>
</template>

<script lang="ts" setup>
import { WtStartPage } from '@webitel/ui-sdk/components';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useAppearanceStore } from '../../appearance/store/appearanceStore';
import LogoDark from '../assets/supervisor-logo-dark.svg';
import LogoLight from '../assets/supervisor-logo-light.svg';
import { useNavStore } from '../stores/navStore';

const logo = {
	light: LogoLight,
	dark: LogoDark,
};

const navStore = useNavStore();
const { navCards } = storeToRefs(navStore);

const appearanceStore = useAppearanceStore();
const { darkMode } = storeToRefs(appearanceStore);

onMounted(() => {
	navStore.initializeNav();
});
</script>

<style scoped></style>
