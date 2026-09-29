<template>
  <section class="agent-general-tab">
    <info-form :namespace="agentFormNamespace"></info-form>
    <status-table></status-table>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import InfoForm from './agent-info-form.vue';
import StatusTable from './agent-pause-cause-table.vue';

const props = defineProps<{
	namespace: string;
}>();

const agentFormNamespace = computed(() => `${props.namespace}/agentEdit`);
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
