<template>
    <section>
        <loader v-show="isLoading"></loader>
        <grid-table
            :checkboxes="false"
            v-show="!isLoading"
            :headers="headers"
            :data="data"
            :expanded="false"
            >
            <template slot="actions-header">
                <filter-fields
                v-model="headers"
                />
            </template>
            <template slot="client" slot-scope="{ item }" >
                <div class="links">{{item.client}}</div>
            </template>
            <template slot="phone_number" slot-scope="{ item }" >
                <div class="links">{{item.phone_number}}</div>
            </template>
            <template slot="notes" slot-scope="{ item }" >
                <div class="links">{{item.notes}}</div>
            </template>
            <template slot="direction" slot-scope="{ item }" >
                <div class="call" v-if="item.direction==='outbound'">
                    <icon class="icon-margin">
                        <svg class="icon icon-outbound_md lg green">
                            <use xlink:href="#icon-outbound_md"></use>
                        </svg>
                    </icon>
                </div>
                <div class="call" v-if="item.direction==='disconnect'">
                    <icon>
                        <svg class="icon icon-disconnect_md lg red">
                            <use xlink:href="#icon-disconnect_md"></use>
                        </svg>
                    </icon>
                </div>
                <div class="call" v-if="item.direction==='inbound'">
                    <icon>
                        <svg class="icon icon-inbound_md lg yell">
                            <use xlink:href="#icon-inbound_md"></use>
                        </svg>
                    </icon>
                </div>
            </template>
            <template slot="rating" slot-scope="{ item }" >
                <div class="rating">
                   <icon v-for="n in 5" :key="n">
                        <svg v-if="n <= item.rating" class="icon icon-rating_on_md md yell">
                            <use xlink:href="#icon-rating_on_md"></use>
                        </svg>
                         <svg v-else class="icon icon-rating_off_md md">
                            <use xlink:href="#icon-rating_off_md"></use>
                        </svg>
                    </icon>
                </div>
            </template>
        </grid-table>
        <filter-pagination/>
    </section>
</template>

<script>
   import { mapActions, mapState } from 'vuex';
    import loader from '@/components/utils/loader.vue';
    import convertQuery from '@/utils/loadScripts';
    import sortFilterMixin from '@/mixins/filters/sortFilterMixin';
    import agentCallHeaders from './agentCallHeaders';
    import GridTable from '../utils/grid-table.vue';
    import FilterFields from '../filters/filter-table-fields.vue';
    import FilterPagination from '../filters/filter-pagination.vue';

    export default {
        name: 'the-agents-item-calls',
        components: {
            loader,
            GridTable,
            FilterFields,
            FilterPagination,
        },
        mixins: [
            sortFilterMixin,
        ],
        // watch: {
        //     '$route.query': {
        //         async handler() {
        //             await this.loadList();
        //         },
        //         immediate: true,
        //     },
        // },
        mounted() {
            this.loadList();
        },
        data() {
            return {
                headers: agentCallHeaders,
                isNext: false,
                isLoading: false,
            };
        },
        computed: {
            ...mapState('agentCalls', {
                    data: (state) => state.dataList,
            }),
        },
        methods: {
            ...mapActions('agentCalls', {
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
            getQueryParams() {
                const { query } = this.$route;
                return convertQuery(query);
            },
        },
    };
</script>

<style lang="scss" scoped>
.rating {
    display: flex;
}
.call {
    display: flex;
    align-items: center;
}
.links {
    text-decoration: underline;
}
.green {
    fill: $true-color;
}
.red {
    fill: $false-color;
}
.yell {
    fill: $accent-color;
}
.icon-margin {
    margin-right: 10px;
}
</style>
