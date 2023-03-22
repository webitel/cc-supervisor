<template>
  <section class="table-wrapper table-wrapper--tab-table">
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
        <template v-slot:actions="{ item, index }">
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
  </section>
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
  mounted() {
    console.log('call:', this.dataList[2]);
    // const some = {
    //   "items": [
    //     {
    //       "agent": {
    //         "id": "string",
    //         "name": "string"
    //       },
    //       "agent_description": "string",
    //       "annotations": [
    //         {
    //           "call_id": "string",
    //           "created_at": "string",
    //           "created_by": {
    //             "id": "string",
    //             "name": "string"
    //           },
    //           "end_sec": 0,
    //           "id": "string",
    //           "note": "string",
    //           "start_sec": 0,
    //           "updated_at": "string",
    //           "updated_by": {
    //             "id": "string",
    //             "name": "string"
    //           }
    //         }
    //       ],
    //       "answered_at": "string",
    //       "app_id": "string",
    //       "bill_sec": 0,
    //       "blind_transfer": "string",
    //       "bridged_at": "string",
    //       "cause": "string",
    //       "created_at": "string",
    //       "destination": "string",
    //       "direction": "string",
    //       "display": "string",
    //       "duration": 0,
    //       "extension": "string",
    //       "files": [
    //         {
    //           "id": "string",
    //           "mime_type": "string",
    //           "name": "string",
    //           "size": "string",
    //           "start_at": "string",
    //           "stop_at": "string"
    //         }
    //       ],
    //       "files_job": [
    //         {
    //           "action": "undefined",
    //           "created_at": "string",
    //           "error_detail": "string",
    //           "file_id": "string",
    //           "id": "string",
    //           "state": "idle"
    //         }
    //       ],
    //       "from": {
    //         "id": "string",
    //         "name": "string",
    //         "number": "string",
    //         "type": "string"
    //       },
    //       "gateway": {
    //         "id": "string",
    //         "name": "string"
    //       },
    //       "grantee": {
    //         "id": "string",
    //         "name": "string"
    //       },
    //       "hangup_at": "string",
    //       "hangup_by": "string",
    //       "hangup_disposition": "string",
    //       "has_children": true,
    //       "hold": [
    //         {
    //           "sec": 0,
    //           "start": "string",
    //           "stop": "string"
    //         }
    //       ],
    //       "id": "string",
    //       "joined_at": "string",
    //       "leaving_at": "string",
    //       "member": {
    //         "id": "string",
    //         "name": "string"
    //       },
    //       "parent_id": "string",
    //       "queue": {
    //         "id": "string",
    //         "name": "string"
    //       },
    //       "queue_bridged_at": "string",
    //       "queue_duration_sec": 0,
    //       "queue_wait_sec": 0,
    //       "rate_id": "string",
    //       "rated_by": {
    //         "id": "string",
    //         "name": "string"
    //       },
    //       "rated_user": {
    //         "id": "string",
    //         "name": "string"
    //       },
    //       "reporting_at": "string",
    //       "reporting_sec": 0,
    //       "result": "string",
    //       "score_optional": 0,
    //       "score_required": 0,
    //       "sip_code": 0,
    //       "stored_at": "string",
    //       "tags": [
    //         "string"
    //       ],
    //       "talk_sec": 0,
    //       "team": {
    //         "id": "string",
    //         "name": "string"
    //       },
    //       "to": {
    //         "id": "string",
    //         "name": "string",
    //         "number": "string",
    //         "type": "string"
    //       },
    //       "transcripts": [
    //         {
    //           "file": {
    //             "id": "string",
    //             "name": "string"
    //           },
    //           "file_id": "string",
    //           "id": "string",
    //           "locale": "string"
    //         }
    //       ],
    //       "transfer_from": "string",
    //       "transfer_to": "string",
    //       "type": "string",
    //       "user": {
    //         "id": "string",
    //         "name": "string"
    //       },
    //       "variables": {
    //         "additionalProp1": "string",
    //         "additionalProp2": "string",
    //         "additionalProp3": "string"
    //       },
    //       "wait_sec": 0
    //     }
    //   ],
    // }
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
.wt-player {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 45px; // above pagination, na oko
}
</style>
