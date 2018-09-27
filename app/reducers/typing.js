// @flow
import { clipboard } from 'electron';
import { LOAD_CLIPBOARD } from '../actions/typing';
import type { Action, TypingState } from './types';
import { typingState } from './types';

export default function typing(
  state: TypingState = typingState,
  action: Action
) {
  switch (action.type) {
    case LOAD_CLIPBOARD:
      return {
        ...state,
        text: clipboard.readText()
      };
    default:
      return state;
  }
}
