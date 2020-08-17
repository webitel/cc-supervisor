<template>
  <div>
    <span class="name-link" @click="openAgentView(item.agentId)">
      {{ item.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'table-agent-status',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openAgentView(agentId) {
      this.$router.push({
        name: 'agent-page',
        params: { id: agentId },
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
