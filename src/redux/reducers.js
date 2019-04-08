import { combineReducers } from 'redux';

import users from './reducers/users';
import followers from './reducers/followers';

export default function createReducer() {
  return combineReducers({
    users,
    followers,
  });
}
