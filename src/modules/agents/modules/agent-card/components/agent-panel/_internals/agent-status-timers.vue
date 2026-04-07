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
  gap: var(--spacing-xs);

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
