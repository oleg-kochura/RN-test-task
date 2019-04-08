import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import configureStore from './redux/configureStore';

import UsersScreen from './screens/Users';
import FollowersScreen from './screens/Followers';

const RootNavigator = createStackNavigator({
  Users: UsersScreen,
  Followers: FollowersScreen,
});

const AppContainer = createAppContainer(RootNavigator);
const store = configureStore({});

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
