<template>
    <section class="calls-main">
        <!-- <loader v-show="isLoading"></loader>v-show="!isLoading" -->
        <grid-table
            ref="grid-table"
            :checkboxes="false"
            :headers="headers"
            :data="data"
            :expanded="false"
            >
            <template slot="actions-header">
                <filter-fields
                :entity="'agent-calls'"
                :headers="headers"
                />
            </template>
            <template slot="call" slot-scope="{ item }" >
                {{!item.answeredAt ?
                ( item.direction === 'inbound' ? 'Missed' : 'Disconnect' )
                 : 'End'}}
            </template>
            <template slot="client" slot-scope="{ item }" >
                <div v-if="item.from" class="links">{{item.from.name}}</div>
            </template>
            <template slot="phoneNumber" slot-scope="{ item }" >
                <!-- <div v-if="item.direction==='outbound'">{{item.destination}}</div> -->
                <div v-if="item.from">{{item.from.number}}</div>
            </template>
            <template slot="notes" slot-scope="{ item }" >
                <div class="links">{{item.notes}}</div>
            </template>
            <template slot="direction" slot-scope="{ item }" >
                <div class="call" v-if="!item.answeredAt">
                    <icon>
                        <svg class="icon icon-disconnect_md grid red">
                            <use xlink:href="#icon-disconnect_md"></use>
                        </svg>
                    </icon>
                </div>
                <div class="call" v-else-if="item.direction==='outbound'">
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
            <!-- <template slot="rating" slot-scope="{ item }" >
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
            </template> -->

            <template slot="actions" slot-scope="{ item, index }">
                <media-action
                    v-if="item.files"
                    class="table-action"
                    :class="{'active': openedMediaIndex === index}"
                    :is-any-files-playing="isAnyFilesPlaying(item.files)"
                    @click.native.stop="openMedia(index, $event)"
                ></media-action>
            </template>

            <template slot="pagination">
                <filter-pagination :is-next="isNext"/>
            </template>
        </grid-table>

        <audio-player
            v-show="audioURL"
            :file="audioURL"
            @play="isPlayingNow = true"
            @close="closePlayer"
        ></audio-player>

        <media-select
            ref="media-select"
            v-show="isMediaSelectOpened"
            :files="mediaFiles"
            :currently-playing="currentlyPlaying"
            @play="play"
            @close="closeMedia"
        >
        </media-select>
    </section>
</template>

<script>
   import { mapActions, mapState } from 'vuex';
    // import loader from '@/components/utils/loader.vue';
    import convertQuery from '@/utils/loadScripts';
    import sortFilterMixin from '@/mixins/filters/sortFilterMixin';
    import playMediaMixin from '@/mixins/media/playMediaMixin';
    import showMediaMixin from '@/mixins/media/showMediaMixin';
    import agentCallHeaders from './agentCallHeaders';
    import GridTable from '../utils/grid-table.vue';
    import FilterFields from '../filters/filter-table-fields.vue';
    import FilterPagination from '../filters/filter-pagination.vue';
    import MediaAction from '../utils/grid-media-action.vue';

    export default {
        name: 'the-agents-item-calls',
        components: {
            // loader,
            GridTable,
            FilterFields,
            FilterPagination,
            MediaAction,
        },
        mixins: [
            sortFilterMixin,
            playMediaMixin,
            showMediaMixin,
        ],
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
        data() {
            return {
                headers: agentCallHeaders,
                isNext: false,
                isLoading: false,
                autorefresh: null,
            };
        },
        destroyed() {
            clearInterval(this.autorefresh);
        },
        computed: {
            ...mapState('agentCalls', {
                data: (state) => state.dataList,
            }),
            timer: () => +localStorage.getItem('autorefresh'),
        },
        methods: {
            ...mapActions('agentCalls', {
                loadDataList: 'FETCH_LIST',
            }),
            async loadList() {
                this.isLoading = true;
                const params = this.getQueryParams();
                params.agentId = this.$route.params.id;
                try {
                    this.isNext = await this.loadDataList(params);
                } catch {
                } finally {
                    this.isLoading = false;
                }
            },
            async loadListTick() {
                const params = this.getQueryParams();
                params.agentId = this.$route.params.id;
                try {
                    this.isNext = await this.loadDataList(params);
                } catch {
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
.table-action {
    margin-left: (20px);

    &:first-child {
        margin-left: 0;
    }
}
.media-select {
    position: absolute;
    right: 28px;
  }
  .calls-main {
    position: relative;
  }
</style>
