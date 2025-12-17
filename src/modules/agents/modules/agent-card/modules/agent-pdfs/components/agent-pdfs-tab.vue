<template>
  <agent-pdfs-tab-sdk
    :store="tableStore"
    @toggle-filter="$emit('toggle-filter')"
  />
</template>

<script lang="ts" setup>
import AgentPdfsTabSdk from '@webitel/ui-sdk/src/modules/AgentPdfs/components/agent-pdfs-tab.vue';
import { usePdfsDataListStore } from '../store/pdfs';

defineEmits(['toggle-filter']);

const tableStore = usePdfsDataListStore();
</script>
