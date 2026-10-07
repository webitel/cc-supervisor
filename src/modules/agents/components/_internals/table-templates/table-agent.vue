<template>
  <div class="table-agent">
    <span class="name-link" @click="openAgentView(item.agentId)">
      {{ item.name }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

defineProps<{
	item: {
		agentId?: string | number;
		name?: string;
	};
}>();

const router = useRouter();

const openAgentView = (agentId: string | number) =>
	router.push({
		name: 'agents-card',
		params: {
			id: agentId,
		},
	});
</script>

<style lang="scss" scoped>
.name-link {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
