import styled from '@emotion/styled';
import React from 'react';
import Link from './Link';

interface Props {
  results: { name: string }[];
}

const List = styled.ul`
  list-style: none;
  position: absolute;
  top: 3.5em;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

const ListItem = styled.li`
  padding: 1em;
  cursor: pointer;
  &:hover {
    background: #eeeeee;
  }
`;

const SearchResultList: React.FC<Props> = ({ results }) => {
  return (
    <List>
      {results.map(item => (
        <ListItem key={item.name}>
          <Link to={`/detail/${item.name.toLowerCase()}`}>{item.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResultList;
