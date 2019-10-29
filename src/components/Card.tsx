import React, { FC } from 'react';
import { styled } from '../hooks/useTheme';
import { Country } from '../types/Country';

const Container = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: transform 300ms ease-in-out;
  cursor: pointer;
  overflow: hidden;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.color};

  &:hover {
    transform: scale(1.05);
  }
`;

const Flag = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 160px;
`;

const Body = styled.div`
  padding: 1.75em 1.5em 2em;
  max-height: 176px;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 1em;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 0.75rem;
  text-align: left;
  margin-bottom: 0.5em;
`;

interface Props {
  country: Country;
}

const Card: FC<Props> = ({ country }) => {
  return (
    <Container>
      <Flag src={country.flag} alt={`flag of ${country.name}`} />
      <Body>
        <Title>{country.name}</Title>
        <List>
          <ListItem>
            <strong>Population:</strong> {new Intl.NumberFormat('de-DE').format(country.population)}
          </ListItem>
          <ListItem>
            <strong>Region:</strong> {country.region}
          </ListItem>
          <ListItem>
            <strong>Capital:</strong> {country.capital}
          </ListItem>
        </List>
      </Body>
    </Container>
  );
};

export default Card;
