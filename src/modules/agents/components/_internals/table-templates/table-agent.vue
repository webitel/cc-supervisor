<template>
  <div class="table-agent">
    <span class="name-link" @click="openAgentView(item.agentId)">
      {{ item.name }}
    </span>
  </div>
</template>

<script>
export default {
	name: 'TableAgentStatus',
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	methods: {
		openAgentView(agentId) {
			this.$router.push({
				name: 'agents-card',
				params: {
					id: agentId,
				},
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.name-link {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
