<template>
    <div>
        <header class="object-header">
            <div class="object-header__title-wrap">
                <h2 class="object-title">{{$t('pages.agent.title')}}</h2>
            </div>
            <div class="history-heading__actions-wrap">
                <div class="search-margin">
                    <filter-search/>
                </div>
                <btn
                    class="primary"
                    :loading="isCSVLoading"
                    @click.native="download"
                >Export CSV
                </btn>
            </div>
        </header>
        <div class="filter-header">
            <div
                class="col-md-1 col-lg-1 col-xl-1"
            >
                <filter-status/>
            </div>
            <div
                class="col-md-1 col-lg-1 col-xl-1"
            >
                <filter-queue/>
            </div>
            <div
                class="col-md-1 col-lg-1 col-xl-1"
            >
                <filter-team/>
            </div>
            <div class="switcher-label-wrap col-md-1 col-lg-1 col-xl-1">
                <div class="label">Call now</div>
                <switcher
                        v-model="callNow"
                ></switcher>
            </div>
            <div class="switcher-label-wrap col-md-1 col-lg-1 col-xl-1">
                <div class="label">Attention now</div>
                <switcher
                        v-model="attentionNow"
                ></switcher>
            </div>
        </div>
        <section class="object-content">
            <loader v-show="isLoading"></loader>
             <grid-table
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

                <template slot="agents" slot-scope="{ item }">
                     <status
                            :class="{'status__true':true}"
                            :text="item.agents.active"
                    >
                    </status>
                     <status
                            :class="{'status__info':true}"
                            :text="item.agents.waiting"
                    >
                    </status>
                </template>

                <template slot="members" slot-scope="{ item }">
                    {{item.members.processing+'/'}}<span :class="{'low': !calculateMembers(item.members),'hight': calculateMembers(item.members) }">{{item.members.waiting}}</span>
                </template>
                <template slot="team" slot-scope="{ item }" >
                    <div v-if="item.team">{{item.team.name}}</div>
                </template>

                <template slot="pagination">
                    <filter-pagination/>
                </template>

                </grid-table>
        </section>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import loader from '@/components/utils/loader.vue';
import convertQuery from '@/utils/loadScripts';
import downloadCSVMixin from '@/mixins/downloadCSV/downloadCSVMixin';
import { queueFields } from '@/api/queues/queues';
import sortFilterMixin from '@/mixins/filters/sortFilterMixin';
import switcher from '@/components/utils/switcher.vue';
import FilterTeam from '../filters/filter-queue.vue';
import FilterQueue from '../filters/filter-team.vue';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterPagination from '../filters/filter-pagination.vue';
import FilterSearch from '../filters/filter-search.vue';
import FilterStatus from '../filters/filter-status.vue';
import Btn from '../utils/btn.vue';
import GridTable from '../utils/grid-table.vue';
import agentHeaders from './agentHeaders';
import status from '../utils/status.vue';

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
        Btn,
        status,
        switcher,
    },
    mixins: [
        sortFilterMixin,
        downloadCSVMixin,
    ],
    data() {
        return {
            callNow: false,
            attentionNow: false,
            headers: agentHeaders,
            isNext: false,
            isLoading: false,
        };
    },
    watch: {
        '$route.query': {
            async handler() {
                await this.loadList();
            },
            immediate: true,
        },
    },
    computed: {
        ...mapGetters('agents', {
            data: 'GET_AGENTS',
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
                fields: queueFields,
                items: this.data,
            });
        },
        getQueryParams() {
            const { query } = this.$route;
            return convertQuery(query);
        },
    },
};
</script>

<style scoped>

.low {
    color: red;
}

.hight {
    color: green;
}

.search-margin {
    margin-right: 1rem;
  }

.filter-header {
    display: flex;
    align-items: left;
    min-height: 68px;
    padding: 15px 28px;
    margin-bottom: 28px;

    background: #fff;
    border-radius: $border-radius;
    .label {
        color: #acacac;
    }
}

.object-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 68px;
        padding: 15px 28px;
        margin-bottom: 28px;

        background: #fff;
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
    background: #fff;
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
      background: #fff;
      box-shadow: $box-shadow;
      border-radius: $border-radius;

      &__count {
        @extend .typo-heading-sm;
      }
    }
  }
</style>
