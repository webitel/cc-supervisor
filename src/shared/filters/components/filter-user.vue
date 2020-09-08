<template>
  <wt-select
    v-model="value"
    :label="$t('filters.user')"
    :track-by="trackBy"
    :search="fetch"
    :internal-search="false"
    :close-on-select="false"
    multiple
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
  import apiFilterMixin from '../mixins/apiFilterMixin';
  import { getUsers, getUsersByIds } from '../api/userFilter';

  export default {
    name: 'filter-user',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'user',
    }),

    methods: {
      fetch: getUsers,
      fetchSelected: getUsersByIds,
    },
  };
</script>

<style scoped>

</style>
