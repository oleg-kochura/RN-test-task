import axios from 'axios';

import { FETCH_USERS, FETCH_FOLLOWERS, CLEAR_USER_FOLLOWERS } from '../actionTypes';
import { API_URL } from '../../config';

export const fetchUsers = (since = 0) => (dispatch) => {
  dispatch({
    type: FETCH_USERS,
    payload: axios.get(`${API_URL}/users`, { params: { per_page: 15, since } }).then(res => res.data),
  });
};

export const fetchFollowers = login => (dispatch) => {
  dispatch({
    type: FETCH_FOLLOWERS,
    payload: axios.get(`${API_URL}/users/${login}/followers`, { params: { per_page: 100 } }).then(res => res.data),
  });
};

export const clearFollowers = () => ({
  type: CLEAR_USER_FOLLOWERS,
});
