/**
 * Periods to filter
 * @enum
 * @readonly
 */
import { CallDirection } from 'webitel-sdk';

const DirectionOptions = Object.freeze([
  {
    value: CallDirection.Inbound,
    locale: [`calls.direction.${CallDirection.Inbound}`, 1],
  },
  {
    value: CallDirection.Outbound,
    locale: [`calls.direction.${CallDirection.Outbound}`, 1],
  },
]);

export default DirectionOptions;
