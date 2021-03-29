<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.queueType')"
    :track-by="storedProp"
    :multiple="multiple"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import enumFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/enumFilterMixin';
import { QueueType } from 'webitel-sdk/esm2015/enums';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';

export default {
  name: 'filter-queue-type',
  mixins: [enumFilterMixin, filterStoreMappingMixin],
  data: () => ({
    filterQuery: 'queue-type',
    filterStoreProperty: 'queueType',
  }),
  computed: {
    options() {
      return Object.keys(QueueType)
        // eslint-disable-next-line no-restricted-globals
        .filter((key) => isNaN(+key))
        .map((key) => ({
          name: key,
          value: QueueType[key],
        }));
    },
  },
};
</script>

<style scoped>

</style>
