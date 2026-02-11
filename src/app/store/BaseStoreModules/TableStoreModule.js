import BaseStoreModule from '@webitel/ui-sdk/src/store/BaseStoreModules/BaseStoreModule';

export default class TableStoreModule extends BaseStoreModule {
	state = {
		dataList: [],
		aggs: {},
		isNext: true,
	};

	getters = {
		GET_LIST_PARAMS: (state, getters) => (queryParams) => {
			const fields = (
				queryParams.fields
					? getters.GET_DATA_FIELDS_BY_VALUE(queryParams.fields)
					: getters.DATA_FIELDS
			).concat([
				'id',
			]);
			const filters = getters.GET_FILTERS;
			return {
				...queryParams,
				...filters,
				fields,
			};
		},
		DATA_FIELDS: (state) => {
			let fields = state.headers
				.filter((header) => header.show)
				.map((header) => header.field);
			fields = [
				...new Set(fields),
			];
			return fields;
		},
		GET_DATA_FIELDS_BY_VALUE: (state) => (headerValues) =>
			state.headers.reduce((fields, header) => {
				if (headerValues.includes(header.value))
					return fields.concat(header.field);
				return [
					...new Set(fields),
				];
			}, []),
	};

	actions = {
		LOAD_DATA_LIST: async (context, params) => {
			/*
       https://my.webitel.com/browse/WTEL-3560
       preventively disable isNext to handle case when user is clicking
        "next" faster than actual request is made
      */
			context.commit('SET_NEXT', false);

			const _params = context.getters.GET_LIST_PARAMS(params);
			const {
				items,
				next,
				aggs = {},
			} = await context.dispatch('GET_LIST', _params);
			context.commit('SET_LIST', items);
			context.commit('SET_NEXT', next);
			context.commit('SET_AGGS', aggs);
			return {
				items,
				aggs,
				next,
			};
		},
		SET_HEADERS: (context, headers) => {
			context.commit('SET_HEADERS', headers);
		},
	};

	mutations = {
		SET_LIST: (state, dataList) => {
			state.dataList = dataList;
		},
		SET_AGGS: (state, aggs) => {
			state.aggs = aggs;
		},
		SET_NEXT: (state, isNext) => {
			state.isNext = isNext;
		},
		SET_HEADERS: (state, headers) => {
			state.headers = headers;
		},
	};

	modules = {};

	constructor({ state } = {}) {
		super();
		this.state = {
			...this.state,
			...state,
		};
	}
}
