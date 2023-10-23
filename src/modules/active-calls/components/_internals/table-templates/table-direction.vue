<template>
  <wt-icon
    :icon="directionIcon"
    :color="directionIconColor"
  ></wt-icon>
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
  data: () => ({
    CallDirection,
  }),
  computed: {
    directionIcon() {
      return this.item.direction === CallDirection.Outbound
        ? 'call-outbound' : 'call-inbound';
    },
    directionIconColor() {
      return this.item.direction === CallDirection.Outbound
        ? 'success' : 'primary';
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
