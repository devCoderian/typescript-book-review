import { combineReducers, AnyAction, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import auth from './auth';
const reducer = (history: History) =>
combineReducers({
  auth,
  router: connectRouter(history),
});

export default reducer;