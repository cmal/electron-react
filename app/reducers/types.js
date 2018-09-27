import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type CounterState = number;

export type TypingState = {
  text: string,
  typingText: string
};

export type HistoryState = {
  text: string
};

export type RankState = {
  text: string
};

export type ProfileState = {
  text: string
};

export type SettingState = {
  text: string
};

export type Action = {
  +type: string
};

export const counterState = 0;

export const typingState = {
  text: 'demo',
  typingText: ''
};

export const settingState = {
  text: 'setting'
};

export const profileState = {
  text: 'profile'
};

export const rankState = {
  text: 'rank'
};

export const historyState = {
  text: 'history'
};

export type GetState = () => appStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
