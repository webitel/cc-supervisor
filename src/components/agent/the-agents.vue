<template>
    <div>
        <header class="object-header">
            <div class="object-header__title-wrap">
                <h2 class="object-title">{{$t('pages.agent.title')}}</h2>
            </div>
            <div class="history-heading__actions-wrap">
                <filter-search/>
                <btn
                    class="primary"
                    :loading="isCSVLoading"
                    @click.native="download"
                >Export CSV
                </btn>
            </div>
        </header>
        <div class="filter-header">
            <filter-status class="filter-status"/>
            <filter-queue class="filter-item"/>
            <filter-team class="filter-item"/>
            <filter-utilization class="filter-item"/>
            <div class="switcher-label-wrap filter-switch-item">
                <div class="label">Call now</div>
                <switcher
                    :v-model="callNow"
                ></switcher>
            </div>
            <div class="switcher-label-wrap filter-switch-item">
                <div class="label">Attention now</div>
                <switcher
                    :v-model="attentionNow"
                ></switcher>
            </div>
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
                    v-model="headers"
                    />
                </template>

                <template slot="name" slot-scope="{ item }">
                    <div class="tt-capitalize">
                        <span class="nameLink" @click="open(item.id)">
                            {{item.name}}
                        </span>
                    </div>
                </template>

                <template slot="status" slot-scope="{ item }">
                     <status-select
                        class="status-cell"
                        :status="item.status"
                    ></status-select>
                </template>

                 <template slot="call" slot-scope="{ item }">
                     <div class="call">
                        <span>{{item.call}}</span>
                        <icon>
                            <svg class="icon icon-speaker_off_md md">
                                <use xlink:href="#icon-speaker_off_md"></use>
                            </svg>
                        </icon>
                     </div>
                </template>

                <template slot="utilization" slot-scope="{ item }">
                       {{item.utilization*100+'%'}}
                </template>

                 <template slot="queues" slot-scope="{ item }">
                     <selector-queue
                        class="selector-item"
                        :agentId="item.id"
                        :options="queues"
                        :values="item.queues"
                     >
                     </selector-queue>
                </template>

                <template slot="teams" slot-scope="{ item }">
                     <selector-team
                        class="selector-item"
                        :agentId="item.id"
                        :options="teams"
                        :values="item.teams"
                     >
                     </selector-team>
                </template>

            </grid-table>
            <filter-pagination/>
        </section>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import loader from '@/components/utils/loader.vue';
import convertQuery from '@/utils/loadScripts';
import downloadCSVMixin from '@/mixins/downloadCSV/downloadCSVMixin';
import { agentFields } from '@/api/agents/agents';
import sortFilterMixin from '@/mixins/filters/sortFilterMixin';
import switcher from '@/components/utils/switcher.vue';
import { fetchQueues } from '@/api/filter-getters/queueFilter';
import { fetchTeams } from '@/api/filter-getters/teamFilter';
import FilterTeam from '../filters/filter-queue.vue';
import FilterQueue from '../filters/filter-team.vue';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterPagination from '../filters/filter-pagination.vue';
import FilterSearch from '../filters/filter-search.vue';
import FilterStatus from '../filters/filter-status.vue';
import FilterUtilization from '../filters/filter-utilization.vue';
import Btn from '../utils/btn.vue';
import GridTable from '../utils/grid-table.vue';
import agentHeaders from './agentHeaders';
// import status from '../utils/status.vue';
import statusSelect from '../utils/status-select.vue';
import selectorQueue from '../selectors/selector-queue.vue';
import selectorTeam from '../selectors/selector-team.vue';


export default {
    name: 'the-agents',
    components: {
       FilterSearch,
        loader,
        GridTable,
        FilterTeam,
        FilterQueue,
        FilterFields,
        FilterPagination,
        FilterStatus,
        FilterUtilization,
        Btn,
        // status,
        switcher,
        statusSelect,
        selectorQueue,
        selectorTeam,
    },
    mixins: [
        sortFilterMixin,
        downloadCSVMixin,
    ],
    mounted() {
        this.queues = fetchQueues();
        this.teams = fetchTeams();
        this.callNow = (this.getValueByQuery({ filterQuery: 'callNow' }) === 'true') || false;
        this.attentionNow = (this.getValueByQuery({ filterQuery: 'attentionNow' }) === 'true') || false;
    },
    data() {
        return {
            callNow: false,
            attentionNow: false,
            headers: agentHeaders,
            isNext: false,
            isLoading: false,
            queues: [],
            teams: [],
        };
    },
    watch: {
        '$route.query': {
            async handler() {
                await this.loadList();
            },
            immediate: true,
        },
        callNow(value) {
            if (value) {
                this.setQueryValue({ filterQuery: 'callNow', value });
            } else {
                this.setQueryValue({ filterQuery: 'callNow', value: undefined });
            }
        },
        attentionNow(value) {
            if (value) {
                this.setQueryValue({ filterQuery: 'attentionNow', value });
            } else {
                this.setQueryValue({ filterQuery: 'attentionNow', value: undefined });
            }
        },
    },
    computed: {
        ...mapState('agents', {
            data: (state) => state.dataList,
        }),
    },
    methods: {
        ...mapActions('agents', {
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
        download() {
            this.downloadCSV({
                fields: agentFields,
                items: this.data,
            });
        },
        getQueryParams() {
            const { query } = this.$route;
            return convertQuery(query);
        },
        open(id) {
            this.$router.push({
                name: 'agent-view',
                params: { id },
            });
        },
    },
};
</script>

<style lang="scss" scoped>

.call {
    display: flex;
    align-items: center;
}

.nameLink {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

.filter-header {
    display: flex;
    align-items: left;
    min-height: 68px;
    padding: 15px 28px;
    margin-bottom: 28px;

    background: $content-bg-color;
    border-radius: $border-radius;
    .label {
        color: $label-color;
    }
    .filter-status {
        min-width: calcRem(116px);
        margin-right: calcRem(30px);
    }
    .filter-item {
        min-width: calcRem(170px);
        margin-right: calcRem(30px);
    }
    .filter-switch-item {
        min-width: calcRem(90px);
    }
}

.selector-item {
    min-width: calcRem(170px);
}

.status-cell {
    width: calcRem(126px)
}

.object-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 68px;
        padding: 15px 28px;
        margin-bottom: 28px;

        background: $content-bg-color;
        border-radius: $border-radius;
    }

.object-title {
        @extend .typo-heading-lg;

        margin: 0;
        letter-spacing: 0.15px;

        span {
            @extend .typo-heading-lg;
        }
    }
 .object-header__title-wrap {
        display: flex;
    }
    .history-section {
    padding: calcRem(12px) calcRem(28px);
    border-radius: $border-radius;
    background: $content-bg-color;
  }

  .history-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .history-heading__h1 {
    @extend .typo-heading-md;
  }

  .history-heading__actions-wrap {
    display: flex;
    align-items: center;
    position: relative;

    .cc-btn {
      margin-left: calcRem(20px);
    }

    .files-counter {
      $offset: calcRem(10px);
      @extend .typo-body-sm;
      position: absolute;
      right: 0;
      top: calc(100% + #{$offset});
      padding: calcRem(10px) calcRem(15px);
      background: $content-bg-color;
      box-shadow: $box-shadow;
      border-radius: $border-radius;

      &__count {
        @extend .typo-heading-sm;
      }
    }
  }
</style>
