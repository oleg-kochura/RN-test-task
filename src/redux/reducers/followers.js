import {
  FETCH_FOLLOWERS_PENDING,
  FETCH_FOLLOWERS_FULFILLED,
  FETCH_FOLLOWERS_REJECTED,
  CLEAR_USER_FOLLOWERS,
} from '../actionTypes';
import removeDupes from '../../utils/removeDupes';

const initialState = {
  followers: [],
  loading: false,
};

export default function followers(state = initialState, action) {
  switch (action.type) {
    case FETCH_FOLLOWERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FOLLOWERS_FULFILLED:
      return {
        ...state,
        loading: false,
        followers: removeDupes([...state.followers, ...action.payload]),
      };
    case FETCH_FOLLOWERS_REJECTED:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_USER_FOLLOWERS: {
      return {
        ...state,
        followers: [],
      };
    }
    default:
      return state;
  }
}
