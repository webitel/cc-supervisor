<!--<template>-->
<!--    <section>-->
<!--        <loader v-show="isLoading"></loader>-->
<!--        <grid-table-->
<!--            :checkboxes="false"-->
<!--            v-show="!isLoading"-->
<!--            :headers="headers"-->
<!--            :data="data"-->
<!--            :expanded="false"-->
<!--            >-->
<!--            <template slot="actions-header">-->
<!--                <filter-fields-->
<!--                v-model="headers"-->
<!--                />-->
<!--            </template>-->
<!--            <template slot="client" slot-scope="{ item }" >-->
<!--                <div class="links">{{item.client}}</div>-->
<!--            </template>-->
<!--            <template slot="notes" slot-scope="{ item }" >-->
<!--                <div class="links">{{item.notes}}</div>-->
<!--            </template>-->
<!--            <template slot="time" slot-scope="{ item }" >-->
<!--                <span v-if="item.time">{{item.time}}</span>-->
<!--                <span v-else class="red">Decline</span>-->
<!--            </template>-->
<!--            <template slot="chat" slot-scope="{ item }" >-->
<!--                <div class="call" v-if="item.chat==='viber'">-->
<!--                    <icon>-->
<!--                        <svg class="icon icon-viber_sm lg viber">-->
<!--                            <use xlink:href="#icon-viber_sm"></use>-->
<!--                        </svg>-->
<!--                    </icon>-->
<!--                </div>-->
<!--                <div class="call" v-if="item.chat==='telegram'">-->
<!--                    <icon>-->
<!--                        <svg class="icon icon-tele_sm lg tg">-->
<!--                            <use xlink:href="#icon-tele_sm"></use>-->
<!--                        </svg>-->
<!--                    </icon>-->
<!--                </div>-->
<!--            </template>-->
<!--            <template slot="rating" slot-scope="{ item }" >-->
<!--                <div class="rating">-->
<!--                   <icon v-for="n in 5" :key="n">-->
<!--                        <svg v-if="n <= item.rating" class="icon icon-rating_on_md md yell">-->
<!--                            <use xlink:href="#icon-rating_on_md"></use>-->
<!--                        </svg>-->
<!--                         <svg v-else class="icon icon-rating_off_md md">-->
<!--                            <use xlink:href="#icon-rating_off_md"></use>-->
<!--                        </svg>-->
<!--                    </icon>-->
<!--                </div>-->
<!--            </template>-->
<!--        </grid-table>-->
<!--        <filter-pagination/>-->
<!--    </section>-->
<!--</template>-->

<!--<script>-->
<!--   import { mapActions, mapState } from 'vuex';-->
<!--    import loader from '../../utils/loader.vue';-->
<!--    import convertQuery from '../../../utils/loadScripts';-->
<!--    import sortFilterMixin from '../../../shared/filters/mixins/sortFilterMixin';-->
<!--    import agentChatHeaders from './agentChatHeaders';-->
<!--    import GridTable from '../../utils/grid-table.vue';-->
<!--    import FilterFields from '../../filters/filter-table-fields.vue';-->
<!--    import FilterPagination from '../../../shared/filters/components/filter-pagination.vue';-->

<!--    export default {-->
<!--        name: 'the-agents-item-chats',-->
<!--        components: {-->
<!--            loader,-->
<!--            GridTable,-->
<!--            FilterFields,-->
<!--            FilterPagination,-->
<!--        },-->
<!--        mixins: [-->
<!--            sortFilterMixin,-->
<!--        ],-->
<!--        // watch: {-->
<!--        //     '$route.query': {-->
<!--        //         async handler() {-->
<!--        //             await this.loadList();-->
<!--        //         },-->
<!--        //         immediate: true,-->
<!--        //     },-->
<!--        // },-->
<!--        mounted() {-->
<!--            this.loadList();-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                headers: agentChatHeaders,-->
<!--                isNext: false,-->
<!--                isLoading: false,-->
<!--            };-->
<!--        },-->
<!--        computed: {-->
<!--            ...mapState('agentChats', {-->
<!--                    data: (state) => state.dataList,-->
<!--            }),-->
<!--        },-->
<!--        methods: {-->
<!--            ...mapActions('agentChats', {-->
<!--                loadDataList: 'FETCH_LIST',-->
<!--            }),-->
<!--            async loadList() {-->
<!--                this.isLoading = true;-->
<!--                const params = this.getQueryParams();-->
<!--                try {-->
<!--                    this.isNext = await this.loadDataList(params);-->
<!--                } catch {-->
<!--                } finally {-->
<!--                    this.isLoading = false;-->
<!--                }-->
<!--            },-->
<!--            getQueryParams() {-->
<!--                const { query } = this.$route;-->
<!--                return convertQuery(query);-->
<!--            },-->
<!--        },-->
<!--    };-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.rating {-->
<!--    display: flex;-->
<!--}-->
<!--.call {-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--}-->
<!--.links {-->
<!--    text-decoration: underline;-->
<!--}-->
<!--.viber {-->
<!--    background: $viber-color;-->
<!--    fill: $white-color;-->
<!--    border-radius: 50%;-->
<!--}-->
<!--.red {-->
<!--    fill: $false-color;-->
<!--    color: $false-color;-->
<!--}-->
<!--.tg {-->
<!--    background:  $telegram-color;-->
<!--    fill: $white-color;-->
<!--    border-radius: 50%;-->
<!--}-->
<!--.yell {-->
<!--    fill: $accent-color;-->
<!--}-->
<!--.icon-margin {-->
<!--    margin-right: 10px;-->
<!--}-->
<!--</style>-->
