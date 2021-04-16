<template>
  <wt-indicator
    :color="statusColor"
    :text="statusText"
  ></wt-indicator>
</template>

<script>
import { AgentStatus, ChannelState } from 'webitel-sdk';
import { snakeToCamel } from '@webitel/ui-sdk/src/scripts/caseConverters';

const successStates = [AgentStatus.Online, ChannelState.Active, ChannelState.Waiting];
const pauseStates = [AgentStatus.Pause, ChannelState.WrapTime];
const dangerStates = [AgentStatus.Offline];

export default {
  name: 'table-agent-state',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    statusColor() {
      if (this.item.state === AgentStatus.BreakOut) {
        return 'break-out';
      }
      if (successStates.includes(this.item.state)) {
        return 'success';
      } if (pauseStates.includes(this.item.state)) {
        return 'primary';
      } if (dangerStates.includes(this.item.state)) {
        return 'danger';
      }
      return 'secondary';
    },
    statusText() {
      return this.item.pauseCause || this.$t(`pages.agentPage.statusHistory.states.${snakeToCamel(this.item.state)}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
