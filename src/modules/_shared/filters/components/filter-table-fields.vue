<template>
  <column-select
    :value="headers"
    @change="change"
    @close="close"
  ></column-select>
</template>

<script>
import baseFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/baseFilterMixin/baseFilterMixin';
import ColumnSelect from '../../../../app/components/utils/table-column-select.vue';

export default {
  name: 'filter-table-fields',
  mixins: [baseFilterMixin],
  components: {
    ColumnSelect,
  },
  props: {
    entity: {
      type: String,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    filterQuery: 'fields',
    storedProp: 'value',
  }),

  model: {
    prop: 'headers',
    event: 'change',
  },

  methods: {
    change(headers) {
      this.setValue(headers);
      this.close();
    },

    close() {
      this.$emit('close');
    },

    // overrides baseFilterMixin method
    restore({ filterQuery }) {
      const queryValue = this.getValueFromQuery({ filterQuery });
      const storageValue = this.getFromLocalStorage({ filterQuery });
      if (!queryValue && storageValue) {
        this.setValueToQuery({
          filterQuery,
          value: storageValue,
          storedProp: this.storedProp,
        });
      }
      if (queryValue || storageValue) {
        this.restoreValue(queryValue || storageValue);
      }
    },

    restoreValue(value) {
      const headers = this.headers.map((header) => ({
        ...header,
        show: !!value.includes(header.value),
      }));
      this.$emit('change', headers);
    },

    setValue(headers) {
      const value = headers.filter((item) => item.show);
      const params = {
        filterQuery: this.filterQuery,
        value,
        storedProp: this.storedProp,
      };
      this.setValueToQuery(params);
      this.setToLocalStorage(params);
      this.$emit('change', headers);
    },

    getFromLocalStorage({ filterQuery }) {
      const value = localStorage.getItem(`${this.entity}-${filterQuery}`);
      return value ? value.split(',').map((item) => ({ value: item })) : '';
    },

    // copy-pasted params from "setValueArrayToQuery method
    // for easier future refactors, if method should be abstract
    setToLocalStorage({
                        filterQuery,
                        value,
                        storedProp = 'id',
                      }) {
      const filter = value.map((item) => item[storedProp]);
      localStorage.setItem(`${this.entity}-${filterQuery}`, filter);
    },
  },
};
</script>

<style scoped>

</style>
