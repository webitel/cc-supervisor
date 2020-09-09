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
      this.autoRefresh = setInterval(this.loadList, timer);
    },
  },
};
