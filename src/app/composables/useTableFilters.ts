import { computed } from 'vue';

export const useTableFilters = (
	filtersManager,
	filterOptions,
	addFilter,
	updateFilter,
	deleteFilter,
	hasFilter,
) => {
	const filters = computed(() => filtersManager.value.getAllValues());

	const getValueForFilter = ({ value, storedProp = 'id' }) => {
		if (Array.isArray(value)) {
			if (value.length && typeof value[0] !== 'object') {
				return value;
			} else {
				return value.map((item) => item[storedProp]);
			}
		} else if (typeof value === 'object' && value !== null) {
			return value[storedProp];
		} else {
			return value;
		}
	};

	const handleFilter = (value, field: string): void => {
		if (value) {
			if (hasFilter(field)) {
				updateFilter({
					name: field,
					value: getValueForFilter({
						value,
						storedProp: filterOptions[field].storedProp,
					}),
				});
			} else {
				addFilter({
					name: field,
					value: getValueForFilter({
						value,
						storedProp: filterOptions[field].storedProp,
					}),
				});
			}
		} else {
			deleteFilter({
				name: field,
			});
		}
	};

	const resetFilters = (): void => {
		filtersManager.value.reset({
			exclude: [
				'search',
			],
		});
	};

	return {
		filters,
		getValueForFilter,
		handleFilter,
		resetFilters,
	};
};
