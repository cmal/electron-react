// @flow
import { NO_ACTION } from '../actions/history';
import type { Action, HistoryState } from './types';
import { historyState } from './types';

export default function history(
  state: HistoryState = historyState,
  action: Action
) {
  switch (action.type) {
    case NO_ACTION:
      return state;
    default:
      return state;
  }
}
