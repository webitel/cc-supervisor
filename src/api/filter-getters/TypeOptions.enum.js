/**
 * Types to filter
 * @enum
 * @readonly
 */
import { CallDirection } from 'webitel-sdk';

const TypeOptions = Object.freeze([
  {
    name: 'Inbound',
    value: CallDirection.Inbound,
  },
  {
    name: 'Outbound',
    value: CallDirection.Outbound,
  },
]);

export default TypeOptions;
