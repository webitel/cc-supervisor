export default {
  methods: {
    tableActionsHandler(eventName) {
      switch (eventName) {
        case 'refresh':
          this.refreshList();
          break;
        case 'columnSelect':
          this.openColumnSelect();
          break;
        case 'filterReset':
          this.resetFilters();
          break;
        default:
      }
    },

    refreshList() {
      this.initializeList();
    },

    openColumnSelect() {
      this.isFilterFieldsOpened = true;
    },

    resetFilters() {
      this.$router.replace({ query: null });
    },
  },
};
