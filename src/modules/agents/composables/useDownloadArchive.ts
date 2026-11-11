import {
	downloadFile as downloadArchiveFile,
	FileFormat,
	normalizeDatetimeRange,
} from '@webitel/api-services/scripts';
import {
	FilterOption,
	type IFiltersManager,
} from '@webitel/ui-datalist/filters';
import { useDownloadAction } from '@webitel/ui-sdk/composables';

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
	const { isLoading: isDownloadingArchive, runDownload } = useDownloadAction();

	const downloadArchive = ({
		selected,
		filtersManager,
	}: {
		selected: {
			id: string;
		}[];
		filtersManager: IFiltersManager;
	}) =>
		runDownload(async () => {
			const fileIds = selected.length
				? selected.map(({ id }) => id)
				: undefined;

			const uploadedAt = fileIds
				? undefined
				: normalizeDatetimeRange(
						filtersManager.filters.get(FilterOption.UploadedAt)
							?.value as Parameters<typeof normalizeDatetimeRange>[0],
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
		});

	return {
		isDownloadingArchive,
		downloadArchive,
	};
}
