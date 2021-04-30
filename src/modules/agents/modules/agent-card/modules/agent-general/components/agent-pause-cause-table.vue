<template>
  <article class="table-wrapper table-wrapper--tab-table">
    <wt-table-actions
      class="table-wrapper__actions-wrapper"
      :icons="['refresh']"
      @input="tableActionsHandler"
    ></wt-table-actions>
    <wt-loader v-show="isLoading"></wt-loader>
    <div class="table-loading-wrapper" v-show="!isLoading">
      <wt-table
        :headers="headers"
        :data="dataList"
        :grid-actions="false"
        :selectable="false"
      >
        <template slot="duration" slot-scope="{ item }">
          <span
            class="agent-pause-cause-timing"
            :class="{'agent-pause-cause-timing--highlight': isDurationOverflow(item)}"
          >{{ duration(item) }}</span>
          <wt-progress-bar
            :max="item.limitMin"
            :value="item.durationMin"
            :color="pauseCauseProgressColor(item)"
          ></wt-progress-bar>
        </template>
        <template slot="limit" slot-scope="{ item }">
          <span class="agent-pause-cause-timing">
            {{ prettifyPauseCauseDuration(item.limitMin) }}
          </span>
        </template>
      </wt-table>
    </div>
    </article>
</template>

<script>
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import convertDuration from '@webitel/ui-sdk/src/scripts/convertDuration';
import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import pauseCauseDurationMixin from '../../agent-status-select/mixins/pauseCauseDurationMixin';

const prettifyPauseCauseDuration = (min) => {
  const SEC_IN_MIN = 60;
  const secDuration = convertDuration(min * SEC_IN_MIN);
  return secDuration.slice(0, -3);
};

export default {
  name: 'agent-pause-cause-table',
  mixins: [
    tablePageMixin,
    sortFilterMixin,
    pauseCauseDurationMixin,
  ],
  props: {
    namespace: {
      type: String,
      required: true,
    },
  },
  methods: {
    prettifyPauseCauseDuration,
    duration({ durationMin, limitMin }) {
      return this.isDurationOverflow({ durationMin, limitMin })
      ? `-${prettifyPauseCauseDuration(durationMin - limitMin)}`
        : prettifyPauseCauseDuration(durationMin);
    },
    pauseCauseProgressColor({ durationMin, limitMin }) {
      if (this.isDurationOverflow({ durationMin, limitMin })) return 'danger';
      if (durationMin <= (limitMin * 0.75)) return 'success';
      return 'primary';
    },
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
.wt-table {
  @extend %wt-scrollbar;
}

.wt-progress-bar {
  margin-left: var(--component-spacing);
}

.agent-pause-cause-timing {
  width: 60px;
  display: inline-block;
  word-break: keep-all;

  &--highlight {
    color: var(--false-color);
  }
}
</style>