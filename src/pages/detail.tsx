import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Container from '../components/container';
import { styled } from '../hooks/useTheme';
import { Country } from '../types/Country';

interface Props {}

const Grid = styled.div`
  display: block;
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 2fr auto 1fr;
    grid-template-rows: auto max-content max-content max-content max-content auto;
    gap: 0 2em;
    grid-template-areas: 'flag . .' 'flag title title' 'flag list1 list2' 'flag borderTitle borderTitle' 'flag border border' 'flag . .';
  }
`;

const BackButton = styled.button`
  margin: 3em 0;
  display: inline-block;
  padding: 0.4em 2em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.color};
`;

const BackIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
`;

const Flag = styled.img`
  margin: 3em 0;
  width: 100%;
  grid-area: flag;
`;

const Title = styled.h1`
  grid-area: title;
  align-self: end;
`;

const SubTitle = styled.p`
  grid-area: borderTitle;
  font-weight: 700;
  align-self: end;
`;

const List = styled.ul`
  list-style: none;
  margin: 2em 0;
  grid-row: 3;
`;

const BorderList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2em 0;
  grid-area: border;
`;

const BorderListItem = styled.li`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 0.4em 2em;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  background: ${({ theme }) => theme.elements};
`;

const ListItem = styled.li``;

const Detail: React.FC<RouteComponentProps<{ id: string }, Props>> = props => {
  const [country, setCountry] = useState<Country>();

  const id = props.match.params.id;

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${id}?fullText=true`)
      .then(res => res.json())
      .then(res => setCountry(res[0]));
  }, [id]);

  const onClick = () => {
    props.history.goBack();
  };

  if (!country) return null;

  if (id === '') return <div>'No country selected...'</div>;

  return (
    <Container>
      <BackButton onClick={onClick}>
        <BackIcon icon="arrow-left" /> Back
      </BackButton>
      <Grid>
        <Flag src={country.flag} alt={`flag of ${country.name}`} />
        <Title>{country.name}</Title>
        <List>
          <ListItem>
            <strong>Native Name: </strong> {country.nativeName}
          </ListItem>
          <ListItem>
            <strong>Population: </strong> {country.population}
          </ListItem>
          <ListItem>
            <strong>Region: </strong> {country.region}
          </ListItem>
          <ListItem>
            <strong>Sub Region: </strong> {country.subRegion}
          </ListItem>
          <ListItem>
            <strong>Capital: </strong> {country.capital}
          </ListItem>
        </List>
        <List>
          <ListItem>
            <strong>Top Level Domain: </strong> {country.topLevelDomain.join(', ')}
          </ListItem>
          <ListItem>
            <strong>Currencies: </strong> {country.currencies.map(currency => currency.name).join(', ')}
          </ListItem>
          <ListItem>
            <strong>Languages: </strong> {country.languages.map(language => language.name).join(', ')}
          </ListItem>
        </List>
        <SubTitle>Border Countries:</SubTitle>
        <BorderList>
          {country.borders.map(border => (
            <BorderListItem>{border}</BorderListItem>
          ))}
        </BorderList>
      </Grid>
    </Container>
  );
};

export default Detail;
