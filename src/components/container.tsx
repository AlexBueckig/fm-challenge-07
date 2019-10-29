import styled from '@emotion/styled';

interface Props {
  flex?: boolean;
}

const Container = styled.div<Props>`
  margin: 0 auto;
  width: 90%;

  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  justify-content: ${({ flex }) => (flex ? 'space-between' : 'start')};
  align-items: ${({ flex }) => (flex ? 'center' : 'start')};
`;

export default Container;
