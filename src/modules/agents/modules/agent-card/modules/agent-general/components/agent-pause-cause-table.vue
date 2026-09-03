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
	data() {
		return {
			stableDataList: [],
		};
	},
	watch: {
		dataList: {
			immediate: true,
			handler(updatedDataList) {
				if (!updatedDataList?.length) return;
				// https://webitel.atlassian.net/browse/WTEL-8100
				// After an agent switches away from Pause, the backend may
				// return durationMin: 0 before the final value is saved.
				// To avoid a "0 minutes" flash, we keep the last known non-zero
				// duration for each cause until the API confirms a real value.
				this.stableDataList = updatedDataList.map((updatedItem) => {
					const durationIsSettled = updatedItem.durationMin !== 0;
					if (durationIsSettled) return updatedItem;

					const previousItem = this.stableDataList.find(
						(stableItem) =>
							stableItem.name === updatedItem.name ||
							stableItem.id === updatedItem.id,
					);
					const hasPreviousNonZeroDuration =
						previousItem && previousItem.durationMin > 0;

					return hasPreviousNonZeroDuration
						? {
								...updatedItem,
								durationMin: previousItem.durationMin,
							}
						: updatedItem;
				});
			},
		},
	},
	computed: {
		representableDataList() {
			const { representablePauseCause } = useRepresentableAgentPauseCause(
				this.stableDataList,
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
