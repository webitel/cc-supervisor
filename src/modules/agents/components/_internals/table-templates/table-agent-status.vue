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
      // Show offline cause only for offline agents
      if (this.item.status === AgentStatus.Offline && this.item.pauseCause) {
        return this.translatePauseCause(this.item.pauseCause);
      }

      return this.$t(`packages.agentStatus.${snakeToCamel(this.item.status)}`);
    },
  },
  methods: {
    // Translate offline pause cause
    translatePauseCause(statusComment) {
      const reasonParts = statusComment.replace('system/', '').split('/');

      // Translate each part
      const translatedParts = reasonParts.map((part) => {
        const key = `packages.pauseCauses.${part}`;
        return this.$t(key);
      });

      // Get the prefix
      const prefix = this.$t('packages.pauseCauses.combinationPrefix');

      return prefix + translatedParts.join('/');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
