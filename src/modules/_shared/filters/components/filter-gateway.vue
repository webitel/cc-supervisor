<template>
  <wt-select
    :value="value"
    :label="$t('filters.gateway')"
    :track-by="storedProp"
    :multiple="multiple"
    :search="fetch"
    :internal-search="false"
    :close-on-select="false"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import apiFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/apiFilterMixin';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';
import { getGateways, getGatewaysByIds } from '../api/gatewayFilter';

export default {
  name: 'filter-gateway',
  mixins: [apiFilterMixin, filterStoreMappingMixin],

  data: () => ({
    filterQuery: 'gateway',
  }),

  methods: {
    fetch: getGateways,
    fetchSelected: getGatewaysByIds,
  },
};
</script>

<style scoped>

</style>
