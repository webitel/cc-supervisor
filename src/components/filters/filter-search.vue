<template>
  <search
    v-model="value"
    @search="setQueryValue({ filterQuery, value })"
  />
</template>

<script>
  import valueFilterMixin from '@/mixins/filters/valueFilterMixin';
  import Search from '../utils/search-input.vue';

  export default {
    name: 'filter-search',
    mixins: [valueFilterMixin],
    components: {
      Search,
    },

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
