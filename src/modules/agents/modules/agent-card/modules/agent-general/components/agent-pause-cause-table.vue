<template>
  <article class="agent-pause-cause-table table-section">
    <header class="agent-pause-cause-table__header">
      <wt-table-actions
        class="agent-pause-cause-table__header-actions"
        :icons="['refresh']"
        @input="tableActionsHandler"
      ></wt-table-actions>
    </header>
    <wt-loader v-show="isLoading"></wt-loader>
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
          ></wt-progress-bar>
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

<script>
import { useRepresentableAgentPauseCause } from '@webitel/ui-sdk/src/composables/useRepresentableAgentPauseCause/useRepresentableAgentPauseCause';
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';

import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';

export default {
	name: 'AgentPauseCauseTable',
	mixins: [
		tablePageMixin,
		sortFilterMixin,
	],
	props: {
		namespace: {
			type: String,
			required: true,
		},
	},
	computed: {
		representableDataList() {
			if (!this.dataList) return [];
			const { representablePauseCause } = useRepresentableAgentPauseCause(
				this.dataList,
			);
			return representablePauseCause.value;
		},
	},
	methods: {
		loadList() {
			const agentId = this.$route.params.id;
			const { query } = this.$route;

			if (agentId)
				return this.loadDataList({
					...query,
					agentId,
				});
		},
	},
};
</script>

<style
  scoped
>

.agent-pause-cause-table__header {
  display: flex;
  justify-content: flex-end;
  margin-block: var(--spacing-xs);
}

.agent-pause-cause-table__header-actions {
  gap: 0;
  padding-block: 0;
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
