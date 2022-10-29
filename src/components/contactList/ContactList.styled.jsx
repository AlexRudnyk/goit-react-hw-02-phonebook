import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  font-size: 20px;
  list-style: disc;
  margin-left: 20px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
