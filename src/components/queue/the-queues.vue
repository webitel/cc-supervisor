<template>
  <page-wrapper>
    <template slot="header">
      <wt-headline>
        <template slot="title">
          {{ $t('pages.queue.title') }}
        </template>
        <template slot="actions">
          <filter-search/>
          <wt-button
            :loading="isCSVLoading"
            @click.native="download"
          >{{ $t('defaults.exportCSV') }}
          </wt-button>
        </template>
      </wt-headline>
    </template>
    <template slot="actions-panel">
      <div class="filter-header">
        <filter-period class="filter-item"/>
        <filter-queue class="filter-item"/>
        <filter-team class="filter-item"/>
        <filter-type class="filter-item"/>
      </div>
    </template>
    <template slot="main">
      <wt-loader v-show="isLoading"></wt-loader>
      <wt-table
        :checkboxes="false"
        v-show="!isLoading"
        :headers="headers"
        :data="data"
        :expanded="false"
        @sort="sort"
      >
        <template slot="actions-header">
          <filter-fields
            :entity="'queues'"
            :headers="headers"
          />
        </template>

        <template slot="agents" slot-scope="{ item }">
          <div class="agents-cell">
            <status
              class="agents-cell__status-margin"
              :class="{'status__true':true}"
              :text="item.agents.active"
            >
            </status>
            <status
              :class="{'status__info':true}"
              :text="item.agents.waiting"
            >
            </status>
          </div>
        </template>

        <template slot="members" slot-scope="{ item }">
          {{ item.members.processing + '/' }}
          <span
            :class="{
              'low': item.members.waiting && !calculateMembers(item.members),
              'high': calculateMembers(item.members),
            }"
          >{{ item.members.waiting }}</span>
        </template>
        <template slot="team" slot-scope="{ item }">
          <div v-if="item.team">{{ item.team.name }}</div>
        </template>
        <template slot="queue" slot-scope="{ item }">
          <div v-if="item.queue">{{ item.queue.name }}</div>
        </template>
      </wt-table>
      <wt-pagination
        :size="10"
        :next="true"
        :prev="true"
      ></wt-pagination>
    </template>
  </page-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import convertQuery from '../../utils/loadScripts';
import downloadCSVMixin from '../../mixins/downloadCSV/downloadCSVMixin';
import { queueFields } from '../../api/queues/queues';
import sortFilterMixin from '../../mixins/filters/sortFilterMixin';
import FilterType from '../filters/filter-queue-type.vue';
import FilterTeam from '../filters/filter-team.vue';
import FilterQueue from '../filters/filter-queue.vue';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterSearch from '../filters/filter-search.vue';
import FilterPeriod from '../filters/filter-period.vue';
import status from '../utils/status.vue';
import PageWrapper from '../supervisor-workspace/page-wrapper.vue';

import headersMixin from './_internals/headersMixin';

export default {
  name: 'the-queues',
  components: {
    FilterSearch,
    FilterType,
    FilterTeam,
    FilterQueue,
    FilterFields,
    FilterPeriod,
    status,
    PageWrapper,
  },
  mixins: [headersMixin, sortFilterMixin, downloadCSVMixin],
  data: () => ({
    isNext: false,
    isLoading: false,
    autorefresh: null,
  }),

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
    ...mapState('queues', {
      data: (state) => state.dataList,
    }),
    timer: () => +localStorage.getItem('autorefresh'),
  },
  methods: {
    ...mapActions('queues', {
      loadDataList: 'FETCH_LIST',
    }),
    async loadList() {
      this.isLoading = true;
      const params = this.getQueryParams();
      try {
        this.isNext = await this.loadDataList(params);
      } catch {
      } finally {
        this.isLoading = false;
      }
    },

    async loadListTick() {
      const params = this.getQueryParams();
      try {
        this.isNext = await this.loadDataList(params);
      } catch {
      }
    },

    download() {
      this.downloadCSV({
        fields: queueFields,
        items: this.data,
      });
    },
    calculateMembers(member) {
      if (member.processing / member.waiting > 0.5) {
        return true;
      }
      return false;
    },
    getQueryParams() {
      const { query } = this.$route;
      return convertQuery(query);
    },
  },
};
</script>

<style lang="scss" scoped>
.wt-button {
  margin-left: 20px;
}

.low {
  color: $false-color;
}

.high {
  color: $true-color;
}

.filter-header {
  display: flex;

  .filter-item {
    min-width: 170px;
    max-width: 250px;
    margin-right: 20px;
  }
}

.agents-cell {
  display: flex;

  &__status-margin {
    margin-right: 16px;
  }
}

</style>
