import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';

import {
  Container, AvatarContainer, UserName, Url,
} from './styles';

const Row = ({ user }) => (
  <Container>
    <AvatarContainer>
      <Avatar url={user.avatar_url} />
    </AvatarContainer>

    <UserName>{user.login}</UserName>
    <Url>{user.html_url}</Url>
  </Container>
);

Row.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Row;
