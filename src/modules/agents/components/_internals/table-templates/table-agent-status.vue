<template>
  <wt-indicator
    :color="statusColor"
    :text="statusText"
  ></wt-indicator>
</template>

<script>
import { AgentStatus } from 'webitel-sdk';

export default {
  name: 'table-agent-status',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    statusColor() {
      switch (this.item.status) {
        case AgentStatus.Online: return 'success';
        case AgentStatus.Offline: return 'danger';
       default: return 'primary';
      }
    },
    statusText() {
      return this.item.pauseCause || this.item.status;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
