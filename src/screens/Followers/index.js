import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  FlatList, ActivityIndicator, TouchableOpacity, Text,
} from 'react-native';

import { selectFollowersList, selectFollowersLoadingState } from '../../redux/selectors';
import { fetchFollowers, clearFollowers } from '../../redux/actions';

import Row from '../../components/Row';

import { Container } from './styles';

class Followers extends PureComponent {
  static navigationOptions = {
    title: 'Followers',
  };

  constructor(props) {
    super(props);

    const { followers, dispatchClearFollowers } = props;

    if (followers.length) {
      dispatchClearFollowers();
    }
  }

  componentDidMount() {
    this.fetchFollowers();
  }

  fetchFollowers = () => {
    const { navigation, dispatchFetchFollowers } = this.props;
    const login = navigation.getParam('login');

    dispatchFetchFollowers(login);
  };

  renderListItem = ({ item }) => (
    <TouchableOpacity onPress={this.handleNavigateToFollowers}>
      <Row user={item} />
    </TouchableOpacity>
  );

  render() {
    const { followers, loading } = this.props;
    const hasNoFollowers = !loading && !followers.length;

    if (hasNoFollowers) {
      return (
        <Container>
          <Text>This user has no followers</Text>
        </Container>
      );
    }

    return (
      <Container>
        {loading && !followers.length ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList data={followers} keyExtractor={item => item.id} renderItem={this.renderListItem} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  followers: selectFollowersList(),
  loading: selectFollowersLoadingState(),
});

const mapDispatchToProps = {
  dispatchClearFollowers: clearFollowers,
  dispatchFetchFollowers: fetchFollowers,
};

Followers.propTypes = {
  followers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  dispatchClearFollowers: PropTypes.func.isRequired,
  dispatchFetchFollowers: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Followers);
