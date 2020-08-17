<template>
  <div v-if="item.attentions">
    <the-agents-help-popup
      :agent="item"
      :type="item.attentions.type"
      :count="item.attentions.count"
    >
    </the-agents-help-popup>
  </div>
</template>

<script>
import theAgentsHelpPopup from './the-agents-help-popup.vue';

export default {
  name: 'table-agent-attentions',
  components: {
    theAgentsHelpPopup,
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
