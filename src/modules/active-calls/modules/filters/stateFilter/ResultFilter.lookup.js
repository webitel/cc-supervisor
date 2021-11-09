
// This lookup is needed only for displaying an elements  of state to which we can connect.

import { CallActions } from 'webitel-sdk';

const ResultFilterOptions = Object.freeze([
  {
    name: 'Active',
    value: CallActions.Active,
  },
  {
    name: 'Ringing',
    value: CallActions.Ringing,
  },
  {
    name: 'Bridge',
    value: CallActions.Bridge,
  },
  {
    name: 'Hangup',
    value: CallActions.Hangup,
  },
  {
    name: 'Hold',
    value: CallActions.Hold,
  },
]);

export default ResultFilterOptions;
