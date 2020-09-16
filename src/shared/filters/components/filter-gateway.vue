<template>
  <wt-select
    v-model="value"
    :label="$t('filters.gateway')"
    :track-by="trackBy"
    :search="fetch"
    :close-on-select="false"
    :internal-search="false"
    multiple
    @reset="setValueArrayToQuery({ value, filterQuery, storedProp })"
    @closed="setValueArrayToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import apiFilterMixin from '../mixins/apiFilterMixin';
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
