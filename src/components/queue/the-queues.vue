<template>
    <div>
        <header class="object-header">
            <div class="object-header__title-wrap">
                <h2 class="object-title">{{$t('pages.queue.title')}}</h2>
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
    padding: 15px 28px;
    margin-bottom: 28px;

    background: $content-bg-color;
    border-radius: $border-radius;
    .label {
        color: $label-color;
    }
    .filter-item {
        min-width: calcRem(170px);
        margin-right: calcRem(30px);
    }
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

  .history-filters {
    display: flex;
    align-items: flex-start;
    padding: calcRem(18px) calcRem(28px);
    margin: calcRem(20px) 0;

    &__filters {
      flex: 1 1 auto;
      display: flex;
      flex-wrap: wrap;

      .dt-picker {
        width: 100%;
      }

      .hs-multiselect {
        width: 100%;
      }

      .dt-picker, .hs-multiselect {
        /*margin-right: calcRem(50px);*/
        margin-bottom: calcRem(18px);
      }
    }

    &__controls {
      $icon-w: calcRem(24px);
      $margin-w: calcRem(0px);
      margin: calcRem(30px) 0 0 calcRem(30px);
      flex: 0 0 calc(#{$icon-w} + #{$margin-w});

      .icon-btn {
        margin-left: calcRem(30px);

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  .history-section {
  padding: calcRem(12px) calcRem(28px);
  border-radius: $border-radius;
  background: $content-bg-color;
}
</style>
