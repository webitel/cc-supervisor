<template>
  <wt-select
    v-model="value"
    :label="$t('filters.gateway')"
    :track-by="trackBy"
    :search="fetch"
    :close-on-select="false"
    :internal-search="false"
    multiple
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import apiFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/apiFilterMixin';
import { getGateways, getGatewaysByIds } from '../api/gatewayFilter';

export default {
  name: 'filter-gateway',
  mixins: [apiFilterMixin],

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
