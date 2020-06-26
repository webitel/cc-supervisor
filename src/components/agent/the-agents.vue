<template>
    <div>
        <the-object-header>
            <template v-slot:title>
                {{$t('pages.agent.title')}}
            </template>
            <template v-slot:actions>
                <filter-search/>
                <btn
                    class="primary action-button"
                    :loading="isCSVLoading"
                    @click.native="download"
                >{{$t('defaults.exportCSV')}}
                </btn>
            </template>
        </the-object-header>
        <div class="filter-header">
            <filter-status class="filter-status"/>
            <filter-queue class="filter-item"/>
            <filter-team class="filter-item"/>
            <filter-utilization class="filter-item"/>
            <div class="switcher-label-wrap filter-switch-item">
                <div class="label">{{$t('filters.callNow')}}</div>
                <switcher
                    v-model="callNow"
                ></switcher>
            </div>
            <!-- <div class="switcher-label-wrap filter-switch-item">
                <div class="label">Attention now</div>
                <switcher
                    v-model="attentionNow"
                ></switcher>
            </div> -->
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
                        <span class="nameLink" @click="open(item.agentId)">
                            {{item.name}}
                        </span>
                    </div>
                </template>

                <template slot="status" slot-scope="{ item }">
                     <status-select
                        class="status-cell"
                        :status="item.status"
                        :time="item.statusDuration"
                        :agentId="`${item.agentId}`"
                    ></status-select>
                </template>

                 <template slot="callTime" slot-scope="{ item }">
                     <div class="call" v-if="item.callTime">
                        <span>{{item.callTime}}</span>
                        <icon>
                            <svg class="icon icon-speaker_off_md grid">
                                <use xlink:href="#icon-speaker_off_md"></use>
                            </svg>
                        </icon>
                     </div>
                </template>

                 <template slot="queues" slot-scope="{ item }">
                     <selector-queue
                        v-if="item.queues"
                        class="selector-item"
                        :agentId="item.agentId"
                        :options="item.queues"
                        :values="item.queues"
                     >
                     </selector-queue>
                </template>

                <template slot="teams" slot-scope="{ item }">
                     <selector-team
                        v-if="item.teams"
                        class="selector-item"
                        :agentId="item.agentId"
                        :options="item.teams"
                        :values="item.teams"
                     >
                     </selector-team>
                </template>

                <template slot="attentions" slot-scope="{ item }">
                    <div v-if="item.attentions">
                        <the-agents-help-popup
                            :agent="item"
                            :type="item.attentions.type"
                            :count="item.attentions.count"
                        >
                        </the-agents-help-popup>
                    </div>
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
// import { fetchQueues } from '@/api/filter-getters/queueFilter';
// import { fetchTeams } from '@/api/filter-getters/teamFilter';
import FilterTeam from '../filters/filter-team.vue';
import FilterQueue from '../filters/filter-queue.vue';
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
import theAgentsHelpPopup from './the-agents-help-popup.vue';
import theObjectHeader from '../object-utils/the-object-header.vue';

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
        theAgentsHelpPopup,
        theObjectHeader,
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
            autorefresh: null,
            // queues: [],
            // teams: [],
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
        callNow(value) {
            if (value) {
                this.setQueryValue({ filterQuery: 'callNow', value: value.toString() });
            } else {
                this.setQueryValue({ filterQuery: 'callNow', value: undefined });
            }
        },
        attentionNow(value) {
            if (value) {
                this.setQueryValue({ filterQuery: 'attentionNow', value: value.toString() });
            } else {
                this.setQueryValue({ filterQuery: 'attentionNow', value: undefined });
            }
        },
    },
    mounted() {
        this.callNow = (this.getValueByQuery({ filterQuery: 'callNow' }) === 'true') || false;
        this.attentionNow = (this.getValueByQuery({ filterQuery: 'attentionNow' }) === 'true') || false;
    },
    destroyed() {
        clearInterval(this.autorefresh);
    },
    computed: {
        ...mapState('agents', {
            data: (state) => state.dataList,
        }),
        timer: () => +localStorage.getItem('autorefresh'),
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

        async loadListTick() {
            const params = this.getQueryParams();
            try {
                this.isNext = await this.loadDataList(params);
            } catch {
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

.action-button {
    padding: 5px 17px 8px;
    height: 32px;
}

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
    padding: 18px 30px;
    margin-bottom: 20px;

    background: $content-bg-color;
    border-radius: $border-radius;
    .label {
        color: $label-color;
    }
    .filter-status {
        min-width: (116px);
        margin-right: (30px);
    }
    .filter-item {
        min-width: (170px);
        margin-right: (30px);
    }
    .filter-switch-item {
        min-width: (90px);
    }
}

.selector-item {
    margin: -10px 0px;
    min-width: (170px);
}

.status-cell {
    margin: -10px 0px;
    width: (126px)
}

</style>
