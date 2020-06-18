<template>
    <div>
        <the-object-header>
            <template v-slot:title>
                {{$t('pages.activeCall.title')}}
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
            <filter-queue class="filter-item"/>
            <filter-team class="filter-item"/>
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
                <template slot="agent" slot-scope="{ item }" >
                    <div v-if="item.agent">{{item.agent.name}}</div>
                </template>
                <template slot="team" slot-scope="{ item }" >
                    <div v-if="item.team">{{item.team.name}}</div>
                </template>
                <template slot="queue" slot-scope="{ item }" >
                    <div v-if="item.queue">{{item.queue.name}}</div>
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
import { activeCallFields } from '@/api/activeCalls/activeCalls';
import sortFilterMixin from '@/mixins/filters/sortFilterMixin';
import FilterTeam from '../filters/filter-queue.vue';
import FilterQueue from '../filters/filter-team.vue';
import FilterFields from '../filters/filter-table-fields.vue';
import FilterPagination from '../filters/filter-pagination.vue';
import FilterSearch from '../filters/filter-search.vue';
import Btn from '../utils/btn.vue';
import GridTable from '../utils/grid-table.vue';
import activeCallHeaders from './activeCallHeaders';
import theObjectHeader from '../object-utils/the-object-header.vue';

export default {
    name: 'the-active-calls',
    components: {
        FilterSearch,
        loader,
        GridTable,
        FilterTeam,
        FilterQueue,
        FilterFields,
        FilterPagination,
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
        ...mapState('activeCalls', {
                data: (state) => state.dataList,
        }),
    },
    methods: {
        ...mapActions('activeCalls', {
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
                fields: activeCallFields,
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

<style lang="scss" scoped>

.action-button {
    padding: 5px 17px 8px;
    height: 32px;
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
