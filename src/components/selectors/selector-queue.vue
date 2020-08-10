<template>
  <wt-select
    v-model="value"
    :options="options"
    :placeholder="$t('filters.queue')"
    multiple
    readonly
    @closed="setValues"
  ></wt-select>
</template>

<script>
  export default {
    name: 'selector-queue',
    props: {
      agentId: {
        required: true,
      },
      options: {
        type: Array,
        required: true,
      },
      values: {
        type: Array,
        required: true,
      },
    },

     data() {
      return {
        value: this.values,
      };
    },

    methods: {
      setValues() {
        this.$emit('setQueues', { agentId: this.agentId, value: this.value });
      },
    },
  };
</script>

<style scoped>

</style>
