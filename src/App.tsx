import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faArrowLeft, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { CountryStateProvider } from './hooks/useCountryState';
import { ThemeProvider } from './hooks/useTheme';
import Detail from './pages/Detail';
import Home from './pages/Home';

library.add(faAngleDown, faSearch, faMoon, faArrowLeft);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <Header></Header>
          <Main>
            <CountryStateProvider>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="*" component={() => <div>Not Found...</div>} />
              </Switch>
            </CountryStateProvider>
          </Main>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
