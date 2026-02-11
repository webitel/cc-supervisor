import preventHiddenPageCallsDecorator from '@webitel/ui-sdk/src/scripts/preventHiddenPageCallsDecorator';

export default {
	data: () => ({
		autoRefresh: null,
	}),

	created() {
		this.setAutoRefresh();
	},

	unmounted() {
		clearInterval(this.autoRefresh);
	},

	methods: {
		setAutoRefresh() {
			if (this.autoRefresh) clearInterval(this.autoRefresh);
			const timer = +localStorage.getItem('auto-refresh') || 5 * 60 * 1000;
			this.makeAutoRefresh = preventHiddenPageCallsDecorator(
				this.makeAutoRefresh,
			);
			this.autoRefresh = setInterval(this.makeAutoRefresh, timer);
		},
		makeAutoRefresh() {
			this.loadList();
		},
	},
};
