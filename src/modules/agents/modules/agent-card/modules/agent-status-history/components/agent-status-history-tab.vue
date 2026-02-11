<template>
  <article class="table-section">
    <header class="table-title">
      <h3 class="table-title__title">
      </h3>
      <wt-table-actions
        class="table-section__actions-wrapper"
        :icons="['refresh', 'settings']"
        is-settings-badge
        @input="tableActionsHandler"
      >
        <filter-fields
          :headers="headers"
          entity="agentStatusHistory"
          @change="setHeaders"
        ></filter-fields>
      </wt-table-actions>
    </header>

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
        :headers="headers"
        :data="dataList"
        :selectable="false"
        :grid-actions="false"
        sortable
        @sort="sort"
      >
        <template #state="{ item }">
          <table-agent-state :item="item" />
        </template>
      </wt-table>
      <filter-pagination :is-next="isNext" />
    </div>
  </article>
</template>

<script>
import { WtEmpty } from '@webitel/ui-sdk/components';
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import { useTableEmpty } from '@webitel/ui-sdk/src/modules/TableComponentModule/composables/useTableEmpty';
import { computed } from 'vue';
import { useStore } from 'vuex';

import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../../../../../_shared/filters/components/filter-table-fields.vue';
import TableAgentState from './_internals/table-templates/table-agent-state.vue';

export default {
	name: 'AgentStatusHistoryTab',
	components: {
		TableAgentState,
		FilterFields,
		FilterPagination,
		WtEmpty,
	},
	mixins: [
		tablePageMixin,
		sortFilterMixin,
	],
	props: {
		namespace: {
			type: String,
		},
	},
	setup() {
		const store = useStore();
		const dataList = computed(
			() => store.state.agents.card.statusHistory.dataList,
		);
		const isLoading = computed(
			() => store.state.agents.card.statusHistory.isLoading,
		);
		const filters = computed(
			() => store.getters['agents/card/statusHistory/filters/GET_FILTERS'],
		);

		const {
			showEmpty,
			image: imageEmpty,
			text: textEmpty,
		} = useTableEmpty({
			dataList,
			filters,
			isLoading,
			error: computed(() => null),
		});

		return {
			showEmpty,
			imageEmpty,
			textEmpty,
		};
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
  lang="scss"
  scoped
></style>
