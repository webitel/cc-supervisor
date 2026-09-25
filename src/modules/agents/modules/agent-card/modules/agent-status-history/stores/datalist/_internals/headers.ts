import type { DatalistTableHeader } from '@webitel/ui-datalist';
import { FilterOption } from '@webitel/ui-datalist/filters';

import { filterConfigs } from '../../../modules/filters/configs/filterOptions';

export const headers: DatalistTableHeader[] = [
	{
		value: 'state',
		locale: 'pages.card.statusHistory.columns.state',
		show: true,
		sort: null,
		field: 'state',
	},
	{
		value: 'from',
		locale: 'pages.card.statusHistory.columns.from',
		show: true,
		sort: null,
		field: 'joined_at',
		filter: filterConfigs[FilterOption.JoinedAt],
	},
	{
		value: 'to',
		locale: 'pages.card.statusHistory.columns.to',
		show: true,
		sort: null,
		field: 'leaved_at',
	},
	{
		value: 'duration',
		locale: 'pages.card.statusHistory.columns.duration',
		show: true,
		sort: null,
		field: 'duration',
	},
];
