<template>
  <div>
    <the-object-header>
      <template v-slot:title>
        {{ $t('pages.activeCall.title') }}
      </template>
      <template v-slot:actions>
        <!-- <filter-search/> -->
        <btn
          class="primary action-button"
          :loading="isCSVLoading"
          @click.native="download"
        >{{ $t('defaults.exportCSV') }}
        </btn>
      </template>
    </the-object-header>
    <div class="filter-header">
      <filter-direction class="filter-item"/>
      <filter-user class="filter-item"/>
      <filter-gateway class="filter-item"/>
      <filter-queue class="filter-item"/>
      <filter-agent class="filter-item"/>
    </div>
    <section class="object-content">
      <loader v-show="isLoading"></loader>
      <grid-table
        :checkboxes="false"
        v-show="!isLoading"
        :headers="headers"
        :data="data"
        :expanded="false"
        @sort="sort"
      >
        <template slot="actions-header">
          <filter-fields
            :entity="'active-calls'"
            :headers="headers"
          />
        </template>
        <template slot="direction" slot-scope="{ item }">
          <div class="call" v-if="item.direction==='outbound'">
            <icon class="icon-margin">
              <svg class="icon icon-outbound_md grid green">
                <use xlink:href="#icon-outbound_md"></use>
              </svg>
            </icon>
          </div>
          <div class="call" v-else-if="item.direction==='inbound'">
            <icon>
              <svg class="icon icon-inbound_md grid yell">
                <use xlink:href="#icon-inbound_md"></use>
              </svg>
            </icon>
          </div>
        </template>
        <template slot="from" slot-scope="{ item }">
          <div v-if="item.from">{{ item.from.number }}</div>
        </template>
        <template slot="agent" slot-scope="{ item }">
          <div v-if="item.agent">{{ item.agent.name }}</div>
        </template>
        <template slot="to" slot-scope="{ item }">
          <div v-if="item.to">{{ item.to.number }}</div>
        </template>
        <template slot="queue" slot-scope="{ item }">
          <div v-if="item.queue">{{ item.queue.name }}</div>
        </template>
        <template slot="user" slot-scope="{ item }">
          <div v-if="item.user">{{ item.user.name }}</div>
        </template>
        <template slot="state" slot-scope="{ item }">
          <div class="call">
            <span>{{ item.state }}</span>
            <button
              v-if="isActive(item.state)"
              class="icon-btn"
              @click.prevent="attachCall(item.id)">
              <icon>
                <svg class="icon icon-speaker_off_md grid">
                  <use xlink:href="#icon-speaker_off_md"></use>
                </svg>
              </icon>
            </button>
          </div>
        </template>
        <template slot="pagination">
          <filter-pagination :is-next="isNext"/>
        </template>
      </grid-table>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { CallActions } from 'webitel-sdk';
import loader from '@/components/utils/loader.vue';
import convertQuery from '@/utils/loadScripts';
import downloadCSVMixin from '@/mixins/downloadCSV/downloadCSVMixin';
import { activeCallFields } from '@/api/activeCalls/activeCalls';
import sortFilterMixin from '@/mixins/filters/sortFilterMixin';
import FilterDirection from '../filters/filter-direction.vue';
import FilterUser from '../filters/filter-user.vue';
import FilterGateway from '../filters/filter-gateway.vue';
import FilterAgent from '../filters/filter-agent.vue';
import FilterQueue from '../filters/filter-queue.vue';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterPagination from '../filters/filter-pagination.vue';
// import FilterSearch from '../filters/filter-search.vue';
import Btn from '../utils/btn.vue';
import GridTable from '../utils/grid-table.vue';
import activeCallHeaders from './activeCallHeaders';
import theObjectHeader from '../object-utils/the-object-header.vue';

export default {
  name: 'the-active-calls',
  components: {
    // FilterSearch,
    loader,
    GridTable,
    FilterAgent,
    FilterUser,
    FilterQueue,
    FilterFields,
    FilterPagination,
    FilterDirection,
    FilterGateway,
    Btn,
    theObjectHeader,
  },
  mixins: [
    sortFilterMixin,
    downloadCSVMixin,
  ],
  data() {
    return {
      headers: activeCallHeaders,
      // isNext: false,
      isLoading: false,
      autorefresh: null,
    };
  },
  watch: {
    '$route.query': {
      async handler() {
        await this.loadList();
        if (this.autorefresh) clearInterval(this.autorefresh);
        this.autorefresh = setInterval(this.loadListTick, this.timer);
      },
      immediate: true,
    },
  },
  destroyed() {
    clearInterval(this.autorefresh);
  },
  computed: {
    ...mapState('activeCalls', {
      data: (state) => state.dataList,
      isNext: (state) => state.isNext,
    }),
    timer: () => +localStorage.getItem('autorefresh'),
  },
  methods: {
    ...mapActions('activeCalls', {
      loadDataList: 'FETCH_LIST',
    }),
    ...mapActions('call', {
      attachToCall: 'ATTACH_TO_CALL',
      openWindow: 'EAVESDROP_OPEN_WINDOW',
    }),
    async loadList() {
      this.isLoading = true;
      const params = this.getQueryParams();
      try {
        await this.loadDataList(params);
      } catch {
      } finally {
        this.isLoading = false;
      }
    },
    async loadListTick() {
      const params = this.getQueryParams();
      try {
        await this.loadDataList(params);
      } catch {
      }
    },
    download() {
      this.downloadCSV({
        fields: activeCallFields,
        items: this.data,
      });
    },
    getQueryParams() {
      const { query } = this.$route;
      return convertQuery(query);
    },
    isActive(state) {
      return state !== CallActions.Hangup && state !== CallActions.Ringing;
    },
    async attachCall(id) {
      await this.attachToCall({ id });
      this.openWindow();
    },
  },
};
</script>

<style lang="scss" scoped>

.action-button {
  padding: 5px 17px 8px;
  height: 32px;
}

.call {
  display: flex;
  align-items: center;
}

.green {
  fill: $true-color;
}

.yell {
  fill: $accent-color;
}
</style>
