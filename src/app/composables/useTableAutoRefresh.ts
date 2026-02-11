import preventHiddenPageCallsDecorator from '@webitel/ui-sdk/src/scripts/preventHiddenPageCallsDecorator';
import { ref } from 'vue';

export function useTableAutoRefresh(loadList: () => void) {
	const autoRefresh = ref<number | null>(null);

	const makeAutoRefresh = preventHiddenPageCallsDecorator(loadList);

	function setAutoRefresh() {
		clearAutoRefresh();
		const timer = +localStorage.getItem('auto-refresh') || 5 * 60 * 1000;
		autoRefresh.value = window.setInterval(makeAutoRefresh, timer);
	}

	function clearAutoRefresh() {
		if (autoRefresh.value) {
			clearInterval(autoRefresh.value);
			autoRefresh.value = null;
		}
	}

	return {
		setAutoRefresh,
		clearAutoRefresh,
	};
}
