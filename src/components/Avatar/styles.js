import styled from 'styled-components/native';

export const StyledImage = styled.Image`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size / 2};
`;
