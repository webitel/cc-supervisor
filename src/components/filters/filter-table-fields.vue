<template>
  <column-select
    :value="headers"
    @change="change"
    @close="close"
  ></column-select>
</template>

<script>
  import baseFilterMixin from '../../shared/filters/mixins/baseFilterMixin/baseFilterMixin';
  import ColumnSelect from '../utils/table-column-select.vue';

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
      separator: ',',
      storedProp: 'value',
    }),

    model: {
      prop: 'headers',
      event: 'change',
    },

    methods: {
      // overrides baseFilterMixin method
      restore({ filterQuery }) {
        let value = this.getValueFromQuery({ filterQuery });
        if (!value) {
          // if no value in url, check in localStorage
          value = this.getFromLocalStorage({ filterQuery });
        }
        if (value) {
          // if there's a value, set it to url and to component data
          this.setValueToQuery({ filterQuery, value });
          this.restoreValue(value);
        }
      },

      restoreValue(value) {
        const headers = this.headers.map((header) => ({
          ...header,
          show: !!value.includes(header.value),
        }));
        this.$emit('change', headers);
      },

      change(headers) {
        this.setValue(headers);
        this.close();
      },

      close() {
        this.$emit('close');
      },

      setValue(headers) {
        const value = headers.filter((item) => item.show);
        const params = {
          filterQuery: this.filterQuery,
          value,
          storedProp: this.storedProp,
          separator: this.separator,
        };
        this.setValueArrayToQuery(params);
        this.setToLocalStorage(params);
        this.$emit('change', headers);
      },

      getFromLocalStorage({ filterQuery }) {
          return localStorage.getItem(`${this.entity}-${filterQuery}`);
      },

      // copy-pasted params from "setValueArrayToQuery method
      // for easier future refactors, if method should be abstract
      setToLocalStorage({
                          filterQuery,
                          value,
                          storedProp = 'id',
                          separator = '|',
                        }) {
        const filter = value.map((item) => item[storedProp])
          .join(separator);
        localStorage.setItem(`${this.entity}-${filterQuery}`, filter);
      },
    },
  };
</script>

<style scoped>

</style>
