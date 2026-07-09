import getNamespacedState from '@webitel/ui-sdk/src/store/helpers/getNamespacedState';
import { mapActions, mapState } from 'vuex';

import autoRefreshMixin from '../autoRefresh/autoRefreshMixin';
import pageHeadersMixin from './pageHeadersMixin';
import tableActionsHandlerMixin from './tableActionsHandlerMixin';

export default {
	mixins: [
		autoRefreshMixin,
		pageHeadersMixin,
		tableActionsHandlerMixin,
	],
	data: () => ({
		isLoading: false,
	}),
	watch: {
		'$route.query': {
			async handler(newQuery, oldQuery) {
				// @author @HlukhovYe
				// https://webitel.atlassian.net/browse/WTEL-9729
				// Skip reload when only "fields" changed — it controls visible table columns only
				// and is not sent to the API, so reloading would cause unnecessary flicker (isLoading flash).
				if (oldQuery) {
					const changed = Object.keys({
						...newQuery,
						...oldQuery,
					}).filter((key) => newQuery[key] !== oldQuery[key]);
					if (changed.length && changed.every((key) => key === 'fields'))
						return;
				}
				await this.initializeList();
			},
			immediate: true,
		},
	},
	computed: {
		...mapState({
			dataList(state) {
				return getNamespacedState(state, this.namespace).dataList;
			},
			aggs(state) {
				return getNamespacedState(state, this.namespace).aggs;
			},
			isNext(state) {
				return getNamespacedState(state, this.namespace).isNext;
			},
		}),
		filtersNamespace() {
			return `${this.namespace}/filters`;
		},
	},
	methods: {
		...mapActions({
			loadDataList(dispatch, payload) {
				return dispatch(`${this.namespace}/LOAD_DATA_LIST`, payload);
			},
			dispatchResetFilters(dispatch, payload) {
				return dispatch(`${this.filtersNamespace}/RESET_FILTERS`, payload);
			},
		}),

		async initializeList() {
			this.isLoading = true;
			try {
				await this.loadList();
			} catch {
			} finally {
				this.isLoading = false;
			}
		},

		loadList() {
			const { query } = this.$route;
			return this.loadDataList(query);
		},
	},
};
