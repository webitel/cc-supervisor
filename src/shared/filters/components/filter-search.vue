<template>
  <wt-search-bar
    v-model="value"
    debounce
    @search="setQueryValue({ filterQuery, value })"
  />
</template>

<script>
  import valueFilterMixin from '../mixins/valueFilterMixin';

  export default {
    name: 'filter-search',
    mixins: [valueFilterMixin],

    data: () => ({
      value: '',
      filterQuery: 'search',
    }),

    methods: {
      restoreValue({ value }) {
        this.value = value;
      },
    },
  };
</script>

<style scoped>

</style>
