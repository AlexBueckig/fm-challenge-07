import React from 'react';
import CountryList from '../components/countryList';
import RegionSelect from '../components/regionSelect';
import Row from '../components/Row';
import Search from '../components/search';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Row flex>
        <Search></Search>
        <RegionSelect></RegionSelect>
      </Row>
      <CountryList></CountryList>
    </>
  );
};

export default Home;
