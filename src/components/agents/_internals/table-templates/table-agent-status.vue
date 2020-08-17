<template>
  <wt-status-select
    :status="item.status"
    :status-duration="item.statusDuration"
    @change="changeStatus"
  ></wt-status-select>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'table-agent-status',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('agents', {
      updateStatus: 'UPDATE_AGENT_STATUS',
    }),

    changeStatus(value) {
      this.updateStatus({
        agentId: this.item.agentId,
        status: value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wt-status-select {
  max-width: 150px;
}
</style>
