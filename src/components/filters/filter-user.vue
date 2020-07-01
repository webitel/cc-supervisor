<template>
  <multiselect
    v-model="value"
    :fetch-method="fetch"
    :label="$t('filters.user')"
    :api-mode="apiMode"
    :track-by="trackBy"
    @closed="setQueryArray({ value, filterQuery, queriedProp })"
    :multiple="true"
    :closeOnSelect="false"
  ></multiselect>
</template>

<script>
  import apiFilterMixin from '@/mixins/filters/apiFilterMixin';
  import fetchUsers from '@/api/filter-getters/userFilter';

  export default {
    name: 'filter-user',
    mixins: [apiFilterMixin],

    data: () => ({
      filterQuery: 'userIds',
    }),

    methods: {
      fetch: fetchUsers,
    },
  };
</script>

<style scoped>

</style>
