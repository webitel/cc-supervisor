export default {
	methods: {
		tableActionsHandler(eventName) {
			switch (eventName) {
				case 'refresh':
					this.refreshList();
					break;
				case 'columnSelect':
					this.openColumnSelect();
					break;
				case 'filterReset':
					this.resetFilters();
					break;
				case 'settings':
					this.$emit('toggle-filter');
					break;
				default:
			}
		},

		refreshList() {
			this.initializeList();
		},

		openColumnSelect() {
			this.isFilterFieldsOpened = true;
		},

		resetFilters(options = {}) {
			const { excludeKeys = [] } = options;
			const queries = {
				...this.$route.query,
			};

			const preserved = {};
			for (const key of excludeKeys) {
				if (queries[key] !== undefined) {
					preserved[key] = queries[key];
				}
			}

			this.$router.replace({
				query: preserved,
			});
			this.dispatchResetFilters({
				excludeKeys,
			});
		},
	},
};
