// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import typing from './typing';

const rootReducer = combineReducers({
  counter,
  typing,
  router
});

export default rootReducer;
