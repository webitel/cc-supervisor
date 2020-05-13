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
        </div>
        <section class="object-content">
            <loader v-show="isLoading"></loader>
        </section>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import loader from '@/components/utils/loader.vue';
import convertQuery from '@/utils/loadScripts';
import downloadCSVMixin from '@/mixins/downloadCSV/downloadCSVMixin';
import sortFilterMixin from '@/mixins/filters/sortFilterMixin';
import FilterSearch from '../filters/filter-search.vue';
import Btn from '../utils/btn.vue';
import agentHeaders from './agentHeaders';

export default {
    name: 'the-agents',
    components: {
        FilterSearch,
        loader,
        Btn,
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
                fields: [],
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
