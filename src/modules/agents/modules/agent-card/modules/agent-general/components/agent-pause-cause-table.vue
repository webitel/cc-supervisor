<template>
  <article class="agent-pause-cause-table table-section">
    <header class="agent-pause-cause-table__header">
      <wt-action-bar
        :include="[IconAction.REFRESH]"
        @click:refresh="loadDataList"
      />
    </header>
    <wt-loader v-show="isLoading" />
    <div
      v-show="!isLoading"
      class="table-section__table-wrapper"
    >
      <wt-table
        :headers="headers"
        :data="representableDataList"
        :grid-actions="false"
        :selectable="false"
      >
        <template #duration="{ item }">
          <span
            class="agent-pause-cause-timing"
            :class="{ 'agent-pause-cause-timing--highlight': item.isOverflow }"
          >{{ item.duration }}</span>
          <wt-progress-bar
            :max="item.limitMin"
            :value="item.durationMin"
            :color="item.progressColor"
          />
        </template>
        <template #limit="{ item }">
          <span class="agent-pause-cause-timing">
            {{ item.limit }}
          </span>
        </template>
      </wt-table>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { useRepresentableAgentPauseCause } from '@webitel/ui-sdk/composables';
import { IconAction } from '@webitel/ui-sdk/enums';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useAgentPauseCauseTableStore } from '../stores/datalist/agent-pause-causes';

const route = useRoute();

const tableStore = useAgentPauseCauseTableStore();

const { dataList, isLoading, headers } = storeToRefs(tableStore);

const { initialize, loadDataList } = tableStore;

const { representablePauseCause } = useRepresentableAgentPauseCause(dataList);

const representableDataList = computed(() => representablePauseCause.value);

initialize({
	parentId: route.params.id as string,
});
</script>

<style scoped>

.agent-pause-cause-table__header {
  display: flex;
  justify-content: flex-end;
  margin: var(--spacing-xs);
}

.wt-progress-bar {
  margin-left: var(--spacing-sm);
}

.agent-pause-cause-timing {
  width: 60px;
  display: inline-block;
  word-break: keep-all;
}

.agent-pause-cause-timing--highlight {
  color: var(--error-color);
}
</style>
