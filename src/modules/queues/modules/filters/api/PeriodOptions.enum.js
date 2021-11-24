/**
 * Periods to filter
 * @enum
 * @readonly
 */
const PeriodOptions = Object.freeze([
  {
   locale: 'filters.period.options.today',
    value: 'today',
  },
  {
    locale: ['filters.period.options.h', 2, { h: 6 }],
    value: '6hour',
  },
  {
    locale: ['filters.period.options.h', 2, { h: 3 }],
    value: '3hour',
  },
  {
    locale: ['filters.period.options.h', 1, { h: 1 }],
    value: '1hour',
  },
  {
    locale: ['filters.period.options.m', 2, { m: 30 }],
    value: '30min',
  },
  {
    locale: ['filters.period.options.m', 2, { m: 15 }],
    value: '15min',
  },
]);

export default PeriodOptions;
