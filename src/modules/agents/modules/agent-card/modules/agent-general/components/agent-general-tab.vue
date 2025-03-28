<template>
  <section class="agent-general-tab">
    <info-form :namespace="agentFormNamespace"></info-form>
    <status-table :namespace="statusTableNamespace"></status-table>
  </section>
</template>

<script>
import InfoForm from './agent-info-form.vue';
import StatusTable from './agent-pause-cause-table.vue';

export default {
  name: 'AgentGeneralTab',
  components: { InfoForm, StatusTable },
  props: {
    namespace: {
      type: String,
      required: true,
    },
  },
  computed: {
    agentFormNamespace() {
      return `${this.namespace}/agentEdit`;
    },
    statusTableNamespace() {
      return `${this.namespace}/pauseCause`;
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@webitel/ui-sdk/src/css/main' as *;

.agent-general-tab {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: var(--spacing-sm);
  min-height: 0;
  margin-top: var(--spacing-sm);

  @media (#{$media} and #{$media-width-sm}) {
    grid-template-columns: 1fr;
  }
}
</style>
