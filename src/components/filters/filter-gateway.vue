<template>
  <wt-select
    v-model="value"
    :label="$t('filters.gateway')"
    :internal-search="!apiMode"
    :track-by="trackBy"
    :search="fetch"
    :close-on-select="false"
    multiple
    @reset="setQueryArray({ value, filterQuery, queriedProp })"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
  ></wt-select>
</template>

<script>
import apiFilterMixin from '../../mixins/filters/apiFilterMixin';
import { getGateways, getGatewaysByIds } from '../../api/filters/gatewayFilter';

export default {
  name: 'filter-gateway',
  mixins: [apiFilterMixin],

  data: () => ({
    filterQuery: 'gatewayIds',
  }),

  methods: {
    fetch: getGateways,
    fetchSelected: getGatewaysByIds,
  },
};
</script>

<style scoped>

</style>
