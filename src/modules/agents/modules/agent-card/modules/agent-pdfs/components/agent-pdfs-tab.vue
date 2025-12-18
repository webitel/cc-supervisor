<template>
  <agent-pdfs-tab-sdk
    :store="tableStore"
    entity-id-key="agentId"
    :entity-id-value="agentId"
    :on-delete-item="handleDeleteItem"
  >
    <template #action-bar="{ selected, loadDataList, askDeleteConfirmation, handleDelete }">
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
              @click="$emit('toggle-filter')"
            />
          </wt-badge>
        </template>
      </wt-action-bar>
    </template>
  </agent-pdfs-tab-sdk>
</template>

<script lang="ts" setup>
import { IconAction } from '@webitel/ui-sdk/enums';
import AgentPdfsTabSdk from '@webitel/ui-sdk/src/modules/AgentPdfs/components/agent-pdfs-tab.vue';
import { usePdfsDataListStore } from '../store/pdfs';
import { useRoute } from 'vue-router';
import { FileServicesAPI } from '@webitel/api-services/api';
import { WebitelMediaExporterExportRecord } from '@webitel/api-services/gen/models';

defineEmits(['toggle-filter']);

const route = useRoute();
const agentId = route.params.id as string;

const tableStore = usePdfsDataListStore();

const handleDeleteItem = async (item: WebitelMediaExporterExportRecord) => {
  return FileServicesAPI.deleteScreenRecordingsByAgent({
    id: item.fileId,
    agentId: agentId,
  });
};
</script>
