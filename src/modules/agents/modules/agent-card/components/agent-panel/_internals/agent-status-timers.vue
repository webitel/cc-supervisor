<template>
  <article class="agent-status-timers">
    <wt-indicator
      color="disabled"
      :text="status.offline"
    ></wt-indicator>
    <wt-indicator
      color="primary"
      :text="status.pause"
    ></wt-indicator>
    <wt-indicator
      color="success"
      :text="status.online"
    ></wt-indicator>
  </article>
</template>

<script>
export default {
  name: 'AgentStatusTimers',
  props: {
    status: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.agent-status-timers {
  display: flex;
  align-items: center;

  .wt-indicator:not(:last-child) {
    margin-right: var(--spacing-sm);
  }
}
</style>
