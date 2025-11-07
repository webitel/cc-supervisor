<template>
  <wt-page-wrapper :actions-panel="showActionsPanel">
    <template #header>
      <wt-headline>
        <template #title>
          {{ $t('pages.activeCall.title') }}
        </template>
      </wt-headline>
    </template>

    <template #actions-panel>
      <active-calls-filters :namespace="filtersNamespace"/>
    </template>

    <template #main>
      <section class="main-section-wrapper">
        <wt-loader v-show="isLoading"/>
        <wt-dummy
          v-if="dummyValue && !isLoading"
          :src="dummyValue.src"
          :text="dummyValue.text"
          class="main-section-wrapper__dummy"
        ></wt-dummy>
        <div v-show="!isLoading && !dummyValue" class="table-wrapper">
          <wt-table-actions
            class="table-wrapper__actions-wrapper"
            :icons="['settings', 'refresh']"
            @input="inputTableAction"
          >
            <filter-fields
              :headers="headers"
              entity="active-calls"
              @change="setHeaders"
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
            <template #direction="{ item }">
              <table-direction :item="item"/>
            </template>
            <template #from="{ item }">
              <div v-if="item.from">
                {{ item.from.number }}
              </div>
            </template>
            <template #to="{ item }">
              <div v-if="item.to">
                {{ item.to.number }}
              </div>
            </template>
            <template #agent="{ item }">
              <div v-if="item.agent">
                {{ item.agent.name }}
              </div>
            </template>
            <template #queue="{ item }">
              <div v-if="item.queue">
                {{ item.queue.name }}
              </div>
            </template>
            <template #user="{ item }">
              <div v-if="item.user">
                {{ item.user.name }}
              </div>
            </template>
            <template #state="{ item }">
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
import { mapActions, mapGetters } from 'vuex';

import tablePageMixin from '../../../app/mixins/supervisor-workspace/tablePageMixin';
import FilterPagination from '../../_shared/filters/components/filter-pagination.vue';
import FilterFields from '../../_shared/filters/components/filter-table-fields.vue';
import DummyAfterSearchDark from '../assets/sv-dummy-after-search-dark.svg';
import DummyAfterSearchLight from '../assets/sv-dummy-after-search-light.svg';
import DummyDark from '../assets/sv-dummy-dark.svg';
import DummyLight from '../assets/sv-dummy-light.svg';
import ActiveCallsFilters from '../modules/filters/components/active-calls-filters.vue';
import TableActiveCallState from './_internals/table-templates/table-active-call-state.vue';
import TableDirection from './_internals/table-templates/table-direction.vue';

export default {
  name: 'TheActiveCalls',
  components: {
    FilterFields,
    FilterPagination,
    TableDirection,
    TableActiveCallState,
    ActiveCallsFilters,
  },
  mixins: [
    tablePageMixin,
    sortFilterMixin,
  ],
  data: () => ({
    namespace: 'activeCalls',
    showActionsPanel: false,
  }),
  computed: {
    ...mapGetters('appearance', {
      darkMode: 'DARK_MODE',
    }),
    dummyValue() {
      if (!this.dataList.length) {
        if (Object.values(this.$route.query).some((query) => query.length)) {
          return {
            src: this.darkMode ? DummyAfterSearchDark : DummyAfterSearchLight,
            text: this.$t('pages.activeCall.empty.resultSearch'),
          };
        }
        return {
          src: this.darkMode ? DummyDark : DummyLight,
          text: this.$t('pages.activeCall.empty.workspace'),
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

  inputTableAction(event) {
    if(event === 'settings') {
      this.showActionsPanel = !this.showActionsPanel;
      return;
    }
    this.tableActionsHandler(event)
  }
};
</script>

<style lang="scss" scoped>
.main-section-wrapper__dummy {
  min-height: 100%;
}
</style>
