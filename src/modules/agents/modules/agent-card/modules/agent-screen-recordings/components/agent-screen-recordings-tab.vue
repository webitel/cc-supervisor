<template>
  <wt-vidstack-player
    v-if="isVideoOpen"
    closable
    :src="getScreenRecordingMediaUrl(currentVideo.id)"
    :title="currentVideo.view_name"
    :mime="currentVideo.mime_type"
    @close="closeVideo"
  />
  <section class="table-wrapper table-page table-wrapper--tab-table">
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

    <div v-show="!isLoading" class="table-loading-wrapper">
      <wt-empty
        v-show="showEmpty"
        :image="imageEmpty"
        :text="textEmpty"
      />

      <wt-table
        v-if="dataList.length"
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
            :src="getScreenRecordingMediaUrl(item.id, true)"
            alt=""
            @click="openVideo(item)"
            />
        </template>

        <template #uploaded_at="{item}">
            {{prettifyTimestamp(item)}}
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
import { WtEmpty, WtVidstackPlayer } from '@webitel/ui-sdk/components';
import { IconAction } from '@webitel/ui-sdk/enums';
import DeleteConfirmationPopup from '@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/components/delete-confirmation-popup.vue';
import { useDeleteConfirmationPopup } from '@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/composables/useDeleteConfirmationPopup';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { storeToRefs } from 'pinia';
import {computed, defineEmits, ref} from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { downloadFile, getScreenRecordingMediaUrl } from '@webitel/api-services/api';
import { FileServicesAPI } from '@webitel/api-services/api';
import { getStartOfDay, getEndOfDay } from '@webitel/ui-sdk/scripts';

import { useScreenRecordingsDataListStore } from '../store/screen-recordings'
import getNamespacedState from '@webitel/ui-sdk/store/helpers/getNamespacedState.js';
import { SearchScreenRecordingsChannel } from '@webitel/api-services/gen/models';

import { useRoute } from 'vue-router'

const { t } = useI18n();

const props = defineProps({
  namespace: String,
})

const store = useStore()

const route = useRoute()
const agentId = route.params.id

const emit = defineEmits(['toggle-filter'])

const agent = computed(() => {
  return getNamespacedState(store.state, props.namespace).agent
})

const currentVideo = ref(null)
const isVideoOpen = ref(false)

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

initialize();

const initializeDefaultFilters = () => {
  addFilter({
    name: 'agentId',
    value: agentId
  });

  addFilter({
    name: 'channel',
    value: SearchScreenRecordingsChannel.ScreenSharingChannel
  })

  if (!hasFilter('uploadedAtFrom')) {
    addFilter({
      name: 'uploadedAtFrom',
      value: getStartOfDay(),
    })
  }

  if (!hasFilter('uploadedAtTo')) {
    addFilter({
      name: 'uploadedAtTo',
      value: getEndOfDay(),
    })
  }
};

initializeDefaultFilters();

const prettifyTimestamp = (item) => new Date(+item.uploaded_at).toLocaleString()

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
}

const openVideo = (item) => {
  currentVideo.value = item
  isVideoOpen.value = true
}

const closeVideo = () => {
  currentVideo.value = null
  isVideoOpen.value = false
}
</script>

<style lang="scss" scoped></style>
