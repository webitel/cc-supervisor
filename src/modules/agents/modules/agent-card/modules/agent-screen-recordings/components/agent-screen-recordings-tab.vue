<template>
  <div class="table-page">
    <section class="table-section">
      <header class="table-title">
        <h3 class="table-title__title">
          {{ t('pages.card.screenRecordings.title') }}
        </h3>
        <wt-action-bar
          :include="[IconAction.FILTERS, IconAction.REFRESH, IconAction.DELETE]"
          @click:refresh="loadDataList"
          @click:delete="
            askDeleteConfirmation({
              deleted: selected,
              callback: () => deleteEls(selected),
            })
          "
        >
        </wt-action-bar>
      </header>
  
      <delete-confirmation-popup
        :shown="isDeleteConfirmationPopup"
        :callback="deleteCallback"
        :delete-count="deleteCount"
        @close="closeDelete"
      />
  
      <div class="table-section__table-wrapper">
        <wt-empty
          v-show="showEmpty"
          :image="imageEmpty"
          :text="textEmpty"
        />
  
        <wt-loader v-show="isLoading" />
  
        <div v-if="dataList.length && !isLoading">
          <wt-table
            :data="dataList"
            :headers="shownHeaders"
            :selected="selected"
            sortable
            @sort="updateSort"
            @update:selected="updateSelected"
          >
            <template #date_time>
                dev
            </template>
            <template #actions="{ item }">
              <wt-icon-action
                action="download"
              />
              <wt-icon-action
                action="delete"
                @click="
                  askDeleteConfirmation({
                    deleted: [item],
                    callback: () => deleteEls(item),
                  })
                "
              />
            </template>
          </wt-table>
        </div>
  
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
  </div>
</template>

<script lang="ts" setup>
import { WtEmpty } from '@webitel/ui-sdk/components';
import { IconAction } from '@webitel/ui-sdk/enums';
import DeleteConfirmationPopup from '@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/components/delete-confirmation-popup.vue';
import { useDeleteConfirmationPopup } from '@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/composables/useDeleteConfirmationPopup';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

import { useScreenRecordingsDatalistStore } from '../store/screen-recordings'
import getNamespacedState from '@webitel/ui-sdk/store/helpers/getNamespacedState.js';
import { SearchScreenRecordingsChannel } from '@webitel/api-services/gen/models';

const { t } = useI18n();

const props = defineProps({
  namespace: String,
})

const store = useStore()

const agent = computed(() => {
  return getNamespacedState(store.state, props.namespace).agent
})

const tableStore = useScreenRecordingsDatalistStore();

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
  deleteEls,
  addFilter,
  updateFilter,
  deleteFilter,
} = tableStore;

initialize();

addFilter({
  name: 'userId',
  value: 11168
});

addFilter({
  name: 'channel',
  value: SearchScreenRecordingsChannel.ScreenSharingChannel
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
</script>

<style lang="scss" scoped></style>
