<template>
  <wt-galleria
    v-model:visible="galleriaVisible"
    v-model:active-index="galleriaActiveIndex"
    :value="galleriaData"
    @download="downloadFile(dataList[galleriaActiveIndex].id)"
    @delete="handleDeleteFromGalleria"
  />
  <section class="table-wrapper table-page table-wrapper--tab-table">
    <header class="table-title">
      <h3 class="table-title__title">
        {{ t('objects.screenshots', 2) }}
      </h3>
      <wt-action-bar
        :include="[IconAction.DOWNLOAD_PDF, IconAction.FILTERS, IconAction.REFRESH, IconAction.DELETE]"
        :disabled:delete="!selected.length"
        :disabled:download-pdf="!dataList.length"
        @click:download-pdf="downloadPdf"
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
        <template #screenshots="{ item }">
          <wt-image
            width="48"
            overlay-icon="zoom-in"
            :src="getScreenRecordingMediaUrl(item.id, true)"
            alt=""
            @click="openScreenshot(item.id)"
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
import { WtEmpty, WtGalleria } from '@webitel/ui-sdk/components';
import { IconAction } from '@webitel/ui-sdk/enums';
import DeleteConfirmationPopup from '@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/components/delete-confirmation-popup.vue';
import { useDeleteConfirmationPopup } from '@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/composables/useDeleteConfirmationPopup';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { storeToRefs } from 'pinia';
import {computed, defineEmits, onMounted, onUnmounted, ref} from 'vue';
import { useI18n } from 'vue-i18n';
import { downloadFile, getScreenRecordingMediaUrl } from '@webitel/api-services/api';
import { FileServicesAPI } from '@webitel/api-services/api';
import { getStartOfDay, getEndOfDay } from '@webitel/ui-sdk/scripts';
import { eventBus } from '@webitel/ui-sdk/scripts';
import { PdfServicesAPI } from '@webitel/api-services/api'
import {useTableAutoRefresh} from "../../../../../../../app/composables/useTableAutoRefresh";

import { useScreenshotsDataListStore } from '../store/screenshots'
import { SearchScreenRecordingsChannel } from '@webitel/api-services/gen/models';

import { useRoute } from 'vue-router'

const { t } = useI18n();

const router = useRoute()
const agentId = router.params.id

const emit = defineEmits(['toggle-filter'])

const tableStore = useScreenshotsDataListStore();

const galleriaVisible = ref(false)
const galleriaActiveIndex = ref(0)

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

const {
  setAutoRefresh,
  clearAutoRefresh,
} = useTableAutoRefresh(loadDataList)

initialize();

onMounted(() => {
  setAutoRefresh()
})

onUnmounted(() => {
  clearAutoRefresh()
})

const initializeDefaultFilters = () => {
  addFilter({
    name: 'agentId',
    value: agentId
  });

  addFilter({
    name: 'channel',
    value: SearchScreenRecordingsChannel.ScreenshotChannel
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

const galleriaData = computed(() => {
  return dataList.value.map((item) => ({
    src: getScreenRecordingMediaUrl(item.id, false),
    thumbnailSrc: getScreenRecordingMediaUrl(item.id, true),
    title: item.view_name,
    alt: item.view_name,
  }))
})

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

const openScreenshot = (id) => {
  galleriaActiveIndex.value = dataList.value.findIndex(item => item.id === id)
  galleriaVisible.value = true
}

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

const downloadPdf = async () => {
  try {
    await PdfServicesAPI.generatePdfExport({
      agentId: agentId,
      itemInstance: {
        from: filtersManager.value.filters.get('uploadedAtFrom').value,
        to: filtersManager.value.filters.get('uploadedAtTo').value,
        fileIds: selected.value.map(({id}) => id),
      } 
    })
    eventBus.$emit('notification', {
      type: 'info',
      text: t('webitelUI.pdfGeneration.generationStarted'),
    });
  } catch (e) {
    eventBus.$emit('notification', {
      type: 'error',
      text: e?.response?.data?.detail,
    });
  }
}

const handleDeleteFromGalleria = () => {
  handleDelete([dataList.value[galleriaActiveIndex.value]])
  if (galleriaActiveIndex.value > 0) galleriaActiveIndex.value -= 1
}
</script>

<style lang="scss" scoped></style>
