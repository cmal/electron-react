// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import type { Action, CounterState } from './types';
import { counterState } from './types';

export default function counter(
  state: CounterState = counterState,
  action: Action
) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
