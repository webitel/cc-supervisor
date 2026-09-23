import type { DatalistTableHeader } from '@webitel/ui-datalist';
import { FilterOption } from '@webitel/ui-datalist/filters';

import { filterConfigs } from '../../../modules/filters/configs/filterOptions';

export const headers: DatalistTableHeader[] = [
	{
		value: 'createdAt',
		locale: 'pages.activeCall.columns.createdAt',
		show: true,
		sort: null,
		field: 'created_at',
	},
	{
		value: 'direction',
		locale: 'pages.activeCall.columns.direction',
		show: true,
		sort: null,
		field: 'direction',
		filter: filterConfigs[FilterOption.CallDirection],
	},
	{
		value: 'duration',
		locale: 'pages.activeCall.columns.duration',
		show: true,
		sort: null,
		field: 'duration',
	},
	{
		value: 'from',
		locale: 'pages.activeCall.columns.from',
		show: true,
		sort: null,
		field: 'from',
	},
	{
		value: 'agent',
		locale: 'pages.activeCall.columns.agent',
		show: true,
		sort: null,
		field: 'agent',
		filter: filterConfigs[FilterOption.Agent],
	},
	{
		value: 'to',
		locale: 'pages.activeCall.columns.to',
		show: true,
		sort: null,
		field: 'to',
	},
	{
		value: 'destination',
		locale: 'pages.activeCall.columns.destination',
		show: true,
		sort: null,
		field: 'destination',
	},
	{
		value: 'extension',
		locale: 'pages.activeCall.columns.extension',
		show: true,
		sort: null,
		field: 'extension',
	},
	{
		value: 'queue',
		locale: 'pages.activeCall.columns.queue',
		show: true,
		sort: null,
		field: 'queue',
		filter: filterConfigs[FilterOption.Queue],
	},
	{
		value: 'state',
		locale: 'pages.activeCall.columns.state',
		show: true,
		sort: null,
		field: 'state',
		filter: filterConfigs[FilterOption.CallReportingResult],
	},
	{
		value: 'user',
		locale: 'pages.activeCall.columns.user',
		show: true,
		sort: null,
		field: 'user',
		filter: filterConfigs[FilterOption.User],
	},
	{
		value: 'blindTransfer',
		locale: 'pages.shared.columns.blindTransfer',
		show: false,
		sort: null,
		field: 'blind_transfer',
	},
];
