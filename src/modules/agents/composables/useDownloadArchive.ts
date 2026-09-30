import {
	downloadFile as downloadArchiveFile,
	FileFormat,
	normalizeDatetimeRange,
} from '@webitel/api-services/scripts';
import type { IFiltersManager } from '@webitel/ui-datalist/filters';
import { eventBus } from '@webitel/ui-sdk/scripts';
import { ref } from 'vue';

type DownloadArchiveApiMethod = (params: {
	agentId: string;
	fileIds?: (string | number)[];
	from?: string | number;
	to?: string | number;
}) => Promise<unknown>;

export function useDownloadArchive({
	apiMethod,
	agentId,
	filenamePrefix,
}: {
	apiMethod: DownloadArchiveApiMethod;
	agentId: string;
	filenamePrefix: string;
}) {
	const isDownloadingArchive = ref(false);

	const downloadArchive = async ({
		selected,
		filtersManager,
	}: {
		selected: {
			id: string;
		}[];
		filtersManager: IFiltersManager;
	}) => {
		isDownloadingArchive.value = true;
		try {
			const fileIds = selected.length
				? selected.map(({ id }) => id)
				: undefined;

			const uploadedAt = fileIds
				? undefined
				: normalizeDatetimeRange(
						filtersManager.filters.get('uploadedAt')?.value as Parameters<
							typeof normalizeDatetimeRange
						>[0],
					);

			const response = await apiMethod({
				agentId,
				fileIds,
				from: uploadedAt?.from,
				to: uploadedAt?.to,
			});

			downloadArchiveFile({
				response,
				fileFormat: FileFormat.ZIP,
				filename: `${filenamePrefix}-${agentId}`,
			});
		} catch (e) {
			eventBus.$emit('notification', {
				type: 'error',
				text: e?.response?.data?.detail,
			});
		} finally {
			isDownloadingArchive.value = false;
		}
	};

	return {
		isDownloadingArchive,
		downloadArchive,
	};
}
