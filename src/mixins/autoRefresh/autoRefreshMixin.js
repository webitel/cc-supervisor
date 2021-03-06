import preventHiddenPageCallsDecorator
  from '@webitel/ui-sdk/src/scripts/preventHiddenPageCallsDecorator';

export default {
  data: () => ({
    autoRefresh: null,
  }),

  destroyed() {
    clearInterval(this.autoRefresh);
  },

  methods: {
    setAutoRefresh() {
      if (this.autoRefresh) clearInterval(this.autoRefresh);
      const timer = +localStorage.getItem('auto-refresh') || 5 * 60 * 1000;
      this.loadList = preventHiddenPageCallsDecorator(this.loadList);
      this.autoRefresh = setInterval(this.loadList, timer);
    },
  },
};
