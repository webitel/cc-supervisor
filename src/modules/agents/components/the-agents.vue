<template>
  <wt-page-wrapper>
    <template #header>
      <wt-headline>
        <template #title>
          {{ $t('pages.agent.title') }}
        </template>
        <template #actions>
          <filter-search :namespace="filtersNamespace" filter-query="search" />
          <wt-button
            :disabled="!dataList.length"
            :loading="isCSVLoading"
            @click="exportCSV"
          >{{ $t('defaults.exportCSV') }}
          </wt-button>
        </template>
      </wt-headline>
    </template>

    <template #actions-panel>
      <agents-filters :namespace="filtersNamespace" />
    </template>

    <template #main>
      <section class="main-section-wrapper">
        <wt-loader v-show="isLoading"></wt-loader>
        <div v-show="!isLoading" class="table-wrapper">
          <wt-table-actions
            :icons="['refresh']"
            class="table-wrapper__actions-wrapper"
            @input="tableActionsHandler"
          >
            <filter-fields
              :headers="headers"
              :static-headers="['name']"
              entity="agents"
              @change="setHeaders"
            ></filter-fields>
          </wt-table-actions>
          <wt-table
            ref="agents-table"
            :data="dataList"
            :grid-actions="false"
            :headers="headers"
            sortable
            :row-class="rowClass"
            @sort="sort"
          >
            <template #name="{ item }">
              <table-agent :item="item" />
            </template>
            <template #status="{ item }">
              <table-agent-status :item="item" />
            </template>
            <template #callTime="{ item }">
              <table-agent-call-time :item="item" @attach-call="attachCall" />
            </template>
            <template #team="{ item }">
              <div v-if="item.team">
                {{ item.team.name }}
              </div>
            </template>
            <template #queues="{ item }">
              <table-queues :item="item" />
            </template>
            <template #descTrack="{ item }">
              <wt-icon
                :color="deskTrackIconColor"
                icon="desk-track"
                size="md"
                class="agents-table__desk-track-icon"

              ></wt-icon>
            </template>
          </wt-table>
          <filter-pagination :is-next="isNext" />
        </div>
      </section>
    </template>
  </wt-page-wrapper>
</template>

<script>
import { IconColor } from '@webitel/ui-sdk/enums';
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import exportCSVMixin from '@webitel/ui-sdk/src/modules/CSVExport/mixins/exportCSVMixin';
import FilterSearch from '@webitel/ui-sdk/src/modules/QueryFilters/components/filter-search.vue';
import { mapActions } from 'vuex';
import { AgentStatus } from 'webitel-sdk';

import tablePageMixin from '../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import AgentsAPI from '../api/agents';
import AgentsFilters from '../modules/filters/components/agent-filters.vue';
import TableAgent from './_internals/table-templates/table-agent.vue';
import TableQueues from './_internals/table-templates/table-agent-queues.vue';
import TableAgentStatus from './_internals/table-templates/table-agent-status.vue';
import TableAgentCallTime from './_internals/table-templates/table-agent-sum-call-time.vue';

export default {
  name: 'TheAgents',
  components: {
    FilterSearch,
    FilterFields,
    FilterPagination,
    AgentsFilters,
    TableAgent,
    TableAgentStatus,
    TableAgentCallTime,
    TableQueues,
  },
  mixins: [
    tablePageMixin,
    sortFilterMixin,
    exportCSVMixin,
  ],
  data: () => ({
    namespace: 'agents',
    selectedAgentsScreenId: null,
  }),
  computed: {
    selectedIds() {
      return this.dataList
                 .filter((item) => item._isSelected)
                 .map((item) => item.agentId);
    },
    deskTrackIconColor() {
      return this.selectedAgentsScreenId ? IconColor.SUCCESS : IconColor.DEFAULT
    }
  },
  created() {
    this.initCSVExport(AgentsAPI.getList, { filename: 'agents' });
  },
  methods: {
    ...mapActions('call', {
      attachToCall: 'ATTACH_TO_CALL',
      openWindow: 'EAVESDROP_OPEN_WINDOW',
    }),
    rowClass(row) {
      return row.status === AgentStatus.BreakOut && 'wt-table__tr--highlight-breakout'
    },
    async attachCall(id) {
      await this.attachToCall({ id });
      this.openWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
.wt-table ::v-deep .wt-table__tr--highlight-breakout {
  // https://github.com/sass/node-sass/issues/2251
  background: HSLA(var(--_negative-color), 0.1);
}

.agents-table {
  &__desk-track-icon {
    cursor: pointer;

    &_active {
      fill: var(--success-color);
    }
  }
}
</style>
