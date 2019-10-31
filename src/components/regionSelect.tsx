import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent } from 'react';
import { useCountryState } from '../hooks/useCountryState';
import { styled } from '../hooks/useTheme';

interface Props {}

const Wrapper = styled.div`
  position: relative;
  width: 250px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.elements};
  overflow: hidden;
  margin-bottom: 2em;
`;

const Select = styled.select`
  position: relative;
  padding: 1em;
  border: none;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.color};
  outline: none;
  appearance: none;
  width: 100%;
  cursor: pointer;
`;

const Option = styled.option`
  border: none;
  &:hover {
    color: green;
  }
`;

const DownArrowIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const RegionSelect: React.FC<Props> = () => {
  const { getCountriesByRegion } = useCountryState();

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    getCountriesByRegion(event.target.value);
  };

  return (
    <Wrapper>
      <Select defaultValue="default" onChange={onChange} aria-label="Region select">
        <Option value="default" disabled style={{ display: 'none' }}>
          Filter by Region
        </Option>
        <Option value="All">All Regions</Option>
        <Option value="Africa">Africa</Option>
        <Option value="Americas">Americas</Option>
        <Option value="Asia">Asia</Option>
        <Option value="Europe">Europe</Option>
        <Option value="Oceania">Oceania</Option>
      </Select>
      <DownArrowIcon icon="angle-down" />
    </Wrapper>
  );
};

export default RegionSelect;
