import React from 'react';
import { styled, useTheme } from '../hooks/useTheme';
import Container from './container';
import Link from './Link';
import Toggle from './Toggle';

const HeaderElement = styled.header`
  padding: 2em 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.color};
  z-index: 1;
  position: relative;
`;

const HeaderTitle = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color};
  font-weight: 800;
`;

interface Props {}

const Header: React.FC<Props> = () => {
  const { dark, toggle } = useTheme();

  return (
    <HeaderElement>
      <Container flex>
        <HeaderTitle>
          <Link to="/">Where in the world?</Link>
        </HeaderTitle>
        <Toggle dark={dark} toggle={toggle} />
      </Container>
    </HeaderElement>
  );
};

export default Header;
