import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent } from 'react';
import { useCountryState } from '../hooks/useCountryState';
import { styled } from '../hooks/useTheme';

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
  const { getCountriesByName, reset } = useCountryState();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 3) {
      getCountriesByName(event.target.value);
    } else {
      reset();
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
        aria-label="search field"
      />
    </Wrapper>
  );
};

export default Search;
