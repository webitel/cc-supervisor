<template>
  <div class="table-wrapper agent-calls">
    <wt-table
      ref="wt-table"
      :headers="headers"
      :data="data"
      :selectable="false"
      sortable
      @sort="sort"
    >
      <template slot="direction" slot-scope="{ item }">
        <table-call-state :item="item"/>
      </template>
      <template slot="client" slot-scope="{ item }">
        <table-call-client :item="item"/>
      </template>
      <template slot="phoneNumber" slot-scope="{ item }">
        <table-call-number :item="item"/>
      </template>
      <template slot="notes" slot-scope="{ item }">
        <table-call-notes :item="item"/>
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

    <audio-player
      v-show="audioURL"
      :file="audioURL"
      @play="isPlayingNow = true"
      @close="closePlayer"
    ></audio-player>

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
import { mapActions, mapState } from 'vuex';
import convertQuery from '../../../../utils/loadScripts';
import FilterPagination from '../../../../shared/filters/components/filter-pagination.vue';
import MediaAction from '../../../utils/table-media-action.vue';
import TableCallState from './_internals/table-templates/table-call-state.vue';
import TableCallClient from './_internals/table-templates/table-call-client.vue';
import TableCallNumber from './_internals/table-templates/table-call-number.vue';
import TableCallNotes from './_internals/table-templates/table-call-notes.vue';
import sortFilterMixin from '../../../../shared/filters/mixins/sortFilterMixin';
import playMediaMixin from '../../../../mixins/media/playMediaMixin';
import showMediaMixin from '../../../../mixins/media/showMediaMixin';
import headersMixin from './_internals/agentPageHeadersMixin';
import autoRefreshMixin from '../../../../mixins/autoRefresh/autoRefreshMixin';

export default {
  name: 'agent-calls-tab',
  components: {
    TableCallState,
    TableCallClient,
    TableCallNumber,
    TableCallNotes,
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
  data() {
    return {
      isLoading: false,
    };
  },
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
    ...mapState('agentCalls', {
      data: (state) => state.dataList,
      isNext: (state) => state.isNext,
    }),
  },
  methods: {
    ...mapActions('agentCalls', {
      loadDataList: 'FETCH_LIST',
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
      const params = this.getQueryParams();
      params.agentId = this.$route.params.id;
      return this.loadDataList(params);
    },

    getQueryParams() {
      const { query } = this.$route;
      return convertQuery(query);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../css/supervisor-workspace/table-page/table-page';

.agent-calls {
  position: relative;
}
</style>
