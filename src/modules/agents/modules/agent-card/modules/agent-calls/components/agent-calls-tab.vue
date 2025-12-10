<template>
  <section class="table-wrapper table-wrapper--tab-table">
    <wt-table-actions
      class="table-wrapper__actions-wrapper"
      :icons="['refresh', 'settings']"
      @input="tableActionsHandler"
    >
      <filter-fields
        :headers="headers"
        entity="agentCalls"
        @change="setHeaders"
      ></filter-fields>
    </wt-table-actions>
    <wt-loader v-show="isLoading"></wt-loader>
    <div v-show="!isLoading" class="table-loading-wrapper">
      <wt-table
        ref="wt-table"
        :headers="headers"
        :data="dataList"
        :selectable="false"
        sortable
        @sort="sort"
      >
        <template #direction="{ item }">
          <table-direction :item="item"/>
        </template>
        <template #user="{ item }">
          <div v-if="item.user">
            {{ item.user.name }}
          </div>
        </template>
        <template #from="{ item }">
          <div v-if="item.from">
            {{ item.from.name }}
          </div>
        </template>
        <template #to="{ item }">
          <div v-if="item.to">
            {{ item.to.name }}
          </div>
        </template>
        <template #team="{ item }">
          <div v-if="item.team">
            {{ item.team.name }}
          </div>
        </template>
        <template #queue="{ item }">
          <div v-if="item.queue">
            {{ item.queue.name }}
          </div>
        </template>
        <template #gateway="{ item }">
          <div v-if="item.gateway">
            {{ item.gateway.name }}
          </div>
        </template>
        <template #ratedBy="{ item }">
          <div v-if="item.ratedBy">
            {{ item.ratedBy.name }}
          </div>
        </template>
        <template #actions="{ item, index }">
          <agent-calls-media-action
            v-if="item.files"
            :call="item"
            :playing-call-id="playingCallId"
            class="table-action"
            @play="play"
            @stop="closePlayer"
          />
        </template>
      </wt-table>

      <filter-pagination :is-next="isNext" @input="closePlayer"/>

      <wt-player
        v-show="audioURL"
        :src="audioURL"
        @close="closePlayer"
      />
    </div>
  </section>
</template>

<script>
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import { mapState } from 'vuex';

import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import { getCallMediaUrl } from '@webitel/api-services/api';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../../../../../_shared/filters/components/filter-table-fields.vue';
import TableDirection from './_internals/table-templates/table-direction.vue';
import AgentCallsMediaAction from './agent-calls-media-action.vue';

export default {
  name: 'AgentCallsTab',
  components: {
    TableDirection,
    FilterFields,
    FilterPagination,
    AgentCallsMediaAction,
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
  data: () => ({
    audioURL: '',
    playingCallId: '',
  }),
  computed: {
    ...mapState('agents/card', {
      userId: (state) => state.agent.user?.id,
    }),
  },
  methods: {
    loadList() {
      const { query } = this.$route;
      return this.loadDataList({
        ...query,
        userId: [this.userId],
      });
    },
    play({ fileId, callId }) {
      if (fileId) {
        this.audioURL = getCallMediaUrl(fileId);
        this.playingCallId = callId;
      } else {
        this.closePlayer();
      }
    },

    closePlayer() {
      this.audioURL = '';
      this.playingCallId = '';
    },
  },
  mounted() {
    const unwatch = this.$watch('userId', async (newVal) => {
      if (!newVal) return;
      await this.loadList();
      unwatch();
    }, { immediate: true });
  },
};
</script>

<style lang="scss" scoped>
.wt-player {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 45px; // above pagination, na oko
}
</style>
