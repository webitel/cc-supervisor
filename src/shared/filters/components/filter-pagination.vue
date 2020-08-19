<template>
  <wt-pagination
    v-model="size"
    :next="isNext"
    :prev="isPrev"
    debounce
    @next="next"
    @prev="prev"
    @change="sizeChange"
  ></wt-pagination>
</template>

<script>
import baseFilterMixin from '../mixins/baseFilterMixin/baseFilterMixin';

export default {
  name: 'filter-pagination',
  mixins: [baseFilterMixin],

  props: {
    isNext: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    page: '1',
    size: '10',
  }),

  computed: {
    isPrev() {
      return +this.page > 1;
    },
  },

  methods: {
    restore() {
      this.restorePage();
      this.restoreSize();
    },

    restorePage() {
      this.page = this.getValueFromQuery({ filterQuery: 'page' }) || this.page;
    },

    restoreSize() {
      this.size = this.getValueFromQuery({ filterQuery: 'size' }) || this.size;
    },

    next() {
      this.$emit('input');
      const value = `${+this.page + 1}`;
      this.page = value;
      this.setValueToQuery({
        filterQuery: 'page',
        value,
      });
    },

    prev() {
      this.$emit('input');
      const value = `${+this.page - 1}`;
      this.page = value;
      this.setValueToQuery({
        filterQuery: 'page',
        value,
      });
    },

    sizeChange(value) {
      this.$emit('input');
      this.setValueToQuery({
        filterQuery: 'size',
        value,
      });
    },
  },
};
</script>

<style scoped>

</style>
