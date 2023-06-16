<template>
  <wt-page-wrapper>
    <template v-slot:header>
      <wt-headline>
        <template v-slot:title>
          {{ $t('pages.activeCall.title') }}
        </template>
      </wt-headline>
    </template>

    <template v-slot:actions-panel>
      <active-calls-filters :namespace="filtersNamespace"/>
    </template>

    <template v-slot:main>
      <section class="main-section-wrapper">
        <wt-loader v-show="isLoading"></wt-loader>
        <wt-dummy
          v-if="dummyValue && !isLoading"
          :src="dummyValue.src"
          :locale="dummyValue.locale"
          :size="300"
          class="main-section-wrapper__dummy"
        ></wt-dummy>
        <div class="table-wrapper" v-show="!isLoading && !dummyValue">
          <wt-table-actions
            class="table-wrapper__actions-wrapper"
            :icons="['refresh']"
            @input="tableActionsHandler"
          >
            <filter-fields
              v-model="headers"
              entity="active-calls"
            ></filter-fields>
          </wt-table-actions>
          <wt-table
            :headers="headers"
            :data="dataList"
            :grid-actions="false"
            :selectable="false"
            sortable
            @sort="sort"
          >
            <template v-slot:direction="{ item }">
              <table-direction :item="item"/>
            </template>
            <template v-slot:from="{ item }">
              <div v-if="item.from">
                {{ item.from.number }}
              </div>
            </template>
            <template v-slot:to="{ item }">
              <div v-if="item.to">
                {{ item.to.number }}
              </div>
            </template>
            <template v-slot:agent="{ item }">
              <div v-if="item.agent">
                {{ item.agent.name }}
              </div>
            </template>
            <template v-slot:queue="{ item }">
              <div v-if="item.queue">
                {{ item.queue.name }}
              </div>
            </template>
            <template v-slot:user="{ item }">
              <div v-if="item.user">
                {{ item.user.name }}
              </div>
            </template>
            <template v-slot:state="{ item }">
              <table-active-call-state :item="item" @attach-call="attachCall"/>
            </template>
          </wt-table>
          <filter-pagination :is-next="isNext"/>
        </div>
      </section>
    </template>
  </wt-page-wrapper>
</template>

<script>
import sortFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/sortFilterMixin';
import { mapActions } from 'vuex';
import tablePageMixin from '../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import ActiveCallsFilters from '../modules/filters/components/active-calls-filters.vue';
import TableActiveCallState from './_internals/table-templates/table-active-call-state.vue';
import TableDirection from './_internals/table-templates/table-direction.vue';
import Dummy from '../assets/sv-dummy.svg';
import DummyAfterSearch from '../assets/sv-dummy-after-search.svg';

export default {
  name: 'the-active-calls',
  mixins: [
    tablePageMixin,
    sortFilterMixin,
  ],
  components: {
    FilterFields,
    FilterPagination,
    TableDirection,
    TableActiveCallState,
    ActiveCallsFilters,
  },
  data: () => ({
    namespace: 'activeCalls',
  }),
  computed: {
    dummyValue() {
      if (!this.dataList.length) {
        if (Object.values(this.$route.query).some((query) => query.length)) {
          return {
            src: DummyAfterSearch,
            locale: this.$t('pages.activeCall.empty.resultSearch'),
          };
        }
        return {
          src: Dummy,
          locale: this.$t('pages.activeCall.empty.workspace'),
        };
      }
      return '';
    },
  },
  methods: {
    ...mapActions('call', {
      attachToCall: 'ATTACH_TO_CALL',
      openWindow: 'EAVESDROP_OPEN_WINDOW',
    }),

    async attachCall(id) {
      await this.attachToCall({ id });
      this.openWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
.main-section-wrapper__dummy {
  min-height: 100%;
}
</style>
