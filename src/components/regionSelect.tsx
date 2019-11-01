import React from 'react';
import Select from 'react-select';
import { ActionMeta } from 'react-select/src/types';
import { useCountryState } from '../hooks/useCountryState';
import { styled, useTheme } from '../hooks/useTheme';

const CustomSelect = styled(Select)`
  width: 250px;
  margin-bottom: 2em;

  .react-select__value-container {
    font-size: 0.85rem;
    height: 45px;
  }

  .react-select__single-value,
  .react-select__placeholder {
    font-size: 0.85rem;
    padding: 1em;
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.color};
  }

  .react-select__control {
    background: ${({ theme }) => theme.elements};
    border: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
  }

  .react-select__menu {
    background: ${({ theme }) => theme.elements};
    border: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  .react-select__option {
    cursor: pointer;
    padding: 1em;
  }

  .react-select__option:hover,
  .react-select__option:focus,
  .react-select__option:active,
  .react-select__option--is-focused {
    background: lightgray;
  }

  .react-select__option--is-selected {
    background: #999999;
    color: ${({ theme }) => theme.color};
  }

  .react-select__input {
    height: 21px;
    display: none !important;
  }
`;

interface Props {}

const RegionSelect: React.FC<Props> = () => {
  const { getCountriesByRegion, reset } = useCountryState();
  const { colors } = useTheme();

  const onChange = (value: any, { action }: ActionMeta) => {
    if (action === 'clear') {
      reset();
    } else if (action === 'select-option') {
      getCountriesByRegion(value.value);
    }
  };

  return (
    <CustomSelect
      options={[
        { value: 'Africa', label: 'Africa' },
        { value: 'Americas', label: 'Americas' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' }
      ]}
      placeholder="Select your region..."
      className="react-select-container"
      classNamePrefix="react-select"
      isClearable={true}
      onChange={onChange}
    />
  );
};

export default RegionSelect;
