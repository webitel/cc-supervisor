<template>
  <div>
    <wt-icon :icon="directionIcon" :color="directionIconColor"></wt-icon>
  </div>
</template>

<script>
import { CallDirection } from 'webitel-sdk';

export default {
  name: 'table-direction',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    directionIcon() {
      if (this.item.direction === CallDirection.Inbound) return 'call-inbound';
      if (this.item.direction === CallDirection.Outbound) return 'call-outbound';
      return '';
    },
    directionIconColor() {
      switch (this.directionIcon) {
        case 'call-inbound': return 'accent';
        case 'call-outbound': return 'success';
        default: return '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
