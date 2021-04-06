<template>
  <div class="table-wrapper agent-calls">
    <wt-table
      ref="wt-table"
      :headers="headers"
      :data="dataList"
      :selectable="false"
      sortable
      @sort="sort"
    >
      <template slot="direction" slot-scope="{ item }">
        <table-call-state :item="item"/>
      </template>
      <template slot="client" slot-scope="{ item }">
        <div v-if="item.from">
          {{ item.from.name }}
        </div>
      </template>
      <template slot="phoneNumber" slot-scope="{ item }">
        <div v-if="item.from">
          {{ item.from.number }}
        </div>
      </template>
      <template slot="notes" slot-scope="{ item }">
        {{ item.notes }}
      </template>

      <template slot="actions" slot-scope="{ item, index }">
        <media-action
          v-if="item.files"
          class="table-action"
          :class="{'active': openedMediaIndex === index}"
          :is-any-files-playing="isAnyFilesPlaying(item.files)"
          @click="openMedia(index, $event)"
        ></media-action>
      </template>
    </wt-table>
    <filter-pagination @input="closeMedia" :is-next="isNext"/>

    <wt-player
      v-show="audioURL"
      :src="audioURL"
      @play="isPlayingNow = true"
      @close="closePlayer"
    ></wt-player>

    <media-select
      ref="media-select"
      v-show="isMediaSelectOpened"
      :files="mediaFiles"
      :currently-playing="currentlyPlaying"
      @play="play"
      @close="closeMedia"
    ></media-select>
  </div>
</template>

<script>
import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import FilterPagination from '../../../../../../_shared/filters/components/filter-pagination.vue';
import MediaAction from '../../../../../../../app/components/utils/table-media-action.vue';
import TableCallState from './_internals/table-templates/table-call-state.vue';
import playMediaMixin from '../../../../../../../app/mixins/media/playMediaMixin';
import showMediaMixin from '../../../../../../../app/mixins/media/showMediaMixin';
import headersMixin from '../../../../../../../app/mixins/supervisor-workspace/pageHeadersMixin';
import autoRefreshMixin from '../../../../../../../app/mixins/autoRefresh/autoRefreshMixin';

export default {
  name: 'agent-calls-tab',
  components: {
    TableCallState,
    FilterPagination,
    MediaAction,
  },
  mixins: [
    headersMixin,
    sortFilterMixin,
    autoRefreshMixin,
    playMediaMixin,
    showMediaMixin,
  ],
  data: () => ({
    isLoading: false,
    namespace: 'agents/agentPage/agentCalls',
  }),
  watch: {
    '$route.query': {
      async handler() {
        await this.initializeList();
        this.setAutoRefresh();
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState({
      dataList(state) {
        return getNamespacedState(state, this.namespace).dataList;
      },
      isNext(state) {
        return getNamespacedState(state, this.namespace).isNext;
      },
    }),
  },
  methods: {
    ...mapActions({
      loadDataList(dispatch, payload) {
        return dispatch(`${this.namespace}/FETCH_LIST`, payload);
      },
    }),

    async initializeList() {
      this.isLoading = true;
      try {
        await this.loadList();
      } catch {
      } finally {
        this.isLoading = false;
      }
    },

    loadList() {
      const agentId = this.$route.params.id;
      const { query } = this.$route;
      return this.loadDataList({ ...query, agentId });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../../../../app/css/supervisor-workspace/table-page/table-page';

.agent-calls {
  position: relative;
}
</style>
