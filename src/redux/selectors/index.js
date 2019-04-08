import { createSelector } from 'reselect';

const selectUsers = () => state => state.users;
const selectFollowers = () => state => state.followers;

export const selectUsersList = () => createSelector(
  selectUsers(),
  users => users.users,
);

export const selectUsersLoadingState = () => createSelector(
  selectUsers(),
  users => users.loading,
);

export const selectFollowersList = () => createSelector(
  selectFollowers(),
  followers => followers.followers,
);

export const selectFollowersLoadingState = () => createSelector(
  selectFollowers(),
  followers => followers.loading,
);
