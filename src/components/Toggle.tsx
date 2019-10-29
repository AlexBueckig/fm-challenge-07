import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { styled } from '../hooks/useTheme';

const Wrapper = styled.div`
  cursor: pointer;
`;

const Label = styled.label`
  margin-left: 1em;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;
const MoonIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
`;

interface Props {
  dark: boolean;
  toggle: () => void;
}

const Toggle: React.FC<Props> = ({ dark, toggle }) => {
  return (
    <Wrapper>
      <Input type="checkbox" id="darkmode-toggle" checked={dark} onChange={toggle} />
      <Label htmlFor="darkmode-toggle">
        <MoonIcon icon="moon" />
        Dark Mode
      </Label>
    </Wrapper>
  );
};

export default Toggle;
