<template>
  <div v-if="item.teams">
    {{ item.teams[0].name }}
    <span
      v-if="item.teams.length > 1"
      class="table-badge"
    >+ {{ item.teams.length - 1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'table-agent-teams',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
