import type { LoadDataListOptions } from '@webitel/ui-datalist/src/modules/types/tableStore.types';
import preventHiddenPageCallsDecorator from '@webitel/ui-sdk/src/scripts/preventHiddenPageCallsDecorator';
import { ref } from 'vue';

type LoadListFn = (options?: LoadDataListOptions) => void | Promise<void>;

export function useTableAutoRefresh(loadList: LoadListFn) {
	const autoRefresh = ref<number | null>(null);

	const makeAutoRefresh = preventHiddenPageCallsDecorator(() =>
		loadList({
			withLoading: false,
		}),
	);

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
