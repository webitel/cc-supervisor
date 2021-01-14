<template>
  <div class="table-call-state">
    <wt-icon :icon="callStateIcon" :color="callStateIconColor"></wt-icon>
    {{ callState }}
  </div>
</template>

<script>
import { CallDirection } from 'webitel-sdk';

export default {
  name: 'table-call-state',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    callState() {
      if (this.item.answeredAt) return this.$t('callState.end');
      if (this.item.direction === CallDirection.Inbound) return this.$t('callState.missed');
      if (this.item.direction === CallDirection.Outbound) return this.$t('callState.disconnect');
      return '';
    },
    callStateIcon() {
      if (!this.item.answeredAt) return 'call-disconnect';
      if (this.item.direction === CallDirection.Inbound) return 'call-inbound';
      if (this.item.direction === CallDirection.Outbound) return 'call-outbound';
      return '';
    },
    callStateIconColor() {
      switch (this.callStateIcon) {
        case 'call-disconnect': return 'false';
        case 'call-inbound': return 'accent';
        case 'call-outbound': return 'true';
        default: return '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.table-call-state {
  display: flex;
  align-items: center;

  .wt-icon {
    margin-right: 10px;
  }
}
</style>
