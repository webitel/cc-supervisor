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
	components: {
		InfoForm,
		StatusTable,
	},
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

<style scoped>

.agent-general-tab {
  display: flex;
  gap: var(--spacing-sm);
  min-height: 0;
}

.agent-info-form-wrapper {
	flex: 1;
	min-height: 0;
	min-width: 0;
}

.agent-pause-cause-table {
	flex: 2;
	min-height: 0;
	min-width: 0;
}
</style>
