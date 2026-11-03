import { convertDuration } from '@webitel/ui-sdk/scripts';
import { computed, type Ref } from 'vue';

import { useNowStore } from '../../../app/store/nowStore';

export function useCallTimer(
	call: Ref<{
		answeredAt?: number;
		createdAt?: number;
	} | null>,
) {
	const nowStore = useNowStore();

	const startTime = computed(() => {
		const task = call.value || {};
		const start = task.answeredAt ? task.answeredAt : task.createdAt;
		let sec = Math.round((nowStore.now - start) / 10 ** 3);
		sec = sec <= 0 ? 0 : sec; // handles -1 time after answer
		return convertDuration(sec);
	});

	return {
		startTime,
	};
}
