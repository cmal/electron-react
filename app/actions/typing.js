// @flow
// import type { GetState, Dispatch } from '../reducers/types';

export const LOAD_CLIPBOARD = 'LOAD_CLIPBOARD';

export function loadClipboard() {
  return {
    type: LOAD_CLIPBOARD
  };
}
