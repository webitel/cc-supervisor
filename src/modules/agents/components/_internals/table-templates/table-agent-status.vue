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
      const { status, pauseCause } = this.item;

      // Show raw pause cause for paused agents
      if (status === AgentStatus.Pause && pauseCause) {
        return pauseCause;
      }

      // Show translated pause cause for offline agents
      if (status === AgentStatus.Offline && pauseCause) {
        return this.translatePauseCause(pauseCause);
      }

      return this.$t(`packages.agentStatus.${snakeToCamel(status)}`);
    },
  },
  methods: {
    // Translate offline pause cause
    translatePauseCause(statusComment) {
      const reasonParts = statusComment.replace('system/', '').split('/');
      const translatedParts = reasonParts.map((part) =>
        this.$t(`packages.pauseCauses.${part}`)
      );
      const prefix = this.$t('packages.pauseCauses.combinationPrefix');

      return prefix + translatedParts.join('/');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
