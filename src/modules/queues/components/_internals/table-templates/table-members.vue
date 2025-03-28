<template>
  <div class="table-members">
    {{ item.members.processing }} /
    <strong
      class="table-members__waiting-count"
      :class="membersLoadRatioClass"
    >{{ item.members.waiting }}</strong>
  </div>
</template>

<script>
export default {
  name: 'TableMembers',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    membersLoadRatioClass() {
      return (!this.item.members.waiting || (this.item.members.processing / this.item.members.waiting > 0.5)) ? 'low' : 'high';
    },
  },
};
</script>

<style lang="scss" scoped>
.table-members__waiting-count {
  font-weight: normal;

  &.high {
    color: var(--error-color);
  }

  &.low {
    color: var(--success-color);
  }
}
</style>
