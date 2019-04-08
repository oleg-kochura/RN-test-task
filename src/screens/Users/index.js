import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

import { selectUsersList, selectUsersLoadingState } from '../../redux/selectors';
import { fetchUsers } from '../../redux/actions';

import Row from '../../components/Row';

import {
  Container, Content, TableHead, TableBody, AvatarCell, UserNameCell, LinkCell,
} from './styles';

class Users extends PureComponent {
  static navigationOptions = {
    title: 'Users',
  };

  static propTypes = {
    dispatchFetchUsers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatchFetchUsers(0);
  }

  renderListItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.handleNavigateToFollowers(item.login)}>
      <Row user={item} />
    </TouchableOpacity>
  );

  handleNavigateToFollowers = (login) => {
    this.props.navigation.navigate('Followers', { login });
  };

  fetchExtraData = () => {
    const { dispatchFetchUsers, users } = this.props;

    const lastUserId = users[users.length - 1].id;
    dispatchFetchUsers(lastUserId);
  };

  render() {
    const { users, loading } = this.props;

    return (
      <Container>
        {loading && !users.length ? (
          <ActivityIndicator size="large" />
        ) : (
          <Content>
            <TableHead>
              <AvatarCell>AVATAR</AvatarCell>
              <UserNameCell>LOGIN</UserNameCell>
              <LinkCell>HTML URL</LinkCell>
            </TableHead>
            <TableBody>
              <FlatList
                data={users}
                keyExtractor={item => item.id}
                onEndReached={this.fetchExtraData}
                renderItem={this.renderListItem}
                onEndReachedThreshold={0.5}
              />
            </TableBody>
          </Content>
        )}
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: selectUsersList(),
  loading: selectUsersLoadingState(),
});

const mapDispatchToProps = {
  dispatchFetchUsers: fetchUsers,
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  dispatchFetchUsers: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
