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
  name: 'agent-general-tab',
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
.agent-general-tab {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: var(--component-spacing);
  min-height: 0;
  margin-top: var(--component-spacing);

  @media (#{$media} and #{$media-width-sm}) {
    grid-template-columns: 1fr;
  }
}
</style>
