import { FETCH_USERS_PENDING, FETCH_USERS_FULFILLED, FETCH_USERS_REJECTED } from '../actionTypes';
import removeDupes from '../../utils/removeDupes';

const initialState = {
  users: [],
  loading: false,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_FULFILLED:
      return {
        ...state,
        loading: false,
        users: removeDupes([...state.users, ...action.payload]),
      };
    case FETCH_USERS_REJECTED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
