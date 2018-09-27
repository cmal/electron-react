// @flow
// import type { GetState, Dispatch } from '../reducers/types';

// export const ON_FOCUS = 'ON_FOCUS';
// export const ON_BLUR = 'ON_BLUR';
export const NO_ACTION = 'NO_ACTION';

export function noAction() {
  return {
    type: NO_ACTION
  };
}

// export function onBlur() {
//   return {
//     type: ON_BLUR
//   };
// }
