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
          <media-action
            v-if="item.files"
            :currently-playing="currentlyPlaying"
            :files="item.files"
            class="table-action"
            @play="play"
            @stop="closePlayer"
          ></media-action>
        </template>
      </wt-table>
      <filter-pagination @input="closeMedia" :is-next="isNext"/>

      <wt-player
        v-show="audioURL"
        :src="audioURL"
        @play="isPlayingNow = true"
        @close="closePlayer"
      />

<!--      <media-select-->
<!--        ref="media-select"-->
<!--        v-show="isMediaSelectOpened"-->
<!--        :files="mediaFiles"-->
<!--        :currently-playing="currentlyPlaying"-->
<!--        @play="play"-->
<!--        @close="closeMedia"-->
<!--      ></media-select>-->
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import MediaAction from '../../../../../../../app/components/utils/table-media-action.vue';
import playMediaMixin from '../../../../../../../app/mixins/media/playMediaMixin';
import showMediaMixin from '../../../../../../../app/mixins/media/showMediaMixin';
import tablePageMixin from '../../../../../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../../../../../_shared/filters/components/filter-table-fields.vue';
import TableDirection from './_internals/table-templates/table-direction.vue';

export default {
  name: 'agent-calls-tab',
  components: {
    TableDirection,
    FilterFields,
    FilterPagination,
    MediaAction,
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
