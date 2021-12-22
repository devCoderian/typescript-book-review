import { combineReducers, AnyAction, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import auth from './auth';
import books from './books';

const reducer = (history: History) =>
combineReducers({
    books,
    auth,
  router: connectRouter(history),
});

export default reducer;