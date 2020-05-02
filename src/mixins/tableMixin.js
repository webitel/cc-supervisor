import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue';
import _ from 'lodash';

export default {
    components: {
      Vuetable,
      VuetablePagination,
    },

    data() {
      return {
        perPage: 10,
        data: [],
      };
    },

    watch: {
      data() {
        this.$refs.vuetable.refresh();
      },
    },

    methods: {
      onPaginationData(paginationData) {
        this.$refs.pagination.setPaginationData(paginationData);
      },
      onChangePage(page) {
        this.$refs.vuetable.changePage(page);
      },
      dataManager(sortOrder, pagination) {
        if (this.data.length < 1) return;

        let local = this.data;

        // sortOrder can be empty, so we have to check for that as well
        if (sortOrder.length > 0) {
          console.log('orderBy:', sortOrder[0].sortField, sortOrder[0].direction);
          local = _.orderBy(
            local,
            sortOrder[0].sortField,
            sortOrder[0].direction,
          );
        }

        // eslint-disable-next-line no-param-reassign
        pagination = this.$refs.vuetable.makePagination(
          local.length,
          this.perPage,
        );
        console.log('pagination:', pagination);
        const from = pagination.from - 1;
        const to = from + this.perPage;

        // eslint-disable-next-line consistent-return
        return {
          pagination,
          data: _.slice(local, from, to),
        };
      },
      onActionClicked(action, data) {
        console.log('slot actions: on-click', data.name);
      },
    },
  };
