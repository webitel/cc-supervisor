<template>
  <wt-datepicker
    :model-value="value"
    :label="$t('reusable.from')"
    show-time
    @update:model-value="handleChange"
  ></wt-datepicker>
</template>

<script>
import baseFilterMixin from '@webitel/ui-sdk/src/modules/QueryFilters/mixins/baseFilterMixin/baseFilterMixin';

export default {
	name: 'FilterFrom',
	mixins: [
		baseFilterMixin,
	],
	data: () => ({
		filterQuery: 'from',
	}),

	methods: {
		handleChange(value) {
			this.setValue({
				filter: this.filterQuery,
				value,
			});
			this.setValueToQuery({
				filterQuery: this.filterQuery,
				value,
			});
		},
		restoreValue(value) {
			this.setValue({
				filter: this.filterQuery,
				value: +value,
			});
		},
	},
};
</script>

<style scoped>

</style>
