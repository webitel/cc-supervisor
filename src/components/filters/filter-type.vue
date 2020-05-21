<template>
  <multiselect
    v-model="value"
    :options="options"
    :label="'Queue Type'"
    :track-by="trackBy"
    :api-mode="apiMode"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
    :multiple="true"
    :closeOnSelect="false"
  ></multiselect>
</template>

<script>
  import enumFilterMixin from '@/mixins/filters/enumFilterMixin';
  import TypeOptions from '@/api/filter-getters/TypeOptions.enum';

  export default {
    name: 'filter-type',
    mixins: [enumFilterMixin],

    data: () => ({
      options: TypeOptions,
      filterQuery: 'type',
    }),
  };
</script>

<style scoped>

</style>
