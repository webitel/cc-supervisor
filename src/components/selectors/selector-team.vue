<template>
  <multiselect-row
    v-model="value"
    :options="options"
    :label="'Team'"
    :api-mode="false"
    :track-by="'id'"
    @closed="setValues"
    :multiple="true"
    :closeOnSelect="false"
  ></multiselect-row>
</template>

<script>
  import multiselectRow from '../utils/multiselect-row.vue';

  export default {
    name: 'selector-team',
    components: {
      multiselectRow,
    },
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
        this.$emit('setTeams', { agentId: this.agentId, value: this.value });
      },
    },
  };
</script>

<style scoped>

</style>
