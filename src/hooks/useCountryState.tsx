import React, { createContext, FC, Reducer, useContext, useEffect, useReducer, useState } from 'react';
import { Country } from '../types/Country';

interface CountryState {
  countries: Country[];
  getCountriesByRegion: (region: string) => void;
  getCountriesByName: (name: string) => void;
  reset: () => void;
}

type Actions =
  | { type: 'region'; filter: string }
  | { type: 'name'; filter: string }
  | { type: 'update'; state: Country[] }
  | { type: 'reset' };

const CountryStateContext = createContext<CountryState | null>(null);

const useCountryState = () => {
  const context = useContext(CountryStateContext);

  if (!context) throw new Error('useCountryState needs to be wrapped inside a <CountryStateProvider>!');

  return context;
};

const useCountryApi = () => {
  const [initialState, setInitialState] = useState<Country[]>([]);

  const reducer: Reducer<Country[], Actions> = (state, action) => {
    switch (action.type) {
      case 'region':
        if (action.filter === 'All') return initialState;
        return initialState.filter(country => country.region === action.filter);
      case 'name':
        return initialState.filter(country => country.name.toLowerCase().includes(action.filter));
      case 'update':
        return action.state;
      case 'reset':
        return initialState;
      default:
        throw new Error('Unknown action...');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/')
      .then(res => res.json())
      .then(res => {
        setInitialState(res);
        dispatch({ type: 'update', state: res });
      });
  }, []);

  return { state, dispatch };
};

const CountryStateProvider: FC = ({ children }) => {
  const { state, dispatch } = useCountryApi();

  const getCountriesByRegion = (region: string) => {
    dispatch({ type: 'region', filter: region });
  };

  const getCountriesByName = (name: string) => {
    dispatch({ type: 'name', filter: name });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <CountryStateContext.Provider value={{ countries: state, getCountriesByRegion, getCountriesByName, reset }}>
      {children}
    </CountryStateContext.Provider>
  );
};

export { useCountryState, CountryStateProvider };
