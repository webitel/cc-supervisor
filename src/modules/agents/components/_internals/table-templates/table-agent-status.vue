<template>
  <wt-indicator
    :color="statusColor"
    :text="statusText"
  ></wt-indicator>
</template>

<script>
import { snakeToCamel } from '@webitel/ui-sdk/src/scripts/caseConverters';
import { AgentStatus } from 'webitel-sdk';

export default {
  name: 'TableAgentStatus',
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
        case AgentStatus.Offline: return 'disabled';
        case AgentStatus.BreakOut: return 'secondary';
       default: return 'primary';
      }
    },
    statusText() {
      return this.item.pauseCause || this.$t(`packages.agentStatus.${snakeToCamel(this.item.status)}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
