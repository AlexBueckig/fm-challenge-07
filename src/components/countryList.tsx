import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useCountryState } from '../hooks/useCountryState';
import { Country } from '../types/Country';
import Card from './Card';
import Link from './Link';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 264px);
  justify-content: space-evenly;
  gap: 3em 1em;
`;

interface Props {}

const CountryList: FC<Props> = () => {
  const { countries } = useCountryState();

  if (!countries) return null;

  return (
    <List>
      {countries.map((country: Country) => (
        <Link key={country.name} to={`/detail/${country.name.toLowerCase()}`}>
          <Card country={country} />
        </Link>
      ))}
    </List>
  );
};

export default CountryList;
