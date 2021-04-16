<template>
  <article class="table-wrapper table-wrapper--tab-table">
    <wt-table-actions
      class="table-wrapper__actions-wrapper"
      :icons="['refresh']"
      @input="tableActionsHandler"
    >
      <filter-fields
        v-model="headers"
        entity="agentStatusHistory"
      ></filter-fields>
    </wt-table-actions>
    <wt-loader v-show="isLoading"></wt-loader>
    <div class="table-loading-wrapper" v-show="!isLoading">
      <wt-table
        :headers="headers"
        :data="dataList"
        :selectable="false"
        :grid-actions="false"
        sortable
        @sort="sort"
      >
        <template slot="state" slot-scope="{ item }">
          <table-agent-state :item="item"/>
        </template>
      </wt-table>
      <filter-pagination :is-next="isNext"/>
    </div>
  </article>
</template>

<script>
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import FilterFields from '../../../../../../_shared/filters/components/filter-table-fields';
import TableAgentState from './_internals/table-templates/table-agent-state.vue';
import playMediaMixin from '../../../../../../../app/mixins/media/playMediaMixin';
import showMediaMixin from '../../../../../../../app/mixins/media/showMediaMixin';
import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';

export default {
  name: 'agent-status-history-tab',
  components: {
    TableAgentState,
    FilterFields,
    FilterPagination,
  },
  mixins: [
    tablePageMixin,
    sortFilterMixin,
    playMediaMixin,
    showMediaMixin,
  ],
  props: {
    namespace: {
      type: String,
    },
  },
  methods: {
    loadList() {
      const agentId = this.$route.params.id;
      const { query } = this.$route;
      return this.loadDataList({
        ...query,
        agentId,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
