import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useState } from 'react';
import { styled } from '../hooks/useTheme';
import SearchResultList from './searchResultList';

interface Props {}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.color};
  width: 250px;
  margin-bottom: 2em;
`;

const Input = styled.input`
  border: none;
  padding: 1em;
  outline: none;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.color};
  flex-grow: 1;
  border-radius: 5px;
`;

const Label = styled.label`
  margin-left: 1em;
`;

const SearchIcon = styled(FontAwesomeIcon)``;

const Search: React.FC<Props> = () => {
  const [searchResult, setSearchResult] = useState<{ name: string }[]>([]);
  const [focused, setFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 3) {
      fetch(`https://restcountries.eu/rest/v2/name/${event.target.value}?fields=name`)
        .then(res => res.json())
        .then(res => setSearchResult(res));
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <Wrapper>
      <Label htmlFor="country-search">
        <SearchIcon icon="search" />
      </Label>
      <Input
        id="country-search"
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 250)}
        aria-label="search field"
      />
      {searchResult.length > 0 && focused && showResults ? <SearchResultList results={searchResult} /> : null}
    </Wrapper>
  );
};

export default Search;
