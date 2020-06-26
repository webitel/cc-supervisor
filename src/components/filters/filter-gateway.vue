<template>
  <multiselect
    v-model="value"
    :fetch-method="fetch"
    :label="$t('filters.gateway')"
    :api-mode="apiMode"
    :track-by="trackBy"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
    :multiple="true"
    :closeOnSelect="false"
  ></multiselect>
</template>

<script>
  import apiFilterMixin from '@/mixins/filters/apiFilterMixin';
  import fetchGateways from '@/api/filter-getters/gatewayFilter';

  export default {
    name: 'filter-gateway',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'gatewayIds',
    }),

    methods: {
      fetch: fetchGateways,
    },
  };
</script>

<style scoped>

</style>
