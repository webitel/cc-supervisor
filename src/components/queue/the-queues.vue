<template>
    <div>
        <the-object-header>
            <template v-slot:title>
                {{$t('pages.queue.title')}}
            </template>
            <template v-slot:actions>
                <filter-search/>
                <btn
                    class="primary action-button"
                    :loading="isCSVLoading"
                    @click.native="download"
                >Export CSV
                </btn>
            </template>
        </the-object-header>
        <div class="filter-header">
            <filter-period class="filter-item"/>
            <filter-queue class="filter-item"/>
            <filter-team class="filter-item"/>
            <filter-type class="filter-item"/>
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
                    {{item.members.processing+'/'}}<span :class="{'low': !calculateMembers(item.members),'high': calculateMembers(item.members) }">{{item.members.waiting}}</span>
                </template>
                <template slot="team" slot-scope="{ item }" >
                    <div v-if="item.team">{{item.team.name}}</div>
                </template>
                <template slot="queue" slot-scope="{ item }" >
                    <div v-if="item.queue">{{item.queue.name}}</div>
                </template>
                <template slot="bridged" slot-scope="{ item }" >
                    <div v-if="item.bridged">{{item.bridged.toFixed(2)+'%'}}</div>
                </template>
                 <template slot="abandoned" slot-scope="{ item }" >
                    <div v-if="item.abandoned">{{item.abandoned.toFixed(2)+'%'}}</div>
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
import { queueFields } from '@/api/queues/queues';
import sortFilterMixin from '@/mixins/filters/sortFilterMixin';
import FilterType from '../filters/filter-type.vue';
import FilterTeam from '../filters/filter-queue.vue';
import FilterQueue from '../filters/filter-team.vue';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterPagination from '../filters/filter-pagination.vue';
import FilterSearch from '../filters/filter-search.vue';
import FilterPeriod from '../filters/filter-period.vue';
import Btn from '../utils/btn.vue';
import GridTable from '../utils/grid-table.vue';
import queueHeaders from './queueHeaders';
import status from '../utils/status.vue';
import theObjectHeader from '../object-utils/the-object-header.vue';

export default {
    name: 'the-queues',
    components: {
        FilterSearch,
        loader,
        GridTable,
        FilterType,
        FilterTeam,
        FilterQueue,
        FilterFields,
        FilterPagination,
        FilterPeriod,
        Btn,
        status,
        theObjectHeader,
    },
    mixins: [
        sortFilterMixin,
        downloadCSVMixin,
    ],
    data() {
        return {
            headers: queueHeaders,
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
        ...mapState('queues', {
                data: (state) => state.dataList,
        }),
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

.action-button {
    padding: 5px 17px 8px;
    height: 32px;
}

.low {
    color: $false-color;
}

.high {
    color: $true-color;
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
    .filter-item {
        min-width: (170px);
        margin-right: (30px);
    }
}

</style>
