<template>
  <wt-select
    v-model="value"
    :options="options"
    :label="$t('filters.queueType')"
    :track-by="trackBy"
    multiple
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import { CallActions } from 'webitel-sdk';
// import { QueueType } from 'webitel-sdk/types/enums/queues/queue-type.enum';
import enumFilterMixin from '@webitel/ui-sdk/src/mixins/dataFilterMixins/enumFilterMixin';
import TypeOptions from '../api/TypeOptions.enum';

export default {
  name: 'filter-queue-type',
  mixins: [enumFilterMixin],
  data: () => ({
    filterQuery: 'queue-type',
    foo: 'bar',
  }),
  computed: {
    options() {
      return Object.keys(QueueType).map((key) => ({
        name: key,
        value: QueueType[key],
      }));
    },
  },
};
</script>

<style scoped>

</style>
