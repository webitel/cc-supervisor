/**
 * Periods to filter
 * @enum
 * @readonly
 */
import { CallDirection } from 'webitel-sdk';

const DirectionOptions = Object.freeze([
  {
    name: 'Inbound',
    value: CallDirection.Inbound,
  },
  {
    name: 'Outbound',
    value: CallDirection.Outbound,
  },
]);

export default DirectionOptions;
