import React from 'react';
import CountryList from '../components/CountryList';
import RegionSelect from '../components/RegionSelect';
import Row from '../components/Row';
import Search from '../components/Search';

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
