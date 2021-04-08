<template>
  <wt-select
    :value="value"
    :label="$t('filters.skill')"
    :track-by="storedProp"
    :multiple="multiple"
    :search="fetch"
    :internal-search="false"
    :close-on-select="false"
    v-bind="$attrs"
    @input="setValue({ filter: filterQuery, value: $event })"
    @reset="setValueToQuery({ value, filterQuery, storedProp })"
    @closed="setValueToQuery({ value, filterQuery, storedProp })"
  ></wt-select>
</template>

<script>
import apiFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/apiFilterMixin';
import filterStoreMappingMixin from '../mixins/filterStoreMappingMixin';
import { getSkills, getSkillsByIds } from '../api/skillFilter';

export default {
  name: 'filter-skill',
  mixins: [apiFilterMixin, filterStoreMappingMixin],
  data: () => ({
    filterQuery: 'skill',
  }),
  methods: {
    fetch: getSkills,
    fetchSelected: getSkillsByIds,
  },
};
</script>

<style scoped>

</style>
