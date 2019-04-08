import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const TableHead = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 8px;
  background-color: #f7f7f7;
`;

export const TableBody = styled.View`
  flex: 1;
  padding: 8px;
`;

export const AvatarCell = styled.Text`
  width: 80;
  font-size: 14;
`;

export const UserNameCell = styled.Text`
  width: 100;
  font-size: 14;
`;

export const LinkCell = styled.Text`
  font-size: 14;
`;
