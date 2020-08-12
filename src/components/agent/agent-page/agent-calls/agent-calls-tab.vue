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
          @click.native.stop="openMedia(index, $event)"
        ></media-action>
      </template>
    </wt-table>
    <filter-pagination :is-next="isNext"/>

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
    >
    </media-select>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import convertQuery from '../../../../utils/loadScripts';
import FilterPagination from '../../../filters/filter-pagination.vue';
import MediaAction from '../../../utils/grid-media-action.vue';
import TableCallState from './_internals/table-templates/table-call-state.vue';
import TableCallClient from './_internals/table-templates/table-call-client.vue';
import TableCallNumber from './_internals/table-templates/table-call-number.vue';
import TableCallNotes from './_internals/table-templates/table-call-notes.vue';
import sortFilterMixin from '../../../../mixins/filters/sortFilterMixin';
import playMediaMixin from '../../../../mixins/media/playMediaMixin';
import showMediaMixin from '../../../../mixins/media/showMediaMixin';
import headersMixin from './_internals/headersMixin';

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
    playMediaMixin,
    showMediaMixin,
  ],
  watch: {
    '$route.query': {
      async handler() {
        await this.loadList();
        if (this.autorefresh) clearInterval(this.autorefresh);
        this.autorefresh = setInterval(this.loadList, this.timer);
      },
      immediate: true,
    },
  },
  data() {
    return {
      isNext: false,
      isLoading: false,
      autorefresh: null,
    };
  },
  destroyed() {
    clearInterval(this.autorefresh);
  },
  computed: {
    ...mapState('agentCalls', {
      data: (state) => state.dataList,
    }),
    timer: () => +localStorage.getItem('autorefresh'),
  },
  methods: {
    ...mapActions('agentCalls', {
      loadDataList: 'FETCH_LIST',
    }),
    async loadList() {
      this.isLoading = true;
      const params = this.getQueryParams();
      params.agentId = this.$route.params.id;
      try {
        this.isNext = await this.loadDataList(params);
      } catch {
      } finally {
        this.isLoading = false;
      }
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
</style>
