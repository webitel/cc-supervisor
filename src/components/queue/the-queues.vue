<template>
    <div>
        <header class="object-header">
            <div class="object-header__title-wrap">
                <h2 class="object-title">Queue</h2>
            </div>
            <div class="history-heading__actions-wrap">
                <search class="search-margin"
                        v-model="search"
                        @filterData="setSearch"
                ></search>
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
                class="col-md-2 col-lg-2 col-xl-2"
            >
                <filter-queue/>
            </div>
            <div
                class="col-md-2 col-lg-2 col-xl-2"
            >
                <filter-team/>
            </div>
            <div
                class="col-md-2 col-lg-2 col-xl-2"
            >
                <filter-type/>
            </div>
        </div>
        <section class="object-content">
            <loader v-show="!isLoaded"></loader>

            <vuetable ref="vuetable"
                    v-show="isLoaded"
                    :api-mode="false"
                    :fields="fields"
                    :per-page="3"
                    :data="visibleList"
                    :data-manager="dataManager"
                    pagination-path="pagination"
                    @vuetable:pagination-data="onPaginationData"
            >
            </vuetable>
        </section>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import loader from '@/components/utils/loader.vue';
import tableMixin from '@/mixins/tableMixin';
import Vuetable from 'vuetable-2';
import search from '@/components/utils/search.vue';
import convertQuery from '@/utils/loadScripts';
import downloadCSVMixin from '@/mixins/downloadCSV/downloadCSVMixin';
import { queueFields } from '@/api/queues/queues';
import FilterType from './queue-filters/filter-type.vue';
import FilterTeam from './queue-filters/filter-queue.vue';
import FilterQueue from './queue-filters/filter-team.vue';
import Btn from '../utils/btn.vue';

export default {
    name: 'the-queues',
    components: {
        search,
        loader,
        Vuetable,
        FilterType,
        FilterTeam,
        FilterQueue,
        Btn,
    },
    mixins: [tableMixin, downloadCSVMixin],
    async mounted() {
        this.isLoaded = false;
        await this.getQueues();
        this.isLoaded = true;
    },
    data() {
        return {
            // params: {},
            isLoaded: false,
            search: '',
            name: '',
            team: [],
            id: [],
            type: [],
            fields: [
                { name: 'name', title: this.$t('pages.queue.columns.name'), sortField: 'name' },
                { name: 'team_name', title: this.$t('pages.queue.columns.team'), sortField: 'team' },
                { name: 'inbound_calls', title: this.$t('pages.queue.columns.inbound_calls'), sortField: 'inbound_calls' },
                { name: 'answer', title: this.$t('pages.queue.columns.answer'), sortField: 'answer' },
                { name: 'abandone', title: this.$t('pages.queue.columns.abandone'), sortField: 'abandone' },
                { name: 'talk', title: this.$t('pages.queue.columns.talk'), sortField: 'talk' },
                { name: 'hold', title: this.$t('pages.queue.columns.hold'), sortField: 'hold' },
                { name: 'transfer', title: this.$t('pages.queue.columns.transfer'), sortField: 'transfer' },
                { name: 'wrap_up_time', title: this.$t('pages.queue.columns.wrap_up_time'), sortField: 'wrap_up_time' },
                { name: 'asa', title: this.$t('pages.queue.columns.asa'), sortField: 'asa' },
                { name: 'awt', title: this.$t('pages.queue.columns.awt'), sortField: 'awt' },
                { name: 'aht', title: this.$t('pages.queue.columns.aht'), sortField: 'aht' },
            ],
        };
    },
    watch: {
        // TODO
        // params: {
        //     async handler(val) {
        //         this.getQueues(val);
        //     },
        //     immediate: true,
        // },
        '$route.query': {
            handler() {
                this.setQuery();
            },
            immediate: true,
        },
    },
    computed: {
        ...mapGetters('queues', {
            queueList: 'GET_QUEUES',
        }),
        visibleList() {
            let output = this.queueList;
            if (this.name) {
                output = this.queueList.filter((item) => item.name.toLowerCase()
                .includes(this.name.toLowerCase()));
            }
            if (this.team.length) {
                output = output.filter((item) => this.team.indexOf(item.team.id) !== -1);
            }
            if (this.id.length) {
                output = output.filter((item) => this.id.indexOf(item.id) !== -1);
            }
            return output;
        },
    },
    methods: {
        ...mapActions('queues', {
            getQueues: 'FETCH_LIST',
        }),
        setSearch(value) {
            this.name = value;
        },
        setQuery() {
            const { query } = this.$route;
            const q = convertQuery(query);
            Object.keys(query).forEach((key) => {
                this[key] = q[key] || [];
            });
            // this.setParams({
            // })
        },
        // setParams(query) {
        // },
        download() {
            this.downloadCSV({
                fields: queueFields,
                items: this.visibleList,
            });
        },
    },
};
</script>

<style scoped>

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
