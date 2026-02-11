<template>
	<wt-start-page
		:nav="navCards"
		:dark-mode="theme === 'dark'"
	/>
</template>

<script setup>
import WtStartPage from '@webitel/ui-sdk/src/components/on-demand/wt-start-page/components/wt-start-page.vue';
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import { useNavStore } from '../stores/navStore';

const store = useStore();

const navStore = useNavStore();
const { navCards } = storeToRefs(navStore);

const theme = computed(() => store.state.appearance?.theme || 'light');

onMounted(() => {
	navStore.initializeNav();
});
</script>

<style scoped></style>
