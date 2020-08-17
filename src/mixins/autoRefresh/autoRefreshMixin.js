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
      const timer = +localStorage.getItem('auto-refresh');
      this.autoRefresh = setInterval(this.loadList, timer);
    },
  },
};
