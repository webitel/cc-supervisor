<template>
  <section class="table-wrapper table-wrapper--tab-table">
    <wt-table-actions
      class="table-wrapper__actions-wrapper"
      :icons="['refresh']"
      @input="tableActionsHandler"
    >
      <filter-fields
        :headers="headers"
        entity="agentCalls"
        @change="setHeaders"
      ></filter-fields>
    </wt-table-actions>
    <wt-loader v-show="isLoading"></wt-loader>
    <div class="table-loading-wrapper" v-show="!isLoading">
      <wt-table
        ref="wt-table"
        :headers="headers"
        :data="dataList"
        :selectable="false"
        sortable
        @sort="sort"
      >
        <template v-slot:direction="{ item }">
          <table-direction :item="item"/>
        </template>
        <template v-slot:user="{ item }">
          <div v-if="item.user">
            {{ item.user.name }}
          </div>
        </template>
        <template v-slot:from="{ item }">
          <div v-if="item.from">
            {{ item.from.name }}
          </div>
        </template>
        <template v-slot:to="{ item }">
          <div v-if="item.to">
            {{ item.to.name }}
          </div>
        </template>
        <template v-slot:team="{ item }">
          <div v-if="item.team">
            {{ item.team.name }}
          </div>
        </template>
        <template v-slot:queue="{ item }">
          <div v-if="item.queue">
            {{ item.queue.name }}
          </div>
        </template>
        <template v-slot:gateway="{ item }">
          <div v-if="item.gateway">
            {{ item.gateway.name }}
          </div>
        </template>
        <template v-slot:ratedBy="{ item }">
          <div v-if="item.ratedBy">
            {{ item.ratedBy.name }}
          </div>
        </template>
        <template v-slot:actions="{ item, index }">
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

      <filter-pagination @input="closePlayer" :is-next="isNext"/>

      <wt-player
        v-show="audioURL"
        :src="audioURL"
        @close="closePlayer"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import AgentCallsMediaAction from './agent-calls-media-action.vue';
import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../../../../../_shared/filters/components/filter-table-fields.vue';
import TableDirection from './_internals/table-templates/table-direction.vue';
import generateMediaURL from "../../../../../../../app/plugins/generateMediaURL";

export default {
  name: 'agent-calls-tab',
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
      userId: (state) => state.agent.user.id,
    }),
  },
  methods: {
    loadList() {
      const { query } = this.$route;
      return this.loadDataList({
        ...query,
        userId: this.userId,
      });
    },
    play(fileId, callId) {
      if (fileId) {
        this.audioURL = generateMediaURL(fileId);
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
