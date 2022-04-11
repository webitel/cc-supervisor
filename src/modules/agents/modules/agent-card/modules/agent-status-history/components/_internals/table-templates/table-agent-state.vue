<template>
  <div>
    {{ statusText }}
  </div>
</template>

<script>
import { snakeToCamel } from '@webitel/ui-sdk/src/scripts/caseConverters';

export default {
  name: 'table-agent-state',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    statusText() {
      return this.item.payload || this.item.pauseCause || this.$t(`pages.card.statusHistory.states.${snakeToCamel(this.item.state)}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
