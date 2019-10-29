import styled from '@emotion/styled';
import React from 'react';
import { Theme } from '../hooks/useTheme';
import Container from './container';

interface Props {}

const MainElement = styled.main<{ theme?: Theme }>`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 2em 0;
  min-height: calc(100vh - 6em);
`;

const Main: React.FC<Props> = props => {
  return (
    <MainElement>
      <Container>{props.children}</Container>
    </MainElement>
  );
};

export default Main;
