import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { Country } from '../types/Country';

interface CountryState {
  countries: Country[];
  getCountriesByRegion: (region: string) => void;
}

const CountryStateContext = createContext<CountryState | null>(null);

const useCountryState = () => {
  const context = useContext(CountryStateContext);

  if (!context) throw new Error('useCountryState needs to be wrapped inside a <CountryStateProvider>!');

  return context;
};

const useCountryApi = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/')
      .then(res => res.json())
      .then(res => setCountries(res));
  }, []);

  return { countries, setCountries };
};

const CountryStateProvider: FC = ({ children }) => {
  const { countries, setCountries } = useCountryApi();

  const getCountriesByRegion = (region: string) => {
    fetch(`https://restcountries.eu/rest/v2/region/${region}?fields=name;flag;population;region;capital`)
      .then(res => res.json())
      .then(res => setCountries(res));
  };

  return (
    <CountryStateContext.Provider value={{ countries, getCountriesByRegion }}>{children}</CountryStateContext.Provider>
  );
};

export { useCountryState, CountryStateProvider };
