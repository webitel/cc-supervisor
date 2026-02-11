<template>
  <wt-vidstack-player
    v-if="isVideoOpen"
    closable
    :src="getMediaUrl(currentVideo.id)"
    :title="currentVideo.view_name"
    :mime="currentVideo.mime_type"
    @close="closeVideo"
  />
  <section class="table-section">
    <header class="table-title">
      <h3 class="table-title__title">
        {{ t('objects.screenRecordings', 2) }}
      </h3>
      <wt-action-bar
        :include="[IconAction.FILTERS, IconAction.REFRESH, IconAction.DELETE]"
        :disabled:delete="!selected.length"
        @click:refresh="loadDataList"
        @click:delete="
          askDeleteConfirmation({
            deleted: selected,
            callback: () => handleDelete(selected),
          })
        "
      >
        <template #filters>
          <wt-badge>
            <wt-icon-action
              action="filters"
              @click="emit('toggle-filter')"
            />
          </wt-badge>
        </template>
      </wt-action-bar>
    </header>

    <delete-confirmation-popup
      :shown="isDeleteConfirmationPopup"
      :callback="deleteCallback"
      :delete-count="deleteCount"
      @close="closeDelete"
    />

    <wt-loader v-show="isLoading" />

    <wt-empty
      v-show="showEmpty"
      :image="imageEmpty"
      :text="textEmpty"
    />

    <div 
      v-if="dataList?.length"
      class="table-section__table-wrapper"
    >
      <wt-table
        :data="dataList"
        :headers="shownHeaders"
        :selected="selected"
        sortable
        @sort="updateSort"
        @update:selected="updateSelected"
      >
        <template #screen_recordings="{ item }">
          <wt-image
            width="48"
            overlay-icon="play"
            :src="getMediaUrl(item.id, true)"
            alt=""
            @click="openVideo(item)"
          />
        </template>

        <template #uploaded_at="{ item }">
          {{ prettifyTimestamp(item) }}
        </template>

        <template #actions="{ item }">
          <wt-icon-action
            action="download"
            @click="downloadFile(item.id)"
          />
          <wt-icon-action
            action="delete"
            @click="
              askDeleteConfirmation({
                deleted: [item],
                callback: () => handleDelete([item]),
              })
            "
          />
        </template>
      </wt-table>

      <wt-pagination
        :next="next"
        :prev="page > 1"
        :size="size"
        debounce
        @change="updateSize"
        @next="updatePage(page + 1)"
        @prev="updatePage(page - 1)"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
	downloadFile,
	FileServicesAPI,
	getMediaUrl,
} from '@webitel/api-services/api';
import {
	StorageScreenrecordingChannel,
	StorageScreenrecordingType,
} from '@webitel/api-services/gen/models';
import { WtEmpty, WtVidstackPlayer } from '@webitel/ui-sdk/components';
import { FormatDateMode, IconAction } from '@webitel/ui-sdk/enums';
import { getEndOfDay, getStartOfDay } from '@webitel/ui-sdk/scripts';
import DeleteConfirmationPopup from '@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/components/delete-confirmation-popup.vue';
import { useDeleteConfirmationPopup } from '@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/composables/useDeleteConfirmationPopup';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import getNamespacedState from '@webitel/ui-sdk/store/helpers/getNamespacedState.js';
import { formatDate } from '@webitel/ui-sdk/utils';
import { storeToRefs } from 'pinia';
import { computed, defineEmits, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import { useTableAutoRefresh } from '../../../../../../../app/composables/useTableAutoRefresh';
import { useScreenRecordingsDataListStore } from '../store/screen-recordings';

const { t } = useI18n();

const props = defineProps({
	namespace: String,
});

const store = useStore();

const route = useRoute();
const agentId = route.params.id;

const emit = defineEmits([
	'toggle-filter',
]);

const agent = computed(() => {
	return getNamespacedState(store.state, props.namespace).agent;
});

const currentVideo = ref(null);
const isVideoOpen = ref(false);

const tableStore = useScreenRecordingsDataListStore();

const {
	dataList,
	selected,
	error,
	isLoading,
	page,
	size,
	next,
	shownHeaders,
	filtersManager,
} = storeToRefs(tableStore);

const {
	initialize,
	loadDataList,
	updateSelected,
	updatePage,
	updateSize,
	updateSort,
	hasFilter,
	addFilter,
} = tableStore;

const { setAutoRefresh, clearAutoRefresh } = useTableAutoRefresh(loadDataList);

initialize();

onMounted(() => {
	setAutoRefresh();
});
onUnmounted(() => {
	clearAutoRefresh();
});

const initializeDefaultFilters = () => {
	addFilter({
		name: 'agentId',
		value: agentId,
	});

	addFilter({
		name: 'type',
		value: StorageScreenrecordingType.Screensharing,
	});

	addFilter({
		name: 'channel',
		value: StorageScreenrecordingChannel.Screenrecording,
	});

	if (!hasFilter('uploadedAtFrom')) {
		addFilter({
			name: 'uploadedAtFrom',
			value: getStartOfDay(),
		});
	}

	if (!hasFilter('uploadedAtTo')) {
		addFilter({
			name: 'uploadedAtTo',
			value: getEndOfDay(),
		});
	}
};

initializeDefaultFilters();

const prettifyTimestamp = (item) =>
	formatDate(+item.uploaded_at, FormatDateMode.DATETIME);

const {
	isVisible: isDeleteConfirmationPopup,
	deleteCount,
	deleteCallback,

	askDeleteConfirmation,
	closeDelete,
} = useDeleteConfirmationPopup();

const {
	showEmpty,
	image: imageEmpty,
	text: textEmpty,
} = useTableEmpty({
	dataList,
	error,
	filters: computed(() => filtersManager.value.getAllValues()),
	isLoading,
});

const handleDelete = async (items: []) => {
	const deleteEl = (el) => {
		return FileServicesAPI.deleteScreenRecordingsByAgent({
			id: el.id,
			agentId: agentId,
		});
	};

	try {
		await Promise.all(items.map(deleteEl));
	} finally {
		// If we're deleting all items from the current page, and we're not on the first page,
		// we should go to the previous page
		if (items.length === dataList.value.length && page.value > 1) {
			updatePage(page.value - 1);
		}
		await loadDataList();
	}
};

const openVideo = (item) => {
	currentVideo.value = item;
	isVideoOpen.value = true;
};

const closeVideo = () => {
	currentVideo.value = null;
	isVideoOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
