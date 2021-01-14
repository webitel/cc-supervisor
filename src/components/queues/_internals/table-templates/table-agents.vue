<template>
  <div class="table-agents">
    <wt-indicator
      color="success"
      :text="activeCount"
    ></wt-indicator>
    <wt-indicator
      color="primary"
      :text="waitingCount"
    ></wt-indicator>
  </div>
</template>

<script>
export default {
  name: 'table-agents',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    activeCount() {
      return this.item.agents.active || 0;
    },
    waitingCount() {
      return this.item.agents.waiting || 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.table-agents {
  display: flex;

  .wt-indicator {
    width: 40px;
    &:last-child {
      margin-left: 16px;
    }
  }
}
</style>
