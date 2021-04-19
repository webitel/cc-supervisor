<template>
  <section class="agent-general-tab">
    <info-form :namespace="namespace"></info-form>
    <status-table :namespace="statusTableNamespace"></status-table>
  </section>
</template>

<script>
import InfoForm from './agent-info-form.vue';
import StatusTable from './agent-status-table.vue';

export default {
  name: 'agent-general-tab',
  components: { InfoForm, StatusTable },
  props: {
    namespace: {
      type: String,
      required: true,
    },
  },
  computed: {
    statusTableNamespace() {
      return `${this.namespace}/agentGeneral`;
    },
  },
};
</script>

<style lang="scss" scoped>
.agent-general-tab {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: var(--component-spacing);
  margin-top: var(--component-spacing);

  @media #{$media} and #{$media-width-sm} {
    grid-template-columns: 1fr;
  }
}
</style>
