<template>
  <wt-select
    v-model="value"
    :label="$t('filters.user')"
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
  import apiFilterMixin from '../mixins/apiFilterMixin';
  import { getUsers, getUsersByIds } from '../api/userFilter';

  export default {
    name: 'filter-user',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'userIds',
    }),

    methods: {
      fetch: getUsers,
      fetchSelected: getUsersByIds,
    },
  };
</script>

<style scoped>

</style>
