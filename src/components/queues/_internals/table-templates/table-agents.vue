<template>
  <div class="table-agents">
    <table-status
      class="status__true"
      :text="item.agents.active"
    ></table-status>
    <table-status
      class="status__info"
      :text="item.agents.waiting"
    ></table-status>
  </div>
</template>

<script>
import TableStatus from '../../../utils/table-status.vue';

export default {
  name: 'table-agents',
  components: {
    TableStatus,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.table-agents {
  display: flex;

  .table-status {
    width: 40px;
    &:last-child {
      margin-left: 16px;
    }
  }
}
</style>
