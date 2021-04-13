<template>
  <article class="table-wrapper agent-calls">
    <wt-table-actions
      class="table-wrapper__actions-wrapper"
      :icons="['refresh']"
      @input="tableActionsHandler"
    >
      <filter-fields
        v-model="headers"
        entity="agentCalls"
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
        <template slot="direction" slot-scope="{ item }">
          <table-direction :item="item"/>
        </template>
        <template slot="user" slot-scope="{ item }">
          <div v-if="item.user">
            {{ item.user.name }}
          </div>
        </template>
        <template slot="from" slot-scope="{ item }">
          <div v-if="item.from">
            {{ item.from.name }}
          </div>
        </template>
        <template slot="to" slot-scope="{ item }">
          <div v-if="item.to">
            {{ item.to.name }}
          </div>
        </template>
        <template slot="team" slot-scope="{ item }">
          <div v-if="item.team">
            {{ item.team.name }}
          </div>
        </template>
        <template slot="queue" slot-scope="{ item }">
          <div v-if="item.queue">
            {{ item.queue.name }}
          </div>
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
  </article>
</template>

<script>
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
.agent-calls {
    position: relative;

  .table-actions-wrapper {
    align-self: flex-end;
    display: flex;
    align-items: center;
    margin: var(--component-spacing) 0;
  }

  .wt-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .table-loading-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: 0;
  }
}
</style>
