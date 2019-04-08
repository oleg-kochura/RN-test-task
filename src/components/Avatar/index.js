import React from 'react';
import PropTypes from 'prop-types';

import { StyledImage } from './styles';

const Avatar = ({ url, size }) => <StyledImage size={size} source={{ uri: url }} />;

Avatar.defaultProps = {
  size: 48,
};

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Avatar;
